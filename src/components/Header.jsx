import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/Logo.png";
import { AiOutlineArrowUp, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [activeNav, setActiveNav] = useState("home");
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Set active nav based on current path
    const path = location.pathname.replace('/', '');
    setActiveNav(path || 'home');
  }, [location]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setActiveNav(sectionId);
    setMobileMenuOpen(false);

    // Navigate to the corresponding page
    if (sectionId === 'home') {
      navigate('/');
    } else {
      navigate(`/${sectionId}`);
    }
  };



  return (
    <div>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 md:p-6 lg:p-8 z-30 bg-black/20 backdrop-blur-md"
      >
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 sm:gap-3"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={logo}
            alt="Logo"
            className="w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-6"
          />
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-white text-lg sm:text-xl font-bold"
          >
            WAVE
          </motion.div>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:flex gap-8 lg:gap-16 xl:gap-24 text-white"
        >
          {["home", "about", "features", "FAQ"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item}`}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
              className={`relative hover:text-gray-300 transition-colors text-sm lg:text-base after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 ${activeNav === item ? "after:w-full" : "after:w-0"
                }`}
              onClick={(e) => handleNavClick(e, item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
          ))}
        </motion.nav>

        {/* Action Buttons */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-0"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#e5e5e5" }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white text-black text-xs sm:text-sm font-semibold transition-colors"
          >
            Explore
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#e5e5e5" }}
            whileTap={{ scale: 0.9, rotate: 45 }}
            className="hidden sm:flex bg-white rounded-full p-1.5 sm:p-2 w-8 h-8 sm:w-10 sm:h-10 ml-2 sm:ml-4 transition-colors items-center justify-center"
          >
            <AiOutlineArrowUp className="text-black text-lg sm:text-xl rotate-45" />
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden bg-white/20 backdrop-blur-sm rounded-full p-2 flex items-center justify-center ml-2"
          >
            {mobileMenuOpen ? (
              <AiOutlineClose className="text-white text-xl" />
            ) : (
              <AiOutlineMenu className="text-white text-xl" />
            )}
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? "100vh" : 0,
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md z-20 pt-20 ${mobileMenuOpen ? "block" : "hidden"
          }`}
      >
        <div className="flex flex-col items-center justify-center gap-8 p-6 text-white">
          {["home", "about", "features", "FAQ"].map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              whileHover={{ scale: 1.1 }}
              onClick={(e) => handleNavClick(e, item)}
              className={`relative text-xl font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 ${activeNav === item ? "after:w-full text-white" : "after:w-0 text-gray-400"
                }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-8 py-3 rounded-full bg-white text-black font-semibold"
          >
            Explore
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
