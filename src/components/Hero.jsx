import React from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowDown } from "react-icons/hi";
import ovenLanding from "../assets/images/hero_tagging.png"; // Adjust the path as necessary
import landingImage from "../assets/images/background image.jpg"; // Adjust the path as necessary

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
        {/* Microwave Image - Fully Responsive */}
        <img
          src={ovenLanding}
          alt="Wave Microwave"
          className="w-[90%] sm:w-[90%] md:w-[90%] lg:w-[80%] xl:w-[80%] object-contain mt-10 sm:mt-20 md:mt-10"
        />

        {/* Bottom Badge or Stats */}
        <motion.div
          className="absolute bottom-10 sm:bottom-12 md:bottom-16 left-4 sm:left-10 md:left-20 lg:left-40 text-white text-left"
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
          className="absolute bottom-4 sm:bottom-6 md:bottom-10 right-4 md:right-10 lg:right-20 transform translate-x-0 md:-translate-x-1/4 lg:-translate-x-1/2 flex flex-col gap-2 sm:gap-3"
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

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-white rounded-full flex items-center justify-center cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <motion.div
            className="w-12 h-12 bg-black rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                delay: 0.2,
              }}
            >
              <HiOutlineArrowDown className="text-2xl text-white" />
            </motion.div>
          </motion.div>
        </motion.div>
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