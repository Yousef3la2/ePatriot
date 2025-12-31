import React, { useState } from "react";
import FAQItem from "../ui/FAQItem";
import { faqData } from "../../data/faqData";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-heading">Why choose ePatriot?</h2>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isActive={activeIndex === index}
            onToggle={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;