import React from 'react';

// Menu items with single and double prices
const menuItems = [
  { name: "Red", single: "£8", double: "£25" },
  { name: "White", single: "£8", double: "£25" },
  { name: "Rose", single: "£8", double: "£25" },
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
          <span className="text-xs font-semibold uppercase">Glass</span>
          <span>{single}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold uppercase">Bottle</span>
          <span>{double}</span>
        </div>
      </div>
    </div>
  </div>
);

const WineSection = () => {
  return (
    <section
      id="menu"
      className="bg-white scroll-m-20 mt-10 dark:bg-black min-h-screen flex flex-col lg:flex-row transition-colors duration-500"
    >
      {/* Left Content Area */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-16 sm:px-16 lg:px-24">
        <h2 className="text-black dark:text-white text-xl md:text-2xl font-semibold tracking-[0.2em] mb-2 uppercase">
          WINE
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          Glass - £8 | Bottle - £25
        </p>

        <div className="max-w-xl">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Right Image Area */}
      <div className="w-full lg:w-1/2 h-[400px] mt-20 relative">
        <img
          src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1200"
          alt="Cocktails on table"
          className="w-full h-full object-cover"
        />

      </div>
    </section>
  );
};

export default WineSection;
