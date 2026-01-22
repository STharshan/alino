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
                    src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1200"
                    alt="Cocktails on table"
                    className="w-full h-full object-cover"
                />

                {/* Floating Side Action Icons */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                    <button className="bg-[#ff2d55] p-3 text-white shadow-md hover:opacity-90 transition-opacity">
                        <span className="sr-only">Social</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                    </button>
                    <button className="bg-white dark:bg-gray-800 p-3 text-black dark:text-white shadow-md hover:opacity-90 transition-opacity">
                        <span className="sr-only">Cart</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default JuiceSection;
