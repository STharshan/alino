import React from "react";

const DelightfulExperience = () => {
  return (
    <section
      id="aboutus"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#007A4D]/10 via-transparent to-[#FFB612]/10" />

      <div className="container mx-auto px-4 lg:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Image */}
          <div data-aos="fade-right" className="flex justify-center relative group">
            <img
              src="/images/seafood-cooking.jpg"
              alt="Cooking seafood"
              className="rounded-xl shadow-xl w-full h-[400px] object-cover transform transition duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2 hover:shadow-[0_0_30px_#007A4D] active:shadow-[0_0_30px_#FFB612]"
            />
          </div>

          {/* Middle Content */}
          <div className="text-center space-y-6 px-4" data-aos="fade-up">
            <p
              className="uppercase tracking-widest text-sm font-semibold"
              style={{ color: "#007A4D" }}
            >
              About Us
            </p>

            <h2
              className="text-4xl lg:text-5xl font-bold leading-snug"
              style={{ fontFamily: "var(--font-heading)", color: "#000000" }}
            >
              A Decade of <br /> Passion & Flavor
            </h2>

            <p
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: "#000000" }}
            >
              For over a decade,{" "}
              <span style={{ fontWeight: 600 }}>Alino African Restaurant</span>{" "}
              has been Leicester's destination for authentic African cuisine.
              Our story began with a unique blend of passions—Alino's love for
              music and entertainment from his years traveling the country as a
              DJ, and his wife's deep passion for the culinary arts.
            </p>

            <p
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: "#000000" }}
            >
              Together, they created something extraordinary: a dining
              experience that brings the rhythm and soul of Africa to every
              plate. We import our ingredients directly from the motherland,
              ensuring the most authentic and vibrant flavors in every dish.
            </p>

            <p
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: "#000000" }}
            >
              Our cuisine is a celebration—a blend of cultures and tastes from
              across Africa, crafted by chefs from diverse backgrounds who share
              one vision: to bring you the best and most authentic African
              dining experience.
            </p>

            {/* Founder Signature */}
            <div className="pt-4">
              <p
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-heading)", color: "#007A4D" }}
              >
                Josefine
              </p>
              <p
                className="uppercase tracking-widest text-xs mt-2"
                style={{ color: "#4B5563" }}
              >
                JOSEFINE HOELLER /{" "}
                <span style={{ color: "#FFB612" }}>Founder</span>
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div data-aos="fade-left" className="flex justify-center relative group">
            <img
              src="/images/crabs.jpg"
              alt="Seafood dish"
              className="rounded-xl shadow-xl w-full h-[400px] object-cover transform transition duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2 hover:shadow-[0_0_30px_#007A4D] active:shadow-[0_0_30px_#FFB612]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DelightfulExperience;
