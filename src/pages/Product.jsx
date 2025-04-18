import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/ProductPage/Hero";
import Features from "../components/ProductPage/Features";
import Benifits from "../components/ProductPage/Benifits";
import Gallery from "../components/ProductPage/Gallery";
import Download from "../components/ProductPage/Download";

export default function Product() {
  return (
    <div className="bg-[#1F1E1E]">
      <Header />
      <Hero />
      <Features />
      <Benifits />
      <Gallery />
      <Download />
      <Footer />
    </div>
  );
}
