import React from 'react';

const menuItems = [
  { name: "Large Heineken", price: "6.00" },
  { name: "Small Heineken", price: "3.00" },
  { name: "Heineken Can", price: "4.00" },
  { name: "Large Stella", price: "6.00" },
  { name: "Small Stella", price: "3.00" },
  { name: "Stella Can", price: "4.00" },
  { name: "Corona", price: "4.00" },
  { name: "Large Budweiser", price: "6.00" },
  { name: "Small Budweiser", price: "3.00" },
  { name: "Smirnoff Ice", price: "4.00" },
  { name: "Foster", price: "4.00" },
  { name: "Strongbow", price: "4.00" },
  { name: "Desperado", price: "4.00" },
  { name: "Carling", price: "4.00" },
  { name: "Jack Daniels Can", price: "5.00" },
  { name: "Koppenberg", price: "5.00" },
  { name: "Bulmers", price: "5.00" }
];


const MenuItem = ({ name, price, description }) => (
  <div className="mb-10 group">
    <div className="flex items-baseline gap-2">
      <h3 className="text-black dark:text-white font-bold tracking-widest whitespace-nowrap uppercase">
        {name}
      </h3>
      {/* Decorative Line */}
      <div className="flex-1 border-b border-gray-300 dark:border-gray-600 mb-1 opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <span className="text-black dark:text-white font-medium tabular-nums">
        £{price}
      </span>
    </div>
  </div>
);

const MenuSection = () => {
  return (
    <section id='menu' className="bg-white scroll-m-20 dark:bg-black min-h-screen flex flex-col lg:flex-row transition-colors duration-500">
      {/* Left Content Area */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-16 sm:px-16 lg:px-24">
        <h2 className="text-black dark:text-white text-xl md:text-2xl font-semibold tracking-[0.2em] mb-16 uppercase">
          BEERS
        </h2>

        <div className="max-w-xl">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Right Image Area */}
      <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative">
        <img
          src="n2.jpg"
          alt="Cocktails on table"
          loading="lazy"
          className="w-full h-full object-cover"
        />

      </div>
    </section>
  );
};

export default MenuSection;
