import React from "react";
import energyImg from "../assets/images/efficiency 1.png";
import touchpadImg from "../assets/images/touch-screen 1.png";
import micImg from "../assets/images/voice-assistant 1.png";
import awardImg from "../assets/images/trophy 1.png";

const features = [
    {
        icon: <img src={energyImg} alt="Smart Energy" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain transition-transform duration-300 hover:scale-110" />,
        title: "SMART ENERGY DISTRIBUTION",
    },
    {
        icon: <img src={touchpadImg} alt="IntelliTouch Control" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain transition-transform duration-300 hover:scale-110" />,
        title: "SLEEK INTELLITOUCH™ CONTROL",
    },
    {
        icon: <img src={micImg} alt="Quiet Technology" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain transition-transform duration-300 hover:scale-110" />,
        title: "WHISPER-QUIET 30 DB TECH",
    },
    {
        icon: <img src={awardImg} alt="Award Design" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain transition-transform duration-300 hover:scale-110" />,
        title: "AWARD-WINNING DESIGN",
    },
];

const Aboutfeatures = () => {
    return (
        <section className="bg-[#f1f2ed] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                    FEATURES YOU'LL EXPERIENCE
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-4 sm:p-6 hover:transform hover:scale-105 transition-all duration-300"
                        >
                            <div className="mb-4 sm:mb-6">
                                {feature.icon}
                            </div>
                            <p className="text-base sm:text-lg md:text-xl font-semibold text-black tracking-wide text-center max-w-[200px] mx-auto">
                                {feature.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Aboutfeatures;