"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUtensils, FaMusic } from "react-icons/fa";
import { MdFreeBreakfast } from "react-icons/md";

export default function DelightfulExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const services = [
    {
      icon: <MdFreeBreakfast className="text-[#007A4D]" />,
      video: "/v3.mp4",
      title: "A Decade of Passion & Flavor",
      description:
        "For over a decade, Alino African Restaurant has been Leicester's destination for authentic African cuisine. Our story began with a unique blend of passions—Alino's love for music and entertainment from his years traveling the country as a DJ, and his wife's deep passion for the culinary arts.",
    },
    {
      icon: <FaUtensils className="text-[#007A4D]" />,
      video: "/v1.mp4",
      title: "Creating an Extraordinary Dining Experience",
      description:
        "Together, they created something extraordinary: a dining experience that brings the rhythm and soul of Africa to every plate. We import our ingredients directly from the motherland, ensuring the most authentic and vibrant flavors in every dish.",
    },
    {
      icon: <FaMusic className="text-[#007A4D]" />,
      video: "/v2.mp4",
      title: "A Celebration of African Cultures",
      description:
        "Our cuisine is a celebration—a blend of cultures and tastes from across Africa, crafted by chefs from diverse backgrounds who share one vision: to bring you the best and most authentic African dining experience.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true, offset: 80 });
  }, []);

  useEffect(() => {
    if (!hovered) {
      const timer = setInterval(() => {
        setActiveIndex((p) => (p + 1) % services.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [hovered]);

  const getCardStyle = (index) => {
    const total = services.length;
    const offset = (index - activeIndex + total) % total;
    switch (offset) {
      case 0:
        return "scale-100 opacity-100 z-30";
      case 1:
        return "translate-x-[70%] scale-95 opacity-70 z-20";
      case total - 1:
        return "translate-x-[-70%] scale-95 opacity-70 z-20";
      default:
        return "opacity-0 scale-90 z-0";
    }
  };

  return (
    <section id="about" className="scroll-m-10 relative py-20 px-4 md:px-12 overflow-visible transition-colors duration-700 bg-white dark:bg-black">
      <div className="absolute inset-0 pointer-events-none bg-linear-to-r from-[#007A4D]/10 via-transparent to-[#FFB612]/10 " />
      <div className="max-w-7xl mx-auto text-center font-serif relative z-10">
        {/* Heading */}
        <span
          data-aos="fade-down"
          className="inline-block text-sm font-medium px-4 py-1 rounded-full mb-4 bg-[#007A4D]/20 text-[#007A4D] dark:bg-[#007A4D]/40 dark:text-[#00FF8C]"
        >
          About Us
        </span>

        <h2
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-bold mb-4 text-[#111111] dark:text-white"
        >
          A Decade of Passion & Flavor
        </h2>

        {/* Card Slider */}
        <div
          className="relative flex items-center justify-center h-[520px] overflow-visible"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {services.map((s, i) => (
            <div
              key={i}
              className={`absolute top-0 left-0 right-0 mx-auto w-[90%] sm:w-[60%] md:w-[420px] transition-all duration-800 ease-[cubic-bezier(0.77,0,0.175,1)] transform ${getCardStyle(
                i
              )}`}
            >
              <div className="rounded-2xl overflow-hidden transition-all duration-500 h-[520px] flex flex-col border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_40px_rgba(221,182,78,0.3)] dark:hover:shadow-[0_12px_40px_rgba(255,215,0,0.25)]">
                {/* Video Header */}
                <div className="relative h-60 overflow-hidden">
                  <video
                    src={s.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 text-xs font-medium px-3 py-1 rounded-md flex items-center gap-1 shadow-sm bg-white text-[#007A4D] dark:bg-gray-800 dark:text-[#00FF8C]">
                    {s.icon}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 text-left flex flex-col justify-between grow">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#111111] dark:text-white">
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#333333] dark:text-gray-300">
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={() =>
              setActiveIndex((prev) => (prev - 1 + services.length) % services.length)
            }
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full shadow-md text-lg font-bold transition-all duration-300 hover:scale-110 bg-white text-black bg-opacity-80 dark:bg-gray-800 dark:text-white"
          >
            ‹
          </button>
          <button
            onClick={() => setActiveIndex((prev) => (prev + 1) % services.length)}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full shadow-md text-lg font-bold transition-all duration-300 hover:scale-110 bg-white text-black bg-opacity-80 dark:bg-gray-800 dark:text-white"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
