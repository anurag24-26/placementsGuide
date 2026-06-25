import { useState } from "react";

export default function CategoryFilter({ categories = [], onSelect }) {
  const [active, setActive] = useState("All");

  const handleClick = (cat) => {
    setActive(cat);
    if (onSelect) onSelect(cat);
  };

  const allCategories = ["All", ...categories];

  return (
    <div className="category-filter">
      {allCategories.map((cat) => (
        <button
          key={cat}
          className={`filter-chip ${active === cat ? "active" : ""}`}
          onClick={() => handleClick(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}