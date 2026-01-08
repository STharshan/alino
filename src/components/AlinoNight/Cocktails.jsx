"use client";
import React from "react";

const cocktails = [
  {
    name: "Take Five",
    price: "20$",
    image: "/food1.jpeg",
  },
  {
    name: "Take Five",
    price: "20$",
    image: "/food2.jpeg",
  },
  {
    name: "Take Five",
    price: "20$",
    image: "/rotto.png",
  },
];

export default function Cocktails() {
  return (
    <section className="relative bg-black min-h-screen px-6 md:px-16 py-20">
      
      {/* Background Title */}
      <h1 className="absolute top-12 left-6 md:left-16 text-[60px] md:text-[100px] font-serif tracking-widest text-white/10 uppercase leading-none">
        Groove <br /> cocktails
      </h1>

      {/* Drinks */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-32 text-center">
        {cocktails.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.image}
              alt={item.name}
              className="h-64 md:h-72 object-contain mb-8"
            />

            <h3 className="text-white font-serif text-xl tracking-wide">
              {item.name}
            </h3>

            <p className="text-white font-serif text-2xl mt-1">
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
