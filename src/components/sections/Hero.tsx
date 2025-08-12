import { Button } from "@/components/ui/Button";
import Image from "next/image";
import brain from "@/assets/icons/brain.svg";

/**
 * Composant Hero affichant la section principale d'accroche
 * pour le lancement rapide de projet IA.
 * 
 * Contient un message clé, un titre important, et deux boutons d'action.
 * Utilise des images décoratives et une mise en forme responsive.
 * 
 * @returns {JSX.Element} Section Hero principale
 */
export default function Hero() {
  return (
    <section
      className="text-white py-20 lg:py-50 px-0 lg:px-20 relative z-60"
      id="hero"
      aria-label="Lancement rapide de projet IA"
    >
      <div className="container mx-auto px-0">
        <div className="w-full lg:w-[50%]">
          {/* Bandeau d'information courte avec icône */}
          <div className="text-center lg:text-left text-xs lg:text-sm mb-2 mt-12 lg:mt-0 flex items-center justify-center lg:justify-start space-x-3">
            <Image src={brain} alt="brain" className="w-8" />
            <p>
              Site IA en seulement{" "}
              <span className="text-primary">7 jours</span> – à partir de{" "}
              <span className="text-primary">2&apos;200 CHF</span>
            </p>
          </div>

          {/* Titre principal avec mise en forme responsive */}
          <h1 className="mt-10 lg:mt-0 text-3xl md:text-5xl lg:text-7xl font-medium mb-4 leading-12 md:leading-18 lg:leading-snug text-center lg:text-left">
            Lancez Rapidement
            <br /> Votre <span className="text-primary">Projet</span> avec{" "}
            <br className="hidden lg:block" /> notre{" "}
            <br className="block lg:hidden" />{" "}
            <span className="text-primary">solution</span>.
          </h1>

          {/* Boutons d'action */}
          <div className="flex mt-16 text-center p-6 lg:p-0 justify-center lg:justify-start">
            <Button className="text-[13px] md:text-lg">Tester gratuitement</Button>
            <Button className="ml-3 lg:ml-4 text-[13px] md:text-lg" variant="secondary">
              Parler à un expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
