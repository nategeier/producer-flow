import ArrowIcon from "./ArrowIcon";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-grid" />
      <div className="container-pf" style={{ position: "relative" }}>
        <div className="hero-eyebrow">
          <span className="dot" />
          <span className="mono">Electronic Music &nbsp;/&nbsp;&nbsp;Est. Zürich</span>
        </div>
        <h1>
          Make music
          <br />
          in <span className="navy">flow</span>.
          <br />
          <span className="accent">Not in tutorials.</span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-sub">
            A coaching practice for electronic producers who are done chasing
            plugins and presets — and ready to build their own sound, workflow,
            and creative process.
          </p>
          <div className="hero-meta">
            <span className="label">// Since 2005</span>
            <span className="value">
              20 years of
              <br />
              studio practice
            </span>
          </div>
          <a href="#programmes" className="hero-cta">
            See Programmes
            <ArrowIcon />
          </a>
        </div>
      </div>
    </header>
  );
}
