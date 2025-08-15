"use client";

import Image from "next/image";
import { testimonials } from "@/lib/data";
import quote from "@/assets/icons/quote.svg";
import { useState, useRef, useEffect } from "react";

/**
 * Composant React affichant la section des témoignages clients.
 * Permet de naviguer entre plusieurs témoignages avec un affichage adapté
 * aux écrans mobiles et desktop.
 *
 * @component
 * @returns {JSX.Element} Section Témoignages clients
 */
export default function Testimonials() {
  /**
   * Index du témoignage actuellement affiché.
   * @type {[number, React.Dispatch<React.SetStateAction<number>>]}
   */
  const [activeIndex, setActiveIndex] = useState(1);

  /**
   * Références vers les éléments HTML des cartes de témoignages,
   * utilisées pour gérer le scroll automatique lors du changement de témoignage.
   * @type {React.MutableRefObject<(HTMLDivElement | null)[]>}
   */
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  /**
   * Référence pour indiquer si le scroll automatique a déjà eu lieu,
   * évitant ainsi de scroller au premier rendu du composant.
   * @type {React.MutableRefObject<boolean>}
   */
  const hasScrolledRef = useRef(false);

  /**
   * Effet déclenché à chaque changement de `activeIndex`.
   * Scroll automatiquement la carte active en vue de manière fluide,
   * sauf lors du premier rendu.
   */
  useEffect(() => {
    if (hasScrolledRef.current) {
      const activeCard = cardRefs.current[activeIndex];
      if (activeCard) {
        activeCard.scrollIntoView({
          behavior: "smooth",  // Animation de scroll douce
          inline: "center",    // Centrer horizontalement l'élément
          block: "nearest",    // Alignement vertical le plus proche
        });
      }
    } else {
      hasScrolledRef.current = true;
    }
  }, [activeIndex]);

  return (
    <section
      className="relative py-30"
      id="testimonials"
      aria-label="Témoignages clients"
    >
      {/* En-tête section : titre principal et sous-titre */}
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-primary font-medium text-lg md:text-xl lg:text-2xl">
          Témoignages clients
        </h2>
        <p className="font-medium text-3xl md:text-4xl lg:text-5xl leading-10 md:leading-15 mt-2">
          Ils ont transformé leur <br /> business avec nous
        </p>
      </div>

      {/* --- MOBILE --- */}
      <div className="block md:hidden mt-10 px-4">
        <div className="relative text-white px-6 py-7 flex flex-col bg-primary min-h-[420px] rounded-lg">
          {/* Icône quote en position absolue */}
          <Image
            src={quote}
            alt=""
            aria-hidden="true"
            className="absolute right-6 top-8 w-[60px]"
          />
          {/* Photo ronde du client */}
          <div className="w-20 h-20 absolute -left-3 top-7 overflow-hidden rounded-full border-4 border-secondary">
            <Image
              src={testimonials[activeIndex].image}
              alt={`Photo de ${testimonials[activeIndex].name}`}
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </div>
          {/* Ligne décorative */}
          <div className="h-22 flex items-center ml-14">
            <div className="w-[30%] h-[2px] bg-white"></div>
          </div>
          {/* Texte du témoignage */}
          <p className="font-medium text-lg leading-8 mx-12 mb-8">
            {testimonials[activeIndex].text}
          </p>
          {/* Nom du client avec ligne décorative */}
          <div className="flex space-x-3 items-center">
            <div className="w-[30%] h-[2px] bg-white"></div>
            <p className="font-semibold mt-auto">{testimonials[activeIndex].name}</p>
          </div>
        </div>

        {/* Pagination : boutons pour changer de témoignage (mobile) */}
        <div
          className="mt-6 flex gap-2 justify-center"
          role="tablist"
          aria-label="Navigation des témoignages"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-current={activeIndex === i ? "true" : undefined}
              aria-label={`Voir le témoignage de ${testimonials[i].name}`}
              className={`h-2 transition-all duration-300 rounded-full ${
                activeIndex !== i ? "bg-gray w-8" : "bg-primary w-12"
              }`}
              role="tab"
              tabIndex={activeIndex === i ? 0 : -1}
            />
          ))}
        </div>
      </div>

      {/* --- DESKTOP + MEDIUM --- */}
      <div
        className="hidden md:flex relative items-end gap-8 pl-9 mt-20 overflow-x-auto scroll-smooth no-scrollbar"
        role="tablist"
        aria-label="Navigation des témoignages"
      >
        {testimonials.map((value, index) => {
          // Détermine si ce témoignage est actif
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el; // Stocke la référence de la carte
              }}
              className="flex-shrink-0"
              role="tabpanel"
              aria-hidden={!isActive} // Masque les non-actifs aux lecteurs d'écran
              tabIndex={isActive ? 0 : -1}
            >
              <div
                onClick={() => setActiveIndex(index)} // Sélectionne ce témoignage au clic
                className={`relative text-white px-8 py-7 flex flex-col cursor-pointer transition-all duration-300
                  ${
                    isActive
                      ? "bg-primary w-[590px]"
                      : "bg-gray w-[380px]"
                  }
                  min-h-[420px] rounded-lg`}
                aria-selected={isActive}
                role="tab"
                tabIndex={0}
                onKeyDown={(e) => {
                  // Permet de sélectionner au clavier avec Enter ou Espace
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveIndex(index);
                  }
                }}
              >
                {/* Icône quote, position et taille changent selon actif ou non */}
                <Image
                  src={quote}
                  alt=""
                  aria-hidden="true"
                  className={`absolute right-8 ${
                    isActive ? "top-10 w-[85px]" : "top-20"
                  }`}
                />
                {/* Photo ronde avec bordure si actif */}
                <div className="w-25 h-25 absolute -left-4 top-7 overflow-hidden">
                  <Image
                    src={value.image}
                    alt={`Photo de ${value.name}`}
                    width={100}
                    height={100}
                    className={`object-cover w-25 h-25 ${
                      isActive ? "border-4 border-secondary" : ""
                    }`}
                  />
                </div>

                {/* Ligne décorative qui change de taille selon actif */}
                <div className="h-22 flex items-center ml-15">
                  <div
                    className={`${
                      isActive ? "w-[30%] h-[2px]" : "w-full h-[1px]"
                    } bg-white`}
                  ></div>
                </div>

                {/* Texte du témoignage avec styles différents selon actif */}
                <p
                  className={`${
                    isActive
                      ? "font-medium text-2xl leading-9 mx-15 mb-10"
                      : "font-light leading-9 mt-9 mb-10"
                  }`}
                >
                  {value.text}
                </p>

                {/* Nom du client avec ligne décorative si actif */}
                <div className="flex space-x-3 items-center">
                  {isActive && <div className="w-[40%] h-[2px] bg-white"></div>}
                  <p className={`font-semibold mt-auto ${isActive ? "text-lg" : ""}`}>
                    {value.name}
                  </p>
                </div>
              </div>

              {/* Pagination en dessous de la carte active */}
              {isActive && (
                <div
                  className="mt-10 flex space-x-2"
                  role="tablist"
                  aria-label="Navigation des témoignages"
                >
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      aria-current={activeIndex === i ? "true" : undefined}
                      aria-label={`Voir le témoignage de ${testimonials[i].name}`}
                      className={`h-2 transition-all duration-300 rounded-full ${
                        activeIndex !== i ? "bg-gray w-10" : "bg-primary w-20"
                      }`}
                      role="tab"
                      tabIndex={activeIndex === i ? 0 : -1}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Style CSS pour masquer la scrollbar visible */}
      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none; /* IE et Edge */
          scrollbar-width: none; /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari et Opera */
        }
      `}</style>
    </section>
  );
}
