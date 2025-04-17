"use client"

import { useState } from "react"
import { ArrowUpRight, ChevronDown, MapPin, Phone } from "lucide-react"

function ContactUs() {
    const [activeQuestion, setActiveQuestion] = useState(null)

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index)
    }

    const faqItems = [
        {
            question: "How do I connect my microwave to the mobile app?",
            answer:
                "Download the Wave app from the App Store or Google Play Store. Open the app and follow the on-screen instructions to connect your microwave via Bluetooth or Wi-Fi. Make sure your microwave is powered on and in pairing mode.",
        },
        {
            question: "Where can I find the user manual?",
            answer:
                "You can find the user manual in the box with your Wave Microwave. Digital versions are available on our website under the 'Support' section, or in the 'Documents' tab of the mobile app.",
        },
        {
            question: "What is covered in the 2-year warranty?",
            answer:
                "Our 2-year warranty covers all manufacturing defects and malfunctions under normal use. This includes electronic components, mechanical parts, and the magnetron. The warranty does not cover damage from misuse, accidents, or unauthorized repairs.",
        },
        {
            question: "Can I return or exchange the product?",
            answer:
                "Yes, you can return or exchange your Wave Microwave within 30 days of purchase if it's in its original condition with all packaging and accessories. Please contact our support team to initiate the return or exchange process.",
        },
        {
            question: "How do I clean and maintain my Wave Microwave?",
            answer:
                "For daily cleaning, wipe the interior with a damp cloth after use. For deeper cleaning, mix water with mild detergent and wipe all surfaces. The glass turntable is dishwasher safe. Avoid abrasive cleaners and never use metal scrubbers on any part of the microwave.",
        },
        {
            question: "Does the Wave Microwave support voice assistants like Alexa or Google Assistant?",
            answer:
                "Yes, the Wave Microwave is compatible with both Amazon Alexa and Google Assistant. After connecting your microwave to the Wave app, you can enable the Wave skill in your voice assistant app to control your microwave with voice commands.",
        },
    ]

    return (
        <div className="min-h-screen bg-[#f1f2ed]">
            {/* Header */}
            <header className="px-4 py-6 md:px-8">
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                    <div className="flex items-center gap-2">
                        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
                                stroke="#000"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
                                stroke="#000"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
                                stroke="#000"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                        <span className="font-bold uppercase tracking-wider">WAVE</span>
                    </div>

                    <nav className="hidden md:flex md:items-center md:gap-8">
                        <a href="#" className="text-sm font-medium">
                            Home
                        </a>
                        <a href="#" className="text-sm font-medium">
                            About
                        </a>
                        <a href="#" className="text-sm font-medium">
                            Product
                        </a>
                        <a href="#" className="text-sm font-medium border-b border-black pb-0.5">
                            Contact Us
                        </a>
                    </nav>

                    <button className="flex items-center gap-1 rounded-full bg-white px-5 py-2 text-sm font-medium shadow-sm">
                        EXPLORE
                        <ArrowUpRight className="h-4 w-4" />
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main>
                {/* Contact Form Section */}
                <section className="px-4 py-12 md:px-8 md:py-16">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 text-4xl font-bold">GET IN TOUCH</h1>
                        <p className="mx-auto max-w-2xl text-center">
                            Have a question about your Wave Microwave, need help with your order, or just want to say hi? Fill out the
                            form below and our support team will get back to you as soon as possible.
                        </p>
                    </div>
                </section>

                {/* Form with Background */}
                <section className="relative mb-24 px-4 md:px-8">
                    <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl">
                        <div className="relative">
                            {/* Background Image */}
                            <div className="absolute inset-0 h-full w-full bg-black/30">
                                <img
                                    src="/placeholder.svg?height=500&width=1200"
                                    alt="Kitchen background"
                                    className="h-full w-full object-cover opacity-80"
                                />
                            </div>

                            {/* Form Container */}
                            <div className="relative px-4 py-12 md:px-8 md:py-16">
                                <div className="mx-auto max-w-4xl rounded-3xl bg-white/80 p-8 backdrop-blur-sm md:p-12">
                                    <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                                        <div>
                                            <label className="mb-2 block text-sm font-medium">Name</label>
                                            <input
                                                type="text"
                                                placeholder="Enter your name"
                                                className="w-full border-b border-gray-300 bg-transparent pb-2 pt-1 text-sm outline-none transition focus:border-black"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm font-medium">Email</label>
                                            <input
                                                type="email"
                                                placeholder="Enter your Email Address"
                                                className="w-full border-b border-gray-300 bg-transparent pb-2 pt-1 text-sm outline-none transition focus:border-black"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm font-medium">Phone Number</label>
                                            <input
                                                type="tel"
                                                placeholder="Enter your phone number"
                                                className="w-full border-b border-gray-300 bg-transparent pb-2 pt-1 text-sm outline-none transition focus:border-black"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm font-medium">Subject</label>
                                            <input
                                                type="text"
                                                placeholder="Enter your message subject"
                                                className="w-full border-b border-gray-300 bg-transparent pb-2 pt-1 text-sm outline-none transition focus:border-black"
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="mb-2 block text-sm font-medium">Message</label>
                                            <textarea
                                                placeholder="Type your message..."
                                                rows={4}
                                                className="w-full border-b border-gray-300 bg-transparent pb-2 pt-1 text-sm outline-none transition focus:border-black"
                                            ></textarea>
                                        </div>
                                        <div className="md:col-span-2">
                                            <button className="mt-4 flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/90">
                                                Send Message
                                                <ArrowUpRight className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map and Contact Info Section */}
                <section className="px-4 py-12 md:px-8 md:py-16">
                    <div className="mx-auto max-w-6xl">
                        <div className="relative overflow-hidden rounded-3xl">
                            {/* Map Background */}
                            <div className="h-[400px] w-full bg-gray-800">
                                <img
                                    src="/placeholder.svg?height=400&width=1200&text=Map"
                                    alt="Location map"
                                    className="h-full w-full object-cover opacity-50"
                                />
                            </div>

                            {/* Contact Info Box */}
                            <div className="absolute left-12 top-1/2 -translate-y-1/2 rounded-2xl bg-black p-8 text-white">
                                <h2 className="mb-8 text-2xl font-bold">GET IN TOUCH</h2>

                                <div className="mb-8">
                                    <div className="mb-2 flex items-center gap-3">
                                        <MapPin className="h-5 w-5" />
                                        <h3 className="font-medium">Address</h3>
                                    </div>
                                    <p className="ml-8 text-sm text-gray-300">7674 Gardner Avenue</p>
                                    <p className="ml-8 text-sm text-gray-300">Kathiawada Maliabe</p>
                                </div>

                                <div>
                                    <div className="mb-2 flex items-center gap-3">
                                        <Phone className="h-5 w-5" />
                                        <h3 className="font-medium">Contact</h3>
                                    </div>
                                    <p className="ml-8 text-sm text-gray-300">(+94) 74 243 189</p>
                                    <p className="ml-8 text-sm text-gray-300">getintouch@wave.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="bg-black px-4 py-16 text-white md:px-8 md:py-24">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="mb-12 text-center text-3xl font-bold">HAVE ANY QUESTIONS?</h2>

                        <div className="divide-y divide-gray-800">
                            {faqItems.map((item, index) => (
                                <div key={index} className="py-6">
                                    <button
                                        onClick={() => toggleQuestion(index)}
                                        className="flex w-full items-center justify-between text-left"
                                    >
                                        <h3 className="text-sm font-medium md:text-base">{item.question}</h3>
                                        <ChevronDown
                                            className={`h-5 w-5 transition-transform ${activeQuestion === index ? "rotate-180" : ""}`}
                                        />
                                    </button>
                                    {activeQuestion === index && (
                                        <div className="mt-4 text-sm text-gray-400">
                                            <p>{item.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-black px-4 py-16 text-white md:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12">
                        <h2 className="text-6xl font-bold tracking-tighter">WAVE</h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
                        <div>
                            <h3 className="mb-4 text-sm font-medium uppercase">Navigation</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-sm text-gray-400 hover:text-white">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm text-gray-400 hover:text-white">
                                        Product
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm text-gray-400 hover:text-white">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm text-gray-400 hover:text-white">
                                        Support
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 text-sm font-medium uppercase">Information</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-sm text-gray-400 hover:text-white">
                                        Promotions
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm text-gray-400 hover:text-white">
                                        Information Center
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 text-sm font-medium uppercase">Resources</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-sm text-gray-400 hover:text-white">
                                        Forum
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm text-gray-400 hover:text-white">
                                        Partner
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm text-gray-400 hover:text-white">
                                        Events
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 border-t border-gray-800 pt-8">
                        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                            <p className="text-sm text-gray-400">© 2025 WAVE All Rights Reserved</p>
                            <div className="flex space-x-4">
                                {["instagram", "facebook", "youtube", "twitter"].map((social) => (
                                    <a
                                        key={social}
                                        href="#"
                                        className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white"
                                    >
                                        <span className="sr-only">{social}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default ContactUs;
