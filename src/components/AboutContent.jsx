import React from 'react';
import kitchen1 from '../assets/images/kitchen1.png';
import kitchen2 from '../assets/images/kitchen2.png';
import user1 from '../assets/images/user1.jpg';
import user2 from '../assets/images/user2.jpg';
import user3 from '../assets/images/user3.jpg';
import user4 from '../assets/images/user4.jpg';

const AboutContent = () => {
    return (
        <div className="bg-[#f1f2ed] px-6 md:px-20 py-16">
            {/* Top Section */}
            <div className="text-center max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-8">
                    REINVENTING THE WAY YOU COOK
                </h2>
                <p className="text-xl font-semibold text-black mb-4">
                    Wave isn’t just a microwave. It’s a movement.
                </p>
                <p className="text-gray-600 text-lg mb-32">
                    At WebMinds, we don’t just create appliances — we craft smart lifestyle solutions.
                    The Weave Microwave was born <br /> out of a vision to redefine the cooking experience
                    for the modern home. As our lives get busier, we believe that <br /> smart technology
                    should simplify daily routines without compromising quality, aesthetics, or sustainability.
                </p>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-20 mt-8">
                {/* Left Side: Text Content */}
                <div className="flex-1 pt-12">  {/* Added pt-12 for top padding */}
                    <h3 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-6">
                        WELCOME TO WAVE, <br /> WHERE INNOVATION MEETS INTUITION.
                    </h3>
                    <p className="text-gray-600 mb-4 text-base md:text-lg">
                        We’re not just designing appliances — we’re shaping the future of smart kitchens.
                    </p>
                    <p className="text-gray-500 text-lg mb-1">
                        Trusted by 10,000+ homes
                    </p>
                    <p className="text-gray-500 text-lg mb-6">
                        Reviewed by <span className="font-semibold text-black text-xl md:text-2xl">12K+</span> happy users.
                    </p>

                    {/* Avatars */}
                    <div className="flex items-center gap-0 -space-x-5 mt-4">
                        <img src={user1} alt="User 1" className="w-12 h-12 rounded-full object-cover" />
                        <img src={user2} alt="User 2" className="w-12 h-12 rounded-full object-cover" />
                        <img src={user3} alt="User 3" className="w-12 h-12 rounded-full object-cover" />
                        <img src={user4} alt="User 4" className="w-12 h-12 rounded-full object-cover" />
                    </div>
                </div>

                {/* Right Side: Images */}
                <div className="flex gap-5 flex-1 justify-center">
                    <img
                        src={kitchen2}
                        alt="Kitchen View 2"
                        className="w-24 md:w-28 xl:w-32 h-[500px] rounded-[2rem] object-cover"
                    />
                    <img
                        src={kitchen1}
                        alt="Kitchen View 1"
                        className="w-40 md:w-96 h-[500px] rounded-[2rem] object-cover"
                    />
                </div>
            </div>

        </div>


    );
};

export default AboutContent;
