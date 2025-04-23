import React from "react";
import { motion } from "framer-motion";
import { AiOutlineCheck } from "react-icons/ai";
import productFeatures from "../../assets/images/productFeatures.png";

const Features = () => {
  // Feature items with tick marks
  const featureItems = [
    "Sensors Detect Food Type and Position",
    "Adjusts Power Dynamically",
    "Reduces Energy Waste",
    "Even Heating from All Sides",
  ];

  return (
    <section className="w-screen min-h-screen flex flex-col md:flex-row justify-center items-center gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 
                          py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 
                          px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 
                          bg-[#1F1E1E]">
      {/* image section - with animation */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex justify-center items-center"
      >
        <img
          src={productFeatures}
          alt="Wave Microwave Features"
          className="w-[85%] xs:w-[80%] sm:w-[75%] md:w-[80%] lg:w-[75%] xl:w-[70%] 
                     max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 
                     object-contain mt-4 md:mt-0"
        />
      </motion.div>

      {/* text section */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-col justify-between items-start 
                   gap-8 xs:gap-10 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-72 
                   w-full md:w-1/2 
                   max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white 
                     text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[44px] 
                     font-bold leading-tight"
        >
          TO COOK SMARTER,
          <br /> FASTER, AND GREENER.
        </motion.div>

        {/* features with tick marks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col 
                     gap-3 xs:gap-3.5 sm:gap-4 md:gap-5 
                     text-white 
                     text-sm xs:text-base sm:text-lg md:text-xl lg:text-[20px]"
        >
          {featureItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="flex items-center gap-2 xs:gap-2.5 sm:gap-3"
            >
              <div className="bg-white rounded-full 
                              w-5 h-5 xs:w-5.5 xs:h-5.5 sm:w-6 sm:h-6 
                              flex items-center justify-center 
                              flex-shrink-0">
                <AiOutlineCheck className="text-black 
                                          text-xs xs:text-sm sm:text-base md:text-lg" />
              </div>
              <div className="break-words">{item}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Features;
