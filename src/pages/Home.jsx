import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutWave from "../components/AboutWave";
import Features from "../components/Features";
import Products from "../components/Products";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />

      <section id="home">
        <Hero />
      </section>

      <section className="bg-black">
        <div id="about">
          <AboutWave />
        </div>
        <div id="features">
          <Features />
        </div>
      </section>

      <section id="products" className="bg-[#F4F5F0]">
        <Products />
      </section>

      <section id="faq">
        <FAQSection />
      </section>

      <Footer />
    </div>
  );
};

export default Home;