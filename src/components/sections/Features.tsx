import { features } from "@/lib/data";
import { jsxToString } from "@/lib/utils";
import Image from "next/image";
import { JSX } from "react";

/**
 * Composant affichant la section "Fonctionnalités" présentant
 * une grille des différentes fonctionnalités proposées.
 * 
 * Chaque fonctionnalité affiche une icône, un titre et une description.
 * La grille est responsive et passe de 1 à 3 colonnes selon la taille d'écran.
 * 
 * @returns {JSX.Element} Section des fonctionnalités
 */
export default function Features(): JSX.Element {
  return (
    <section className="container mx-auto py-30 px-8 text-center" id="features">
      {/* Titre principal */}
      <h2 className="text-primary font-medium text-lg md:text-xl lg:text-2xl">Fonctionnalités</h2>
      
      {/* Sous-titre / description */}
      <p className="font-medium text-3xl md:text-4xl lg:text-5xl leading-10 md:leading-15 mt-2 mb-20">
        Découvrez les atouts qui font la différence
      </p>

      {/* Grille responsive des fonctionnalités */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((value, index) => (
          <div
            key={index}
            className="mt-30 pt-25 mx-auto bg-gray rounded-2xl pb-8 px-6 items-center relative max-w-[350px]"
          >
            {/* Icône positionnée en absolu au-dessus */}
            <Image
              src={value.icon}
              alt={typeof value.title === "string" ? value.title : jsxToString(value.title)}
              className="absolute left-1/2 -translate-x-1/2 -top-27"
              style={{ top: `calc(var(--spacing) * -${value.top})` }}
            />
            
            {/* Titre de la fonctionnalité */}
            <h3 className="font-semibold text-xl md:text-xl lg:text-2xl leading-9 h-10">{value.title}</h3>
            
            {/* Description */}
            <p className="text-gray-300 mt-14 mx-5 leading-7 font-light">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
