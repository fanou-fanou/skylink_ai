import Image from "next/image";
import wave from "@/assets/images/wave.svg";
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
        <div className={`flex items-center space-x-2.5  ${isLeftItem && "mt-10"}`}>
            <div
                className={`rounded-full w-20 h-20 flex justify-center items-center  ${isAltBg ? "bg-[rgba(133,106,93,0.19)]" : "bg-gray "}`}
            >
                <Image src={icon} alt={title} className="w-[60%]" />
            </div>
            <div>
                <h3 className="font-medium text-xl">{title}</h3>
                <p className="font-light text-sm mt-1">{description}</p>
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
                    <div className="w-full md:w-[60%] mb-6 md:mb-0 mt-10">
                        <h2 className="text-primary font-medium text-2xl ">Avantages</h2>
                        <p className="font-medium text-5xl leading-20 mt-2">
                            Pourquoi choisir notre
                            <br />
                            solution IA ?
                        </p>
                        <div className="flex mt-10 ml-4">
                            <div>
                                {/* Premier groupe (2 items) */}
                                {advantages.slice(0, 2).map(({ icon, title, description }) => (
                                    <AdvantageItem
                                        key={title}
                                        icon={icon}
                                        title={title}
                                        description={description}
                                    />
                                ))}
                            </div>
                            <div>
                                {/* Deuxième groupe (3e item) */}
                                {advantages.slice(2, 3).map(({ icon, title, description }) => (
                                    <AdvantageItem
                                        key={title}
                                        icon={icon}
                                        title={title}
                                        description={description}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Colonne droite */}
                    <div className="w-full md:w-[40%]">
                        <Image
                            src={wave}
                            alt="wave"
                            className="absolute -top-60 -right-0"
                        />
                        <div className="w-fit ml-auto bg-[rgba(72,73,77,0.68)] px-10 rounded-3xl py-15 backdrop-blur-[2px] shadow">
                            <h2 className="text-center text-3xl font-bold">Ce que vous obtenez</h2>
                            {advantageAside.map(({ icon, title, description, percentage }, i) => (
                                <div
                                    key={title + i}
                                    className="flex justify-between items-center my-2 mt-10"
                                >
                                    <AdvantageItem
                                        icon={icon}
                                        title={title}
                                        description={description}
                                        isAltBg={i % 2 !== 0}
                                        isLeftItem={false}
                                    />
                                    <span className="text-primary font-semibold text-lg ml-1">{percentage}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
