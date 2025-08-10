import { features } from "@/lib/data";
import { jsxToString } from "@/lib/utils";
import Image from "next/image";

export default function Features() {
    return (
        <section className="container mx-auto py-30 px-8 text-center" id="features">
            <h2 className="text-primary font-medium text-2xl mt-20">Fonctionnalités</h2>
            <p className="font-medium text-5xl leading-20 mt-2 mb-20">
                Découvrez les atouts qui font la différence
            </p>

            <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((value, index) => (
                    <div
                        className="mt-30 pt-25 mx-10 bg-gray rounded-2xl pb-8 px-6 items-center relative"
                        key={index}
                    >
                        <Image
                            src={value.icon}
                            alt={typeof value.title === "string" ? value.title : jsxToString(value.title)}
                            className="absolute left-1/2 -translate-x-1/2 -top-27" 
                             style={{ top: `calc(var(--spacing) * -${value.top})` }}
                        />
                        <h3 className="font-semibold text-2xl leading-9 h-10">{value.title}</h3>
                        <p className="text-gray-300 mt-14 mx-5 leading-7 font-light">{value.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
