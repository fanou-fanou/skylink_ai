import Image from "next/image";
import ellipse_spread from "@/assets/images/ellipse_spread.svg";
import { contact } from "@/lib/data";
import ContactForm from "../features/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="relative pt-0 md:pt-10 w-full h-full">
      <Image
        src={ellipse_spread}
        alt="ellipse spread"
        className="w-full rounded-[100%] blur-3xl h-full -top-40 md:top-40 absolute object-cover"
      />
      <div className="container mx-auto py-0 md:py-30 px-2 md:px-8 text-center relative z-10 pb-20">
        <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl leading-10 md:leading-15 mt-20 text-primary">
          Contactez-nous
        </h2>
        <p className="font-light text-lg md:text-xl lg:text-2xl mt-10 md:leading-12">
          Remplissez le formulaire ci-dessous et notre équipe vous répondra rapidement.
          <br className="hidden md:block" />
          Nous sommes là pour répondre à toutes vos questions.
        </p>

        <div className="bg-secondary mt-10 md:mt-40 text-left rounded-4xl">
          {/* Flex-col sur sm & md, flex-row à partir de lg */}
          <div className="flex flex-col lg:flex-row">
            {/* Formulaire — mobile et md en premier */}
            <div className="order-1 lg:order-2 flex-1 mt-7 px-4 lg:px-0 max-w-full lg:max-w-none">
              <ContactForm/>
            </div>

            {/* Coordonnées */}
            <div className="order-2 lg:order-1 px-5 md:px-10 py-10 rounded-4xl bg-[linear-gradient(119deg,rgb(37,40,54)_0%,rgba(0,180,216,0.38)_53%,rgba(0,180,216,0.63)_82%)] mt-7 lg:mt-0 w-full lg:max-w-[30%] mx-auto lg:mx-0">
              <h3 className="font-semibold text-2xl">Nos coordonnées</h3>
              <p className="leading-7 mt-5">
                Tu préfères nous contacter directement ? Voici comment nous joindre.
              </p>
              <ul className="list-none mt-10">
                {contact.map((value, index) => (
                  <li
                    className="flex space-x-4 mt-10 items-center justify-start"
                    key={index}
                  >
                    <Image src={value.image} alt="phone number" />
                    <span>{value.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary w-full absolute h-160 top-240 hidden md:block"></div>
    </section>
  );
}
