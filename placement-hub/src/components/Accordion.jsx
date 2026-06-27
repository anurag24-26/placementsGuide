import { useState } from "react";
import DifficultyBadge from "./DifficultyBadge";
import "../styles/accordion.css";

export default function Accordion({ items = [] }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  if (items.length === 0) {
    return <div className="accordion-empty">No questions found.</div>;
  }

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`accordion-item ${isOpen ? "open" : ""}`}
          >
            <button
              className="accordion-header"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              <span className="accordion-question">{item.question}</span>
              <div className="accordion-header-right">
                {item.difficulty && <DifficultyBadge level={item.difficulty} />}
                <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
              </div>
            </button>
            <div
              className="accordion-body"
              id={`accordion-content-${item.id}`}
              role="region"
            >
              <div className="accordion-content">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}