import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { workProjects, petProjects } from "@/data/projects";

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
