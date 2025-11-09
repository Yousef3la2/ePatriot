import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import HeroSection from "../sections/HeroSection";
import MainSection from "../sections/MainSection";
import WhySection from "../sections/WhySection";
import DiscoverSection from "../sections/DiscoverSection";
import OpinionsSection from "../sections/OpinionsSection";
import FAQSection from "../sections/FAQSection";
import "../layout/LandingPage.css";

const HomePage = () => {
  return (
    <div className="landing-container">
      <Navbar />
      <HeroSection />
      <MainSection />
      <WhySection />
      <DiscoverSection />
      <OpinionsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default HomePage;
