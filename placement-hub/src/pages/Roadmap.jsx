import "../styles/roadmap.css";

const roadmapData = {
  beginner: [
    "Learn a programming language (C++/Java/Python)",
    "Understand basic data structures: Arrays, Strings, Linked Lists",
    "Start solving easy-level coding problems",
    "Learn Git & GitHub basics",
  ],
  intermediate: [
    "Master core CS subjects: OS, DBMS, CN, OOPs",
    "Practice medium-level DSA problems daily",
    "Build 2-3 mini projects",
    "Start preparing your resume",
  ],
  advanced: [
    "Solve hard-level DSA & company-specific questions",
    "Mock interviews & HR round preparation",
    "Apply to companies & track applications",
    "Revise core subjects before interviews",
  ],
};

export default function Roadmap() {
  return (
    <div className="roadmap-page">
      <div className="roadmap-header">
        <h1>Placement Roadmap</h1>
        <p>A structured path from beginner to placement-ready.</p>
      </div>

      <div className="timeline">
        <div className="timeline-section">
          <div className="timeline-marker beginner-marker">1</div>
          <div className="timeline-card">
            <h2>Beginner</h2>
            <ul>
              {roadmapData.beginner.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="timeline-section">
          <div className="timeline-marker intermediate-marker">2</div>
          <div className="timeline-card">
            <h2>Intermediate</h2>
            <ul>
              {roadmapData.intermediate.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="timeline-section">
          <div className="timeline-marker advanced-marker">3</div>
          <div className="timeline-card">
            <h2>Advanced</h2>
            <ul>
              {roadmapData.advanced.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}