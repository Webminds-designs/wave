import React, { useState, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import mapImage from "../assets/images/map.jpg";
import contactBack from "../assets/images/contactBack.jpeg";

const ContactUsPage = () => {
  // State for accordion FAQ items
  const [openFAQ, setOpenFAQ] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  // Controls for animations
  const heroControls = useAnimation();
  const mapControls = useAnimation();
  const cardControls = useAnimation();
  const faqControls = useAnimation();
  
  // Refs for intersection observer
  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [mapRef, mapInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [cardRef, cardInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [faqRef, faqInView] = useInView({ threshold: 0.2, triggerOnce: true });

  // Track window size
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Trigger animations when in view
  useEffect(() => {
    if (heroInView) heroControls.start({ opacity: 1, y: 0 });
    if (mapInView) mapControls.start({ opacity: 1, scale: 1 });
    if (cardInView) cardControls.start({ opacity: 1, x: 0 });
    if (faqInView) faqControls.start({ opacity: 1, y: 0 });
  }, [heroInView, mapInView, cardInView, faqInView]);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formState);
    // Reset form or show success message
  };

  // Determine map and card layout based on screen size
  const isSmallScreen = windowWidth < 768;
  const isMediumScreen = windowWidth >= 768 && windowWidth < 1024;
  const isLargeScreen = windowWidth >= 1024;

  const faqItems = [
    {
      question: "How do I connect my microwave to the mobile app?",
      answer:
        "Download our Wave app from the App Store or Google Play, create an account, and follow the in-app instructions to pair your device via Bluetooth or Wi-Fi.",
    },
    {
      question: "What is covered in the 2-year warranty?",
      answer:
        "Our warranty covers manufacturing defects, electronic components, and mechanical failures under normal use conditions. Accidental damage and improper use are not covered.",
    },
    {
      question: "How do I clean and maintain my Wave Microwave?",
      answer:
        "Wipe the interior with a damp cloth and mild detergent. For stubborn stains, heat a bowl of water for 2-3 minutes to create steam, then wipe clean. The exterior can be cleaned with a soft cloth.",
    },
    {
      question: "Can I return or exchange the product?",
      answer:
        "Yes, we offer a 30-day return policy for unused products in original packaging. Exchanges are available for defective units within 90 days of purchase.",
    },
    {
      question:
        "Does the Wave Microwave support voice assistants like Amazon Alexa or Google Assistant?",
      answer:
        "Yes, our Wave Microwave is compatible with Amazon Alexa, Google Assistant, and Apple HomeKit for seamless voice control integration.",
    },
  ];

  return (
    <div className="bg-[#f4f5f0] text-black font-sans min-h-screen flex flex-col overflow-hidden">
      <Header />

      {/* Hero Section with dynamic padding based on device size */}
      <section 
        ref={heroRef}
        className="text-center py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 
                   px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 
                   mt-16 xs:mt-18 sm:mt-20 md:mt-20 lg:mt-20"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={heroControls}
          transition={{ duration: 0.6 }}
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold 
                     mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6"
        >
          GET IN TOUCH
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={heroControls}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl 
                     text-gray-600 
                     mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16 
                     max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl 
                     mx-auto"
        >
          Have a question about your Wave Microwave, need help with your order,
          or just want to say hi? Fill out the form below and our support team
          will get back to you as soon as possible.
        </motion.p>

        {/* Contact Form Card with Image Background - Responsive height/padding */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroControls}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl 
                     mx-auto relative overflow-hidden 
                     rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl 
                     shadow-xl sm:shadow-2xl"
          style={{ 
            height: "auto", 
            minHeight: isSmallScreen ? "550px" : isMediumScreen ? "620px" : "700px" 
          }}
        >
          {/* Full-size background image with fallback background color */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-300 absolute inset-0">
            <img
              src={contactBack}
              alt="Contact Background"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';  // Hide image on error, falling back to gradient
              }}
            />
          </div>

          {/* Glass panel containing the form - responsive padding and sizing */}
          <div className="absolute inset-0 w-full h-full 
                          flex items-center justify-center 
                          p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10">
            <div className="bg-white/55 backdrop-blur-md 
                           w-full 
                           max-w-xs xs:max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-4xl 
                           rounded-lg sm:rounded-xl md:rounded-2xl 
                           p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 
                           shadow-lg border border-white/20">
              <h3 className="text-black 
                             text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl 
                             font-semibold 
                             mb-4 xs:mb-5 sm:mb-6 md:mb-6 lg:mb-8 
                             text-left">
                Contact Us
              </h3>

              <form 
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 
                           gap-x-3 xs:gap-x-4 sm:gap-x-5 md:gap-x-6 
                           gap-y-2 xs:gap-y-3 sm:gap-y-3 md:gap-y-4"
              >
                <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                  <label className="text-xxs xs:text-xs sm:text-xs md:text-sm 
                                    text-gray-700 font-medium block text-left">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full 
                               p-2 xs:p-2.5 sm:p-3 
                               text-xs xs:text-sm 
                               bg-transparent 
                               border-b border-gray 
                               focus:outline-none focus:border-black 
                               transition-all"
                    required
                  />
                </div>

                <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                  <label className="text-xxs xs:text-xs sm:text-xs md:text-sm 
                                    text-gray-700 font-medium block text-left">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="w-full 
                               p-2 xs:p-2.5 sm:p-3 
                               text-xs xs:text-sm 
                               bg-transparent 
                               border-b border-gray 
                               focus:outline-none focus:border-black 
                               transition-all"
                    required
                  />
                </div>

                <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                  <label className="text-xxs xs:text-xs sm:text-xs md:text-sm 
                                    text-gray-700 font-medium block text-left">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                    placeholder="+1 234 567 890"
                    className="w-full 
                               p-2 xs:p-2.5 sm:p-3 
                               text-xs xs:text-sm 
                               bg-transparent 
                               border-b border-gray 
                               focus:outline-none focus:border-black 
                               transition-all"
                  />
                </div>

                <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                  <label className="text-xxs xs:text-xs sm:text-xs md:text-sm 
                                    text-gray-700 font-medium block text-left">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    placeholder="Let us know how we can help"
                    className="w-full 
                               p-2 xs:p-2.5 sm:p-3 
                               text-xs xs:text-sm 
                               bg-transparent 
                               border-b border-gray 
                               focus:outline-none focus:border-black 
                               transition-all"
                    required
                  />
                </div>

                <div className="space-y-1 xs:space-y-1.5 sm:space-y-2 md:col-span-2">
                  <label className="text-xxs xs:text-xs sm:text-xs md:text-sm 
                                    text-gray-700 font-medium block text-left">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    className="w-full 
                               p-2 xs:p-2.5 sm:p-3 
                               text-xs xs:text-sm 
                               bg-transparent 
                               border-b border-gray 
                               focus:outline-none focus:border-black 
                               transition-all 
                               resize-none 
                               h-20 xs:h-24 sm:h-28 md:h-32"
                    required
                  ></textarea>
                </div>

                <div className="md:col-span-2 
                                mt-4 xs:mt-5 sm:mt-6 md:mt-8 
                                flex justify-start">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-black hover:bg-gray-800 
                               text-white 
                               font-medium 
                               py-2 xs:py-2.5 sm:py-3 
                               px-5 xs:px-6 sm:px-7 md:px-8 
                               rounded-md 
                               transition-colors 
                               text-xs xs:text-sm 
                               flex items-center gap-2 xs:gap-3"
                  >
                    Send Message
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={isSmallScreen ? "16" : "20"}
                      height={isSmallScreen ? "16" : "20"}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-arrow-right"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Map and Contact Info Section - completely responsive layout */}
      <section 
        className={`
          py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24
          px-4 xs:px-5 sm:px-6 md:px-8 lg:px-16 xl:px-24
          relative
          ${isSmallScreen ? 'flex flex-col-reverse' : 'block'}
        `}
      >
        {/* Map Background - responsive positioning and sizing */}
        <motion.div
          ref={mapRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={mapControls}
          transition={{ duration: 0.6 }}
          className={`
            w-full 
            flex items-center justify-center
            ${isSmallScreen ? 'ml-0 mt-8' : isMediumScreen ? 'ml-16' : 'ml-40'}
          `}
        >
          {/* Map image with responsive dimensions */}
          <img
            src={mapImage}
            alt="Location Map"
            className={`
              rounded-xl xs:rounded-2xl sm:rounded-3xl md:rounded-[40px]
              shadow-md sm:shadow-lg
              ${isSmallScreen ? 'w-full' : isMediumScreen ? 'w-10/12' : 'w-8/12'}
              h-full object-cover
            `}
          />
        </motion.div>

        {/* Contact Card - Responsive positioning */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, x: -30 }}
          animate={cardControls}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`
            bg-[#181818] text-white
            p-4 xs:p-5 sm:p-6 md:p-8
            rounded-lg
            shadow-xl
            ${isSmallScreen
              ? 'w-full'
              : isMediumScreen
                ? 'md:w-auto md:min-w-[240px] absolute top-1/2 left-8 transform -translate-y-1/2 z-10'
                : 'md:w-auto md:min-w-[300px] absolute top-1/2 left-1/6 transform -translate-y-1/2 z-10'
            }
          `}
        >
          <h2 className="text-base xs:text-lg font-medium mb-4 xs:mb-5 sm:mb-6">GET IN TOUCH</h2>

          <div className="space-y-4 xs:space-y-5 sm:space-y-6">
            <div className="flex items-start gap-2 xs:gap-3">
              <IoLocationOutline className="text-lg xs:text-xl mt-1" />
              <div>
                <p className="text-gray-400 text-xs xs:text-sm mb-0.5 xs:mb-1">Address</p>
                <p className="text-xs xs:text-sm">
                  1234 Webster Avenue
                  <br />
                  New York, USA
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 xs:gap-3">
              <FiPhone className="text-lg xs:text-xl mt-1" />
              <div>
                <p className="text-gray-400 text-xs xs:text-sm mb-0.5 xs:mb-1">Contact</p>
                <p className="text-xs xs:text-sm">(+1) 234 567 890</p>
                <p className="text-xs xs:text-sm">general@waveproducts.com</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section - Responsive padding and border radius */}
      <section 
        ref={faqRef}
        className={`
          bg-[#181818] text-white
          py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20
          px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 xl:px-24
          rounded-t-[20px] xs:rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[50px] lg:rounded-t-[60px]
        `}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={faqControls}
          transition={{ duration: 0.6 }}
          className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-bold 
                     mb-6 xs:mb-8 sm:mb-10 
                     text-center"
        >
          HAVE ANY QUESTIONS?
        </motion.h2>

        <div className="max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-2 xs:mb-3 sm:mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center 
                           w-full text-left 
                           p-3 xs:p-4 
                           border-b border-gray-800 
                           focus:outline-none 
                           hover:bg-gray-900/30 transition-colors
                           rounded-t-md"
              >
                <span className="font-medium text-sm xs:text-base pr-4">{item.question}</span>
                <BsChevronDown
                  className={`transform transition-transform flex-shrink-0 text-sm xs:text-base ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openFAQ === index && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-3 xs:p-4 pt-2 
                             text-gray-400 
                             text-xs xs:text-sm
                             bg-gray-900/20
                             rounded-b-md"
                >
                  {item.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUsPage;