import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800" , "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Skylink Agency IA",
  description: "Lancez votre projet IA rapidement",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
