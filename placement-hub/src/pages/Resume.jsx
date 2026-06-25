import "../styles/resume.css";

const atsChecklist = [
  "Use a single-column, simple layout",
  "Avoid images, icons & graphics in ATS-scanned resumes",
  "Use standard section headings (Experience, Education, Skills)",
  "Save as PDF unless asked otherwise",
  "Use a readable font like Calibri, Arial, or Helvetica",
  "Include keywords from the job description",
];

const resumeTips = [
  { title: "Keep it to one page", desc: "Especially for freshers — recruiters spend seconds scanning." },
  { title: "Quantify achievements", desc: "Use numbers: 'Improved performance by 30%' instead of vague claims." },
  { title: "Tailor for each role", desc: "Highlight relevant projects and skills for the specific job." },
  { title: "Use action verbs", desc: "Start bullet points with words like 'Built', 'Designed', 'Optimized'." },
];

const resumeMistakes = [
  { title: "Generic objective statements", desc: "Avoid vague summaries that don't say anything specific." },
  { title: "Spelling & grammar errors", desc: "Always proofread — typos create a poor first impression." },
  { title: "Unexplained gaps", desc: "Address timeline gaps briefly instead of leaving them blank." },
  { title: "Overloaded design", desc: "Too many colors/fonts can distract from your actual content." },
];

export default function Resume() {
  return (
    <div className="resume-page">
      <div className="resume-header">
        <h1>Resume Preparation</h1>
        <p>Build an ATS-friendly resume that gets you shortlisted.</p>
      </div>

      <section className="resume-section">
        <h2>✅ ATS Checklist</h2>
        <div className="checklist-grid">
          {atsChecklist.map((item, idx) => (
            <div className="checklist-item" key={idx}>
              <span className="check-icon">✓</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <h2>💡 Resume Tips</h2>
        <div className="tips-grid">
          {resumeTips.map((tip, idx) => (
            <div className="tip-card" key={idx}>
              <h3>{tip.title}</h3>
              <p>{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <h2>⚠️ Common Mistakes</h2>
        <div className="mistakes-grid">
          {resumeMistakes.map((mistake, idx) => (
            <div className="mistake-card" key={idx}>
              <h3>{mistake.title}</h3>
              <p>{mistake.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}