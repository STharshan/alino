import React from 'react';
import { Link } from 'react-router-dom';

const LiquidCaterersHero = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white min-h-screen flex items-center py-16 px-6 md:px-12 lg:px-20 transition-colors duration-500">
      <div className="absolute inset-0 pointer-events-none bg-linear-to-r from-[#007A4D]/10 via-transparent to-[#FFB612]/10 " />
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Content: Text and CTA */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-wide uppercase">
              We are not just <br className="hidden lg:block" />
              bartenders, we are <br className="hidden lg:block" />
              liquid caterers
            </h1>

            <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
              At Alino, the bar is the heartbeat of the night. Infused with African spirit and global flair, our liquid creations fuel the music, the energy, and the unforgettable moments. Expect bold flavours, flawless pours, and a nightlife experience that keeps the vibe alive till late.
            </p>
            <div className="pt-4">
              <Link
                to="/alino-night#menu"
                className="border border-black/40 dark:border-white/40 px-10 py-3 uppercase tracking-widest text-xs font-semibold 
    hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-[#050c18] transition-all duration-300"
              >
                Discover Cocktail
              </Link>
            </div>
          </div>

          {/* Right Content: Image Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 relative">

            {/* Main Center Image (B&W Style) */}
            <div className="aspect-4/5 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800"
                alt="Bartender preparing drink"
                className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 hover:grayscale-0"
              />
            </div>

            {/* Side Image (Partially cut off/Offset like original) */}
            <div className="hidden md:block aspect-4/5 overflow-hidden translate-y-12 lg:translate-y-20">
              <img
                src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800"
                alt="Finished cocktails"
                className="w-full h-full object-cover"
              />
            </div>


          </div>

        </div>
      </div>
    </section>
  );
};

export default LiquidCaterersHero;
