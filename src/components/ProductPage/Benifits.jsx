import React from "react";
import { motion } from "framer-motion";
import productBenefits from "../../assets/images/productBenifits.png";

const Benefits = () => {
  const items = [
    { number: "01", text: "Ultra-quiet operation at just 30 dB" },
    { number: "02", text: "Voice Recognition & App Control" },
    { number: "03", text: "Power-Saving Eco Mode" },
    { arrow: true, text: "Go to shop", highlighted: true },
  ];

  return (
    <section className="w-full min-h-screen flex flex-col justify-center bg-[#1F1E1E] text-white px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl flex flex-col justify-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12 md:mb-16 lg:mb-20 w-full px-2 sm:px-4 md:px-8 lg:px-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
            AUTOMATICALLY COOKS,
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-[#7B5D45] mt-2">
            GRILLS & REHEATS
          </h3>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase mt-2">
            FOR A SMARTER KITCHEN <br className="hidden sm:block" /> EXPERIENCE
          </p>
        </motion.div>

        {/* Content Rows */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 sm:gap-12 md:gap-16 lg:gap-64">
          {/* List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/5 space-y-6 sm:space-y-8 md:space-y-5 px-2 sm:px-4 md:px-6 lg:px-10"
          >
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                {item.arrow ? (
                  <motion.div
                    whileHover={{ scale: 1.1, borderColor: "#fff" }}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border-2 border-[#7B5D45] rounded-full flex items-center justify-center mr-6 text-[#7B5D45] transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="rotate-45"
                    >
                      <path
                        d="M5 19L19 5M19 5H9M19 5V15"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                ) : (
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mr-6 text-base sm:text-lg md:text-xl border-2 border-gray-700">
                    {item.number}
                  </div>
                )}
                <p
                  className={`text-base sm:text-lg md:text-xl lg:text-2xl font-medium ${
                    item.highlighted ? "text-[#7B5D45]" : "text-white"
                  }`}
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-3/5 xl:w-3/5 flex justify-center lg:justify-end mt-10 lg:mt-0 px-2 sm:px-3 md:px-4 lg:px-6"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={productBenefits}
              alt="WAVE Smart Microwave"
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
