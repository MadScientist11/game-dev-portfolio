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
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Alex Rohach</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            I'm a game developer who loves technical challenges.
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
              variant="outline"
              size="lg"
              className="border-border hover:border-primary hover:text-primary"
              onClick={async () => {
                try {
                  const fileName = 'Alex Rohach CV.pdf';
                  const response = await fetch(`/${encodeURIComponent(fileName)}`);
                  if (!response.ok) throw new Error('Failed to fetch CV');
                  const blob = await response.blob();
                  const url = window.URL.createObjectURL(blob);
                  const link = document.createElement('a');
                  link.href = url;
                  link.download = fileName;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  window.URL.revokeObjectURL(url);
                } catch (error) {
                  console.error('Error downloading CV:', error);
                }
              }}
            >
              Download CV
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
