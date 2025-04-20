import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ovenImage from "../../assets/images/no-background.png";

const Hero = () => {
  const [showLens, setShowLens] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamic styles based on screen size
  const getTitleOffset = () => {
    if (windowSize.width < 640) return "ml-4 sm:ml-10"; // mobile
    if (windowSize.width < 768) return "ml-10 sm:ml-20"; // small tablets
    if (windowSize.width < 1024) return "ml-16 md:ml-32"; // tablets
    if (windowSize.width < 1280) return "ml-24 lg:ml-40"; // small laptops
    return "ml-32 xl:ml-64"; // large screens
  };

  const getImageOffset = () => {
    if (windowSize.width < 640) return "mx-auto"; // mobile
    if (windowSize.width < 768) return "mx-auto"; // small tablets
    if (windowSize.width < 1024) return "mr-0 md:mr-10"; // tablets
    if (windowSize.width < 1280) return "mr-10 lg:mr-20"; // small laptops
    return "mr-20 xl:mr-40"; // large screens
  };

  const getMarginTop = () => {
    if (windowSize.width < 640) return "mt-8"; // mobile
    if (windowSize.width < 768) return "mt-10"; // small tablets
    if (windowSize.width < 1024) return "mt-12"; // tablets
    if (windowSize.width < 1280) return "mt-16"; // small laptops
    return "mt-20"; // large screens
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 overflow-x-hidden rounded-b-4xl py-16 md:py-0"
      style={{ backgroundColor: "#121212" }}
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 z-10 flex flex-col justify-center md:h-full items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl text-center sm:text-left font-bold leading-tight mb-4 xs:mb-6 sm:mb-8 text-white ${getTitleOffset()} ${windowSize.width < 768 ? "mt-8" : "mt-0"}`}
        >
          MODERN
          <br />
          COOKING
          <br />
          TECHNOLOGY
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`text-sm xs:text-base sm:text-lg text-gray-400 max-w-xs text-center sm:text-left xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl ${getTitleOffset()}`}
        >
          Blending smart energy with sleek design for a better kitchen
          experience.
        </motion.p>
      </div>

      {/* Right Content with Image */}
      <div className="w-full md:w-1/2 h-auto md:h-full flex items-center justify-center relative mt-10 md:mt-0">
        {/* Background Circle */}
        <div 
          className="absolute 
            w-32 h-32 
            xs:w-40 xs:h-40 
            sm:w-48 sm:h-48 
            md:w-80 md:h-80 
            lg:w-80 lg:h-80 
            xl:w-96 xl:h-96 
            2xl:w-[40rem] 2xl:h-[40rem] 
            bg-[#666666] rounded-full 
            top-1/2 
            md:left-0 md:top-20 lg:top-1/2
            -left-10
            transform -translate-x-1/2 -translate-y-1/2 
            z-0 opacity-40"
            hidden={windowSize.width < 640}
        ></div>

        {/* Image Container */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            src={ovenImage}
            alt="WAVE Smart Microwave"
            className={`relative z-10 w-[90%] xs:w-[85%] sm:w-[80%] md:w-[85%] lg:w-[90%] xl:w-[95%] max-w-3xl ${getImageOffset()} ${getMarginTop()}`}
          />

          {/* Lens/Focus Element */}
          {showLens && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className={`absolute z-20 
                top-[25%] right-[25%]
                xs:top-[30%] xs:right-[30%]
                sm:top-[30%] sm:right-[35%]
                md:top-[30%] md:right-[20%]
                lg:top-[30%] lg:right-[25%]
                xl:top-[30%] xl:right-[30%]
                pointer-events-none`}
            >
              <div className="relative">
                <div className={`
                  w-24 h-24
                  xs:w-24 xs:h-24
                  sm:w-28 sm:h-28
                  md:w-30 md:h-30
                  lg:w-40 lg:h-40
                  xl:w-48 xl:h-48
                  rounded-full border-1 border-white
                  bg-white/10 backdrop-blur-[0px]
                  flex items-center justify-center`}>
                  {/* Lens content - commented for now as in original */}
                </div>
                {/* Additional lens elements - commented as in original */}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
