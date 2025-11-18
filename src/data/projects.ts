export interface StoreLink {
  text: string;
  iosLink?: string;
  androidLink?: string;
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
    description: "",
    responsibilities: [
      "Was responsible for ensuring compliance with Technical Requirements Checklists (TRCs/Lotcheck/XRs) on PS4, PS5, Nintendo Switch, and Xbox platforms.",
      "Contributed to the integration of Epic Online Services (EOS) assisting with debugging and resolving issues and crashes in core multiplayer systems.",
      "Assisted with the integration of Steam, GOG, and Epic Games Store (EGS) SDKs."// worked on consoles fixing crahses and ensure cross platform compatibility
    ],
    technologies: ["Unity", "Epic Online Services", "Steam", "GOG", "EGS"],
    image: "/biped.png",
    link: "",
  },
  {
    id: "cramagram",
    title: "Cramagram",
    company: "PlayJoy Studios",
    role: "Unity Developer",
    description: "",
    responsibilities: [
      "Developed the game based on the GDD for Android and iOS platforms.",
      "Integrated Unity IAP, Applovin, Firebase SDKs.",
      "Managed testing and release process on Google Play and App Store."
    ],
    technologies: ["Unity", "IAP", "Applovin", "Firebase"],
    image: "/placeholder.svg",
    link: "",
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
    technologies: ["Unity", "Firebase", "Google Play Games", "Game Center"],
    image: "/beholder.jpg",
    link: "",
    storeLinks: [
      {
        text: "Looking For Aliens",
        iosLink: "https://apps.apple.com/app/looking-for-aliens/id1234567890",
        androidLink: "https://play.google.com/store/apps/details?id=com.example.aliens"
      }
    ]
  },
];

export const petProjects: Project[] = [
  {
    id: "souls-like",
    title: "Souls Like",
    role: "Unity Developer",
    description: "A pet project of mine.",
    responsibilities: [
      "Designed and implemented custom character controller with advanced movement mechanics",
      "Created level design tools to streamline the development process",
      "Developed a custom shader system for stylized visual effects",
      "Implemented procedural animation system for responsive character feedback"
    ],
    technologies: ["Unity", "C#", "Shader Lab", "ProBuilder"],
    image: "/placeholder.svg",
    link: "",
  },
];

