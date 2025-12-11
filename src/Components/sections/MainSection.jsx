import React, { useEffect, useRef, useState } from "react";
import Card from "../ui/Card";
import { cardsData } from "../../data/cardsData";

const MainSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      {
        threshold: 0.5,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className={`main-section ${isVisible ? "visible" : ""}`}
    >
      <h2 className="main-heading">
        Choose what applies to you and start your journey
      </h2>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} index={index} />
        ))}
      </div>
    </div>
  );
};

export default MainSection;