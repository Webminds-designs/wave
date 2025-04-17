import React, { useEffect, useState } from 'react';
import kitchenHero from '../assets/images/herowave.png';
import Header from './Header';

const AboutHero = () => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [showCursor, setShowCursor] = useState(false);

    // Handle cursor movement within hero area (excluding header)
    const handleMouseMove = (e) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setShowCursor(true);
    const handleMouseLeave = () => setShowCursor(false);

    return (
        <div className="relative w-full min-h-screen bg-black overflow-hidden">
            {/* Background image */}
            <img
                src={kitchenHero}
                alt="Modern Kitchen"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

            {/* Header - normal cursor */}
            <div className="relative z-20 cursor-pointer">
                <Header />
            </div>

            {/* Hero Content with custom cursor area */}
            <div
                className="relative z-10 flex flex-col items-center justify-center h-screen px-4 sm:px-6 md:px-8"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Your hero content (if any) */}
            </div>

            {/* Custom Cursor (only inside hero image area) */}
            {showCursor && (
                <div
                    className="pointer-events-none fixed z-50 transition-transform duration-150"
                    style={{
                        top: cursorPos.y - 40,
                        left: cursorPos.x - 40,
                    }}
                >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 
                                rounded-full border border-white/80 
                                flex items-center justify-center 
                                text-white text-xs sm:text-sm md:text-base
                                backdrop-blur-sm">
                        Scroll Down
                    </div>
                </div>
            )}
        </div>
    );
};

export default AboutHero;
