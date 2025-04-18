import React from "react";
import { motion } from "framer-motion";
import ovenImage from "../../assets/images/landingImage.png";
import kitchenImage from "../../assets/images/GalleryKitchen.png";

const Gallery = () => {
  return (
    <section className="flex flex-col w-screen h-screen md:flex-row px-6 md:px-10 lg:px-26 py-16 md:py-20 gap-5 ml-20">
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
          className="rounded-[50px] w-full"
        />
      </motion.div>
      <div className="w-full md:w-3/5 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-5 ml-20"
        >
          <p className="text-lg md:text-xl font-bold mb-2 text-white">
          Minimalist Elegance for Every Kitchen. <br /> Compact design, modern aesthetics, and <br /> smart controls—all in one
            appliance.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={kitchenImage}
            alt="WAVE Smart Microwave in kitchen"
            className="rounded-lg w-2xl object-cover mt-40 -ml-70"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;