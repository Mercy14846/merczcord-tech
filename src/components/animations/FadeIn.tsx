
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  duration?: "fast" | "normal" | "slow";
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  threshold?: number;
  once?: boolean;
}

const FadeIn = ({
  children,
  className,
  duration = "normal",
  direction = "up",
  delay = 0,
  threshold = 0.1,
  once = true,
}: FadeInProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const current = elementRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && current) {
            observer.unobserve(current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [once, threshold]);

  // Define animation classes based on props
  const durationClass = {
    fast: "duration-300",
    normal: "duration-500",
    slow: "duration-700",
  }[duration];

  const directionClass = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
    none: "",
  }[direction];

  const animationClass = cn(
    "transition-all ease-out",
    durationClass,
    !isVisible && "opacity-0",
    !isVisible && directionClass
  );

  const delayStyle = {
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={elementRef}
      className={cn(animationClass, className)}
      style={delayStyle}
    >
      {children}
    </div>
  );
};

export default FadeIn;
