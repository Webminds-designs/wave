import React from "react";
import { motion } from "framer-motion";

// Adjust the paths as necessary
import ovenLanding from "../assets/images/no-background.png";
import landingImage from "../assets/images/background image.jpg";
import card1 from "../assets/images/image20.png";
import card2 from "../assets/images/image23.png";

function Hero2() {
  return (
    <motion.section
      className="min-h-screen md:h-screen w-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #111827, #374151, #1f2937)",
        backgroundImage: `url(${landingImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Large WAVE text in the background */}
      <motion.div
        className="w-screen h-full absolute top-0 left-0 items-start mt-10 md:mt-40 justify-center z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div
          className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[18rem]
                        font-extrabold text-white uppercase pointer-events-none tracking-widest text-center"
        >
          WAVE
        </div>
      </motion.div>

      {/* Container for all images (mobile-first: stacked, desktop: absolute overlap) */}
      <motion.div
        className="w-screen h-full absolute top-44 left-0 flex flex-col items-center justify-start z-10 md:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="relative w-full mx-auto h-fit mt-0 md:mt-40">
          {/* Left image: stacked on mobile, absolute on desktop */}
          <motion.img
            src={card2}
            alt="Wave Microwave"
            className="
              w-[80%]
              md:w-[30%]
              object-contain
              mx-auto
              mb-4
              md:mb-0
              md:absolute
              md:left-44
              md:top-1/2
              md:-translate-y-1/2
              z-20
            "
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          />

          {/* Center (main) image: stacked on mobile, centered on desktop */}
          <motion.img
            src={ovenLanding}
            alt="Wave Microwave"
            className="
              w-[80%]
              md:w-[42%]
              object-contain
              mx-auto
              mb-4
              md:mb-0
              relative
              z-10
            "
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
          />

          {/* Right image: stacked on mobile, absolute on desktop */}
          <motion.img
            src={card1}
            alt="Wave Microwave"
            className="
              w-[80%]
              md:w-[30%]
              object-contain
              mx-auto
              mb-4
              md:mb-0
              md:absolute
              md:right-44
              md:top-1/2
              md:-translate-y-1/2
              z-20
            "
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>
      </motion.div>

      {/* Bottom content - Full width */}
      <motion.div
        className="w-full absolute bottom-0 left-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-2 sm:px-4 md:px-8">
          {/* Left side: avatar + review stats */}
          <div className="flex items-center space-x-3">
            {/* <img
              src={avatarImg}
              alt="Reviewer Avatar"
              className="w-10 h-10 rounded-full object-cover"
            /> */}
            <div className="leading-tight text-white">
              <div className="text-sm sm:text-base font-semibold">
                12K+ Reviews
              </div>
              <div className="text-xs sm:text-sm text-gray-300">
                10000+ Happy Kitchens
              </div>
            </div>
          </div>

          {/* Right side: pills/tags in two rows */}
          <div className="flex flex-col items-end gap-2 p-8">
            {/* First row */}
            <div className="flex gap-2">
              <span className="bg-white/30 text-white text-xs sm:text-sm px-4 py-1 border-[1px] border-white rounded-full">
                Microwave
              </span>
              <span className="bg-white/30 text-white text-xs sm:text-sm px-4 py-1 border-[1px] border-white rounded-full">
                Energy Efficient
              </span>
            </div>
            {/* Second row */}
            <div className="flex gap-2">
              <span className="bg-white/30 text-white text-xs sm:text-sm px-4 py-1 border-[1px] border-white rounded-full">
                Smart Tech
              </span>
              <span className="bg-white/30 text-white text-xs sm:text-sm px-4 py-1 border-[1px] border-white rounded-full">
                Innovative
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Hero2;
