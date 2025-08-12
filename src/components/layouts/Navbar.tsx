"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import radial_ellipse from "@/assets/images/radial_ellipse.svg";
import ellipse_mobile from "@/assets/images/ellipse_mobile.svg";
import close from "@/assets/icons/close.svg";
import menu from "@/assets/icons/menu.svg";
import HeroImage from "@/assets/images/hero_image.png";
import { JSX, useState } from "react";

/**
 * Composant Navbar responsive pour la navigation principale du site.
 * 
 * - Affiche le logo et images d’arrière-plan décoratives
 * - Menu horizontal pour desktop avec liens d’ancrage
 * - Boutons "Se connecter" et "S’inscrire" visibles en desktop
 * - Menu mobile coulissant avec overlay, boutons et liens similaires
 * - Gestion de l'état d'ouverture/fermeture du menu mobile
 * 
 * @returns {JSX.Element} Barre de navigation complète et responsive
 */
export default function Navbar(): JSX.Element {
  // État booléen indiquant si le menu mobile est ouvert
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="home">
      <nav>
        {/* Images d’arrière-plan, visibles selon breakpoint */}
        <Image
          src={HeroImage}
          alt="hero illustration"
          className="absolute top-0 right-0 hidden lg:block"
        />
        <Image
          src={radial_ellipse}
          alt="radial ellipse"
          className="absolute top-0 right-0 w-[80%] hidden lg:block h-[120vh] z-0"
        />
        <Image
          src={ellipse_mobile}
          alt="radial ellipse"
          className="absolute top-0 right-0 block lg:hidden w-full lg:w-[80%] object-cover h-150vh md:h-[120vh] z-0"
        />

        {/* Conteneur principal avec flexbox pour alignement horizontal */}
        <div className="container mx-auto px-6 flex items-center justify-between py-4 relative z-90">
          {/* Logo avec lien vers la page d'accueil */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src={Logo} alt="skylink agency IAL logo" className="w-[75%] md:w-full" />
          </Link>

          {/* Menu Desktop : liste de liens d’ancrage */}
          <ul className="hidden lg:flex items-center space-x-12 lg:space-x-5 text-white">
            <li><Link href="#home" className="hover:text-primary">Accueil</Link></li>
            <li><Link href="#advantages" className="hover:text-primary">Avantages</Link></li>
            <li><Link href="#features" className="hover:text-primary">Fonctionnalités</Link></li>
            <li><Link href="#testimonials" className="hover:text-primary">Témoignages</Link></li>
            <li><Link href="#contact" className="hover:text-primary">Contact</Link></li>
          </ul>

          {/* Boutons Desktop pour connexion et inscription */}
          <div className="hidden lg:flex space-x-3 lg:space-x-4">
            <Button href="#login" variant="secondary">Se connecter</Button>
            <Button href="#register">S’inscrire</Button>
          </div>

          {/* Bouton menu hamburger visible uniquement sur mobile */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-white focus:outline-none cursor-pointer"
            aria-label="Ouvrir le menu mobile"
          >
            <Image src={menu} alt="mobile menu" />
          </button>
        </div>

        {/* Menu mobile coulissant depuis la gauche */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-500 bg-secondary`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
            <Image src={Logo} alt="Logo" className="w-[70%]" />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white relative -right-7"
              aria-label="Fermer le menu mobile"
            >
              <Image src={close} alt="mobile menu close" className="w-[60%]" />
            </button>
          </div>
          {/* Liste des liens dans le menu mobile, fermeture du menu au clic */}
          <ul className="flex flex-col space-y-6 px-6 py-6">
            <li><Link href="#home" onClick={() => setMenuOpen(false)}>Accueil</Link></li>
            <li><Link href="#advantages" onClick={() => setMenuOpen(false)}>Avantages</Link></li>
            <li><Link href="#features" onClick={() => setMenuOpen(false)}>Fonctionnalités</Link></li>
            <li><Link href="#testimonials" onClick={() => setMenuOpen(false)}>Témoignages</Link></li>
            <li><Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
          {/* Boutons dans le menu mobile */}
          <div className="px-6 flex flex-col text-center space-y-3">
            <Button href="#login" variant="secondary" className="w-full" onClick={() => setMenuOpen(false)}>
              Se connecter
            </Button>
            <Button href="#register" className="w-full mt-2" onClick={() => setMenuOpen(false)}>
              S’inscrire
            </Button>
          </div>
        </div>

        {/* Overlay sombre cliquable pour fermer le menu mobile */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-[rgba(0,0,0,0.8)] z-100"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </nav>
    </header>
  );
}
