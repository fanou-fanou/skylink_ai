"use client";

import Image from "next/image";
import { testimonials } from "@/lib/data";
import quote from "@/assets/icons/quote.svg";
import { useState, useRef, useEffect } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (cardRefs.current[activeIndex]) {
      cardRefs.current[activeIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  return (
    <section className="relative py-30" id="testimonials">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-primary font-medium text-lg md:text-2xl">Témoignages clients</h2>
        <p className="font-medium text-3xl md:text-5xl leading-10 md:leading-20 mt-2">
          Ils ont transformé leur <br /> business avec nous
        </p>
      </div>

      {/* MOBILE */}
      <div className="block md:hidden mt-10 px-4">
        <div className="relative text-white px-6 py-7 flex flex-col bg-primary min-h-[420px]">
          <Image src={quote} alt="quote" className="absolute right-6 top-8 w-[60px]" />
          <div className="w-20 h-20 absolute -left-3 top-7 overflow-hidden">
            <Image
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              className="object-cover w-full h-full border-4 border-secondary"
            />
          </div>
          <div className="h-22 flex items-center ml-14">
            <div className="w-[30%] h-[2px] bg-white"></div>
          </div>
          <p className="font-medium text-lg leading-8 mx-12 mb-8">
            {testimonials[activeIndex].text}
          </p>
          <div className="flex space-x-3 items-center">
            <div className="w-[30%] h-[2px] bg-white"></div>
            <p className="font-semibold mt-auto">{testimonials[activeIndex].name}</p>
          </div>
        </div>

        <div className="mt-6 flex gap-2 justify-center">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 transition-all duration-300 ${activeIndex !== i ? "bg-gray w-8" : "bg-primary w-12"
                }`}
            ></button>
          ))}
        </div>
      </div>

      {/* DESKTOP + MEDIUM */}
      <div
        className="hidden md:flex relative items-end gap-8 pl-9 mt-20 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {testimonials.map((value, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="flex-shrink-0"
            >
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
                    alt={value.name}
                    className={`object-cover w-25 h-25 ${isActive ? "border-4 border-secondary" : ""}`}
                  />
                </div>
                <div className="h-22 flex items-center ml-15">
                  <div
                    className={`${isActive ? "w-[30%] h-[2px]" : "w-full h-[1px]"} bg-white`}
                  ></div>
                </div>
                <p
                  className={`${isActive
                      ? "font-medium text-2xl leading-9 mx-15 mb-10"
                      : "font-light leading-9 mt-9 mb-10"
                    }`}
                >
                  {value.text}
                </p>
                <div className="flex space-x-3 items-center">
                  {isActive && <div className="w-[40%] h-[2px] bg-white"></div>}
                  <p className={`font-semibold mt-auto ${isActive && "text-lg"}`}>
                    {value.name}
                  </p>
                </div>
              </div>

              {isActive && (
                <div className="mt-10 flex space-x-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`h-2 transition-all duration-300 ${activeIndex !== i ? "bg-gray w-10" : "bg-primary w-20"
                        }`}
                    ></button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Style pour cacher la scrollbar */}
      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
