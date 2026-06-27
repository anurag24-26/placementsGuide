// src/data/subjects.js
// Centralized subject metadata — reused by Home, Roadmap, and future pages
// (e.g. company-wise / topic-wise question pages) so we don't duplicate this
// list across the codebase.

export const subjects = [
  {
    name: "Operating Systems",
    path: "/os",
    icon: "🖥️",
    desc: "Processes, scheduling, memory & deadlocks.",
    topics: "40+ topics",
    level: "Beginner-friendly",
  },
  {
    name: "DBMS",
    path: "/dbms",
    icon: "🗄️",
    desc: "Normalization, transactions & SQL queries.",
    topics: "35+ topics",
    level: "Beginner-friendly",
  },
  {
    name: "Computer Networks",
    path: "/cn",
    icon: "🌐",
    desc: "OSI model, protocols & networking basics.",
    topics: "30+ topics",
    level: "Beginner-friendly",
  },
  {
    name: "OOPs",
    path: "/oops",
    icon: "🧩",
    desc: "Concepts, principles & design questions.",
    topics: "25+ topics",
    level: "Beginner-friendly",
  },
  {
    name: "DSA",
    path: "/dsa",
    icon: "🧠",
    desc: "Arrays, trees, graphs & problem-solving patterns.",
    topics: "Coming soon",
    level: "Most asked",
    comingSoon: true,
  },
];

export const stats = [
  { label: "Topics Covered", value: "150+" },
  { label: "Practice Questions", value: "500+" },
  { label: "Students Helped", value: "10k+" },
  { label: "Companies Targeted", value: "100+" },
];

export const overviewSteps = [
  {
    number: "01",
    title: "Learn Fundamentals",
    desc: "Strengthen OS, DBMS, CN and OOPs concepts asked frequently in interviews.",
    path: "/os",
  },
  {
    number: "02",
    title: "Practice Questions",
    desc: "Filter by category and difficulty to practice questions that matter.",
    path: "/dsa",
  },
  {
    number: "03",
    title: "Polish Your Resume",
    desc: "Follow ATS-friendly tips to make sure your resume gets noticed.",
    path: "/resume",
  },
  {
    number: "04",
    title: "Follow the Roadmap",
    desc: "Stay on track with a clear beginner-to-advanced preparation path.",
    path: "/roadmap",
  },
];