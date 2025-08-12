import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { JSX } from "react";

/**
 * Configuration de la police Google Inter avec différents poids
 * et optimisation pour un rendu fluide grâce au swap.
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

/**
 * Métadonnées globales de l'application pour SEO et réseaux sociaux
 */
export const metadata: Metadata = {
  title: "Skylink Agency IA - Lancez votre projet IA en 7 jours",
  description:
    "Skylink Agency vous permet de lancer votre projet IA en seulement 7 jours, à partir de 2'200 CHF. Solution rapide, performante et optimisée SEO avec chatbot intelligent intégré.",
  keywords: [
    "intelligence artificielle",
    "projet IA",
    "agence IA",
    "chatbot",
    "SEO",
    "déploiement rapide",
    "startup IA",
    "automatisation",
    "support client",
  ],
  authors: [{ name: "Skylink Agency" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Skylink Agency IA - Lancez votre projet IA en 7 jours",
    description:
      "Développez rapidement votre solution IA avec Skylink Agency : chatbot intelligent, optimisation SEO, support 24h/24, et plus encore.",
    url: "https://skylinkagency.pro",
    siteName: "Skylink Agency IA",
    images: [
      {
        url: "https://skylinkagency.pro/og-image.png",
        width: 1200,
        height: 630,
        alt: "Skylink Agency IA - Lancement rapide de projet IA",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skylink Agency IA - Lancez votre projet IA en 7 jours",
    description:
      "Solution IA performante et rapide à déployer, avec chatbot intégré et optimisation SEO.",
    images: ["https://skylinkagency.pro/og-image.png"],
    creator: "@SkylinkAgency",
  },
};

/**
 * Composant principal racine de l'application Next.js
 * @param {Object} props - Propriétés du composant
 * @param {React.ReactNode} props.children - Contenu enfant à rendre dans le layout
 * @returns {JSX.Element} Structure HTML globale avec langue FR et police personnalisée
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
