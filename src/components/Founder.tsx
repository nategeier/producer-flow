import Image from "next/image";
import ArrowIcon from "./ArrowIcon";

export default function Founder() {
  return (
    <section className="section" id="founder" style={{ paddingTop: 40 }}>
      <div className="container-pf">
        <div className="founder">
          <div className="founder-img reveal">
            <Image
              src="/dayne-portrait.avif"
              alt="Studio portrait of Dayne S., founder of Producer Flow Academy"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="founder-text reveal">
            <div className="mono" style={{ marginBottom: 20 }}>
              // Founder &mdash; Dayne S.
            </div>
            <h3>
              From local gigs
              <br />
              to ghost-producing
              <br />
              the scene.
            </h3>
            <p>
              Two decades in electronic music. Hundreds of productions for other
              artists, supported by the biggest names, released on Systematic,
              Get Physical, Terrazza and beyond.
            </p>
            <p>
              Producer Flow Academy is the system that came out of it — an
              answer to the tutorial noise, the plugin-chasing, the
              inspiration-waiting. A method built around how creativity actually
              works.
            </p>
            <a href="#contact" className="hero-cta" style={{ marginTop: 24 }}>
              Work With Dayne
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
