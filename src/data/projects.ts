export interface StoreLink {
  text: string;
  links: Array<{ name: string; url: string; }>;
  color?: 'yellow' | 'blue' | 'red';
}

export interface Project {
  id: string;
  title: string;
  company?: string;
  role: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  image: string;
  link?: string;
  storeLinks?: StoreLink[];
}

export const workProjects: Project[] = [
  {
    id: "biped-2",
    title: "Biped 2",
    company: "PlayJoy Studios",
    role: "Unity Developer",
    description: "Biped 2 is a coop action adventure game with a strong focus on moment-to-moment collaboration alone or between 2 or 4 players. Available on consoles and PC.",
    responsibilities: [
      "Was responsible for ensuring compliance with Technical Requirements Checklists (TRCs/Lotcheck/XRs) on PS4, PS5, Nintendo Switch, and Xbox platforms.",
      "Took on a major part of the console porting process, adapting the game’s systems to run smoothly on each platform and ensuring cross-platform compatibility.",
      "Contributed to the integration of Epic Online Services (EOS) assisting with debugging and resolving issues and crashes in core multiplayer systems.",
      "Assisted with the integration of Steam, GOG, and EGS SDKs."
    ],
    technologies: ["Unity", "Epic Online Services", "Steam", "GOG", "EGS", "Playstation", "Xbox", "Nintendo Switch"],
    image: "/biped.png",
    link: "",
    storeLinks: [
      {
        text: "Biped 2",
        links: [
          { name: "Steam", url: "https://store.steampowered.com/app/1726980/Biped_2/" },
        ],
        color: "blue"
      }
    ]
  },
  {
    id: "cramagram",
    title: "Cramagram",
    company: "PlayJoy Studios",
    role: "Unity Developer",
    description: "Cramagram is a word puzzle game combining anagram and crossword elements.",
    responsibilities: [
      "Developed the game based on the GDD for Android and iOS platforms.",
      "Integrated Unity IAP, Applovin, Firebase SDKs.",
      "Managed testing and release process on Google Play and App Store."
    ],
    technologies: ["Unity", "IAP", "Applovin", "Firebase", "TeamCity", "Xcode"],
    image: "/cramagram.png",
    link: "",
    storeLinks: [
      {
        text: "Cramagram",
        links: [
          { name: "iOS", url: "https://apps.apple.com/us/app/cramagram-anagram-crossword/id6502916798" },
          { name: "Android", url: "https://play.google.com/store/apps/details?id=com.randomlogicgames.cramagram&hl=en" }
        ],
        color: "yellow"
      }
    ]
  },
  {
    id: "pj-porting",
    title: "Mobile Porting",
    company: "PlayJoy Studios",
    role: "Unity Developer",
    description: "Full-cycle mobile porting: Looking For Aliens, Metal Slug Tactics, Beholder: Conductor. Also supported multiple mobile titles with intergrations, publishing, and post-release maintenance.",
    responsibilities: [
      "Full‑cycle mobile porting for multiple PC projects.",
      "Optimized performance, memory usage, and build size for mobile hardware.",
      "Set up and maintained CI/CD pipelines in TeamCity for automated builds and deployments for iOS and Android platforms.",
      "Supported and kept multiple projects up to date to remain compliant with store requirements.",
    ],
    technologies: ["Unity", "Firebase", "Google Play Games", "Game Center", "TeamCity", "Xcode", "Android Studio"],
    image: "/beholder.jpg",
    link: "",
    storeLinks: [
      {
        text: "Looking For Aliens",
        links: [
          { name: "iOS", url: "https://apps.apple.com/us/app/looking-for-aliens/id6670402289" },
          { name: "Android", url: "https://play.google.com/store/apps/details?id=com.pid.lfa&hl=en" }
        ],
        color: "blue"
      },
      {
        text: "Metal Slug Tactics",
        links: [
          { name: "iOS", url: "https://apps.apple.com/us/app/crunchyroll-metal-slug-tactics/id6742414459" },
          { name: "Android", url: "https://play.google.com/store/apps/details?id=com.crunchyroll.gv.metalslugtactics.game&hl=en" }
        ],
        color: "red"
      },
      {
        text: "Beholder: Conductor",
        links: [
          { name: "iOS", url: "https://apps.apple.com/app/looking-for-aliens/id1234567890" },
          { name: "Android", url: "https://play.google.com/store/apps/details?id=com.example.aliens" }
        ],
        color: "yellow"
      }
    ]
  },
  {
    id: "cthulhu-wants-me",
    title: "Cthulhu Wants Me",
    role: "Unity Developer",
    description: "I participated in GameDev Camp Season 3, where my team and I developed and pitched the game Cthulhu Wants Me!",
    responsibilities: [
      "As the solo Unity Developer on the team, I was responsible for implementing the art assets and game design ideas in Unity.",
      "Developed an extensible effect system, that allowed us to easily add different buffs and debuffs with DoT & AoE effects.",
      "Implemented AI for 3 different types of enemies in the game.",
      "Together with a team, pitched the game on the final day of GameDev Camp!"
    ],
    technologies: ["Unity", "VContainer", "UniTask"],
    image: "/cthulhu.png",
    link: "",
     storeLinks: [
      {
        text: "Cthulhu Wants Me!",
        links: [
          { name: "itch.io", url: "https://kyle-carpio.itch.io/cthulhu-wants-me" },
        ],
        color: "blue"
      }
    ]
  },
  {
    id: "souls-like",
    title: "Souls Like",
    role: "Unity Developer",
    description: "A pet project of mine.",
    responsibilities: [
      "Designed and implemented custom character controller with advanced movement mechanics",
    ],
    technologies: ["Unity", "C#", "Shader Lab", "ProBuilder"],
    image: "/placeholder.svg",
    link: "",
  },
];

