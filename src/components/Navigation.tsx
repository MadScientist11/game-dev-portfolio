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
            <Link
              to="/articles"
              className={`text-foreground hover:text-primary transition-colors ${
                isActive("/articles") ? "text-primary font-medium" : ""
              }`}
            >
              Articles
            </Link>
            <button
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
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              CV
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
