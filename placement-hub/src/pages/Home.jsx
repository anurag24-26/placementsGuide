import { Link } from "react-router-dom";
import { subjects, stats, overviewSteps } from "../data/subjects";
import "../styles/home.css";

// Inline SVG keeps this at zero extra network requests and lets the doodle
// inherit theme colors via CSS variables instead of shipping an image asset.
function HeroDoodle() {
  return (
    <svg
      className="hero-doodle"
      viewBox="0 0 360 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* desk */}
      <rect x="40" y="230" width="280" height="10" rx="4" fill="var(--border-color)" />
      <rect x="60" y="240" width="10" height="50" rx="3" fill="var(--border-color)" />
      <rect x="290" y="240" width="10" height="50" rx="3" fill="var(--border-color)" />

      {/* laptop */}
      <rect x="120" y="170" width="120" height="78" rx="10" stroke="var(--accent)" strokeWidth="4" />
      <rect x="134" y="184" width="92" height="50" rx="4" fill="var(--accent-soft)" />
      <path
        d="M150 205 L165 215 L150 225"
        stroke="var(--accent)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="178" y1="222" x2="205" y2="222" stroke="var(--accent)" strokeWidth="3.5" strokeLinecap="round" />

      {/* floating checklist card */}
      <g>
        <rect
          x="20"
          y="40"
          width="92"
          height="86"
          rx="12"
          fill="var(--bg-card)"
          stroke="var(--border-color)"
          strokeWidth="2"
        />
        <circle cx="40" cy="62" r="6" stroke="var(--success)" strokeWidth="3" />
        <path d="M37 62 L40 65 L45 58" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="54" y1="62" x2="96" y2="62" stroke="var(--border-color)" strokeWidth="3" strokeLinecap="round" />

        <circle cx="40" cy="84" r="6" stroke="var(--success)" strokeWidth="3" />
        <path d="M37 84 L40 87 L45 80" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="54" y1="84" x2="88" y2="84" stroke="var(--border-color)" strokeWidth="3" strokeLinecap="round" />

        <circle cx="40" cy="106" r="6" stroke="var(--border-color)" strokeWidth="3" />
        <line x1="54" y1="106" x2="92" y2="106" stroke="var(--border-color)" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* floating code bracket badge */}
      <g>
        <circle cx="295" cy="80" r="36" fill="var(--bg-card)" stroke="var(--border-color)" strokeWidth="2" />
        <text
          x="295"
          y="90"
          textAnchor="middle"
          fontSize="26"
          fontWeight="700"
          fill="var(--accent)"
          fontFamily="monospace"
        >
          {"</>"}
        </text>
      </g>

      {/* small dot accents */}
      <circle cx="60" cy="160" r="4" fill="var(--accent)" opacity="0.5" />
      <circle cx="330" cy="170" r="3" fill="var(--accent)" opacity="0.4" />
      <circle cx="300" cy="135" r="3" fill="var(--warning)" opacity="0.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-grid">
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

          <div className="hero-visual">
            <HeroDoodle />
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
            <Link
              to={subj.path}
              className={`subject-card${subj.comingSoon ? " subject-card-soon" : ""}`}
              key={subj.name}
            >
              <div className="subject-icon">{subj.icon}</div>
              <h3>{subj.name}</h3>
              <p>{subj.desc}</p>
              <div className="subject-meta">
                <span className="subject-topics">{subj.topics}</span>
                <span className="subject-level">{subj.level}</span>
              </div>
              <span className="subject-arrow">
                {subj.comingSoon ? "Notify me →" : "Explore →"}
              </span>
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
          {overviewSteps.map((step) => (
            <Link to={step.path} className="overview-card" key={step.number}>
              <div className="overview-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-box">
          <h2>Not Sure Where to Start?</h2>
          <p>Build an ATS-friendly resume while you prep your fundamentals.</p>
          <Link to="/resume" className="btn btn-primary">
            Check Your Resume
          </Link>
        </div>
      </section>
    </div>
  );
}