import React from "react";
import { motion } from "framer-motion";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import productFeatures from "../../assets/images/productFeatures.png";

const Features = () => {
  const features = [
    "Sensors detect food type & position",
    "Adjusts power dynamically",
    "Reduces energy waste",
    "Even heating from all sides",
  ];

  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen
                    px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 
                    py-10 sm:py-12 md:py-16 lg:py-20 gap-8 md:gap-20"
    >
      {/* Image Column */}
      <div className="w-full sm:w-11/12 md:w-5/12 lg:w-2/5 xl:w-1/2 mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-full overflow-hidden shadow-xl w-full aspect-square"
        >
          <img
            src={productFeatures}
            alt="Kitchen with WAVE microwave"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>

      {/* Content Column */}
      <div className="relative w-full sm:w-11/12 md:w-6/12 lg:w-3/5 xl:w-1/2">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          TO COOK SMARTER,<br />
          FASTER, AND GREENER.
        </motion.h2>

        <motion.div
          className="space-y-4 md:space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="flex items-center justify-center bg-white rounded-full p-2 min-w-[36px] min-h-[36px]">
                <IoCheckmarkCircleOutline className="w-5 h-5 text-gray-900" />
              </div>
              <p className="text-base sm:text-lg md:text-xl text-white">{feat}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
