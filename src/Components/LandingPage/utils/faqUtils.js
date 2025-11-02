import { useState } from "react";

export const useFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return { activeIndex, toggleFAQ };
};
