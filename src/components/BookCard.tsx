
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface BookCardProps {
  title: string;
  coverUrl: string;
  linkUrl: string;
  delay?: number;
}

const BookCard = ({ title, coverUrl, linkUrl, delay = 0 }: BookCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
        `delay-[${delay}ms]`
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card 
        className={cn(
          "book-card h-full flex flex-col overflow-hidden transition-all duration-300",
          isHovered 
            ? "shadow-lg transform scale-[1.02] bg-card/95" 
            : "shadow-md bg-card"
        )}
      >
        <CardContent className="p-4 flex flex-col items-center justify-between h-full">
          <div className="flex flex-col items-center mb-4 w-full">
            <div className={cn(
              "h-64 sm:h-72 flex items-center justify-center mb-4 overflow-hidden rounded-md",
              isHovered ? "transform scale-[1.02]" : ""
            )}>
              <img
                src={coverUrl}
                alt={title}
                className={cn(
                  "max-h-full rounded-md transition-all duration-500",
                  isHovered ? "shadow-md" : ""
                )}
              />
            </div>
            <h3 className="text-primary font-medium text-center text-base sm:text-lg line-clamp-2 min-h-[3rem]">
              {title}
            </h3>
            {isHovered && (
              <div className="w-16 h-0.5 decorative-line mt-2 mb-3"></div>
            )}
          </div>
          <Button 
            asChild 
            variant={isHovered ? "default" : "outline"} 
            className={cn(
              "w-full mt-2 transition-all duration-300",
              isHovered ? "btn-shimmer" : ""
            )}
          >
            <a href={linkUrl} target="_blank" rel="noopener noreferrer">
              <BookIcon className="h-4 w-4 mr-2" />
              Читать онлайн
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookCard;
