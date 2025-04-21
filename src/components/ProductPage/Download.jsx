import React from "react";
import { motion } from "framer-motion";
import { FaApple } from "react-icons/fa";
import googleplay from "../../assets/images/googleplay.png";
import iphoneBack from "../../assets/images/iphoneBack.png";
import iphoneDownload from "../../assets/images/iphoneDownload.png";
import wave from "../../assets/images/wave.png";

const Download = () => {
  return (
    <section className="text-white py-16 w-screen h-screen relative mb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            WAVE APP – YOUR KITCHEN, CONNECTED
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Take control of your microwave from your phone with the Wave App,
            designed to give you a seamless and intuitive cooking
            experience—right at your fingertips.
          </p>
        </motion.div>

        {/* Phone Image and Download Section */}
        <div className="flex flex-col items-center justify-between mt-12 relative">
          {/* Phone Image */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full md:w-3/5 h-96 md:h-auto mb-12 md:mb-0 top-90"
          >
            {/* Phone images stacked - centered in container */}
            <div className="relative mx-auto w-full max-w-4xl h-full flex items-center justify-center">
              <img
                src={iphoneBack}
                alt="iPhone background"
                className="absolute transform -translate-y-6 z-10 w-64 lg:w-[100rem]"
              />
              <img
                src={iphoneDownload}
                alt="iPhone with Wave App"
                className="absolute z-20 w-64 md:w-[40rem]"
              />
            </div>
          </motion.div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 text-left absolute md:top-[30rem] left-0"
          >
            <div className="pl-0 md:pl-4">
              <h3 className="text-3xl md:text-4xl font-bold uppercase leading-tight">
                DOWNLOAD
                <br />
                WAVE
                <br />
                TODAY
              </h3>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                {/* App Store Button */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="bg-white rounded-3xl flex items-center justify-center px-6 py-3"
                >
                  <div className="flex items-center">
                    <span className="mr-3">
                      <FaApple size={26} className="text-black" />
                    </span>
                    <div className="flex flex-col text-black">
                      <span className="text-xs">Download on the</span>
                      <span className="text-lg font-semibold leading-tight">
                        App Store
                      </span>
                    </div>
                  </div>
                </motion.a>

                {/* Google Play Button */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="bg-white rounded-3xl flex items-center justify-center px-6 py-3"
                >
                  <div className="flex items-center">
                    <span className="mr-3">
                      <img src={googleplay} alt="" className="w-6 h-6"/>
                    </span>
                    <div className="flex flex-col text-black">
                      <span className="text-xs">Get it on</span>
                      <span className="text-lg font-semibold leading-tight">
                        Google Play
                      </span>
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave logo in bottom right corner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="absolute -bottom-10 right-4 md:-bottom-40 md:right-96 z-20"
      >
        <img
          src={wave}
          alt="Wave Logo"
          className="w-64 h-64 md:w-24 md:h-24 lg:w-[50rem] lg:h-[50rem] object-contain"
        />
      </motion.div>
    </section>
  );
};

export default Download;
