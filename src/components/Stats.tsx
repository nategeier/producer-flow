const STATS = [
  { value: "20", unit: "yrs", label: "Founder’s experience\nin electronic production" },
  { value: "100", unit: "+", label: "Productions for\nother artists" },
  { value: "8", unit: "wk", label: "To a new\ncreative workflow" },
  { value: "5—7", unit: "/wk", label: "Tracks a Producer Flow\ngraduate ships" },
];

export default function Stats() {
  return (
    <section style={{ padding: "40px 0 80px" }}>
      <div className="container-pf">
        <div className="stats reveal">
          {STATS.map((s, i) => (
            <div key={i} className="stat">
              <div className="k">
                {s.value}
                <span className="unit">{s.unit}</span>
              </div>
              <div className="v">
                {s.label.split("\n").map((line, j, arr) => (
                  <span key={j}>
                    {line}
                    {j < arr.length - 1 ? <br /> : null}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
