import { cn } from "@/lib/utils";
import { ReactNode } from "react";

/**
 * Props du composant Card.
 * 
 * @typedef CardProps
 * @property {ReactNode} children - Contenu à afficher à l’intérieur de la carte.
 * @property {string} [className] - Classes CSS supplémentaires optionnelles à appliquer sur la carte.
 */
interface CardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Composant Card affichant un conteneur stylisé avec fond gris,
 * arrondi, padding et ombre avec effet hover.
 * 
 * @param {CardProps} props - Propriétés du composant.
 * @returns {JSX.Element} Élément React représentant la carte.
 */
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
