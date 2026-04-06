import React from 'react';

const menuItems = [
  { name: "Courvoisier", single: "4.00", double: "8.00" },
  { name: "Hennessy", single: "4.00", double: "8.00" },
  { name: "Glenfiddich", single: "4.00", double: "8.00" },
  { name: "Black Label", single: "4.00", double: "8.00" },
  { name: "Famous Grouse", single: "4.00", double: "8.00" },
  { name: "Jack Daniels", single: "4.00", double: "8.00" },
  { name: "Captain Morgan Original", single: "4.00", double: "8.00" }
];


// Component for a single menu item
const MenuItem = ({ name, single, double }) => (
  <div className="mb-8 group">
    <div className="flex flex-col sm:flex-row items-start sm:items-baseline gap-2">
      {/* Item Name */}
      <h3 className="text-black dark:text-white font-bold tracking-widest whitespace-nowrap uppercase">
        {name}
      </h3>

      {/* Short Decorative Line */}
      <div className="flex-1 border-b border-gray-300 dark:border-gray-600 mb-1 opacity-50 max-w-[100px] group-hover:opacity-100 transition-opacity"></div>

      {/* Price Columns */}
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

const MenuSection = () => {
  return (
    <section
      id="menu"
      className="bg-white scroll-m-20 dark:bg-black min-h-screen flex flex-col lg:flex-row transition-colors duration-500"
    >
      {/* Left Content Area */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-16 sm:px-16 lg:px-24">
        <h2 className="text-black dark:text-white text-xl md:text-2xl font-semibold tracking-[0.2em] mb-2 uppercase">
          SPIRIT SHOTS
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

      {/* Right Image Area */}
      <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative">
        <img
          src="n5.png"
          alt="Cocktails on table"
          loading="lazy"
          className="w-full h-full object-cover"
        />

      </div>
    </section>
  );
};

export default MenuSection;
