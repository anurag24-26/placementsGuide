import { useMemo, useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Accordion from "../components/Accordion";
import Seo from "../components/Seo";
import osQuestions from "../data/osQuestions";
import "../styles/subjects.css";

const categories = ["Process", "Scheduling", "Memory", "Deadlocks"];

export default function OS() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredQuestions = useMemo(() => {
    const query = search.trim().toLowerCase();

    return osQuestions.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesSearch =
        query === "" || item.question.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <div className="subject-page">
      <Seo
        title="Operating Systems Interview Questions"
        description="Practice OS interview questions on process management, CPU scheduling, memory management & deadlocks — with clear, placement-focused answers."
        path="/os"
      />

      <div className="subject-header">
        <h1>Operating Systems</h1>
        <p>Process management, scheduling algorithms, memory management & deadlocks.</p>
      </div>

      <div className="subject-controls">
        <SearchBar placeholder="Search OS topics..." onSearch={setSearch} />
        <CategoryFilter categories={categories} onSelect={setCategory} />
      </div>

      <div className="subject-meta-row">
        <span className="subject-count">
          {filteredQuestions.length} question{filteredQuestions.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="subject-content">
        <Accordion items={filteredQuestions} />
      </div>
    </div>
  );
}