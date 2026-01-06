import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Specialties = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // animate on scroll down & up
    });
  }, []);

  const items = [
    {
      img: "/food2.jpeg",
      title: "Okra Soup",
      desc: "Ladies finger or bhindi. This is an incredibly rich source health benefiting. Very delicious. Served with choice of your side",
      price: "£13.00",
    },
    {
      img: "/food1.jpeg",
      title: "Egussi with Assorted Meat",
      desc: "Special melon seeds cooked with selected African spices. Very delicious. Served with choice of your side.",
      price: "£14.00",
    },
    {
      img: "/menu/fish-rice.png",
      title: "Fried Rice with Fish",
      desc: "Savory fried rice with tender fish, offering a delightful blend of flavors in every bite.",
      price: "£14.00",
    },
  ];

  return (
    <section id="chefs-specialities" className="py-20 relative overflow-hidden bg-white dark:bg-black transition-colors duration-700">
      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-r from-[#007A4D]/10 via-transparent to-[#FFB612]/10 " />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10 text-center">
        {/* Section Heading */}
        <p
          className="uppercase tracking-[0.2em] text-sm text-[#007A4D] dark:text-[#FFD700]"
          data-aos="fade-up"
        >
          Recommendations
        </p>
        <h2
          className="text-3xl lg:text-5xl font-bold mt-2 text-black dark:text-white"
          style={{ fontFamily: "var(--font-heading)" }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Chef’s Specialities
        </h2>

        {/* Grid Items */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="text-center group rounded-2xl p-6 bg-white dark:bg-[#111A1D] shadow-lg
                         transition duration-500 ease-out
                         hover:-translate-y-3
                         hover:shadow-[0_0_30px_#007A4D]
                         active:shadow-[0_0_30px_#FFB612]"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              {/* Dish Image */}
              <div className="flex justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-64 h-64 object-cover rounded-full shadow-md
                             transition duration-500 ease-out
                             group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3
                className="mt-6 text-xl font-semibold text-black dark:text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {item.desc}
              </p>

              {/* Price */}
              <p className="mt-4 text-lg font-bold text-[#FFB612] dark:text-[#FFD700]">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
