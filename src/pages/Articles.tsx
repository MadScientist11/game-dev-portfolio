import { useState } from "react";
import { X, Clock, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import { articles, Article } from "@/data/articles";
import { Badge } from "@/components/ui/badge";

const ArticleCard = ({ 
  article, 
  onClick 
}: { 
  article: Article; 
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)]"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(article.date).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {article.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {article.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary"
              className="text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const ArticleView = ({ 
  article, 
  onClose 
}: { 
  article: Article; 
  onClose: () => void;
}) => {
  return (
    <div 
      className="fixed inset-0 z-50 bg-background animate-fade-in"
      style={{ animationDuration: '0.3s' }}
    >
      <div className="h-full overflow-y-auto">
        <div className="container mx-auto px-6 py-8 max-w-3xl">
          <button
            onClick={onClose}
            className="fixed top-6 right-6 p-2 rounded-full bg-card border border-border hover:border-primary/50 hover:text-primary transition-all z-50"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
          
          <article className="pt-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(article.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            
            <div className="prose prose-invert prose-primary max-w-none">
              {article.content.split('\n').map((line, index) => {
                if (line.startsWith('# ')) {
                  return <h1 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">{line.slice(2)}</h1>;
                }
                if (line.startsWith('## ')) {
                  return <h2 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">{line.slice(3)}</h2>;
                }
                if (line.startsWith('### ')) {
                  return <h3 key={index} className="text-lg font-medium text-primary mt-4 mb-2">{line.slice(4)}</h3>;
                }
                if (line.match(/^\d+\.\s/)) {
                  return <p key={index} className="text-muted-foreground ml-4 my-1">{line}</p>;
                }
                if (line.trim()) {
                  return <p key={index} className="text-muted-foreground my-3 leading-relaxed">{line}</p>;
                }
                return null;
              })}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

const Articles = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-24 pb-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Articles</h1>
          <p className="text-muted-foreground max-w-2xl">
            Thoughts and insights on game development, programming, and technology.
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No articles yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onClick={() => setSelectedArticle(article)}
              />
            ))}
          </div>
        )}
      </main>

      {selectedArticle && (
        <ArticleView 
          article={selectedArticle} 
          onClose={() => setSelectedArticle(null)} 
        />
      )}
    </div>
  );
};

export default Articles;
