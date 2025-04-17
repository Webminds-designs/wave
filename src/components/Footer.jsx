import { FaInstagram, FaXTwitter, FaYoutube, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-6 md:px-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between">
                {/* Left Section - Logo & Copyright */}
                <div className="text-left">
                    <h1 className="text-[100px] md:text-[200px] font-bold leading-none">WAVE</h1>
                    <p className="text-gray-400 mt-2 text-lg">
                        &copy; 2025 WAVE All Rights Reserved
                    </p>
                </div>

                {/* Right Section - Navigation Links */}
                <div className="flex flex-wrap gap-10 mt-6 md:mt-10 text-center md:text-left">
                    {/* Navigation */}
                    <div>
                        <h3 className="font-semibold mb-4">Navigation</h3>
                        <ul className="text-white space-y-1">
                            <li><a href="#about" className="hover:text-gray-400">About</a></li>
                            <li><a href="#products" className="hover:text-gray-400">Product</a></li>
                            <li><a href="#features" className="hover:text-gray-400">Features</a></li>
                            <li><a href="#faq" className="hover:text-gray-400">Support</a></li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="font-semibold mb-4">Information</h3>
                        <ul className="text-white space-y-1">
                            <li><a href="#">Promotions</a></li>
                            <li><a href="#">Information Center</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold mb-4">Resources</h3>
                        <ul className="text-white space-y-1">
                            <li><a href="#">Forum</a></li>
                            <li><a href="#">Partner</a></li>
                            <li><a href="#">Events</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-end mt-8 gap-4">
                <a href="#" className="p-2 bg-gray-700 rounded-full text-white">
                    <FaInstagram size={20} />
                </a>
                <a href="#" className="p-2 bg-gray-700 rounded-full text-white">
                    <FaXTwitter size={20} />
                </a>
                <a href="#" className="p-2 bg-gray-700 rounded-full text-white">
                    <FaYoutube size={20} />
                </a>
                <a href="#" className="p-2 bg-gray-700 rounded-full text-white">
                    <FaFacebookF size={20} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
