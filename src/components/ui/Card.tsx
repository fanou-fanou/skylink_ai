import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "bg-gray rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
