import React from "react";
import { motion } from "framer-motion";
import ovenImage from "../../assets/images/landingImage.png";
import kitchenImage from "../../assets/images/GalleryKitchen.png";

const Gallery = () => {
  return (
    <section
      className="flex flex-col w-screen h-screen md:flex-row px-6 sm:px-10 md:px-20 lg:px-26 py-16 md:py-20 gap-5 ml-24"
    >
      {/* Left Section: Oven Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full md:w-3/5 mb-8 md:mb-0"
      >
        <img
          src={ovenImage}
          alt="WAVE Smart Microwave"
          className="rounded-2xl w-full h-auto object-cover"
        />
      </motion.div>

      {/* Right Section: Text and Kitchen Image */}
      <div className="w-full md:w-3/5 flex flex-col justify-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <p className="text-sm sm:text-lg md:text-xl font-bold mb-4 text-white">
            Minimalist Elegance for Every Kitchen. <br className="hidden md:block" /> 
            Compact design, modern aesthetics, and <br className="hidden md:block" /> 
            smart controls—all in one appliance.
          </p>
        </motion.div>

        {/* Kitchen Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mt-8 md:mt-16"
        >
          <img
            src={kitchenImage}
            alt="WAVE Smart Microwave in kitchen"
            className="rounded-lg w-4/5 h-auto object-cover"
            style={{
              transform: "translateX(-40%)", // Dynamic offset for smaller screens
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;