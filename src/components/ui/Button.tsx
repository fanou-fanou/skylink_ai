import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // cursor-pointer as default
  "px-5 py-2 rounded-md font-medium transition-colors duration-200 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-primary text-secondary hover:bg-primary/80",
        secondary:
          "bg-transparent border border-primary text-primary hover:bg-primary hover:text-secondary",
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
    VariantProps<typeof buttonVariants> {
  href?: string;
}

export function Button({
  className,
  variant,
  size,
  href,
  disabled,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const base = buttonVariants({ variant, size });
  const classes = cn(base, className, disabled ? "cursor-not-allowed opacity-50" : "");

  // If href is provided and NOT disabled -> use Link
  if (href && !disabled) {
    // Only pass safe props to Link (don't spread raw button props).
    return (
      <Link href={href} className={classes} onClick={onClick as any}>
        {children}
      </Link>
    );
  }

  // If href but disabled -> render non-clickable element for accessibility
  if (href && disabled) {
    return (
      <span className={classes} aria-disabled="true" tabIndex={-1}>
        {children}
      </span>
    );
  }

  // Normal button
  return (
    <button className={classes} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
