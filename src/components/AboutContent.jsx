import React from 'react';
import kitchen1 from '../assets/images/kitchen1.png';
import kitchen2 from '../assets/images/kitchen2.png';
import user1 from '../assets/images/user1.jpg';
import user2 from '../assets/images/user2.jpg';
import user3 from '../assets/images/user3.jpg';
import user4 from '../assets/images/user4.jpg';

const AboutContent = () => {
    return (
        <div className="bg-[#f1f2ed] px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16">
            {/* Top Section */}
            <div className="text-center max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 md:mb-8">
                    REINVENTING THE WAY YOU COOK
                </h2>
                <p className="text-lg sm:text-xl font-semibold text-black mb-3 sm:mb-4">
                    Wave isn't just a microwave. It's a movement.
                </p>
                <p className="text-gray-600 text-base sm:text-lg mb-16 sm:mb-20 md:mb-24 lg:mb-32 max-w-3xl mx-auto px-4">
                    At WebMinds, we don't just create appliances — we craft smart lifestyle solutions.
                    The Wave Microwave was born out of a vision to redefine the cooking experience
                    for the modern home. As our lives get busier, we believe that smart technology
                    should simplify daily routines without compromising quality, aesthetics, or sustainability.
                </p>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 sm:gap-12 lg:gap-20 mt-8">
                {/* Left Side: Text Content */}
                <div className="flex-1 w-full lg:w-1/2 text-center lg:text-left">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4 sm:mb-6">
                        WELCOME TO WAVE, <br className="hidden sm:block" /> WHERE INNOVATION MEETS INTUITION.
                    </h3>
                    <p className="text-gray-600 mb-4 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0">
                        We're not just designing appliances — we're shaping the future of smart kitchens.
                    </p>
                    <p className="text-gray-500 text-base sm:text-lg mb-1">
                        Trusted by 10,000+ homes
                    </p>
                    <p className="text-gray-500 text-base sm:text-lg mb-6">
                        Reviewed by <span className="font-semibold text-black text-lg sm:text-xl md:text-2xl">12K+</span> happy users.
                    </p>

                    {/* Avatars */}
                    <div className="flex items-center justify-center lg:justify-start gap-0 -space-x-3 sm:-space-x-5 mt-4 sm:mt-6">
                        {[user1, user2, user3, user4].map((user, index) => (
                            <img
                                key={index}
                                src={user}
                                alt={`User ${index + 1}`}
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#f1f2ed]"
                            />
                        ))}
                    </div>
                </div>

                {/* Right Side: Images */}
                <div className="flex gap-3 sm:gap-5 flex-1 w-full lg:w-1/2 justify-center mt-8 lg:mt-0">
                    <img
                        src={kitchen2}
                        alt="Kitchen View 2"
                        className="w-20 sm:w-24 md:w-28 xl:w-32 h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl sm:rounded-[2rem] object-cover"
                    />
                    <img
                        src={kitchen1}
                        alt="Kitchen View 1"
                        className="w-32 sm:w-40 md:w-56 lg:w-72 xl:w-96 h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl sm:rounded-[2rem] object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutContent;