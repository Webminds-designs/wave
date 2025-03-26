import React from "react";
import small1 from "../assets/images/small1.png";
import small2 from "../assets/images/aboutUsOven.png";
import small3 from "../assets/images/small3.png";
import productsBack from "../assets/images/productsBack.png";
import { AiOutlineArrowUp } from "react-icons/ai";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <motion.div
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.1 }}
      className="bg-[#1A1A1A] text-white w-full sm:min-h-screen py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-24 
                 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-24 
                 rounded-[20px] xs:rounded-[30px] sm:rounded-[35px] md:rounded-[40px] lg:rounded-[45px] xl:rounded-[50px]"
    >
      {/* Top Labels */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xs xs:text-sm uppercase text-gray-400 mb-1 xs:mb-2 tracking-wide 
                  mt-4 xs:mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16 2xl:mt-20"
      >
        /Products
      </motion.p>

      <div
        className="mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 
                     mt-2 xs:mt-3 sm:mt-4 md:mt-5 lg:mt-6 
                     flex flex-col sm:flex-row justify-between gap-4 sm:gap-0"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[50px] 2xl:text-[60px] mb-2 sm:mb-0"
        >
          WAVE MICROWAVE <br /> OVEN BY WEBMINDS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xs xs:text-sm sm:text-[14px] md:text-base lg:text-lg xl:text-xl 
                    text-gray-300 max-w-full sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl leading-relaxed"
        >
          Blending innovation with practicality, Wave offers a{" "}
          <br className="hidden md:block" /> microwave that's built to
          complement your modern <br className="hidden md:block" /> kitchen with
          superior technology and timeless style.
        </motion.p>
      </div>

      {/* Main Container with Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative w-full xs:w-[95%] sm:w-[90%] md:w-[95%] lg:w-[90%] xl:w-[95%] 2xl:w-[80rem] 
                  h-[20rem] xs:h-[25rem] sm:h-[30rem] md:h-[35rem] lg:h-[40rem] xl:h-[45rem] 2xl:h-[50rem] 
                  mx-auto rounded-xl xs:rounded-2xl sm:rounded-2xl md:rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `url(${productsBack})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content Area */}
        <div
          className="relative z-10 p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 
                       flex flex-col md:flex-row items-start md:items-end justify-between 
                       gap-3 xs:gap-4 sm:gap-5 md:gap-6"
        >
          {/* Product Specs (Translucent "Glass" Panel) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="backdrop-blur-sm mt-2 xs:mt-3 sm:mt-10 md:mt-20 lg:mt-30 xl:mt-40 2xl:mt-50 
                      bg-white/35 
                      p-3 xs:p-4 sm:p-5 md:p-6 
                      rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-3xl 
                      w-full sm:w-[80%] md:w-[25rem] lg:w-[28rem] xl:w-[30rem] 
                      text-xs xs:text-sm md:text-base lg:text-lg 
                      leading-relaxed 
                      space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 
                      text-black"
          >
            {[
              { label: "Dimension", value: '18" x 14" x 10"' },
              { label: "Weight", value: "22 lbs" },
              { label: "Power Consumption", value: "900 watt" },
              { label: "Modes", value: "Defrost, Reheat, Cook, Grill" },
              { label: "Noise Level", value: "30 dB" },
              { label: "Warranty", value: "2 years" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="space-y-1 xs:space-y-1.5 sm:space-y-2"
              >
                <div className="flex justify-between">
                  <div>{item.label}</div>
                  <div>{item.value}</div>
                </div>
                {index < 5 && <hr className="text-white" />}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Buy Now Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-1 xs:bottom-4 sm:bottom-5 md:bottom-1 lg:bottom-1 xl:bottom-1 
                    right-3 xs:right-4 sm:right-5 md:right-4 lg:right-8 xl:right-0"
        >
          <div className="flex gap-0">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#e5e5e5" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black hidden xl:block
                       text-xs xs:text-sm sm:text-base md:text-lg 
                       font-semibold 
                       px-3 xs:px-4 sm:px-5 md:px-6 
                       py-1.5 xs:py-2 sm:py-2.5 md:py-3 
                       rounded-full hover:bg-gray-200 transition-colors"
            >
              Buy Now - $158.99
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "#e5e5e5",
                rotate: 45,
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-white rounded-full 
                       p-1 xs:p-1.5 sm:p-2 
                       w-6 h-6 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 
                       ml-2 xs:ml-3 sm:ml-4 
                       transition-colors flex items-center justify-center"
            >
              <AiOutlineArrowUp
                className="text-black 
                                         text-sm xs:text-base sm:text-lg md:text-xl 
                                         rotate-45"
              />
            </motion.button>
          </div>
        </motion.div>

        {/* Small circular images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="absolute bottom-3 xs:bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-7 xl:bottom-8 
                    left-3 xs:left-4 sm:left-6 md:left-8 lg:left-10 
                    flex items-center 
                    gap-2 xs:gap-3 sm:gap-4"
        >
          {[small1, small2, small3].map((img, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 1 + index * 0.15 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
                        rounded-full overflow-hidden 
                        flex items-center justify-center 
                        bg-white/20 backdrop-blur-sm"
            >
              <img
                src={img}
                alt={`Feature ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Products;
