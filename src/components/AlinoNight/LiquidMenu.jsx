import React from "react";

const cocktails = [
  {
    name: "Trophy",
    price: "8.00"
  },
  {
    name: "Star",
    price: "6.00"
  },
  {
    name: "Goldberg",
    price: "6.00"
  },
  {
    name: "Palm Wine",
    price: "6.00"
  },
  {
    name: "Large Guinness",
    price: "10.00"
  },
  {
    name: "Small Guinness",
    price: "5.00"
  },
  {
    name: "Tusker",
    price: "6.00"
  }
];


const CocktailMenu = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-20 px-4 md:px-16 transition-colors duration-500">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Left Image */}
        <div className="w-full lg:w-1/4 mt-20">
          <img
            src="n2.png"
            alt="Cheers"
            loading="lazy"
            className="w-full h-120 rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Middle Image */}
        <div className="w-full lg:w-1/4">
          <img
            src="n4.jpg"
            alt="Cocktails"
            loading="lazy"
            className="w-full h-120 rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Menu */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <h2 className="text-black dark:text-white text-xl md:text-2xl font-semibold tracking-[0.2em] mb-5 uppercase">
            AFRICAN BEERS
          </h2>
          {cocktails.map((item) => (
            <div
              key={item.name}
              className="border-b uppercase border-gray-300 dark:border-gray-700 pb-4 transition-colors duration-500"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <span className="text-lg font-semibold">£{item.price}</span>
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
