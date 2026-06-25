import { useState } from "react";
import DifficultyBadge from "./DifficultyBadge";
import "../styles/accordion.css";

export default function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (items.length === 0) {
    return <div className="accordion-empty">No questions found.</div>;
  }

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${openIndex === index ? "open" : ""}`}
        >
          <button
            className="accordion-header"
            onClick={() => toggle(index)}
          >
            <span className="accordion-question">{item.question}</span>
            <div className="accordion-header-right">
              {item.difficulty && <DifficultyBadge level={item.difficulty} />}
              <span className="accordion-icon">{openIndex === index ? "−" : "+"}</span>
            </div>
          </button>
          <div className="accordion-body">
            <div className="accordion-content">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}