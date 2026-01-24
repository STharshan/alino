import React from "react";

// Menu items with single and double prices
const menuItems = [
  {
    name: "Sambuca",
    single: 4.00,
    double: 8.00
  },
  {
    name: "Smirnoff",
    single: 4.00,
    double: 8.00
  },
  {
    name: "Ciroc",
    single: 4.00,
    double: 8.00
  },
  {
    name: "Bacardi",
    single: 4.00,
    double: 8.00
  },
  {
    name: "Gordons",
    single: 4.00,
    double: 8.00
  },
  {
    name: "Grey Goose",
    single: 4.00,
    double: 8.00
  },
  {
    name: "Belvedere",
    single: 4.00,
    double: 8.00
  },
  {
    name: "Absolut",
    single: 4.00,
    double: 8.00
  }
];



// Component for a single menu item
const MenuItem = ({ name, single, double }) => (
  <div className="mb-8 group">
    <div className="flex flex-col sm:flex-row items-start sm:items-baseline gap-2">
      {/* Item Name */}
      <h3 className="text-black dark:text-white font-bold tracking-widest whitespace-nowrap uppercase">
        {name}
      </h3>

      {/* Decorative Line */}
      <div className="flex-1 border-b border-gray-300 dark:border-gray-600 mb-1 opacity-50 max-w-[100px] group-hover:opacity-100 transition-opacity" />

      {/* Prices */}
      <div className="flex gap-4 mt-1 sm:mt-0 text-black dark:text-white font-medium tabular-nums">
        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold uppercase">Single</span>
          <span>£{single}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold uppercase">Double</span>
          <span>£{double}</span>
        </div>
      </div>
    </div>
  </div>
);

const VodkaSection = () => {
  return (
    <section
      id="menu"
      className="bg-white mt-20 dark:bg-black min-h-screen flex flex-col lg:flex-row transition-colors duration-500"
    >
      {/* LEFT IMAGE SECTION */}
      <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative">
        <img
          src="n4.jpg"
          alt="Cocktails on table"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT CONTENT SECTION */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-16 sm:px-16 lg:px-24">
        <h2 className="text-black dark:text-white text-xl md:text-2xl font-semibold tracking-[0.2em] mb-2 uppercase">
          VODKA
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-12">
          Single - £4 | Double - £8
        </p>

        <div className="max-w-xl">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VodkaSection;
