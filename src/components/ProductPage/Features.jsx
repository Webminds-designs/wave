import React from "react";
import { motion } from "framer-motion";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import productFeatures from "../../assets/images/productFeatures.png";

const Features = () => {
  return (
    <section
      className="flex flex-col justify-center md:flex-row px-6 md:px-10 lg:px-16 py-16 md:py-20 gap-8 md:gap-40 w-full h-screen"
      style={{ backgroundColor: "#1F1E1E" }}
    >
      <div className="w-full md:w-2xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-full overflow-hidden"
        >
          <img
            src={productFeatures}
            alt="Kitchen with WAVE microwave"
            className="w-full h-auto object-cover rounded-full"
          />
        </motion.div>
      </div>
      <div className="relative w-full md:w-fit py-5 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 mt-10"
        >
          TO COOK SMARTER,
          <br />
          FASTER, AND GREENER.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute bottom-45 space-y-8"
        >
          {[
            "Sensors Detect Food Type and Position",
            "Adjusts Power Dynamically",
            "Reduces Energy Waste",
            "Even Heating from All Sides",
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="flex items-center"
            >
              <div className="rounded-full bg-white flex items-center justify-center mr-4 p-1">
                <IoCheckmarkCircleOutline className="w-5 h-5 text-[#1F1E1E]" />
              </div>
              <p className="text-sm md:text-base">{feature}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
