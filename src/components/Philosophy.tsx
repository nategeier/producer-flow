const PILLARS = [
  {
    title: "Creative process first",
    body:
      "We map how your creativity actually functions — when you’re sharp, when you stall, what states produce your best work — and engineer sessions around it.",
  },
  {
    title: "One sound, one voice",
    body:
      "We cut through influence overload until your tracks stop sounding like someone else’s references and start sounding like you.",
  },
  {
    title: "Systematized workflow",
    body:
      "Templates, decisions, arrangement frames — so finishing a track is a procedure, not a mood.",
  },
  {
    title: "Career as composition",
    body:
      "Label strategy, release planning, artist identity — treated with the same rigor as the music itself.",
  },
];

export default function Philosophy() {
  return (
    <section className="section" id="philosophy">
      <div className="container-pf">
        <div className="section-head reveal">
          <div className="section-label">
            <span className="num">01</span>
            <span className="lbl">The Method</span>
          </div>
          <h2 className="section-title">
            We don&rsquo;t teach
            <br />
            software. We teach
            <br />
            the producer.
          </h2>
        </div>
        <div className="philo-grid">
          <div className="philo-quote reveal">
            The bottleneck is never <span className="strike">the plugin</span>,
            never <span className="strike">the sample pack</span>, never{" "}
            <span className="strike">the tutorial</span>.
            <br />
            <br />
            It&rsquo;s <em>how you work</em>.
          </div>
          <div className="philo-list reveal">
            {PILLARS.map((p, i) => (
              <div key={p.title} className="philo-item">
                <span className="n">/0{i + 1}</span>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
