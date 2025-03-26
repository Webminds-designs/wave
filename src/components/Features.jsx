import React from "react";
import { motion } from "framer-motion";
import ovenLanding2 from "../assets/images/no-background.png";
import small1 from "../assets/images/small1.png";
import small2 from "../assets/images/aboutUsOven.png";
import small3 from "../assets/images/small3.png";
import { TbPhotoSensor3 } from "react-icons/tb";
import { BiMobileVibration } from "react-icons/bi";
import { BiUserVoice } from "react-icons/bi";
import { GiGreenPower } from "react-icons/gi";

const Features = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      className="w-full bg-[#F4F5F0] py-12 px-4 md:px-8 lg:px-16"
    >
      {/* Top Row */}
      <motion.div
        initial={{ opacity: 1 }}
        className="flex flex-col md:flex-row items-center justify-between mb-12"
      >
        {/* Left Label */}
        <motion.p
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs md:text-sm uppercase font-semibold text-gray-500 tracking-wide mb-2 md:mb-0"
        >
          /Features
        </motion.p>

        {/* Right Title */}
        <motion.h2
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-2xl lg:text-[48px] font-bold text-black text-right"
        >
          THE FUTURE OF <br /> MODERN COOKING
        </motion.h2>
      </motion.div>

      {/* Middle Section: Oven with Callouts */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative flex items-center justify-center mb-12 max-w-4xl mx-auto"
      >
        {/* Oven Image */}
        <img src={ovenLanding2} alt="OvenImage" className="w-full h-auto" />

        {/* ==================== CALLOUTS (Outside Oven) ==================== */}

        {/* Top-Left Callout */}
        <div className="absolute flex items-center md:top-[15%] top-[2%] md:-left-8 - left-0">
          {" "}
          <div className="bg-white text-black px-4 py-2 rounded-full text-sm shadow-md flex justify-start items-center gap-2">
            <TbPhotoSensor3 className="text-lg" />
            <p>Auto Sensor Cooking</p>
          </div>
          <div className="absolute hidden md:flex -bottom-1 -right-2.5">
            {/* Circle near oven */}
            {/* Horizontal line */}
            <div className="h-[8px] w-[20px] bg-white  rotate-45" />
            {/* Circle near oven */}
            <div className="md:w-5 w-3 md:h-5 h-3 bg-gray-800 outline-8 outline-white rounded-full -bottom-6 absolute -right-4" />
          </div>
        </div>

        {/* Top-Right Callout */}
        <div className="absolute flex items-center top-[15%]  right-0">
          <div className="absolute  -bottom-1 -left-2.5 hidden md:flex">
            {/* Circle near oven */}
            <div className="md:w-5 w-3 md:h-5 h-3 bg-gray-800 outline-8 outline-white rounded-full -bottom-6 absolute -left-4" />

            {/* Horizontal line */}
            <div className="h-[8px] w-[20px] bg-white -rotate-45 " />
          </div>
          {/* Text label */}
          <div className="bg-white text-black px-4 py-2 rounded-full text-sm shadow-md flex justify-start items-center gap-2">
            <BiMobileVibration className="text-lg" />
            <p>App Control / IoT</p>
          </div>
        </div>

        {/* Bottom-Left Callout */}
        <div className="absolute flex items-center bottom-[50%] md:bottom-[30%] md:left-0 -left-2">
          <div className="bg-white text-black px-4 py-2 rounded-full text-sm shadow-m flex justify-start items-center gap-2">
            <BiUserVoice className="text-lg" />
            <p>Voice Recognition</p>
          </div>
          <div className="absolute -bottom-1 -right-2.5  hidden md:flex">
            {/* Horizontal line */}
            <div className="h-[8px] w-[20px] bg-white  rotate-45" />
            {/* Circle near oven */}
            <div className="md:w-5 w-3 md:h-5 h-3 bg-gray-800 outline-8 outline-white rounded-full -bottom-6 absolute -right-4 " />
          </div>
        </div>

        {/* Bottom-Right Callout */}
        <div className="absolute flex items-center bottom-[30%] md:bottom-[20%] right-0">
          <div className="absolute -bottom-1 -left-2.5 hidden md:flex">
            {/* Circle near oven */}
            <div className="md:w-5 w-3 md:h-5 h-3 bg-gray-800 outline-8 outline-white rounded-full -bottom-6 absolute -left-4" />

            {/* Horizontal line */}
            <div className="h-[8px] w-[20px] bg-white -rotate-45 " />
          </div>
          <div className="bg-white text-black px-4 py-2 rounded-full text-sm shadow-md flex justify-start items-center gap-2">
            <GiGreenPower className="text-lg" />
            <p>Power-Saving Eco Mode</p>
          </div>
        </div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 1 }}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
      >
        {/* Left: Three small circular images (or icons) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center"
          >
            <img
              src={small1}
              alt="Feature 1"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center"
          >
            <img
              src={small2}
              alt="Feature 2"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center"
          >
            <img
              src={small3}
              alt="Feature 3"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Middle: Text block */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-lg"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
            Sleek and Modern Design
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Minimalist, elegant, and compact—perfect for any kitchen counter top
            without compromising on power.
          </p>
        </motion.div>

        {/* Right: Smaller product image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="w-28 h-20 md:w-56 mb-20 md:h-24 bg-black flex items-center justify-center"
        >
          <img src={small3} alt="Small Oven" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Features;
