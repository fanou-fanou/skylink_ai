import { Button } from "@/components/ui/Button";
import Image from 'next/image';
import HeroImage from "@/assets/images/hero_image.png";

export default function Hero() {
  return (
    <section className="bg-secondary text-white py-20 px-6 md:px-12 lg:px-20" id="hero" aria-label="Lancement rapide de projet IA">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm text-primary mb-2">Site IA en seulement 7 jours – à partir de 2'200 CHF</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Lancez Rapidement <br /> Votre <span className="text-primary">Projet</span> avec notre <span className="text-primary">solution</span>.
          </h1>
          <div className="flex space-x-4 mt-6">
            <Button>Tester gratuitement</Button>
            <Button variant="secondary">Parler à un expert</Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image src={HeroImage} alt="hero illustration" className="absolute top-0 right-0"  />
        </div>
      </div>
    </section>
  );
}
