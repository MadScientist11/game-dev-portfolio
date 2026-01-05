export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
}

// Simple frontmatter parser (browser-compatible)
function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { data: {}, content: raw };
  }

  const [, frontmatter, content] = match;
  const data: Record<string, unknown> = {};

  let currentKey: string | null = null;
  let currentArray: string[] | null = null;

  for (const line of frontmatter.split('\n')) {
    const trimmed = line.trim();
    
    // Array item
    if (trimmed.startsWith('- ') && currentKey) {
      if (!currentArray) currentArray = [];
      currentArray.push(trimmed.slice(2).trim());
      data[currentKey] = currentArray;
      continue;
    }

    // Key-value pair
    const kvMatch = line.match(/^(\w+):\s*(.*)$/);
    if (kvMatch) {
      const [, key, value] = kvMatch;
      currentKey = key;
      currentArray = null;
      
      if (value.trim()) {
        data[key] = value.trim();
      }
    }
  }

  return { data, content: content.trim() };
}

// Import all markdown files from the articles folder
const articleFiles = import.meta.glob('/src/articles/*.md', { 
  query: '?raw',
  import: 'default',
  eager: true 
});

export function getArticles(): Article[] {
  const articles: Article[] = [];

  for (const path in articleFiles) {
    const rawContent = articleFiles[path] as string;
    const { data, content } = parseFrontmatter(rawContent);

    articles.push({
      id: (data.id as string) || path.split('/').pop()?.replace('.md', '') || '',
      title: (data.title as string) || 'Untitled',
      excerpt: (data.excerpt as string) || '',
      content,
      date: data.date ? new Date(data.date as string).toISOString().split('T')[0] : '',
      readTime: (data.readTime as string) || '',
      tags: (data.tags as string[]) || [],
    });
  }

  // Sort by date, newest first
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const articles = getArticles();
