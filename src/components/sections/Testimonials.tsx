"use client";

import Image from "next/image";
import { testimonials } from "@/lib/data";
import quote from "@/assets/icons/quote.svg";
import { useState } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="relative py-30" id="testimonials">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-primary font-medium text-2xl">Témoignages clients</h2>
        <p className="font-medium text-5xl leading-20 mt-2">
          Ils ont transformé leur <br /> business avec nous
        </p>
      </div>

      <div className="overflow-hidden relative flex flex-nowrap items-end space-x-8 pl-9 mt-20">
        {testimonials.map((value, index) => {
          const isActive = index === activeIndex;

          return (
            <div key={index}>
              <div
                onClick={() => setActiveIndex(index)}
                className={`relative text-white px-8 py-7 flex flex-col cursor-pointer transition-all duration-300
                  ${isActive ? "bg-primary w-[590px]" : "bg-gray w-[380px]"}
                  min-h-[420px]`}
              >
                <Image
                  src={quote}
                  alt="quote icon"
                  className={`absolute right-8 ${isActive ? "top-10 w-[85px]" : "top-20"}`}
                />

                <div className="w-25 h-25 absolute -left-4 top-7 overflow-hidden">
                  <Image
                    src={value.image}
                    alt={`portrait de ${value.name}`}
                    className={`object-cover w-25 h-25 ${isActive ? "border-4 border-secondary" : ""}`}
                  />
                </div>

                <div className="h-22 flex items-center ml-15">
                  <div
                    className={`${isActive ? "w-[30%] h-[2px]" : "w-full h-[1px]"} bg-white`}
                  ></div>
                </div>

                <p
                  className={`${
                    isActive
                      ? "font-medium text-2xl leading-9 mx-15 mb-10"
                      : "font-light leading-9 mt-9 mb-10"
                  }`}
                >
                  {value.text}
                </p>
                <div className="flex space-x-3 items-center">
                    {
                      isActive && (<div className="w-[40%] h-[2px] bg-white"></div>)
                    }
                    <p className={`font-semibold mt-auto ${isActive && "text-lg" }`}>{value.name}</p>
                </div>
                
              </div>

              {isActive && (
                <div className="mt-10 flex space-x-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`h-2 cursor-pointer transition-all duration-300 ${
                        activeIndex !== i ? "bg-gray w-10" : "bg-primary w-20"
                      }`}
                    ></button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
