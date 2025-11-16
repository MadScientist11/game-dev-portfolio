import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gamepad2, Code, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="flex items-center gap-2 text-primary mb-4">
              <Gamepad2 className="w-6 h-6 animate-pulse" />
              <span className="text-sm font-medium">Game Developer & Creative Technologist</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            I'm a passionate{" "}
            <span className="text-foreground font-medium border-b-2 border-primary">
              game developer
            </span>
            ,{" "}
            <span className="text-foreground font-medium border-b-2 border-primary">
              software engineer
            </span>
            , and{" "}
            <span className="text-foreground font-medium border-b-2 border-primary">
              creative technologist
            </span>
            .
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Creating immersive gaming experiences and bringing imaginative worlds to life through code and creativity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-brand-glow text-primary-foreground"
            >
              <Link to="/projects" className="flex items-center gap-2">
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-border hover:border-primary hover:text-primary"
            >
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What I <span className="text-primary">Do</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Gamepad2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Game Development</h3>
              <p className="text-muted-foreground">
                Building engaging gameplay mechanics, immersive worlds, and polished player experiences across multiple platforms.
              </p>
            </div>
            
            <div className="p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Software Engineering</h3>
              <p className="text-muted-foreground">
                Writing clean, efficient code with expertise in C#, C++, and modern game engine architectures.
              </p>
            </div>
            
            <div className="p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Creative Design</h3>
              <p className="text-muted-foreground">
                Crafting visual effects, UI/UX design, and creating cohesive art direction for memorable gaming experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
