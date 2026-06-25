import { Link } from "react-router-dom";
import "../styles/home.css";

const subjects = [
  { name: "Operating Systems", path: "/os", icon: "🖥️", desc: "Processes, scheduling, memory & deadlocks." },
  { name: "DBMS", path: "/dbms", icon: "🗄️", desc: "Normalization, transactions & SQL queries." },
  { name: "Computer Networks", path: "/cn", icon: "🌐", desc: "OSI model, protocols & networking basics." },
  { name: "OOPs", path: "/oops", icon: "🧩", desc: "Concepts, principles & design questions." },
];

const stats = [
  { label: "Topics Covered", value: "150+" },
  { label: "Practice Questions", value: "500+" },
  { label: "Students Helped", value: "10k+" },
  { label: "Companies Targeted", value: "100+" },
];

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">🚀 Your Placement Journey Starts Here</span>
          <h1>
            Ace Your <span className="highlight">Placement Interviews</span> With Confidence
          </h1>
          <p>
            Structured CS fundamentals, curated resources, and a step-by-step
            roadmap — everything you need in one place.
          </p>
          <div className="hero-actions">
            <Link to="/roadmap" className="btn btn-primary">
              View Roadmap
            </Link>
            <Link to="/os" className="btn btn-secondary">
              Start Learning
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <h2>{s.value}</h2>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="subjects-section">
        <div className="section-heading">
          <h2>Core Subjects</h2>
          <p>Master the fundamentals that every interviewer loves to ask.</p>
        </div>
        <div className="subjects-grid">
          {subjects.map((subj) => (
            <Link to={subj.path} className="subject-card" key={subj.name}>
              <div className="subject-icon">{subj.icon}</div>
              <h3>{subj.name}</h3>
              <p>{subj.desc}</p>
              <span className="subject-arrow">Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="overview-section">
        <div className="section-heading">
          <h2>How PlacementVault Helps You</h2>
          <p>A simple, structured approach to crack your dream placement.</p>
        </div>
        <div className="overview-grid">
          <div className="overview-card">
            <div className="overview-number">01</div>
            <h3>Learn Fundamentals</h3>
            <p>Strengthen OS, DBMS, CN and OOPs concepts asked frequently in interviews.</p>
          </div>
          <div className="overview-card">
            <div className="overview-number">02</div>
            <h3>Practice Questions</h3>
            <p>Filter by category and difficulty to practice questions that matter.</p>
          </div>
          <div className="overview-card">
            <div className="overview-number">03</div>
            <h3>Polish Your Resume</h3>
            <p>Follow ATS-friendly tips to make sure your resume gets noticed.</p>
          </div>
          <div className="overview-card">
            <div className="overview-number">04</div>
            <h3>Follow the Roadmap</h3>
            <p>Stay on track with a clear beginner-to-advanced preparation path.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-box">
          <h2>Ready to Start Your Placement Prep?</h2>
          <p>Join thousands of students preparing smarter, not harder.</p>
          <Link to="/roadmap" className="btn btn-primary">
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}