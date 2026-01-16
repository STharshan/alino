// CocktailMenu.jsx
import React from "react";

const cocktails = [
  {
    name: "CLOVER CLUB",
    price: "$25.00",
    description:
      "lemongrass infused russian standard platinum vodka, lime, jasmin green tea & matcha soda",
  },
  {
    name: "VIEUX CARRÉ",
    price: "$35.00",
    description:
      "dickel rye whiskey, cognac, sweet vermouth, benedictine liqueur, aromatic bitters, lemon",
  },
  {
    name: "WHITE LADY",
    price: "$45.00",
    description:
      "orange liqueur, lemon juice, egg white, lemon peel powder, ice cubes with lemongrass & gin",
  },
  {
    name: "OLD FASHIONED",
    price: "$15.00",
    description:
      "sugar, angostura bitters, water, bourbon / rye whiskey, ice cubes & fresh orange twists",
  },
];

const CocktailMenu = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-20 px-4 md:px-16 transition-colors duration-500">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Left Image */}
        <div className="w-full lg:w-1/4 mt-20">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=600"
            alt="Cheers"
            className="w-full h-120 rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Middle Image */}
        <div className="w-full lg:w-1/4">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=600"
            alt="Cocktails"
            className="w-full h-120 rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Menu */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          {cocktails.map((item) => (
            <div
              key={item.name}
              className="border-b border-gray-300 dark:border-gray-700 pb-4 transition-colors duration-500"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <span className="text-lg font-semibold">{item.price}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CocktailMenu;
