import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ovenImage from "../../assets/images/no-background.png";

const Hero = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });
  const imgContainerRef = useRef(null);
  const [lens, setLens] = useState({
    visible: false,
    x: 0,
    y: 0,
  });

  const LENS_SIZE = 150; // diameter of magnifier in px
  const ZOOM_FACTOR = 2; // 2× magnification

  // Update window size on resize
  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mouse move inside image container
  const handleMouseMove = (e) => {
    const rect = imgContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Clamp so the lens stays fully inside the image
    const clampedX = Math.max(
      LENS_SIZE / 2,
      Math.min(rect.width - LENS_SIZE / 2, x)
    );
    const clampedY = Math.max(
      LENS_SIZE / 2,
      Math.min(rect.height - LENS_SIZE / 2, y)
    );

    setLens({ visible: true, x: clampedX, y: clampedY });
  };

  const handleMouseLeave = () => {
    setLens((l) => ({ ...l, visible: false }));
  };

  // Your existing responsive helpers
  const getTitleOffset = () => {
    if (windowSize.width < 640) return "ml-4 sm:ml-10";
    if (windowSize.width < 768) return "ml-10 sm:ml-20";
    if (windowSize.width < 1024) return "ml-16 md:ml-32";
    if (windowSize.width < 1280) return "ml-24 lg:ml-40";
    return "ml-32 xl:ml-64";
  };
  const getImageOffset = () => {
    if (windowSize.width < 640) return "mx-auto";
    if (windowSize.width < 768) return "mx-auto";
    if (windowSize.width < 1024) return "mr-0 md:mr-10";
    if (windowSize.width < 1280) return "mr-10 lg:mr-20";
    return "mr-20 xl:mr-40";
  };
  const getMarginTop = () => {
    if (windowSize.width < 640) return "mt-8";
    if (windowSize.width < 768) return "mt-10";
    if (windowSize.width < 1024) return "mt-12";
    if (windowSize.width < 1280) return "mt-16";
    return "mt-20";
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 overflow-x-hidden rounded-b-4xl py-16 md:py-0"
      style={{ backgroundColor: "#121212" }}
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 z-10 flex flex-col justify-center md:h-full items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl text-center sm:text-left font-bold leading-tight mb-4 xs:mb-6 sm:mb-8 text-white ${getTitleOffset()} ${
            windowSize.width < 768 ? "mt-8" : "mt-0"
          }`}
        >
          MODERN
          <br />
          COOKING
          <br />
          TECHNOLOGY
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`text-sm xs:text-base sm:text-lg text-gray-400 max-w-xs text-center sm:text-left xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl ${getTitleOffset()}`}
        >
          Blending smart energy with sleek design for a better kitchen
          experience.
        </motion.p>
      </div>

      {/* Right Content with Image + Zoom Lens */}
      <div
        ref={imgContainerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full md:w-1/2 h-auto md:h-full flex items-center justify-center relative mt-10 md:mt-0"
      >
        {/* Optional background circle */}
        <div
          className="absolute w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-80 md:h-80 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-[40rem] 2xl:h-[40rem] bg-[#666666] rounded-full top-3/4 md:left-0 md:top-1/2 -left-10 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-40"
          hidden={windowSize.width < 640}
        />

        {/* Main Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          src={ovenImage}
          alt="WAVE Smart Microwave"
          className={`relative z-10 w-[90%] xs:w-[85%] sm:w-[80%] md:w-[85%] lg:w-[90%] xl:w-[95%] max-w-3xl ${getImageOffset()} ${getMarginTop()}`}
        />

        {/* Zoom Lens */}
        {lens.visible && (
          <div
            style={{
              position: "absolute",
              left: lens.x - LENS_SIZE / 2,
              top: lens.y - LENS_SIZE / 2,
              width: LENS_SIZE,
              height: LENS_SIZE,
              borderRadius: "50%",
              border: "2px solid white",
              overflow: "hidden",
              pointerEvents: "none",
              zIndex: 30,
            }}
          >
            <div
              style={{
                width: `${100 * ZOOM_FACTOR}%`,
                height: `${100 * ZOOM_FACTOR}%`,
                backgroundImage: `url(${ovenImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: `${100 * ZOOM_FACTOR}% ${100 * ZOOM_FACTOR}%`,
                backgroundPosition: `-${(lens.x * (ZOOM_FACTOR - 1)).toFixed(
                  0
                )}px -${(lens.y * (ZOOM_FACTOR - 1)).toFixed(0)}px`,
              }}
            />
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Hero;
