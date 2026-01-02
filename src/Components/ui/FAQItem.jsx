import { ArrowUpIcon , SparkleIcon } from '../ui/Icons';


const FAQItem = ({ faq, isActive, onToggle }) => {
  return (
    <div className={`faq-item ${isActive ? "active" : ""}`}>
      <div className="sparkle-icon">
       <SparkleIcon />
      </div>

      <button className="faq-question" onClick={onToggle}>
        <span className="question-text">{faq.question}</span>
        <div className="faq-icon-wrapper">
          <ArrowUpIcon />
        </div>
      </button>
      
      <div className={`faq-answer ${isActive ? "open" : ""}`}>
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;