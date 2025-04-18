import { FaInstagram, FaXTwitter, FaYoutube, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
                    {/* Left Section - Logo & Copyright */}
                    <div className="w-full lg:w-auto text-center lg:text-left">
                        <h1 className="text-[60px] sm:text-[80px] md:text-[120px] lg:text-[160px] xl:text-[200px] font-bold leading-none tracking-tighter">
                            WAVE
                        </h1>
                        <p className="text-gray-400 mt-2 text-sm sm:text-base lg:text-lg">
                            &copy; 2025 WAVE All Rights Reserved
                        </p>
                    </div>

                    {/* Right Section - Navigation Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 md:gap-16 w-full lg:w-auto mt-8 lg:mt-16">
                        {/* Navigation */}
                        <div className="text-center sm:text-left">
                            <h3 className="font-semibold mb-4 text-lg">Navigation</h3>
                            <ul className="space-y-2 sm:space-y-3">
                                <li><a href="#about" className="hover:text-gray-400 transition-colors duration-300 text-sm sm:text-base">About</a></li>
                                <li><a href="#products" className="hover:text-gray-400 transition-colors duration-300 text-sm sm:text-base">Product</a></li>
                                <li><a href="#features" className="hover:text-gray-400 transition-colors duration-300 text-sm sm:text-base">Features</a></li>
                                <li><a href="#faq" className="hover:text-gray-400 transition-colors duration-300 text-sm sm:text-base">Support</a></li>
                            </ul>
                        </div>

                        {/* Information */}
                        <div className="text-center sm:text-left">
                            <h3 className="font-semibold mb-4 text-lg">Information</h3>
                            <ul className="space-y-2 sm:space-y-3">
                                <li><a href="#" className="hover:text-gray-400 transition-colors duration-300 text-sm sm:text-base">Promotions</a></li>
                                <li><a href="#" className="hover:text-gray-400 transition-colors duration-300 text-sm sm:text-base">Information Center</a></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="text-center sm:text-left col-span-2 sm:col-span-1">
                            <h3 className="font-semibold mb-4 text-lg">Resources</h3>
                            <ul className="space-y-2 sm:space-y-3">
                                <li><a href="#" className="hover:text-gray-400 transition-colors duration-300 text-sm sm:text-base">Forum</a></li>
                                <li><a href="#" className="hover:text-gray-400 transition-colors duration-300 text-sm sm:text-base">Partner</a></li>
                                <li><a href="#" className="hover:text-gray-400 transition-colors duration-300 text-sm sm:text-base">Events</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center lg:justify-end mt-12 gap-4">
                    {[
                        { Icon: FaInstagram, href: "#" },
                        { Icon: FaXTwitter, href: "#" },
                        { Icon: FaYoutube, href: "#" },
                        { Icon: FaFacebookF, href: "#" }
                    ].map(({ Icon, href }, index) => (
                        <a
                            key={index}
                            href={href}
                            className="p-2.5 bg-gray-800 hover:bg-gray-700 rounded-full text-white transition-colors duration-300"
                        >
                            <Icon size={18} className="sm:w-5 sm:h-5" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;