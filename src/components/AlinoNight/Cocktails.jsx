import React from 'react';

const events = [
  {
    id: 1,
    title: "YOUNG BAE & BOYS",
    type: "COCKTAIL PARTY",
    date: "Thursday, 10 Apr at 12:00pm",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "THE RED PARTY",
    type: "COCKTAIL PARTY",
    date: "Friday, 18 Jul at 12:00pm",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "THE NIGHT SPRITZ",
    type: "COCKTAIL PARTY",
    date: "Friday, 21 Mar at 12:00pm",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    title: "THE SINGLES NIGHT",
    type: "COCKTAIL PARTY",
    date: "Friday, 15 Aug at 03:30pm",
    image: "8.jpg",
  },
];

const EventCard = ({ event }) => (
  <div className="flex flex-col items-center group cursor-pointer">
    {/* Image Container */}
    <div className="relative w-full aspect-4/5 mb-8">
      <div className="w-full h-full overflow-hidden rounded-md">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Split Label: Half in, Half out */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
        <div className="bg-white dark:bg-black px-6 py-2 shadow-xl border border-gray-100 dark:border-gray-700">
          <p className="text-[10px] font-bold tracking-[0.2em] text-black dark:text-white whitespace-nowrap">
            {event.type}
          </p>
        </div>
      </div>
    </div>

    {/* Text Content */}
    <div className="text-center mt-2">
      <h3 className="text-black dark:text-white text-lg font-semibold tracking-wider mb-1 uppercase">
        {event.title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-xs tracking-tight">
        {event.date}
      </p>
    </div>
  </div>
);

const UpcomingEvents = () => {
  return (
    <section className="bg-white dark:bg-black py-16 px-4 sm:px-8 lg:px-16 min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-black dark:text-white text-2xl md:text-3xl font-light tracking-[0.3em] text-center mb-16 uppercase">
          Upcoming Events
        </h2>

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
