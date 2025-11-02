import "./App.css";
import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer";
import HeroSection from "./Components/sections/HeroSection";
import MainSection from "./Components/sections/MainSection";
import WhySection from "./Components/sections/WhySection";
import DiscoverSection from "./Components/sections/DiscoverSection";
import OpinionsSection from "./Components/sections/OpinionsSection";
import FAQSection from "./Components/sections/FAQSection";
import "./Components/layout/LandingPage.css";

function App() {
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
}

export default App;