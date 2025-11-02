import React from "react";
import { faqData } from "./data/faqData";
import { useFAQ } from "./utils/faqUtils";

const FAQ = () => {
  const { activeIndex, toggleFAQ } = useFAQ();
  return (
    <section className="faq-section">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
            <div className="faq-border-wrapper">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <div className={`faq-question-arrow ${activeIndex === index ? "open" : ""}`}>{/* SVG icon here if needed */}</div>
              </button>
              <div className={`faq-answer ${activeIndex === index ? "open" : ""}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
