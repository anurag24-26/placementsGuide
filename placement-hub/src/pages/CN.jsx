import { useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Accordion from "../components/Accordion";
import "../styles/subjects.css";

const categories = ["OSI Model", "TCP/IP", "Routing", "Protocols"];

const placeholderData = [
  { question: "Placeholder question 1", answer: "Placeholder answer goes here.", difficulty: "Easy" },
  { question: "Placeholder question 2", answer: "Placeholder answer goes here.", difficulty: "Medium" },
  { question: "Placeholder question 3", answer: "Placeholder answer goes here.", difficulty: "Hard" },
];

export default function CN() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <div className="subject-page">
      <div className="subject-header">
        <h1>Computer Networks</h1>
        <p>OSI layers, TCP/IP, routing protocols, and core networking concepts.</p>
      </div>

      <div className="subject-controls">
        <SearchBar placeholder="Search CN topics..." onSearch={setSearch} />
        <CategoryFilter categories={categories} onSelect={setCategory} />
      </div>

      <div className="subject-content">
        <Accordion items={placeholderData} />
      </div>
    </div>
  );
}