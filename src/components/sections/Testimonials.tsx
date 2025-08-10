import Image from "next/image";
import { testimonials } from "@/lib/data";
import quote from "@/assets/icons/quote.svg";

export default function Testimonials() {
  return (
    <section className="relative py-30" id="testimonials">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-primary font-medium text-2xl">Témoignages clients</h2>
        <p className="font-medium text-5xl leading-20 mt-2">
          Ils ont transformé leur <br /> business avec nous
        </p>
      </div>
      <div className="overflow-hidden relative flex flex-nowrap space-x-8 pl-9 mt-20">
        {testimonials.map((value, index) => (
          <div
            key={index}
            className="w-[310px] relative text-white bg-gray px-8 py-7 flex flex-col"
          >
            <Image
                src={quote}
                alt={`quote icon`}
                className="absolute right-8 top-20"
              />
            <div className="w-20 h-20 absolute -left-4 top-7  overflow-hidden">
              <Image
                src={value.image}
                alt={`portrait de ${value.name}`}
                className="object-cover w-20 h-20"
              />
            </div>
            <div className="h-22 flex items-center ml-15">
              <div className="w-full h-[1px] bg-white"></div>
            </div>
            <p className="font-light text leading-8 mt-2 mb-3">{value.text}</p>
            <p className="font-semibold mt-auto">{value.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
