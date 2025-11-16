import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

const workProjects = [
  {
    id: "fantasy-rpg",
    title: "Fantasy RPG Adventure",
    company: "Game Studio Name",
    role: "Senior Game Developer",
    period: "2022 - 2024",
    description: "An immersive open-world RPG with dynamic quest systems and procedurally generated dungeons.",
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

const petProjects = [
  {
    id: "indie-platformer",
    title: "Indie Platformer",
    company: undefined,
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

const ProjectDetail = () => {
  const { id } = useParams();
  const project = [...workProjects, ...petProjects].find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-6 pt-32 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Button asChild>
              <Link to="/projects" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="outline" className="mb-8">
            <Link to="/projects" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </Button>

          <div className="space-y-8">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-3 text-muted-foreground mb-6">
                <span className="font-medium text-primary">{project.role}</span>
                {project.company && (
                  <>
                    <span>•</span>
                    <span>{project.company}</span>
                  </>
                )}
                <span>•</span>
                <span>{project.period}</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Key Contributions</h2>
              <ul className="space-y-3">
                {project.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-1">▹</span>
                    <span className="flex-1">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground text-base px-4 py-2"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {project.link && (
              <div>
                <Button asChild>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
