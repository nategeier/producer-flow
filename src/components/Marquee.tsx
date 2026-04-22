const LABELS = [
  "Systematic",
  "Get Physical",
  "Terrazza",
  "Atlant",
  "Jeahmon",
  "Frau Blau",
  "Eklektisch",
  "Hoito",
  "Abellum",
];

export default function Marquee() {
  // Double the track so the CSS translateX(-50%) loops seamlessly.
  const doubled = [...LABELS, ...LABELS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((name, i) => (
          <span key={`marquee-item-${i}`}>
            <span>{name}</span>
            <span className="sep" style={{ marginLeft: 60 }}>
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
