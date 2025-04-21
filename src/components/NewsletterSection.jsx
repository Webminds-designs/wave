import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import paperPlane from "../assets/images/paper-plane.png";
import Footer from "./Footer";

const NewsletterSection = () => {
    const [email, setEmail] = useState("");
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: false
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your email submit logic here
    };

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
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const planeVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <>
            <motion.section
                ref={ref}
                className="bg-[#f6f7f3] px-4 sm:px-6 md:px-8 lg:px-12 pt-8 sm:pt-10 md:pt-12 lg:pt-16"
                initial="hidden"
                animate={controls}
            >
                <motion.div
                    className="max-w-6xl mx-auto bg-white rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[40px] 
                              px-6 sm:px-8 md:px-10 lg:px-12 
                              py-8 sm:py-10 md:py-12 lg:py-14 
                              flex flex-col md:flex-row items-center justify-between 
                              gap-6 sm:gap-8 md:gap-10 lg:gap-12
                              shadow-xl"
                    variants={containerVariants}
                >
                    {/* Text Content */}
                    <motion.div
                        className="w-full md:w-3/5 lg:w-2/3"
                        variants={containerVariants}
                    >
                        <motion.h2
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black 
                                     mb-4 sm:mb-6 md:mb-8 leading-tight"
                            variants={itemVariants}
                        >
                            READY TO COOK SMARTER?
                        </motion.h2>
                        <motion.p
                            className="text-gray-500 text-sm sm:text-base md:text-lg 
                                    mb-4 sm:mb-5 md:mb-6 
                                    max-w-xl"
                            variants={itemVariants}
                        >
                            With Wave, every meal is faster, quieter, and smarter—so you can
                            spend less time in the kitchen and more time enjoying what matters.
                        </motion.p>

                        {/* Email form */}
                        <motion.form
                            onSubmit={handleSubmit}
                            className="relative w-full max-w-md"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="flex items-center border border-gray-300 rounded-full overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 sm:px-5 md:px-6 
                                             py-2 sm:py-2.5 md:py-3 
                                             text-sm sm:text-base
                                             outline-none"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <motion.button
                                    type="submit"
                                    className="bg-black text-white 
                                             px-4 sm:px-5 md:px-6 
                                             py-1.5 sm:py-2 md:py-2.5
                                             text-sm sm:text-base 
                                             rounded-full flex items-center justify-center 
                                             mr-1 cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Send
                                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                                </motion.button>
                            </motion.div>
                        </motion.form>
                    </motion.div>

                    {/* Paper plane image - responsive positioning */}
                    <motion.div
                        className="relative w-full md:w-2/5 lg:w-1/3 overflow-visible mt-6 sm:mt-8 md:mt-0"
                        variants={planeVariants}
                    >
                        {/* Mobile view (centered) */}
                        <div className="block md:hidden w-full">
                            <motion.img
                                src={paperPlane}
                                alt="Paper Plane"
                                className="w-56 sm:w-64 md:w-72 mx-auto object-contain 
                                         transform translate-x-4 sm:translate-x-6"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>

                        {/* Tablet and desktop view (overlapping) */}
                        <div className="hidden md:block 
                                      absolute right-0 top-1/2 
                                      transform -translate-y-2/3 
                                      overflow-visible">
                            <motion.img
                                src={paperPlane}
                                alt="Paper Plane"
                                className="w-72 lg:w-[450px] xl:w-[1000px] object-contain 
                                         transform translate-x-8 lg:translate-x-12 xl:translate-x-16"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </motion.section>
            <Footer />
        </>
    );
};

export default NewsletterSection;