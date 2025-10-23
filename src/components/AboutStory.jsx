import React, { useEffect } from "react";
import { IoMusicalNotes, IoHeart, IoRestaurant } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutStory = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section
      id="aboutstory"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }} // ✅ white background
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#007A4D]/10 via-transparent to-[#FFB612]/10" />

      <div className="container mx-auto px-6 lg:px-20 max-w-6xl relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "#000000" }}
          >
            About <span style={{ color: "#007A4D" }}>Our Story</span>
          </h2>
          <p
            className="text-lg lg:text-xl"
            style={{ color: "#4B5563" }}
          >
            A Decade of Passion &amp; Flavor
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8" data-aos="fade-right">
            <p
              className="flex items-start gap-4 text-lg lg:text-xl leading-relaxed"
              style={{ color: "#000000" }}
            >
              <IoMusicalNotes
                className="h-7 w-7 flex-shrink-0 mt-1"
                style={{ color: "#FFB612" }}
              />
              <span>
                For over a decade,{" "}
                <span style={{ color: "#007A4D", fontWeight: "600" }}>
                  Alino African Restaurant
                </span>{" "}
                has been Leicester's destination for authentic African cuisine.
                Our story began with Alino’s love for music and entertainment,
                traveling as a DJ, and his wife’s deep passion for the culinary
                arts.
              </span>
            </p>

            <p
              className="flex items-start gap-4 text-lg lg:text-xl leading-relaxed"
              style={{ color: "#000000" }}
            >
              <IoHeart
                className="h-7 w-7 flex-shrink-0 mt-1"
                style={{ color: "#007A4D" }}
              />
              <span>
                Together, they created a unique dining experience that brings
                the rhythm and soul of Africa to every plate. With ingredients
                imported directly from the motherland, we ensure vibrant and
                authentic flavors in every dish.
              </span>
            </p>

            <p
              className="flex items-start gap-4 text-lg lg:text-xl leading-relaxed"
              style={{ color: "#000000" }}
            >
              <IoRestaurant
                className="h-7 w-7 flex-shrink-0 mt-1"
                style={{ color: "#FFB612" }}
              />
              <span>
                Our cuisine is a celebration — a fusion of cultures and tastes
                from across Africa, crafted by chefs who share one vision: to
                bring you the most authentic African dining experience.
              </span>
            </p>
          </div>

          {/* Image */}
          <div
            className="flex justify-center relative group"
            data-aos="fade-left"
          >
            <img
              src="/image.png"
              alt="About Alino African Restaurant"
              className="rounded-xl shadow-xl object-cover w-full h-[420px] transform transition duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2 hover:shadow-[0_0_30px_#007A4D] active:shadow-[0_0_30px_#FFB612]"
            />
            <div className="absolute inset-0 rounded-xl bg-black opacity-0 group-hover:opacity-10 transition duration-500 ease-out" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
