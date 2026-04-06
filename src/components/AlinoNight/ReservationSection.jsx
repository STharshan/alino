import { useState } from "react";
import { MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    const initialFormData = {
        guests: "1 Person",
        date: "",
        time: "",
        cocktails: ""
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleWhatsAppBooking = (e) => {
        e.preventDefault();

        const messageText =
            `Hello Alino, I would like to reserve a table:\n\n` +
            `*Guests:* ${formData.guests}\n` +
            `*Date:* ${formData.date}\n` +
            `*Time:* ${formData.time}\n` +
            `*Preferred Drink:* ${formData.cocktails}`;

        const encodedMessage = encodeURIComponent(messageText);

        window.open(
            `https://wa.me/447737098045?text=${encodedMessage}`,
            "_blank"
        );

        setFormData(initialFormData);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section
            id="alino-night-contact"
            className="w-full py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 
            bg-white text-black dark:bg-black dark:text-white 
            transition-colors duration-500"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                {/* IMAGE */}
                <div className="relative w-full min-h-[300px] md:min-h-[450px] rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('/night.jpeg')" }}
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                {/* FORM */}
                <div className="rounded-3xl p-6 sm:p-8 md:p-12 
                    backdrop-blur-xl 
                    bg-white/70 dark:bg-white/5 
                    border border-gray-200 dark:border-gray-700 
                    shadow-lg">

                    <div className="text-center mb-8">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                            Secure Your Table
                        </h3>
                    </div>

                    <form onSubmit={handleWhatsAppBooking} className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                        {/** reuse classes */}
                        {(() => {
                            const inputClass =
                                "bg-transparent w-full px-3 py-2 outline-none text-sm " +
                                "text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500";

                            const wrapperClass =
                                "border border-gray-300 dark:border-gray-600 rounded-md " +
                                "focus-within:ring-2 focus-within:ring-[#007A4D] transition";

                            return (
                                <>
                                    {/* Guests */}
                                    <div className={wrapperClass}>
                                        <label className="block text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 px-3 pt-2">
                                            Guests
                                        </label>
                                        <select
                                            name="guests"
                                            value={formData.guests}
                                            onChange={handleChange}
                                            className={`${inputClass} cursor-pointer bg-transparent`}
                                        >
                                            {["1 Person", "2 Persons", "3 Persons", "4 Persons", "5 Persons", "6 Persons", "More"].map(opt => (
                                                <option
                                                    key={opt}
                                                    value={opt}
                                                    className="bg-white dark:bg-black text-black dark:text-white"
                                                >
                                                    {opt}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Date Picker */}
                                    <div className="relative border border-gray-300 dark:border-gray-600 rounded-md focus-within:ring-2 focus-within:ring-[#007A4D] transition-colors">
                                        <label className="block text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1 px-2 pt-1">
                                            Select Date
                                        </label>
                                        <input
                                            type="date"
                                            name="date"
                                            required
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="invert-calendar-icon bg-transparent w-full pb-2 px-2 outline-none text-sm cursor-pointer 
             text-black dark:text-white 
             scheme-light dark:scheme-dark"
                                        />
                                    </div>

                                    {/* Time Picker */}
                                    <div className="relative border border-gray-300 dark:border-gray-600 rounded-md focus-within:ring-2 focus-within:ring-[#007A4D] transition-colors">
                                        <label className="block text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1 px-2 pt-1">
                                            Select Time
                                        </label>
                                        <input
                                            type="time"
                                            name="time"
                                            required
                                            value={formData.time}
                                            onChange={handleChange}
                                            className="invert-calendar-icon bg-transparent w-full pb-2 px-2 outline-none text-sm cursor-pointer 
             text-black dark:text-white 
             scheme-light dark:scheme-dark"
                                        />
                                    </div>

                                    {/* Drink */}
                                    <div className={`${wrapperClass} sm:col-span-2`}>
                                        <label className="block text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 px-3 pt-2">
                                            Preferred Drink
                                        </label>
                                        <input
                                            type="text"
                                            name="cocktails"
                                            value={formData.cocktails}
                                            onChange={handleChange}
                                            placeholder="e.g. Martini"
                                            className={inputClass}
                                        />
                                    </div>
                                </>
                            );
                        })()}

                        {/* BUTTON */}
                        <div className="sm:col-span-2 mt-4">
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-3 
                                px-8 py-4 rounded-xl uppercase text-xs font-bold tracking-[0.2em] 
                                bg-black text-white 
                                dark:bg-white dark:text-black 
                                hover:bg-[#007A4D] hover:text-white 
                                transition-all duration-300"
                            >
                                <FaWhatsapp size={18} />
                                Reservation
                            </button>
                        </div>

                        {/* CONTACT */}
                        <div className="sm:col-span-2 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center space-y-3">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-gray-700 dark:text-gray-300">
                                <div className="flex items-center gap-2">
                                    <MapPin size={14} className="text-[#007A4D]" />
                                    <span>11 Narborough Rd, Leicester</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone size={14} className="text-[#007A4D]" />
                                    <span>+44 773 709 8045</span>
                                </div>
                            </div>
                        </div>
                    </form>

                    <p className="text-[10px] text-center mt-6 text-gray-500 dark:text-gray-400">
                        By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.
                    </p>
                </div>
            </div>
        </section>
    );
}