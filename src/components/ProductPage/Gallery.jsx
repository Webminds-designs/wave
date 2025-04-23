import React from "react";
import { motion } from "framer-motion";
import ovenImg from "../../assets/images/landingImage.png";
import kitchenImg from "../../assets/images/GalleryKitchen.png";

const Gallery = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-screen min-h-screen flex flex-col py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20"
    >
      {/* First row - stack on mobile, row on larger screens */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col md:flex-row justify-center items-center 
                  gap-6 xs:gap-8 sm:gap-10 md:gap-15 lg:gap-30 
                  px-4 xs:px-6 sm:px-8 md:px-10 lg:px-16 
                  mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-0"
      >
        {/* Oven image */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="w-full xs:w-[90%] sm:w-[80%] md:w-[65%] lg:w-[40%]"
        >
          <img 
            src={ovenImg} 
            alt="Wave Microwave Oven" 
            className="w-full h-auto object-contain rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl"
          />
        </motion.div>
        
        {/* Text description */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white text-base xs:text-lg sm:text-xl md:text-[13px] lg:text-[22px] 
                    flex flex-col justify-center 
                    text-center md:text-left 
                    mt-4 md:mt-0 
                    max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg"
        >
          Minimalist Elegance for Every Kitchen. <br className="hidden sm:block" /> 
          Compact design, modern aesthetics, and <br className="hidden sm:block" /> 
          smart controls—all in one appliance.
        </motion.div>
      </motion.div>

      {/* Second row - kitchen image */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex justify-center items-center 
                  w-full
                  px-4 xs:px-6 sm:px-8 md:px-10 lg:px-16 
                  mt-0 xs:mt-0 sm:mt-0 md:-mt-20 lg:-mt-10 
                  ml-0 xs:ml-0 sm:ml-0 md:ml-20 lg:ml-40"
      >
        <img 
          src={kitchenImg} 
          alt="Modern Kitchen with Wave Microwave" 
          className="w-full xs:w-[95%] sm:w-[90%] md:w-[65%] lg:w-[40%] 
                     h-auto object-contain 
                     rounded-lg xs:rounded-xl sm:rounded-2xl"
        />
      </motion.div>
    </motion.div>
  );
};

export default Gallery;