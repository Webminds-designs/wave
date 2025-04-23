import React from "react";
import productBenefits from "../../assets/images/productBenefits.png";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

const Benefits = () => {
  // Array of benefits with their corresponding numbers
  const benefits = [
    { number: "01", text: "Ultra-quiet operation at just 30 dB" },
    { number: "02", text: "Voice Recognition & App Control" },
    { number: "03", text: "Power-Saving Eco Mode" },
  ];

  return (
    <section
      className="w-screen min-h-screen bg-[#1F1E1E] py-10 xs:py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 
                 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-16 
                 flex flex-col md:flex-row items-center justify-center 
                 overflow-hidden"
    >
      {/* Text Section - Takes full width on mobile, half on larger screens */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex flex-col 
                   items-center md:items-start justify-between 
                   text-white 
                   gap-6 xs:gap-8 sm:gap-10 
                   order-1 
                   mt-8 md:mt-0 
                   px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 lg:md:ml-30"
      >
        {/* Heading with responsive typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[44px] 
                     font-bold 
                     text-center md:text-left 
                     leading-tight"
        >
          AUTOMATICALLY COOKS,
          <br />
          <span className="text-[#7B5D45] inline-block">GRILLS & REHEATS</span>
          <br className="hidden sm:block" /> FOR A SMARTER KITCHEN
          <br className="hidden md:block" /> EXPERIENCE
        </motion.div>

        {/* Benefits List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col 
                     gap-4 xs:gap-5 sm:gap-6 
                     text-sm xs:text-base sm:text-lg md:text-xl lg:text-[20px] 
                     font-normal 
                     w-full 
                     mt-2 xs:mt-3 sm:mt-4 md:mt-6
                     mx-auto"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center 
                         gap-2 xs:gap-3 
                         w-full
                         justify-center md:justify-start"
            >
              <div className="flex items-center gap-1 xs:gap-2 flex-shrink-0">
                <span className="text-lg xs:text-xl sm:text-2xl font-bold text-white">
                  {benefit.number}
                </span>
                <div className="h-[1px] w-6 xs:w-8 sm:w-10 md:w-12 bg-white"></div>
              </div>
              <div className="break-words">{benefit.text}</div>
            </motion.div>
          ))}

          {/* Call to action button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-2 xs:mt-3 sm:mt-4 md:mt-6 w-full flex justify-center md:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center 
                         gap-2 xs:gap-3 sm:gap-4 
                         text-[#7B5D45] hover:text-white transition-colors 
                         group"
            >
              <motion.div
                whileHover={{ borderColor: "white" }}
                className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 
                           rounded-full 
                           border border-[#7B5D45] group-hover:border-white 
                           flex items-center justify-center 
                           transition-colors"
              >
                <AiOutlineArrowRight className="text-lg xs:text-xl" />
              </motion.div>
              <span className="text-base xs:text-lg sm:text-xl lg:text-[20px]">
                Go to shop
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Image Section - Takes full width on mobile, half on larger screens */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 
                   flex justify-center items-center 
                   order-2
                   mt-12 xs:mt-14 sm:mt-16 md:mt-0"
      >
        <img
          src={productBenefits}
          alt="Wave Microwave Benefits"
          className="w-[80%] xs:w-[75%] sm:w-[70%] md:w-[90%] lg:w-[85%] xl:w-[80%] 
                     max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-xl 
                     object-contain"
        />
      </motion.div>
    </section>
  );
};

export default Benefits;
