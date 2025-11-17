export interface Project {
  id: string;
  title: string;
  company?: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  image: string;
  link?: string;
}

export const workProjects: Project[] = [
  {
    id: "biped",
    title: "Biped 2",
    company: "PlayJoy Studios",
    role: "Unity Developer",
    period: "2022 - 2024",
    description: "",
    responsibilities: [
      "Designed and implemented the core quest system using C# and Unity's scriptable objects architecture",
      "Developed procedural dungeon generation algorithms that created unique layouts while maintaining gameplay balance",
      "Collaborated with the AI team to implement advanced pathfinding using A* and navigation mesh systems",
      "Optimized shader performance for mobile platforms, reducing draw calls by 40%"
    ],
    technologies: ["Unity", "C#", "AI Pathfinding", "Shader Graph"],
    image: "/placeholder.svg",
    link: "",
  },
  {
    id: "space-strategy",
    title: "Space Strategy Simulator",
    company: "Another Studio",
    role: "Lead Programmer",
    period: "2020 - 2022",
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
    period: "2023 - Present",
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

