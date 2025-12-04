import React, { useEffect } from "react";
import { FaFish, FaStore, FaUtensils } from "react-icons/fa";
import { GiCrab } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

const SeafoodSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
      easing: "ease-in-out",
    });

    const refreshTimer = setTimeout(() => AOS.refreshHard(), 300);
    window.addEventListener("resize", AOS.refresh);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener("resize", AOS.refresh);
    };
  }, []);

  return (
    <section className="py-16 relative overflow-hidden bg-white dark:bg-black transition-colors duration-700">
      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-r from-[#007A4D]/10 via-transparent to-[#FFB612]/10 " />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div data-aos="fade-right">
            <p
              className="uppercase tracking-widest font-semibold flex items-center gap-2 text-[#007A4D] "
              data-aos="fade-up"
            >
              <FaFish /> Daily Fresh Kitchen & Bar
            </p>

            <h2
              className="mt-4 text-3xl lg:text-5xl font-bold leading-tight relative inline-block text-black dark:text-white"
              style={{ fontFamily: "var(--font-heading)" }}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Authentic African Flavours & Lively Atmosphere
              <span
                className="block w-24 h-[3px] mt-2 animate-pulse"
                style={{ backgroundColor: "#FFB612" }}
              />
            </h2>

            <p
              className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Embark on a journey through Africa’s rich culinary heritage! Whether you’re here for vibrant flavours, soulful music, or warm hospitality — every dish is crafted with heart and tradition.
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div
                className="flex items-start gap-3"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <FaUtensils className="text-3xl text-[#007A4D] " />
                <p className="text-gray-700 dark:text-gray-300">
                  Indulge in the True Taste of Africa.
                </p>
              </div>
              <div
                className="flex items-start gap-3"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <GiCrab className="text-3xl text-[#007A4D]  " />
                <p className="text-gray-700 dark:text-gray-300">
                  Experience the Spirit of the Continent on Your Plate.
                </p>
              </div>
              <div
                className="flex items-start gap-3"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <FaStore className="text-3xl text-[#007A4D] " />
                <p className="text-gray-700 dark:text-gray-300">
                  Savor Bold Spices, Rich Aromas & Authentic Recipes.
                </p>
              </div>
              <div
                className="flex items-start gap-3"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <FaFish className="text-3xl text-[#007A4D] " />
                <p className="text-gray-700 dark:text-gray-300">
                  A Celebration of African Culture, Cuisine & Community.
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="mt-8" data-aos="zoom-in" data-aos-delay="800">
              <button className="relative px-6 py-3 font-semibold rounded-md shadow-lg hover:scale-105 transition-transform duration-300 bg-[#007A4D] text-white dark:bg-[#1C3B45] dark:text-[#FFD700]">
                Read More
                <span
                  className="absolute left-0 bottom-0 h-0.5 w-full animate-ping"
                  style={{ backgroundColor: "#FFB612" }}
                />
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div
            className="relative flex justify-center items-center"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img
              src="/alino.jpg"
              alt="Dining Experience"
              className="rounded-2xl shadow-lg w-full h-[450px] object-cover"
            />
            {/* Slow rotating seafood plate */}
            <img
              src="/rotto.png"
              alt="Seafood Plate"
              className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full"
              style={{
                animation: "slowspin 20s linear infinite",
              }}
            />
          </div>
        </div>
      </div>

      {/* Keyframes for slow spin */}
      <style>
        {`
          @keyframes slowspin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </section>
  );
};

export default SeafoodSection;
