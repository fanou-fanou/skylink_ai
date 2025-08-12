import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

/**
 * Configuration des variantes CSS pour le composant Button
 * via class-variance-authority (CVA).
 */
const buttonVariants = cva(
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

/**
 * Props du composant Button.
 * 
 * @typedef ButtonProps
 * @property {string} [href] - URL de navigation. Si fourni, le bouton devient un lien.
 * @property {boolean} [disabled] - Indique si le bouton est désactivé.
 * @property {"primary" | "secondary" | "accent"} [variant] - Variante visuelle du bouton.
 * @property {"sm" | "md" | "lg"} [size] - Taille du bouton.
 * @property {React.ReactNode} children - Contenu enfant du bouton.
 * @property {React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>} [onClick] - Gestionnaire d'événement click.
 * @extends React.ButtonHTMLAttributes<HTMLButtonElement>
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

/**
 * Composant Button réutilisable, prenant en charge :
 * - rendu en lien `<Link>` Next.js si `href` fourni et non désactivé,
 * - rendu d'un `<button>` sinon,
 * - affichage d'un `<span>` désactivé si lien `href` fourni mais bouton désactivé,
 * - styles variant selon props `variant` et `size`.
 * 
 * @param {ButtonProps} props - Propriétés du composant.
 * @returns {JSX.Element} Élément React du bouton ou lien stylisé.
 */
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

  // Composition des classes CSS avec gestion du disabled
  const classes = cn(base, className, disabled ? "cursor-not-allowed opacity-50" : "");

  // Si href est défini et bouton non désactivé, utiliser le composant Link Next.js
  if (href && !disabled) {
    // On cast onClick pour correspondre au type attendu de Link
    return (
      <Link href={href} className={classes} onClick={onClick as MouseEventHandler}>
        {children}
      </Link>
    );
  }

  // Si href défini mais bouton désactivé, afficher un span non cliquable pour accessibilité
  if (href && disabled) {
    return (
      <span className={classes} aria-disabled="true" tabIndex={-1}>
        {children}
      </span>
    );
  }

  // Sinon, rendu normal d'un bouton HTML
  return (
    <button className={classes} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
