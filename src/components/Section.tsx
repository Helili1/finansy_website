
import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  title: ReactNode;
  content: ReactNode;
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  decorative?: boolean;
}

const Section = ({
  title,
  content,
  className,
  contentClassName,
  titleClassName,
  decorative = true,
}: SectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "py-6 md:py-12 px-4 md:px-8 mb-6 md:mb-12 rounded-lg shadow-sm transition-all duration-500 relative",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
        isHovered ? "bg-card/90 shadow-md" : "bg-card shadow-sm",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {decorative && isVisible && (
        <>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1">
            <div className="w-full h-full decorative-line"></div>
          </div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/30 rounded-tr-lg"></div>
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/30 rounded-tl-lg"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/30 rounded-br-lg"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/30 rounded-bl-lg"></div>
        </>
      )}

      <div
        className={cn(
          "transition-all duration-500 delay-100 relative",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          "mb-6 md:mb-8",
          titleClassName
        )}
      >
        {typeof title === "string" ? (
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
            {title}
          </h2>
        ) : (
          title
        )}
        {decorative && isVisible && (
          <div className="w-20 h-0.5 decorative-line mx-auto mt-4"></div>
        )}
      </div>
      <div 
        className={cn(
          "transition-all duration-500 delay-200", 
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10", 
          contentClassName
        )}
      >
        {content}
      </div>
    </section>
  );
};

export default Section;
