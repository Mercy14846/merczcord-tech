
import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard = ({ 
  children, 
  className, 
  hoverEffect = true,
  ...props 
}: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-effect rounded-lg p-6",
        hoverEffect && "glass-effect-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
