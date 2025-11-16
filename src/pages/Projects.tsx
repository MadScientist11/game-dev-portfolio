import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Fantasy RPG Adventure",
    description: "An immersive open-world RPG with dynamic quest systems and procedurally generated dungeons.",
    technologies: ["Unity", "C#", "AI Pathfinding", "Shader Graph"],
    image: "/placeholder.svg",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Space Strategy Simulator",
    description: "Real-time strategy game set in space with complex resource management and faction diplomacy.",
    technologies: ["Unreal Engine", "C++", "Multiplayer", "UI/UX"],
    image: "/placeholder.svg",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "Puzzle Platformer",
    description: "Physics-based puzzle platformer with innovative mechanics and beautiful hand-drawn art.",
    technologies: ["Godot", "GDScript", "2D Physics", "Animation"],
    image: "/placeholder.svg",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 4,
    title: "Multiplayer Battle Arena",
    description: "Fast-paced multiplayer arena game with competitive matchmaking and seasonal content.",
    technologies: ["Unity", "Netcode", "Server Architecture", "Anti-Cheat"],
    image: "/placeholder.svg",
    githubUrl: "#",
    demoUrl: "#",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of game development projects I've worked on, from concept to completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
              >
                <CardHeader>
                  <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
