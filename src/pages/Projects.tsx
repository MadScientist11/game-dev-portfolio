import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
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
    id: 2,
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

          <div className="space-y-8">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1">
                    <div className="aspect-video lg:aspect-square bg-muted overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                          <span className="font-medium text-primary">{project.role}</span>
                          <span>•</span>
                          <span>{project.company}</span>
                          <span>•</span>
                          <span>{project.period}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">Key Contributions:</h4>
                        <ul className="space-y-2">
                          {project.responsibilities.map((responsibility, index) => (
                            <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                              <span className="text-primary mt-1">▹</span>
                              <span className="flex-1">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
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
                      </div>

                      {project.link && (
                        <div className="pt-2">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Project
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
