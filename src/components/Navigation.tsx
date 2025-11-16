import { Link, useLocation } from "react-router-dom";
import { FileText } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold text-primary hover:text-brand-glow transition-colors"
          >
            Portfolio
          </Link>
          
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`text-foreground hover:text-primary transition-colors ${
                isActive("/") ? "text-primary font-medium" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`text-foreground hover:text-primary transition-colors ${
                isActive("/projects") ? "text-primary font-medium" : ""
              }`}
            >
              Projects
            </Link>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <FileText className="w-4 h-4" />
              CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
