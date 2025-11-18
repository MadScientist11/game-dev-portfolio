import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Apple, Store } from "lucide-react";
import { Link } from "react-router-dom";
import { workProjects, petProjects, Project } from "@/data/projects";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

const ProjectCard = ({ project, showCompany = true }: { project: Project; showCompany?: boolean }) => {
  const hasStoreLinks = project.iosLink || project.androidLink;

  return (
    <Link to={`/projects/${project.id}`}>
      <Card className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] overflow-hidden cursor-pointer">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-2">
            <div className="aspect-video bg-muted overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="md:col-span-3 p-6">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {hasStoreLinks ? (
                    <HoverCard openDelay={200}>
                      <HoverCardTrigger asChild>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
                          {project.title}
                          <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </h3>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80" onClick={(e) => e.stopPropagation()}>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-sm text-foreground">Download {project.title}</h4>
                          <div className="flex flex-col gap-2">
                            {project.iosLink && (
                              <Button asChild variant="outline" size="sm" className="justify-start">
                                <a href={project.iosLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                  <Apple className="w-4 h-4 mr-2" />
                                  iOS App Store
                                </a>
                              </Button>
                            )}
                            {project.androidLink && (
                              <Button asChild variant="outline" size="sm" className="justify-start">
                                <a href={project.androidLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                  <Store className="w-4 h-4 mr-2" />
                                  Google Play
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ) : (
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      {project.title}
                      <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                  )}
                </div>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                <span className="font-medium text-primary">{project.role}</span>
                {showCompany && project.company && (
                  <>
                    <span>•</span>
                    <span>{project.company}</span>
                  </>
                )}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech: string) => (
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
        </div>
      </div>
    </Card>
  </Link>
  );
};

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
              A showcase of game development projects I've worked on, from professional work to personal creations.
            </p>
          </div>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              <span className="text-primary">Projects</span>
            </h2>
            <div className="space-y-6">
              {[...workProjects, ...petProjects].map((project) => (
                <ProjectCard key={project.id} project={project} showCompany={!!project.company} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Projects;
