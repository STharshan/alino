"use client";
import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import barImg from "/2.jpg";

export default function Hero() {
    return (
        <section
            className="relative h-screen w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${barImg})` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Center Content */}
            {/* Center Content */}
            <div className="relative z-10 flex min-h-[80vh] items-center justify-center px-4">
                <div className="text-white font-serif w-[260px] sm:w-[320px] md:w-[420px]">

                    {/* Swing */}
                    <h1 className="text-left text-5xl mt-25 sm:text-6xl md:text-7xl lg:text-8xl leading-none">
                        Swing
                    </h1>

                    {/* & */}
                    <div className="text-center text-4xl sm:text-5xl md:text-6xl my-3 leading-none">
                        &
                    </div>

                    {/* Food */}
                    <h2 className="text-right text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none">
                        Food
                    </h2>

                </div>
            </div>
        </section>
    );
}
