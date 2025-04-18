import React from "react";
import { motion } from "framer-motion";
import iphoneBack from "../../assets/images/iphoneBack.png";
import iphoneDownload from "../../assets/images/iphoneDownload.png";
import wave from "../../assets/images/wave.png";

const Download = () => {
  return (
    <section className="text-white py-16 w-screen h-screen relative">
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
              {/* You can replace these with the actual images */}
              <img
                src={iphoneBack}
                alt="iPhone background"
                className="absolute transform -translate-y-6 z-10 w-64 md:w-[100rem]"
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
            className="w-full md:w-2/5 text-left absolute top-[30rem] left-0"
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
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="bg-white rounded-3xl flex items-center justify-center px-6 py-3"
                >
                  <div className="flex items-center">
                    <span className="text-black mr-3">
                      <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="currentColor"
                      >
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                      </svg>
                    </span>
                    <div className="flex flex-col text-black">
                      <span className="text-xs">Download on the</span>
                      <span className="text-lg font-semibold leading-tight">
                        App Store
                      </span>
                    </div>
                  </div>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="bg-white rounded-3xl flex items-center justify-center px-6 py-3"
                >
                  <div className="flex items-center">
                    <span className="text-black mr-3">
                      <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="currentColor"
                      >
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
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
