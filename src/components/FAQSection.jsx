import { useState } from "react";
import small3 from "../assets/images/small3.png";

const faqData = [
  {
    id: "01",
    title: "Cooking Modes Explained",
    content:
      "Our device features multiple cooking modes tailored to various recipes. Whether you're baking, roasting, grilling, or steaming, each mode optimizes temperature and timing for perfectly cooked meals. Detailed presets adjust heat distribution and duration to suit different ingredients and cooking styles.",
    image: small3,
  },
  {
    id: "02",
    title: "Smart Sensor Accuracy",
    content:
      "Equipped with state-of-the-art sensors, the appliance continuously monitors temperature, humidity, and cooking progress. This real-time feedback allows the system to adjust heat levels and cooking time, ensuring even cooking and optimal results with every use.",
    image: small3,
  },
  {
    id: "03",
    title: "Noise Level",
    content:
      "Not at all. It operates with ultra-quiet technology at just 30 decibels—ideal for quiet homes and nighttime cooking.",
    image: small3,
  },
  {
    id: "04",
    title: "Cleaning and Maintenance",
    content:
      "To ensure peak performance and longevity, clean the appliance regularly. Wipe down the exterior with a soft, damp cloth and a mild cleaning solution. Always allow the device to cool before cleaning the interior. For stubborn residues, refer to the user manual for safe cleaning practices of the smart sensors and other components.",
    image: small3,
  },
  {
    id: "05",
    title: "Warranty & Support",
    content:
      "Your purchase is backed by a comprehensive one-year warranty covering both parts and labor. Our customer support team is available around the clock to help with any inquiries, troubleshooting, or repairs. For more details or to access support resources, please visit our website or contact our service hotline.",
    image: small3,
  },
];

export default function FAQSection() {
  const [active, setActive] = useState("03");
  const activeItem = faqData.find((item) => item.id === active);

  return (
    <div className="grid md:grid-cols-2 gap-4 p-4 md:p-25 bg-[#F4F5F0] min-h-screen">
      {/* Left Section */}
      <div>
        <h3 className="text-gray-400 uppercase text-sm">/About Wave</h3>
        <h1 className="text-4xl font-base mt-4">
          Your Questions
          <br />
          Our Answers
        </h1>
        <div className="mt-6 flex flex-col md:flex-row items-center space-x-4">
          <span className="text-6xl text-gray-300">/{activeItem.id}</span>
          {activeItem.image && (
            <img
              src={activeItem.image}
              alt="Microwave"
              className="w-[300px] rounded-md"
            />
          )}
        </div>
        {/* Dynamic Header */}
        <h2 className="text-lg font-semibold mt-4">{activeItem.title}</h2>
        <p className="text-gray-600 mt-2">{activeItem.content}</p>
      </div>

      {/* Right Section */}
      <div className="space-y-6 flex flex-col justify-between items-center">
        <p className="text-gray-500 text-lg mb-15">
          Engineered with cutting-edge technology and designed for modern
          living, Weave brings you the perfect blend of functionality and style.
        </p>

        {faqData.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`w-full flex items-center justify-between px-6 py-3 rounded-3xl border cursor-pointer transition-all ${
              active === item.id
                ? "bg-[#403A37] text-white"
                : "bg-white hover:bg-gray-200"
            }`}
          >
            <span className="text-base font-base">
              /{item.id} {item.title}
            </span>

            {/* Arrow inside a perfectly centered circular border */}
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                active === item.id
                  ? "border-white text-white"
                  : "border-black text-black"
              }`}
            >
              <span className="text-lg leading-none">↗</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
