import React from 'react';
import kitchenHero from '../assets/images/herowave.png';
import Header from './Header';

const AboutHero = () => {
    return (
        <div className="relative w-full h-screen bg-black">
            {/* Background image */}
            <img
                src={kitchenHero}
                alt="Modern Kitchen"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Overlay for dim effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-30" />

            {/* Navbar */}
            <div className="relative z-10">
                <Header />
            </div>

            {/* Scroll Button */}
            <div className="absolute bottom-10 right-10 z-10">
                <button className="w-32 h-32 rounded-full border border-white flex items-center cursor-pointer justify-center text-white text-lg backdrop-blur-sm hover:scale-105 transition duration-300">
                    Scroll Down
                </button>
            </div>
        </div>
    );
};

export default AboutHero;
