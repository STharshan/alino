"use client";
import React, { useState, useEffect } from "react";
import { IoStar } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const menuItems = [
  {
    id: 1,
    name: "Jollof Rice",
    description:
      "Traditional West African rice dish with aromatic spices, tomatoes, and your choice of chicken or beef",
    price: "£12.99",
    category: "Main Dishes",
    image: "/menu/jellof.png",
    spicy: true,
    popular: true,
  },
  {
    id: 2,
    name: "Suya Skewers",
    description:
      "Grilled meat skewers marinated in traditional Nigerian spice blend, served with fresh vegetables",
    price: "£8.99",
    category: "Appetizers",
    image: "/menu/taba.jpeg",
    spicy: true,
  },
  {
    id: 3,
    name: "Injera with Doro Wat",
    description:
      "Ethiopian sourdough flatbread served with spicy chicken stew and hard-boiled eggs",
    price: "£14.99",
    category: "Main Dishes",
    image: "/menu/chicken.jpeg",
    spicy: true,
    popular: true,
  },
];

const MenuSection = () => {
  const [selectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
      offset: 100,
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
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }} // ✅ base background color
    >
      {/* Gradient overlay same as Banner */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#007A4D]/10 via-transparent to-[#FFB612]/10" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h3
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-heading)", color: "#007A4D" }}
          >
            Top List
          </h3>
          <p
            className="text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#000000" }}
          >
            A blend of cultures and tastes from across Africa, bringing together
            the best and most authentic flavors with chefs from all backgrounds.
          </p>
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="rounded-xl overflow-hidden cursor-pointer bg-white
                         border border-gray-200
                         transform transition duration-500 ease-out
                         hover:-translate-y-3 
                         hover:shadow-[0_0_30px_#007A4D]
                         active:shadow-[0_0_30px_#FFB612]"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover transition duration-500 ease-out hover:scale-110"
                />
                <div className="absolute top-3 right-3 flex gap-2 z-10">
                  {item.popular && (
                    <span
                      className="flex items-center px-2 py-1 rounded text-xs font-semibold shadow-lg"
                      style={{ backgroundColor: "#FFB612", color: "#000000" }}
                    >
                      <IoStar className="mr-1 h-3 w-3" /> Popular
                    </span>
                  )}
                  {item.spicy && (
                    <span
                      className="px-2 py-1 rounded text-xs font-semibold shadow-lg"
                      style={{ backgroundColor: "#007A4D", color: "#FFFFFF" }}
                    >
                      🌶️ Spicy
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4
                    className="text-xl font-semibold"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "#000000",
                    }}
                  >
                    {item.name}
                  </h4>
                  <span
                    className="text-lg font-bold"
                    style={{ color: "#007A4D" }}
                  >
                    {item.price}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#4B5563" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
