import Chatbot from "@/components/features/Chatbot";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import Advantages from "@/components/sections/Advantages";
import Contact from "@/components/sections/Contact";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import { JSX } from "react";

/**
 * Composant principal de la page d'accueil
 * 
 * Rassemble les différentes sections clés du site :
 * - Barre de navigation
 * - Section héros avec message d'accroche
 * - Avantages de la solution
 * - Chatbot intégré
 * - Fonctionnalités principales
 * - Témoignages clients
 * - Formulaire de contact
 * - Pied de page
 * 
 * @returns {JSX.Element} Structure complète de la page d'accueil
 */
export default function Home(): JSX.Element {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Advantages />
        <Chatbot />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
