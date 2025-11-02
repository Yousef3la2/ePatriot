import React, { useState } from "react";
import "@fontsource/ibm-plex-sans";
import "./LandingPage.css";
import Navbar from "./LandingPage/Navbar";
import Hero from "./LandingPage/Hero";
import Cards from "./LandingPage/Cards";
import Why from "./LandingPage/Why";
import Discover from "./LandingPage/Discover";
import Opinions from "./LandingPage/Opinions";
import FAQ from "./LandingPage/FAQ";
import Footer from "./LandingPage/Footer";

const LandingPage = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showOurStory, setOurStory] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="landing-container">
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        showCategories={showCategories}
        setShowCategories={setShowCategories}
        showOurStory={showOurStory}
        setOurStory={setOurStory}
      />
      <Hero />
      <Cards />
      <Why />
      <Discover />
      <Opinions />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
