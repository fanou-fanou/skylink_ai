import { Button } from "@/components/ui/Button";
import Image from 'next/image';
import brain from "@/assets/icons/brain.svg";

export default function Hero() {
  return (
    <section className="text-white py-50 px-0 md:px-12 lg:px-20 relative z-60" id="hero" aria-label="Lancement rapide de projet IA">
      <div className="container mx-auto px-8">
        <div className="w-[50%]">
          <div className="text-sm text-white mb-2 flex items-center space-x-3">
            <Image src={brain} alt="brain" />
            <p >Site IA en seulement <span className="text-primary">7 jours</span> – à partir de <span className="text-primary">2'200 CHF</span></p>
          </div>
          <h1 className="text-4xl md:text-7xl font-medium mb-4 leading-snug">
            Lancez Rapidement<br/> Votre <span className="text-primary">Projet</span> avec <br/> notre <span className="text-primary">solution</span>.
          </h1>
          <div className="flex space-x-4 mt-20">
            <Button>Tester gratuitement</Button>
            <Button variant="secondary">Parler à un expert</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
