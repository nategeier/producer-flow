"use client";

import { useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I finally understood how to craft my own story instead of being someone else's copy. I went from 5–12 tracks a year to sometimes 5–7 quality tracks in a week. It's like psychotherapy for producers.",
    name: "Henson",
    role: "Eklektisch / Jeahmon",
    initials: "H",
  },
  {
    quote:
      "His exceptional skills allowed him to seamlessly align with my ideas, and together we achieved releases on labels like Systematic and Terrazza. A truly outstanding producer.",
    name: "Sascha Braemer",
    role: "Systematic · Frau Blau · Hoito",
    initials: "SB",
  },
  {
    quote:
      "He really listens and tries to come closest to what has been discussed and laid out. For me he's a very special partner in the studio. Him and his whole family became part of my life.",
    name: "Philip Jung",
    role: "M.A.N.D.Y. · Get Physical Music",
    initials: "PJ",
  },
  {
    quote:
      "After implementing his very specific advice on arrangement, mixing and career planning, I reached a new level in my productions. My long-term vision as an artist has also become clearer.",
    name: "Omar Guti",
    role: "Sound + Creativity Blog",
    initials: "OG",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const total = TESTIMONIALS.length;
  const t = TESTIMONIALS[i];

  const prev = () => setI((x) => (x - 1 + total) % total);
  const next = () => setI((x) => (x + 1) % total);

  const counter = `${String(i + 1).padStart(2, "0")} / ${String(total).padStart(
    2,
    "0"
  )}`;

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container-pf">
        <div className="section-head reveal">
          <div className="section-label">
            <span className="num">03</span>
            <span className="lbl">Voices</span>
          </div>
          <h2 className="section-title">
            What producers
            <br />
            say afterwards.
          </h2>
        </div>

        <div className="tcarousel reveal">
          <div className="tcard">
            <div className="tquote">{t.quote}</div>
            <div className="tauthor">
              <div className="avatar">{t.initials}</div>
              <div className="name">{t.name}</div>
              <div className="role">{t.role}</div>
            </div>
          </div>

          <div className="tnav">
            <button type="button" aria-label="Previous testimonial" onClick={prev}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 2L4 8l6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </button>
            <button type="button" aria-label="Next testimonial" onClick={next}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 2l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </button>
            <span className="count" aria-live="polite">
              {counter}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
