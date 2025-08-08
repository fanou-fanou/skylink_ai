import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn("text-center mb-10", className)}>
      {subtitle && (
        <p className="text-primary font-medium mb-2">{subtitle}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
    </div>
  );
}
