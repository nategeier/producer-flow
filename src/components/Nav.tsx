"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="container-pf nav-inner">
        <a href="#top" className="logo" aria-label="Producer Flow home">
          <span className="logo-mark" />
          <span>PRODUCER&nbsp;FLOW</span>
        </a>
        <div className="nav-links">
          <a href="#philosophy">Method</a>
          <a href="#programmes">Programmes</a>
          <a href="#testimonials">Voices</a>
          <a href="#story">Case Study</a>
          <a href="#founder">Founder</a>
        </div>
        <a href="#contact" className="nav-cta">
          Book a Call
        </a>
      </div>
    </nav>
  );
}
