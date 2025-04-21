import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import kitchen1 from '../assets/images/kitchen1.png';
import kitchen2 from '../assets/images/kitchen2.png';
import user1 from '../assets/images/user1.jpg';
import user2 from '../assets/images/user2.jpg';
import user3 from '../assets/images/user3.jpg';
import user4 from '../assets/images/user4.jpg';

const AboutContent = () => {
    // Animation controls
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1, // Trigger when 10% of element is visible
        triggerOnce: false // Allow animation to trigger again when scrolling back up
    });

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    // Trigger animations when in view
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <div ref={ref} className="bg-[#f1f2ed] px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16 overflow-hidden">
            {/* Top Section */}
            <motion.div
                className="text-center max-w-7xl mx-auto"
                initial="hidden"
                animate={controls}
                variants={containerVariants}
            >
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 md:mb-8"
                    variants={itemVariants}
                >
                    REINVENTING THE WAY YOU COOK
                </motion.h2>
                <motion.p
                    className="text-lg sm:text-xl font-semibold text-black mb-3 sm:mb-4"
                    variants={itemVariants}
                >
                    Wave isn't just a microwave. It's a movement.
                </motion.p>
                <motion.p
                    className="text-gray-600 text-base sm:text-lg mb-16 sm:mb-20 md:mb-24 lg:mb-32 max-w-3xl mx-auto px-4"
                    variants={itemVariants}
                >
                    At WebMinds, we don't just create appliances — we craft smart lifestyle solutions.
                    The Wave Microwave was born out of a vision to redefine the cooking experience
                    for the modern home. As our lives get busier, we believe that smart technology
                    should simplify daily routines without compromising quality, aesthetics, or sustainability.
                </motion.p>
            </motion.div>

            {/* Bottom Section */}
            <motion.div
                className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 sm:gap-12 lg:gap-20 mt-8"
                initial="hidden"
                animate={controls}
                variants={containerVariants}
            >
                {/* Left Side: Text Content */}
                <motion.div
                    className="flex-1 w-full lg:w-1/2 text-center lg:text-left"
                    variants={itemVariants}
                >
                    <motion.h3
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4 sm:mb-6"
                        variants={itemVariants}
                    >
                        WELCOME TO WAVE, <br className="hidden sm:block" /> WHERE INNOVATION MEETS INTUITION.
                    </motion.h3>
                    <motion.p
                        className="text-gray-600 mb-4 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0"
                        variants={itemVariants}
                    >
                        We're not just designing appliances — we're shaping the future of smart kitchens.
                    </motion.p>
                    <motion.p
                        className="text-gray-500 text-base sm:text-lg mb-1"
                        variants={itemVariants}
                    >
                        Trusted by 10,000+ homes
                    </motion.p>
                    <motion.p
                        className="text-gray-500 text-base sm:text-lg mb-6"
                        variants={itemVariants}
                    >
                        Reviewed by <span className="font-semibold text-black text-lg sm:text-xl md:text-2xl">12K+</span> happy users.
                    </motion.p>

                    {/* Avatars */}
                    <motion.div
                        className="flex items-center justify-center lg:justify-start gap-0 -space-x-3 sm:-space-x-5 mt-4 sm:mt-6"
                        variants={itemVariants}
                    >
                        {[user1, user2, user3, user4].map((user, index) => (
                            <motion.img
                                key={index}
                                src={user}
                                alt={`User ${index + 1}`}
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#f1f2ed]"
                                variants={itemVariants}
                                custom={index} // For staggered animation
                                initial="hidden"
                                animate={controls}
                            />
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Side: Images */}
                <motion.div
                    className="flex gap-3 sm:gap-5 flex-1 w-full lg:w-1/2 justify-center mt-8 lg:mt-0"
                    variants={containerVariants}
                >
                    <motion.img
                        src={kitchen2}
                        alt="Kitchen View 2"
                        className="w-20 sm:w-24 md:w-28 xl:w-32 h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl sm:rounded-[2rem] object-cover"
                        variants={imageVariants}
                        custom={0}
                    />
                    <motion.img
                        src={kitchen1}
                        alt="Kitchen View 1"
                        className="w-32 sm:w-40 md:w-56 lg:w-72 xl:w-96 h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl sm:rounded-[2rem] object-cover"
                        variants={imageVariants}
                        custom={1}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AboutContent;