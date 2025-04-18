import React from "react";
import { motion } from "framer-motion";
import productBenifits from "../../assets/images/productBenifits.png";

const Benifits = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center bg-[#1F1E1E] text-white px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-10 md:mb-12 ml-30"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
            AUTOMATICALLY COOKS,
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-[#7B5D45]">
            GRILLS & REHEATS
          </h3>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
            FOR A SMARTER KITCHEN <br className="hidden sm:block" /> EXPERIENCE
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12 h-fit">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-5 md:space-y-6 w-full lg:w-1/2 xl:w-2/5 ml-30"
          >
            {[
              {
                number: "01",
                text: "Ultra-quiet operation at just 30 dB",
              },
              { number: "02", text: "Voice Recognition & App Control" },
              { number: "03", text: "Power-Saving Eco Mode" },
              { arrow: true, text: "Go to shop", highlighted: true },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                {benefit.arrow ? (
                  <motion.div
                    whileHover={{ scale: 1.1, borderColor: "#fff" }}
                    className="w-8 h-8 sm:w-10 sm:h-10 border border-[#7B5D45] rounded-full flex items-center justify-center mr-4 text-[#7B5D45] transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="rotate-45"
                    >
                      <path
                        d="M5 19L19 5M19 5H9M19 5V15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                ) : (
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-4 text-sm sm:text-base border border-gray-700">
                    {benefit.number}
                  </div>
                )}
                <p
                  className={`text-sm sm:text-base md:text-lg ${
                    benefit.highlighted ? "text-[#7B5D45]" : "text-white"
                  }`}
                >
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 xl:w-3/5 flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={productBenifits}
              alt="WAVE Smart Microwave"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benifits;
