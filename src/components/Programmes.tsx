type Programme = {
  num: string;
  badge?: string;
  kicker: string;
  title: React.ReactNode;
  desc: string;
  features: string[];
  cta: string;
  price: string;
  featured?: boolean;
};

const PROGRAMMES: Programme[] = [
  {
    num: "/03",
    kicker: "Entry Level",
    title: (
      <>
        Producer Flow
        <br />
        Intro
      </>
    ),
    desc:
      "Shadow Dayne S through a full production session. Every decision — what to keep, cut, commit to — explained in real time.",
    features: [
      "Full session walkthrough",
      "Decision-by-decision commentary",
      "Project files included",
      "Self-paced, on demand",
    ],
    cta: "Learn More",
    price: "From €—",
  },
  {
    num: "/02",
    badge: "Most chosen",
    kicker: "Community & Feedback",
    title: (
      <>
        Producer Flow
        <br />
        Essentials
      </>
    ),
    desc:
      "A group of committed producers, weekly live Q&A calls, track feedback, and a structured curriculum — led by our founder.",
    features: [
      "On-demand video lessons",
      "Weekly live Q&A calls",
      "Personal track feedback",
      "Private community access",
    ],
    cta: "Learn More",
    price: "Monthly",
    featured: true,
  },
  {
    num: "/01",
    badge: "1—on—1",
    kicker: "Deep Transformation",
    title: (
      <>
        Producer Flow
        <br />
        Coaching
      </>
    ),
    desc:
      "Eight weekly 1-on-1 calls. Systematize your workflow, lock in your sound, plan the next phase of your career. High commitment, high return.",
    features: [
      "8 × 1-on-1 coaching calls",
      "Bespoke workflow design",
      "Arrangement & mix guidance",
      "Release & label strategy",
    ],
    cta: "Apply",
    price: "By application",
  },
];

export default function Programmes() {
  return (
    <section className="section" id="programmes" style={{ paddingTop: 60 }}>
      <div className="container-pf">
        <div className="section-head reveal">
          <div className="section-label">
            <span className="num">02</span>
            <span className="lbl">Programmes</span>
          </div>
          <h2 className="section-title">
            Three ways in.
            <br />
            One destination:
            <br />
            your own sound.
          </h2>
        </div>
        <div className="progs">
          {PROGRAMMES.map((p) => (
            <div
              key={p.num}
              className={`prog reveal${p.featured ? " featured" : ""}`}
            >
              <div className="prog-head">
                <span className="prog-num">{p.num}</span>
                {p.badge ? <span className="prog-badge">{p.badge}</span> : null}
              </div>
              <div className="prog-kicker">{p.kicker}</div>
              <h3>{p.title}</h3>
              <p className="prog-desc">{p.desc}</p>
              <ul className="prog-features">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="prog-foot">
                <a href="#contact" className="prog-learn">
                  {p.cta}
                </a>
                <span className="prog-price">{p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
