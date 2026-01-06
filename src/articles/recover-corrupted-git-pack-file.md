---
id: recover-corrupted-git-pack-file
title: How to recover a corrupted git .pack file
excerpt: It was surprisingly hard to find good information about this, so hopefully this will save someone a few hours.
date: 2026-01-06
readTime: 5 min read
tags:
  - Git
---

# How to Recover Corrupted Git Pack Files

First off, you really want to have a backup project. Recovering a corrupted .pack file without one might be possible, but I’ve done it myself. I did find a link where someone walks through recovering an object from scratch, although it was pretty hard for me to follow.

In my case, the project was unclonable, so I went and copied the bare repo from the server and started to experiment. But let’s see the problem first.

```
remote: Enumerating objects: 70571, done.
remote: Counting objects: 100% (70571/70571), done.
remote: error: inflate: data stream error (incorrect data check)
remote: fatal: object b0d6cede65e2badc901d45f49e32e5186e12cad5 cannot be read
remote: aborting due to possible repository corruption on the remote side.
fatal: early EOF
error: git upload-pack: git-pack-objects died with error.
fatal: git upload-pack: aborting due to possible repository corruption on the remote side.
fatal: fetch-pack: invalid index-pack output
```

First of all, it’s crucial to understand git structure. All objects we commit are stored in the `.git/objects` folder.

For this problem we need to know that when we commit a file, git calls the command `git hash-object -w`, which writes the file to `.git/objects` with the name being a hash of its content. Files stored this way are called *loose objects*.

Now what we’re seeing in the message above is that object  
`b0d6cede65e2badc901d45f49e32e5186e12cad5` cannot be read. That simply means the object with this hash is unreadable.

Another important bit of info is that the command that failed is `git-pack-objects`. This command works with *pack objects* — but what is a pack object?

To improve performance, we can call `git repack` to pack a lot of loose objects into `.pack` files. These pack files are not just about size — they use delta compression. Git stores only the differences between similar objects instead of storing every object in full. On top of that, working with thousands of small files is significantly slower than working with a few big compressed ones.

So, now it’s clear that what was actually corrupted is a `.pack` file.

## How are we going to fix it?

We need a repo to work with, but the project is unclonable. Here I presume that git is self-hosted, in which case you should be able to copy the bare repo from the server and start fixing the issue locally.

Here is what we’re going to do.

## 1. Run git fsck in the corrupted repo

Run:

```
git fsck
```

This will print all objects that are not readable. Write down all their hashes somewhere — we’ll need them later.

## 2. Extract working objects from the backup

Now that we have the hashes, we need to get working versions of these objects from the backup repo.

Go to your working backup repository.

Create a file called `blobs.txt` and put all the hashes there, one per line.

Then create a `.sh` script with this content:

```bash
mkdir -p extracted
mkdir -p failed

while read -r hash; do
  [[ -z "$hash" ]] && continue

  echo "Extracting $hash..."

  if git cat-file -p "$hash" > "extracted/$hash.bin" 2>/dev/null; then
    # sanity check: file is not empty
    if [[ ! -s "extracted/$hash.bin" ]]; then
      echo "EMPTY OUTPUT: $hash"
      mv "extracted/$hash.bin" "failed/$hash.bin"
    fi
  else
    echo "FAILED: $hash"
    rm -f "extracted/$hash.bin"
    echo "$hash" >> failed/failed.txt
  fi
done < blobs.txt
```

Running this script will give you an `extracted/` folder with recovered object contents.

If anything fails, it will end up in the `failed/` folder. Again, not a good sign, this means you would need to somehow recover the objects or maybe use something like `git-filter-repo` to remove them from history, if they're not very important.

## 3. Create a new repo and inject recovered objects

Next step — create a new empty git repo. We’ll add all the recovered objects there and generate a clean `.pack` file.

Use this script to inject the extracted objects:

```bash
#!/usr/bin/env bash

set -u

if [[ ! -d extracted ]]; then
  echo "ERROR: extracted/ directory not found"
  exit 1
fi

git rev-parse --git-dir >/dev/null || {
  echo "ERROR: Not inside a git repo"
  exit 1
}

mkdir -p injected failed

for f in extracted/*.bin; do
  [[ -e "$f" ]] || continue

  fname="$(basename "$f")"
  expected="${fname%.bin}"

  echo "Injecting $expected..."

  actual="$(git hash-object -w "$f" 2>/dev/null)" || {
    echo "FAILED hashing $f"
    mv "$f" "failed/$fname"
    continue
  }

  if [[ "$actual" != "$expected" ]]; then
    echo "HASH MISMATCH!"
    echo "  expected: $expected"
    echo "  actual:   $actual"
    mv "$f" "failed/$fname"
  else
    echo "OK: $expected"
    mv "$f" "injected/$fname"
  fi
done
```

Now it’s time to create a `.pack` file.

Copy `blobs.txt` into this new repo and run:

```
git pack-objects recovered < blobs.txt
```

The pack file is done! You should now see a `.pack` file and a matching `.idx` file. We need both.

## 4. Copy the recovered pack into the broken repo

Go to your broken repository and move the newly created `.pack` and `.idx` files into:

```
.git/objects/pack
```

## 5. Repack the repository

The last step is repacking. During this step, git will fail to find objects in the corrupted pack, but it will start looking in other places and eventually find them in the recovered pack we just added.

Run:

```
git repack -ad
```

To make sure everything is okay, run `git fsck` one more time. If everything went well, it should no longer complain about unreadable objects.

Finally, here are some links that helped to fix this issue:


https://git.vger.kernel.narkive.com/6CUFzHrn/how-to-replace-a-single-corrupt-packed-object#post7