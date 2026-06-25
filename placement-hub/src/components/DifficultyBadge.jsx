export default function DifficultyBadge({ level = "Easy" }) {
  const levelClass = level.toLowerCase();
  return <span className={`difficulty-badge ${levelClass}`}>{level}</span>;
}