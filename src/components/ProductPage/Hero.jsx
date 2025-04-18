import React, { useState } from "react";
import { motion } from "framer-motion";
import ovenImage from "../../assets/images/no-background.png";

const Hero = () => {
  const [showLens, setShowLens] = useState(true);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-screen h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 overflow-hidden rounded-b-4xl"
      style={{ backgroundColor: "#121212" }}
    >
      <div className="w-full md:w-1/2 z-10 flex flex-col justify-center md:h-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 sm:mb-8 text-white ml-64 mt-30"
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
          className="text-base sm:text-lg text-gray-400 max-w-2xl ml-64"
        >
          Blending smart energy with sleek design for a better kitchen
          experience.
        </motion.p>
      </div>
      <div className="w-full md:w-1/2 h-full flex items-center justify-center relative">
        <div className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[40rem] xl:h-[40rem] bg-[#666666] rounded-full top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-40"></div>
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            src={ovenImage}
            alt="WAVE Smart Microwave"
            className="relative z-10 w-[85%] sm:w-[80%] md:w-[85%] lg:w-[90%] xl:w-[95%] max-w-3xl mx-auto mr-40 mt-20"
          />
          {showLens && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute z-20 top-[30%] right-[30%] md:top-[30%] md:right-[20%] lg:right-[25%] pointer-events-none"
            >
              <div className="relative">
                <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-64 lg:h-64 rounded-full border-1 border-white bg-white/10 backdrop-blur-[0px] flex items-center justify-center">
                  {/* <div className="w-4 h-4 bg-white rounded-full"></div> */}
                  {/* <div className="absolute w-full h-[2px] bg-white/50 top-1/2 left-0 transform -translate-y-1/2"></div> */}
                  {/* <div className="absolute h-full w-[2px] bg-white/50 left-1/2 top-0 transform -translate-x-1/2"></div> */}
                </div>
                {/* <div className="absolute top-1/2 -right-20 w-20 h-[2px] bg-white transform -translate-y-1/2"></div>
                <div className="absolute top-1/2 -right-40 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-xs px-3 py-2 rounded">
                  <span className="block">Touch Control</span>
                  <span className="block">Panel</span>
                </div> */}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
