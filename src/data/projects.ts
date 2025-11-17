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
    image: "/placeholder.svg",
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
    technologies: ["Unity", "IAP", "Applovin", "Firebase Services"],
    image: "/placeholder.svg",
    link: "",
  },
  {
    id: "pj-general",
    title: "General",
    company: "PlayJoy Studios",
    role: "Unity Developer",
    description: "Ported several games to mobile platforms, ",
    responsibilities: [
      "Set up and maintained CI/CD pipelines in TeamCity for automated builds and deployments for iOS and Android platforms.",
      "Ported several games including Looking For Aliens, Metal Slug Tactics to mobile platforms.",
      "Supported and kept multiple projects up to date to remain compliant with store requirements."
    ],
    technologies: ["Unity", "Firebase", "Google Play Games", "Game Center"],
    image: "/placeholder.svg",
    link: "",
  },
];

export const petProjects: Project[] = [
  {
    id: "souls-like",
    title: "Souls Like",
    role: "Unity Developer",
    description: "",
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

