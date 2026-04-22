"use client";

import { useEffect } from "react";

/**
 * Attaches an IntersectionObserver that fades `.reveal` elements into view
 * once, matching the design handoff (0.8s opacity + translateY).
 */
export default function RevealProvider() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.05 }
    );

    const els = document.querySelectorAll<HTMLElement>(".reveal");
    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
