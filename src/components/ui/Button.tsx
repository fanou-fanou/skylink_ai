import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "px-5 py-2 rounded-md font-medium transition-colors duration-200",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary/80",
        secondary:
          "bg-transparent border border-white text-white hover:bg-white hover:text-secondary",
        accent: "bg-accent text-white hover:bg-accent/80",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
