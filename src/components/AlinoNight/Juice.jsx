import React from 'react';

const menuItems = [
    {
        "name": "Fanta",
        "price": "£4.00"
    },
    {
        "name": "Supermalt",
        "price": "£3.00",
    },
    {
        "name": "Malta Guinness",
        "price": "£3.00",
    }
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
                {price}
            </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 leading-relaxed max-w-md">
            {description}
        </p>
    </div>
);

const JuiceSection = () => {
    return (
        <section id='menu' className="bg-white scroll-m-20 dark:bg-black min-h-screen flex flex-col lg:flex-row transition-colors duration-500">
            {/* Left Content Area */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-16 sm:px-16 lg:px-24">
                <h2 className="text-black dark:text-white text-xl md:text-2xl font-semibold tracking-[0.2em] mb-16 uppercase">
                    AFRICAN JUICES
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
                    src="n2.png"
                    alt="Cocktails on table"
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
};

export default JuiceSection;
