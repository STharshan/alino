import React from 'react';

const CocktailMarquee = () => {
  const cocktailsTop = ["FRENCH 75", "COSMOPOLITAN", "NEGRONI", "MARGARITA"];
  const cocktailsBottom = ["DIRTY MARTINI", "WHITE LADY", "OLD FASHIONED", "MANHATTAN"];

  return (
    <section className="bg-white dark:bg-black py-12 overflow-hidden transition-colors duration-500">
      <div className="flex flex-col">
        
        {/* Top Row - Moving Left with Underline */}
        <div className="relative flex overflow-x-hidden border-t border-b border-2 border-black/10 dark:border-white/10 py-6">
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {[...cocktailsTop, ...cocktailsTop].map((item, index) => (
              <span 
                key={index} 
                className="mx-8 text-3xl md:text-5xl lg:text-7xl font-light italic tracking-widest text-black/60 dark:text-white/60"
              >
                {item} <span className="mx-8 text-black/20 dark:text-white/20">—</span>
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Row - Moving Right with Underline */}
        <div className="relative flex overflow-x-hidden border-b border-2 border-black/10 dark:border-white/10 py-6">
          <div className="animate-marquee2 whitespace-nowrap flex items-center">
             {[...cocktailsBottom, ...cocktailsBottom].map((item, index) => (
              <span 
                key={index} 
                className="mx-8 text-3xl md:text-5xl lg:text-7xl font-light italic tracking-widest text-black/60 dark:text-white/60"
              >
                {item} <span className="mx-8 text-black/20 dark:text-white/20">—</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CocktailMarquee;
