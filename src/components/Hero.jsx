import React from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowDown } from "react-icons/hi";
import ovenLanding from "../assets/images/no-background.png"; // Adjust the path as necessary
import landingImage from "../assets/images/background image.jpg"; // Adjust the path as necessary
import heroCard1 from "../assets/images/heroCard1.png"; // Adjust the path as necessary
import heroCard2 from "../assets/images/heroCard2.png"; // Adjust the path as necessary

function Hero() {
  return (
    <motion.section
      className="h-screen w-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #111827, #374151, #1f2937)",
        backgroundImage: `url(${landingImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Large Background Text */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[14rem] font-extrabold text-white uppercase z-0 pointer-events-none"
        style={{ letterSpacing: "0.25em", marginTop: "-40vh" }}
      >
        Wave
      </motion.h1>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative flex flex-col items-center justify-center h-full w-full z-10 px-4"
      >
        <div className="relative flex flex-col items-center justify-center h-full w-full z-10 px-4">
          {/* Hero Cards */}
          <img src={heroCard1} alt="" className="absolute left-70 mt-50" />
          {/* Microwave Image - Fully Responsive */}

          
          <div className="md:w-4 w-3 md:h-4 h-3 z-10 bg-white outline-[12px] outline-[#313131] rounded-full absolute mt-60 mr-60" />
          <div className="w-[150px] h-px bg-gray-300 my-4 absolute mt-65 mr-100" />
          <div className="w-[140px] h-px bg-gray-300 my-4 absolute mt-48 -ml-167 rotate-30" />
          <img
            src={ovenLanding}
            alt="Wave Microwave"
            className="w-[90%] sm:w-[90%] md:w-[90%] lg:w-[80%] xl:w-[40%] object-contain mt-10 sm:mt-20 md:mt-10"
          />

          <img src={heroCard2} alt="" className="absolute right-69 mt-70" />

          <div className="md:w-4 w-3 md:h-4 h-3 z-10 bg-white outline-[12px] outline-[#313131] rounded-full absolute mt-30 -mr-65" />
          <div className="w-[170px] h-px bg-gray-300 my-4 absolute mt-35 -mr-110" />
          <div className="w-[140px] h-px bg-gray-300 my-4 absolute mt-52 -mr-182 rotate-30" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full h-fit absolute bottom-10 gap-4">
          {/* Bottom Badge or Stats */}
          <motion.div
            className="left-4 sm:left-10 md:left-20 lg:left-40 text-white text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.p
              className="text-xs sm:text-sm md:text-md lg:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.span
                className="text-base sm:text-lg md:text-3xl lg:text-4xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 1.2 }}
              >
                12K+
              </motion.span>{" "}
              reviews |
            </motion.p>
            <motion.p
              className="text-xs md:text-sm lg:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              10,000+ Happy Kitchens
            </motion.p>
          </motion.div>

          {/* Tags */}
          <motion.div
            className="transform translate-x-0 md:-translate-x-1/4 lg:-translate-x-1/2 flex flex-col gap-2 sm:gap-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div className="flex flex-row gap-2 sm:gap-3">
              <TagButton text="Microwave" />
              <TagButton text="Energy Efficient" />
            </motion.div>
            <motion.div className="flex flex-row gap-2 sm:gap-3 ml-4 sm:ml-6 md:ml-10">
              <TagButton text="Smart Kitchen" />
              <TagButton text="Innovative" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator - hidden on mobile and tablet */}
        <motion.button
          className="absolute -bottom-45 z-10 left-1/2 transform -translate-x-1/2 w-65 h-65 rounded-full bg-[#F4F5F0] hidden md:flex justify-center items-baseline transition-colors md:w-55 md:h-55 xl:w-65 xl:h-65"
          whileHover={{
            scale: 1.2,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
        >
          {/* Example arrow icon */}
          <div className="flex flex-col items-center">
            <HiOutlineArrowDown className="w-7 h-7 text-black transform md:mt-3 mt-5 md:w-6 md:h-6 xl:w-7 xl:h-7" />
            <p className="text-sm lg:text-xs xl:text-sm">Learn More</p>
          </div>
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

// Reusable Tag Button Component
const TagButton = ({ text }) => (
  <motion.div
    className="w-[120px] sm:w-[120px] md:w-[150px] h-[40px] sm:h-[45px] md:h-[50px] bg-[#565656] border border-gray-400 rounded-full flex justify-center items-center text-sm md:text-base text-white"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 1.2 }}
    whileHover={{ scale: 1.05, backgroundColor: "#6b6b6b" }}
  >
    {text}
  </motion.div>
);

export default Hero;
