import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Apple, Store } from "lucide-react";
import { StoreLink } from "@/data/projects";

interface DescriptionWithLinksProps {
  description: string;
  storeLinks?: StoreLink[];
  className?: string;
}

export const DescriptionWithLinks = ({ description, storeLinks, className }: DescriptionWithLinksProps) => {
  if (!storeLinks || storeLinks.length === 0) {
    return <p className={className}>{description}</p>;
  }

  // Split description into parts and render with hover cards for matched phrases
  const renderDescription = () => {
    let remaining = description;
    const elements: JSX.Element[] = [];
    let key = 0;

    while (remaining.length > 0) {
      // Find the earliest matching store link in the remaining text
      let earliestMatch: { link: StoreLink; index: number } | null = null;

      for (const link of storeLinks) {
        const index = remaining.indexOf(link.text);
        if (index !== -1 && (!earliestMatch || index < earliestMatch.index)) {
          earliestMatch = { link, index };
        }
      }

      if (!earliestMatch) {
        // No more matches, add the rest as plain text
        elements.push(<span key={key++}>{remaining}</span>);
        break;
      }

      // Add text before the match
      if (earliestMatch.index > 0) {
        elements.push(<span key={key++}>{remaining.substring(0, earliestMatch.index)}</span>);
      }

      // Add the matched text with hover card
      const colorClass = earliestMatch.link.color === 'yellow' ? 'border-link-yellow' :
                        earliestMatch.link.color === 'blue' ? 'border-link-blue' :
                        earliestMatch.link.color === 'red' ? 'border-link-red' :
                        'border-primary';
      
      elements.push(
        <HoverCard key={key++} openDelay={200}>
          <HoverCardTrigger asChild>
            <span className={`cursor-pointer hover:opacity-80 transition-opacity inline-block relative border-b-[2.5px] border-opacity-80 leading-none pb-[2px] ${colorClass}`}>
              {earliestMatch.link.text}
            </span>
          </HoverCardTrigger>
          <HoverCardContent className="w-fit p-2 bg-card/95 backdrop-blur-sm border-border/50" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-row gap-1.5">
              {earliestMatch.link.androidLink && (
                <Button asChild variant="ghost" size="sm" className="justify-start hover:bg-primary/10 hover:text-primary transition-colors">
                  <a href={earliestMatch.link.androidLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <Store className="w-4 h-4 mr-2" />
                    Android
                  </a>
                </Button>
              )}
              {earliestMatch.link.iosLink && (
                <Button asChild variant="ghost" size="sm" className="justify-start hover:bg-primary/10 hover:text-primary transition-colors">
                  <a href={earliestMatch.link.iosLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <Apple className="w-4 h-4 mr-2" />
                    iOS
                  </a>
                </Button>
              )}
            </div>
          </HoverCardContent>
        </HoverCard>
      );

      // Move past the matched text
      remaining = remaining.substring(earliestMatch.index + earliestMatch.link.text.length);
    }

    return elements;
  };

  return <p className={className}>{renderDescription()}</p>;
};
