import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import paperPlane from "../assets/images/paper-plane.png";
import Footer from "./Footer";


const NewsletterSection = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your email submit logic here
    };

    const [email, setEmail] = useState("");

    return (
        <>
            <section className="bg-[#f6f7f3] px-4 pt-12">

                <div className="max-w-6xl mx-auto bg-white rounded-[40px] px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-xl">
                    {/* Text Content */}
                    <div className="md:w-2/3">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
                            READY TO COOK SMARTER?
                        </h2>
                        <p className="text-gray-500 mb-6 max-w-xl">
                            With Wave, every meal is faster, quieter, and smarter—so you can
                            spend less time in the kitchen and more time enjoying what matters.
                        </p>


                        {/* Email form */}
                        <form onSubmit={handleSubmit} className="relative">
                            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-6 py-3 outline-none"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-black text-white px-4 py-2 rounded-full flex items-center justify-center mr-1"
                                >
                                    Send
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Paper plane image - responsive positioning */}
                    <div className="relative w-full md:w-2/5 lg:w-1/3 overflow-visible mt-6 md:mt-0">
                        {/* Mobile view (centered) */}
                        <div className="block md:hidden w-full">
                            <img
                                src={paperPlane}
                                alt="Paper Plane"
                                className="w-64 mx-auto object-contain transform translate-x-6"
                            />
                        </div>

                        {/* Tablet and desktop view (overlapping) */}
                        <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-2/3 overflow-visible">
                            <img
                                src={paperPlane}
                                alt="Paper Plane"
                                className="w-80 lg:w-96 xl:w-112 object-contain transform translate-x-12 lg:translate-x-16"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default NewsletterSection;
