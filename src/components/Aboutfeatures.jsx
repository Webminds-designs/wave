import React from "react";
import energyImg from "../assets/images/efficiency 1.png";
import touchpadImg from "../assets/images/touch-screen 1.png";
import micImg from "../assets/images/voice-assistant 1.png";
import awardImg from "../assets/images/trophy 1.png";

const features = [
    {
        icon: <img src={energyImg} alt="Smart Energy" className="w-14 h-14 object-contain" />,
        title: "SMART ENERGY DISTRIBUTION",
    },
    {
        icon: <img src={touchpadImg} alt="IntelliTouch Control" className="w-14 h-14 object-contain" />,
        title: "SLEEK INTELLITOUCH™ CONTROL",
    },
    {
        icon: <img src={micImg} alt="Quiet Technology" className="w-14 h-14 object-contain" />,
        title: "WHISPER-QUIET 30 DB TECH",
    },
    {
        icon: <img src={awardImg} alt="Award Design" className="w-14 h-14 object-contain" />,
        title: "AWARD-WINNING DESIGN",
    },
];


const Aboutfeatures = () => {
    return (
        <section className="bg-[#f1f2ed] py-16 px-4">
            <h2 className="text-2xl sm:text-5xl text-black font-bold text-center mb-20">
                FEATURES YOU’LL EXPERIENCE
            </h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center">
                        {feature.icon}
                        <p className="mt-15 text-lg font-semibold text-black tracking-wide">
                            {feature.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Aboutfeatures;
