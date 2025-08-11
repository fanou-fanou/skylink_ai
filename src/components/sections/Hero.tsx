import { Button } from "@/components/ui/Button";
import Image from "next/image";
import brain from "@/assets/icons/brain.svg";

export default function Hero() {
  return (
    <section className="text-white py-20 md:py-50 px-0 md:px-12 lg:px-20 relative z-60" id="hero" aria-label="Lancement rapide de projet IA">
      <div className="container mx-auto px-0 md:px-8">
        <div className="w-full md:w-[50%] ">
          <div className="text-center md:text-left text-xs md:text-sm mb-2 mt-12 md:mt-0 flex items-center justify-center md:justify-start space-x-3">
            <Image src={brain} alt="brain" className="w-8" />
            <p >Site IA en seulement <span className="text-primary">7 jours</span> – à partir de <span className="text-primary">2&apos;200 CHF</span></p>
          </div>
          <h1 className="mt-10 md:mt-0 text-3xl md:text-7xl font-medium mb-4 leading-12 md:leading-snug text-center md:text-left">
            Lancez Rapidement<br/> Votre <span className="text-primary">Projet</span> avec <br className="hidden md:block"/> notre <br className="block md:hidden"/> <span className="text-primary">solution</span>.
          </h1>
          <div className="flex mt-16 text-center p-6 md:p-0 justify-center md:justify-start">
            <Button className="text-[13px] md:text-lg" >Tester gratuitement</Button>
            <Button className="ml-3 md:ml-4 text-[13px] md:text-lg"  variant="secondary">Parler à un expert</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
