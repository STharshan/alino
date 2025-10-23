"use client";
import React, { useEffect } from "react";
import BannerImg from "../../assets/2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
      easing: "ease-in-out",
    });

    const refreshTimer = setTimeout(() => {
      AOS.refreshHard();
    }, 300);

    window.addEventListener("resize", AOS.refresh);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener("resize", AOS.refresh);
    };
  }, []);

  return (
    <section
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }} // ✅ saved background color
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#007A4D]/10 via-transparent to-[#FFB612]/10" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image section */}
          <div
            className="flex justify-center items-center"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <img
              src={BannerImg}
              alt="Delicious food on table"
              className="rounded-2xl w-full max-w-lg shadow-xl
                         transform transition duration-500 ease-out
                         hover:scale-105 hover:shadow-[0_0_35px_#007A4D]
                         active:shadow-[0_0_35px_#FFB612]"
            />
          </div>

          {/* Text section */}
          <div
            className="flex flex-col justify-center text-center md:text-left"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h1
              className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6"
              style={{
                fontFamily: "var(--font-heading)",
                color: "#000000", // black text
              }}
            >
              Food Is Always{" "}
              <span style={{ color: "#007A4D" }}>Good</span>
            </h1>

            <p
              className="text-lg lg:text-xl leading-relaxed mb-8 max-w-xl mx-auto md:mx-0"
              style={{ color: "#4B5563" }} // neutral grey
            >
              At our restaurant, every dish is crafted with fresh ingredients,
              bold flavors, and a touch of love. From classic favorites to
              unique specialties, we believe great food brings people together.
              Sit back, relax, and enjoy a meal that’s made to delight your
              taste buds.
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <Link to="/menu">
                <button
                  className="px-8 py-4 rounded-full font-semibold text-lg shadow-lg
                             hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundColor: "#007A4D", // green button
                    color: "#FFFFFF",
                  }}
                >
                  Explore Menu
                </button>
              </Link>
              <Link to="/about">
                <button
                  className="px-8 py-4 rounded-full font-semibold text-lg shadow-lg
                             hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundColor: "#FFB612", // yellow button
                    color: "#000000",
                  }}
                >
                  Our Story
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
