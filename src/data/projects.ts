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
      "Assisted with the integration of Steam, GOG, and Epic Games Store (EGS) SDKs."
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
    description: "Real-time strategy game set in space with complex resource management and faction diplomacy.",
    responsibilities: [
      "Led a team of 5 programmers in developing the core gameplay systems",
      "Architected and implemented multiplayer netcode using Unreal Engine's replication system",
      "Created a robust UI framework that supported modding and localization",
      "Optimized game performance for large-scale battles with 100+ units on screen"
    ],
    technologies: ["Unreal Engine", "C++", "Multiplayer", "UI/UX"],
    image: "/placeholder.svg",
    link: "",
  },
];

export const petProjects: Project[] = [
  {
    id: "indie-platformer",
    title: "Indie Platformer",
    role: "Solo Developer",
    description: "A passion project platformer with unique movement mechanics and handcrafted levels.",
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

