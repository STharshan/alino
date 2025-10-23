import React, { useEffect } from "react";
import { FaFish, FaStore, FaUtensils } from "react-icons/fa";
import { GiCrab } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

const SeafoodSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false,    // animate every scroll
      mirror: true,   // animate when scrolling back
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
    <section
      className="py-16 relative overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#007A4D]/10 via-transparent to-[#FFB612]/10" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div data-aos="fade-right">
            <p
              className="uppercase tracking-widest font-semibold flex items-center gap-2"
              style={{ color: "#007A4D" }}
              data-aos="fade-up"
            >
              <FaFish /> Daily Fresh Kitchen
            </p>

            <h2
              className="mt-4 text-3xl lg:text-5xl font-bold leading-tight relative inline-block"
              style={{ color: "#000000", fontFamily: "var(--font-heading)" }}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Finest Seafood & Cozy Atmosphere
              <span
                className="block w-24 h-[3px] mt-2 animate-pulse"
                style={{ backgroundColor: "#FFB612" }}
              />
            </h2>

            <p
              className="mt-6 text-lg leading-relaxed"
              style={{ color: "#4B5563" }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Embark on a journey towards excellence with us! Whether you're
              seeking innovative solutions or expert guidance, our seafood is
              always served fresh with authentic flavors.
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div
                className="flex items-start gap-3"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <FaUtensils className="text-3xl" style={{ color: "#007A4D" }} />
                <p className="text-gray-700">
                  Indulge in an Abundance of Fresh Seafood Delights.
                </p>
              </div>
              <div
                className="flex items-start gap-3"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <GiCrab className="text-3xl" style={{ color: "#FFB612" }} />
                <p className="text-gray-700">
                  Experience the Bounty of the Ocean on Your Plate.
                </p>
              </div>
              <div
                className="flex items-start gap-3"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <FaStore className="text-3xl" style={{ color: "#007A4D" }} />
                <p className="text-gray-700">
                  Savor the Taste of the Coastline in Every Bite.
                </p>
              </div>
              <div
                className="flex items-start gap-3"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <FaFish className="text-3xl" style={{ color: "#FFB612" }} />
                <p className="text-gray-700">
                  A Culinary Celebration of the Finest Seafood.
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="mt-8" data-aos="zoom-in" data-aos-delay="800">
              <button
                className="relative px-6 py-3 font-semibold rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
                style={{ backgroundColor: "#007A4D", color: "#FFFFFF" }}
              >
                Read More
                <span
                  className="absolute left-0 bottom-0 h-[2px] w-full animate-ping"
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
              src="/new.png"
              alt="Dining Experience"
              className="rounded-2xl shadow-lg w-full h-[450px] object-cover"
            />
            {/* Slow rotating seafood plate */}
            <img
              src="/plate.png"
              alt="Seafood Plate"
              className="absolute bottom-[-40px] right-[-40px] w-48 h-48 rounded-full"
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
