import React from "react";
import aboutUsOven from "../assets/images/aboutUsOven.png";
import { motion } from "framer-motion";
import { AiOutlineArrowUp, AiOutlineSearch } from "react-icons/ai";
import kitchenImage1 from "../assets/images/image 24.png";

const AboutWave = () => {
  return (
    <motion.div
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.1 }}
      className="relative w-full h-auto sm:h-auto md:h-auto lg:h-[60rem] bg-[#F4F5F0] py-8 sm:py-10 md:py-12 px-4 md:px-4 lg:px-10 2xl:px-16 rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[50px]"
    >
      {/* Large faint background text – visible on lg and larger */}
      <motion.h1
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="hidden lg:block absolute -bottom-6 right-10 text-[8rem] lg:bottom-35 lg:text-[150px] xl:text-[220px] 2xl:text-[280px] font-extrabold text-[#403A370A] tracking-widest pointer-events-none select-none xl:bottom-20 2xl:-bottom-5 2xl:right-15"
      >
        WAVE
      </motion.h1>

      {/* Main container */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-7 md:gap-8 relative z-10 mt-8 sm:mt-10 md:mt-15">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col gap-3 sm:gap-4 md:gap-5"
        >
          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide"
          >
            /About Wave
          </motion.p>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-black leading-tight"
          >
            SMARTER KITCHEN <br /> EXPERIENCE
          </motion.h2>

          {/* Microwave Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-auto max-w-[250px] xs:max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-auto rounded-xl sm:rounded-4xl flex items-center justify-center text-white text-xs mb-1 mt-8 sm:mt-12 md:mt-20 overflow-hidden"
          >
            <img
              src={aboutUsOven}
              alt="Microwave"
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xs xs:text-sm md:text-base lg:text-lg text-gray-500 leading-relaxed"
          >
            Reimagine cooking with <strong>Wave</strong>. Designed to{" "}
            <br className="hidden xs:inline" />
            simplify mealtime, our microwave combines stylish{" "}
            <br className="hidden xs:inline" /> aesthetics with high-performance
            heating <br className="hidden xs:inline" /> technology.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-2 mt-2 sm:mt-3"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#000",
                color: "#fff",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border border-black text-black py-1.5 xs:py-2 px-3 xs:px-4 text-xs xs:text-sm md:text-base rounded-full transition-colors"
            >
              Learn More
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#fff" }}
              whileTap={{ scale: 0.9 }}
              className="bg-black rounded-full p-1.5 xs:p-2 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-colors flex items-center justify-center ml-3 xs:ml-4"
            >
              <AiOutlineArrowUp className="text-white hover:text-black text-sm xs:text-xl rotate-45" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-2/3 h-full relative mt-8 md:mt-0 flex md:flex-row justify-center  "
        >
          {/* Kitchen Image Container */}
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.7 }}
            className="rounded-xl overflow-hidden relative"
          >
            <motion.img
              initial={{ filter: "brightness(0.8)" }}
              whileInView={{ filter: "brightness(1)" }}
              transition={{ duration: 1.2 }}
              src={kitchenImage1}
              alt="Kitchen"
              className="w-full h-auto xs:h-[300px] sm:h-[350px] md:h-[370px] md:w-[350px] lg:w-[450px] lg:h-[470px] 2xl:w-[600px] 2xl:h-[600px] 2xl:ml-20 object-cover"
            />

            {/* Search Button */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute top-3 xs:top-4 sm:top-5 right-3 xs:right-4 sm:right-5 md:right-0 md:top-3 lg:right-3 lg:top-5 xl:right-55 2xl:right-55 2xl:top-5"
            >
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#1F1E1E] w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center shadow-lg 2xl:w-15 2xl:h-15"
              >
                <AiOutlineSearch className="text-white text-sm xs:text-lg sm:text-xl rotate-90" />
              </motion.button>
            </motion.div>

            {/* Established Bubble */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute bottom-1 xs:bottom-4 sm:bottom-5 md:bottom-2 lg:bottom-2 right-3 xs:right-4 sm:right-5 md:right-4 lg:right-3 flex items-center text-white xl:text-gray-500 py-1 px-2 xl:bottom-20"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-[10px] xs:text-xs md:text-sm"
              >
                [ Established 2025 ]
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutWave;
