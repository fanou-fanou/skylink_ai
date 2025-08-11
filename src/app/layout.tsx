import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
