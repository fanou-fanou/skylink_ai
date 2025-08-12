import { Metadata } from "next";
import { headers } from "next/headers";
import Chatbot from "@/components/features/Chatbot";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import Advantages from "@/components/sections/Advantages";
import Contact from "@/components/sections/Contact";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import { JSX } from "react";
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

interface SEOData {
  title: string;
  description: string;
}

/**
 * Récupère dynamiquement les métadonnées SEO en appelant l'API interne `/api/generate-seo`.
 *
 * Le contenu fourni est envoyé à un modèle d’IA qui génère un titre et une description optimisés pour le référencement.
 * Cette fonction :
 * 1. Récupère les en-têtes HTTP de la requête courante.
 * 2. Détecte le protocole (HTTP ou HTTPS) en fonction de l'environnement.
 * 3. Appelle l'API interne pour obtenir le titre et la description.
 * 4. Fournit des valeurs par défaut si l'appel échoue.
 *
 * @async
 * @param {string} content - Contenu textuel servant de base à la génération SEO.
 * @returns {Promise<SEOData>} Objet contenant `title` et `description` optimisés pour le SEO.
 */
async function fetchSEO(content: string): Promise<SEOData> {
  const reqHeaders: ReadonlyHeaders = await headers();
  const host: string = reqHeaders.get("host") ?? "localhost:3000";

  const protocol: "http" | "https" =
    process.env.NODE_ENV === "development" ? "http" : "https";
  const baseUrl: string = `${protocol}://${host}`;

  const res: Response = await fetch(`${baseUrl}/api/generate-seo`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
    cache: "no-store",
  });

  if (!res.ok) {
    return {
      title: "Skylink Agency - Solutions IA",
      description:
        "Découvrez Skylink Agency, votre partenaire pour des solutions IA innovantes.",
    };
  }

  const data = (await res.json()) as Partial<SEOData>;
  return {
    title: data.title ?? "Skylink Agency - Solutions IA",
    description:
      data.description ??
      "Découvrez Skylink Agency, votre partenaire pour des solutions IA innovantes.",
  };
}

/**
 * Génère les métadonnées de la page d’accueil.
 *
 * Cette fonction exécute un appel à `fetchSEO` avec un contenu descriptif de la page
 * pour obtenir un titre et une description optimisés pour les moteurs de recherche.
 *
 * @async
 * @returns {Promise<Metadata>} Métadonnées prêtes à être utilisées par Next.js.
 */
export async function generateMetadata(): Promise<Metadata> {
  const pageContent: string = `
    Skylink Agency propose une landing page performante avec intégration IA, chatbot, et formulaire contact.
    Offrez une expérience utilisateur fluide et optimisée.
  `;

  const seo: SEOData = await fetchSEO(pageContent);

  return {
    title: seo.title,
    description: seo.description,
  };
}

/**
 * Composant principal représentant la page d'accueil du site Skylink Agency.
 *
 * Il regroupe toutes les sections principales de la page :
 * - Navigation
 * - Section d'accroche (Hero)
 * - Avantages
 * - Chatbot interactif
 * - Fonctionnalités
 * - Témoignages
 * - Formulaire de contact
 * - Pied de page
 *
 * @returns {JSX.Element} Structure complète de la page d'accueil.
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
