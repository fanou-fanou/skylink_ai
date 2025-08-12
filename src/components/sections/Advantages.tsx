import Image from "next/image";
import wave from "@/assets/images/wave.svg";
import wave_mobile from "@/assets/images/wave_mobile.svg";
import { advantages, advantageAside } from "@/lib/data";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { JSX } from "react";

/**
 * Composant pour afficher un avantage individuel avec icône, titre et description.
 * 
 * @param {Object} props
 * @param {string | StaticImport} props.icon - Icône de l'avantage (url ou import statique)
 * @param {string} props.title - Titre de l'avantage
 * @param {string} props.description - Description de l'avantage
 * @param {boolean} [props.isLeftItem=true] - Indique si l'item est à gauche (affecte le margin-top)
 * @param {boolean} [props.isAltBg=false] - Utilise un fond alternatif semi-transparent pour différencier l'item
 * @returns {JSX.Element}
 */
function AdvantageItem({
  icon,
  title,
  description,
  isLeftItem = true,
  isAltBg = false,
}: {
  icon: string | StaticImport;
  title: string;
  description: string;
  isAltBg?: boolean;
  isLeftItem?: boolean;
}): JSX.Element {
  return (
    <div className={`flex items-center space-x-2.5 ${isLeftItem ? "mt-9 md:mt-10" : ""}`}>
      <div
        className={`flex-none rounded-full w-15 md:w-20 h-15 md:h-20 flex justify-center items-center ${
          isAltBg ? "bg-[rgba(133,106,93,0.19)]" : "bg-gray"
        }`}
      >
        <Image src={icon} alt={title} className="w-[60%]" />
      </div>
      <div>
        <h3 className="font-medium text-lg md:text-xl">{title}</h3>
        <p className="font-light text-xs md:text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}

/**
 * Section affichant les avantages de la solution IA
 * 
 * - Colonne gauche avec un titre et une liste d'avantages principaux
 * - Colonne droite avec un encart détaillé "Ce que vous obtenez" présentant des statistiques/avantages supplémentaires
 * - Utilise des images décoratives en background
 * - Responsive : colonnes s'empilent sur petits écrans, côte à côte sur grands écrans
 * 
 * @returns {JSX.Element} Section complète des avantages
 */
export default function Advantages(): JSX.Element {
  return (
    <section className="relative pt-30" id="advantages">
      <div className="container mx-auto px-4 md:px-8">
        {/* Flex col sur sm/md, flex row sur lg */}
        <div className="flex flex-col md:flex-col lg:flex-row">
          {/* Colonne gauche : Titre + avantages */}
          <div className="w-full lg:w-[60%] mb-6 md:mb-0 mt-0 md:mt-10 order-1">
            <h2 className="text-primary font-medium text-lg md:text-xl lg:text-2xl">Avantages</h2>
            <p className="font-medium text-3xl md:text-4xl lg:text-5xl leading-10 md:leading-15 mt-2">
              Pourquoi choisir notre
              <br />
              solution IA ?
            </p>

            {/* Conteneur flex-wrap pour une disposition responsive des items */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap mt-5 md:mt-10 ml-0 md:ml-4 gap-y-0 md:gap-y-8 gap-x-0 md:gap-x-6">
              {/* Groupe 1 : les 2 premiers avantages */}
              <div className="flex flex-col sm:flex-row sm:w-full sm:space-x-6">
                {advantages.slice(0, 2).map(({ icon, title, description }) => (
                  <div key={title} className="sm:w-1/2">
                    <AdvantageItem icon={icon} title={title} description={description} />
                  </div>
                ))}
              </div>

              {/* Groupe 2 : 3e avantage */}
              <div className="sm:w-full">
                {advantages.slice(2, 3).map(({ icon, title, description }) => (
                  <AdvantageItem key={title} icon={icon} title={title} description={description} />
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite : encart "Ce que vous obtenez" avec fond semi-transparent et blur */}
          <Image src={wave} alt="wave" className="absolute hidden lg:block lg:-top-60 -right-0" />
          <div className="w-full lg:w-[40%] mt-12 md:mt-0 order-2 relative">

            <div className="w-full lg:w-fit ml-auto md:mx-auto md:mt-30 bg-[rgba(72,73,77,0.68)] px-4 lg:px-10 rounded-3xl py-15 backdrop-blur-[2px] shadow relative">
              <Image src={wave_mobile} alt="wave" className="absolute block md:hidden w-full -top-100 right-0" />
              <h2 className="text-center text-2xl md:text-3xl font-bold">Ce que vous obtenez</h2>
              {advantageAside.map(({ icon, title, description, percentage }, i) => (
                <div key={title + i} className="flex justify-between items-center my-2 mt-10">
                  <AdvantageItem
                    icon={icon}
                    title={title}
                    description={description}
                    isAltBg={i % 2 !== 0}
                    isLeftItem={false}
                  />
                  <span className="text-primary flex-none font-semibold text-md md:text-lg ml-1">{percentage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
