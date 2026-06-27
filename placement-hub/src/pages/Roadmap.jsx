import { Link } from "react-router-dom";
import "../styles/roadmap.css";

// Each item can optionally include a `link` ({ to, label }) — rendered as
// an inline Link inside the list text so the roadmap doubles as navigation,
// not just a static checklist.

const roadmapData = [
  {
    key: "beginner",
    stage: "Stage 1",
    title: "Beginner",
    icon: "🌱",
    marker: "1",
    markerClass: "beginner-marker",
    items: [
      { text: "Learn a programming language (C++ / Java / Python)" },
      { text: "Understand basic data structures: Arrays, Strings, Linked Lists" },
      { text: "Start solving easy-level coding problems" },
      { text: "Learn Git & GitHub basics" },
    ],
  },
  {
    key: "intermediate",
    stage: "Stage 2",
    title: "Intermediate",
    icon: "⚙️",
    marker: "2",
    markerClass: "intermediate-marker",
    items: [
      {
        text: "Master core CS subjects: ",
        link: { to: "/os", label: "OS" },
        suffix: ", ",
        extraLinks: [
          { to: "/dbms", label: "DBMS" },
          { to: "/cn", label: "CN" },
          { to: "/oops", label: "OOPs" },
        ],
      },
      { text: "Practice medium-level DSA problems daily" },
      { text: "Build 2-3 mini projects" },
      { text: "Start preparing your resume", link: { to: "/resume", label: "resume" } },
    ],
  },
  {
    key: "advanced",
    stage: "Stage 3",
    title: "Advanced",
    icon: "🚀",
    marker: "3",
    markerClass: "advanced-marker",
    items: [
      { text: "Solve hard-level DSA & company-specific questions" },
      { text: "Mock interviews & HR round preparation" },
      { text: "Apply to companies & track applications" },
      { text: "Revise core subjects before interviews" },
    ],
  },
];

function ListItem({ item }) {
  // Renders plain text, or text with one or more inline links woven in.
  if (!item.link) return <li>{item.text}</li>;

  return (
    <li>
      {item.text}
      <Link to={item.link.to}>{item.link.label}</Link>
      {item.suffix}
      {item.extraLinks &&
        item.extraLinks.map((l, i) => (
          <span key={l.to}>
            <Link to={l.to}>{l.label}</Link>
            {i < item.extraLinks.length - 1 ? ", " : ""}
          </span>
        ))}
    </li>
  );
}

export default function Roadmap() {
  return (
    <div className="roadmap-page">
      <div className="roadmap-header">
        <h1>Placement Roadmap</h1>
        <p>A structured path from beginner to placement-ready.</p>
      </div>

      <div className="timeline">
        {roadmapData.map((section) => (
          <div className="timeline-section" key={section.key}>
            <div className={`timeline-marker ${section.markerClass}`}>
              {section.marker}
            </div>
            <div className="timeline-card">
              <span className="stage-label">{section.stage}</span>
              <div className="timeline-card-head">
                <span className="timeline-card-icon">{section.icon}</span>
                <h2>{section.title}</h2>
              </div>
              <ul>
                {section.items.map((item, idx) => (
                  <ListItem item={item} key={idx} />
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}