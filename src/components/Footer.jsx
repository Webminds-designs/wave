import React from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      className="bg-black text-white 
                          py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 
                          px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 
                          overflow-hidden"
    >
      <div
        className="max-w-7xl mx-auto 
                          flex flex-col md:flex-row 
                          items-center md:items-start 
                          justify-between 
                          gap-8 md:gap-4"
      >
        {/* Left Section - Logo & Copyright */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left w-full md:w-auto"
        >
          <h1
            className="text-[50px] xs:text-[70px] sm:text-[90px] md:text-[100px] lg:text-[150px] xl:text-[180px] 
                                  font-bold leading-none 
                                  tracking-tight"
          >
            WAVE
          </h1>
          <p
            className="text-gray-400 
                                mt-0 xs:mt-1 sm:mt-2 
                                text-xs xs:text-sm sm:text-base lg:text-lg"
          >
            &copy; 2025 WAVE All Rights Reserved
          </p>
        </motion.div>

        {/* Right Section - Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-row flex-wrap 
                              justify-center md:justify-end 
                              gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 
                              mt-4 md:mt-8 lg:mt-16 
                              w-full md:w-auto"
        >
          {/* Navigation */}
          <div className="w-[110px] xs:w-[130px] sm:w-auto">
            <h3
              className="font-semibold 
                                     text-sm xs:text-base sm:text-lg 
                                     mb-2 xs:mb-3 sm:mb-4"
            >
              Navigation
            </h3>
            <ul
              className="text-white 
                                     space-y-0.5 xs:space-y-1 sm:space-y-1.5 
                                     text-xs xs:text-sm sm:text-base"
            >
              <li>
                <a
                  href="#about"
                  className="hover:text-gray-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-gray-400 transition-colors"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-gray-400 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-gray-400 transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="w-[110px] xs:w-[130px] sm:w-auto">
            <h3
              className="font-semibold 
                                     text-sm xs:text-base sm:text-lg 
                                     mb-2 xs:mb-3 sm:mb-4"
            >
              Information
            </h3>
            <ul
              className="text-white 
                                     space-y-0.5 xs:space-y-1 sm:space-y-1.5 
                                     text-xs xs:text-sm sm:text-base"
            >
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Promotions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Information Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="w-[110px] xs:w-[130px] sm:w-auto">
            <h3
              className="font-semibold 
                                     text-sm xs:text-base sm:text-lg 
                                     mb-2 xs:mb-3 sm:mb-4"
            >
              Resources
            </h3>
            <ul
              className="text-white 
                                     space-y-0.5 xs:space-y-1 sm:space-y-1.5 
                                     text-xs xs:text-sm sm:text-base"
            >
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Forum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Partner
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Events
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Social Media Icons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex justify-center md:justify-end 
                          mt-6 xs:mt-8 sm:mt-10 md:mt-8 
                          gap-2 xs:gap-3 sm:gap-4 
                          max-w-7xl mx-auto"
      >
        {[
          { icon: <FaInstagram size="100%" />, href: "#" },
          { icon: <FaXTwitter size="100%" />, href: "#" },
          { icon: <FaYoutube size="100%" />, href: "#" },
          { icon: <FaFacebookF size="100%" />, href: "#" },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            whileHover={{ scale: 1.1, backgroundColor: "#4a4a4a" }}
            whileTap={{ scale: 0.95 }}
            className="p-1.5 xs:p-2 sm:p-2.5 
                                  bg-gray-700 hover:bg-gray-600 
                                  rounded-full 
                                  text-white 
                                  w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 
                                  flex items-center justify-center
                                  transition-colors"
          >
            <div className="w-[55%] xs:w-[60%] sm:w-[65%]">{social.icon}</div>
          </motion.a>
        ))}
      </motion.div>

      {/* Mobile-friendly additional links (optional) */}
      <div
        className="text-center text-gray-500 
                          text-[10px] xs:text-xs 
                          mt-6 xs:mt-8 md:mt-10 
                          flex flex-wrap justify-center gap-4 
                          md:hidden"
      >
        <a href="#" className="hover:text-white transition-colors">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Terms of Use
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
