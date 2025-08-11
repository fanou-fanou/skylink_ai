import Image from "next/image";
import wave from "@/assets/images/wave.svg";
import wave_mobile from "@/assets/images/wave_mobile.svg";
import { advantages, advantageAside } from "@/lib/data";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

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
}) {
  return (
    <div className={`flex items-center space-x-2.5  ${isLeftItem ? "mt-9 md:mt-10" : ""}`}>
      <div
        className={`flex-none rounded-full w-15 md:w-20 h-15 md:h-20 flex justify-center items-center  ${
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

export default function Advantages() {
  return (
    <section className="relative pt-30" id="advantages">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row">
          {/* Colonne gauche */}
          <div className="w-full md:w-[60%] mb-6 md:mb-0 mt-0 md:mt-10">
            <h2 className="text-primary font-medium text-lg md:text-2xl ">Avantages</h2>
            <p className="font-medium text-3xl md:text-5xl leading-10 md:leading-20 mt-2">
              Pourquoi choisir notre
              <br />
              solution IA ?
            </p>

            {/* Conteneur flex-wrap pour rendre responsive la disposition des items */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap mt-5 md:mt-10 ml-0 md:ml-4 gap-y-0 md:gap-y-8 gap-x-0 md:gap-x-6">

              {/* Premier groupe (2 items) */}
              <div className="flex flex-col sm:flex-row sm:w-full sm:space-x-6">
                {advantages.slice(0, 2).map(({ icon, title, description }) => (
                  <div key={title} className="sm:w-1/2">
                    <AdvantageItem icon={icon} title={title} description={description} />
                  </div>
                ))}
              </div>

              {/* Deuxième groupe (3e item) */}
              <div className="sm:w-ful">
                {advantages.slice(2, 3).map(({ icon, title, description }) => (
                  <AdvantageItem key={title} icon={icon} title={title} description={description} />
                ))}
              </div>
            </div>
          </div>
           

          {/* Colonne droite */}
          <div className="w-full md:w-[40%] mt-12 md:mt-0 ">
             <Image src={wave} alt="wave" className="absolute hidden md:block md:-top-60 -right-0" />
             
            <div className="w-fit relative md:static ml-auto bg-[rgba(72,73,77,0.68)] px-4 md:px-10 rounded-3xl py-15 backdrop-blur-[2px] shadow">
              <Image src={wave_mobile} alt="wave" className="absolute block md:hidden -top-80 right-0" />
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
