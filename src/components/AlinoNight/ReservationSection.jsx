import React, { useState } from 'react';

const ReservationSection = () => {
    const [formData, setFormData] = useState({
        guests: '1 Person',
        date: '2024-08-29',
        time: '20:00',
        cocktails: '',
    });

    const handleWhatsAppRedirect = (e) => {
        e.preventDefault();
        const phoneNumber = "1234567890"; 
        
        const message = `Hello, I'd like to make a reservation:%0A` +
                        `- Guests: ${formData.guests}%0A` +
                        `- Date: ${formData.date}%0A` +
                        `- Time: ${formData.time}%0A` +
                        `- Preferred Cocktails: ${formData.cocktails || 'Not specified'}`;

        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="bg-white dark:bg-black text-black dark:text-white min-h-screen flex items-center transition-colors duration-500">
            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side Image */}
                    <div className="w-full h-[400px] md:h-[600px] overflow-hidden rounded-sm">
                        <img
                            src="12.jpg"
                            alt="People celebrating"
                            className="w-full h-full object-cover grayscale-20 contrast-110"
                        />
                    </div>

                    {/* Form Side */}
                    <div className="max-w-md mx-auto lg:mx-0 lg:pl-12 w-full text-center lg:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-widest uppercase mb-4">
                            Make a Reservation
                        </h2>
                        
                        <form onSubmit={handleWhatsAppRedirect} className="space-y-8 mt-12">
                            {/* Guests Input */}
                            <div className="relative border-b border-gray-300 dark:border-gray-600 focus-within:border-black dark:focus-within:border-white transition-colors">
                                <label className="block text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">Guests</label>
                                <input
                                    type="text"
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    className="bg-transparent w-full pb-2 outline-none text-sm placeholder-gray-400 dark:placeholder-gray-500"
                                />
                            </div>

                            {/* Date Picker */}
                            <div className="relative border-b border-gray-300 dark:border-gray-600 focus-within:border-black dark:focus-within:border-white transition-colors">
                                <label className="block text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">Select Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="bg-transparent w-full pb-2 outline-none text-sm uppercase cursor-pointer invert-calendar-icon dark:invert-calendar-icon-dark"
                                />
                            </div>

                            {/* Time Picker */}
                            <div className="relative border-b border-gray-300 dark:border-gray-600 focus-within:border-black dark:focus-within:border-white transition-colors">
                                <label className="block text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">Select Time</label>
                                <input
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    className="bg-transparent w-full pb-2 outline-none text-sm cursor-pointer invert-calendar-icon dark:invert-calendar-icon-dark"
                                />
                            </div>

                            {/* Cocktail Input */}
                            <div className="relative border-b border-gray-300 dark:border-gray-600 focus-within:border-black dark:focus-within:border-white transition-colors">
                                <label className="block text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">Preferred Drink</label>
                                <input
                                    type="text"
                                    name="cocktails"
                                    value={formData.cocktails}
                                    onChange={handleChange}
                                    className="bg-transparent w-full pb-2 outline-none text-sm italic placeholder-gray-400 dark:placeholder-gray-500"
                                    placeholder="e.g. Martini"
                                />
                            </div>

                            <div className="pt-6">
                                <button type="submit" className="border border-black dark:border-white px-12 py-3 uppercase text-xs font-bold tracking-[0.2em] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 w-full lg:w-auto">
                                    Reservation
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReservationSection;
