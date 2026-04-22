"use client";

import { useState } from "react";
import ArrowIcon from "./ArrowIcon";

type FormState = {
  name: string;
  email: string;
  artist: string;
  programme: string;
  level: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_RX = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const INITIAL: FormState = {
  name: "",
  email: "",
  artist: "",
  programme: "",
  level: "",
  message: "",
};

export default function Contact() {
  const [data, setData] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update =
    <K extends keyof FormState>(key: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setData((d) => ({ ...d, [key]: e.target.value }));
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!data.name.trim() || data.name.trim().length < 2) errs.name = "Required";
    if (!EMAIL_RX.test(data.email)) errs.email = "Enter a valid email";
    if (!data.programme) errs.programme = "Choose one";
    if (!data.message.trim() || data.message.trim().length < 10)
      errs.message = "Tell us a bit";
    return errs;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    // Simulated submission. Replace with a fetch() to your backend
    // (e.g. /api/contact handing off to Resend, Formspree, etc.).
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container-pf">
        <div className="contact-grid">
          <div className="contact-intro reveal">
            <div className="mono" style={{ marginBottom: 20 }}>
              // 05 &mdash; Contact
            </div>
            <h2>
              Tell us about
              <br />
              your practice.
            </h2>
            <p>
              Not every producer is right for every programme. Share where you
              are now, and we&rsquo;ll reply within two working days with a path
              forward — or an honest no.
            </p>
            <div className="contact-detail">
              <div className="row">
                <span className="k">Reply time</span>
                <span className="v">Within 48 hours</span>
              </div>
              <div className="row">
                <span className="k">Languages</span>
                <span className="v">English, Deutsch</span>
              </div>
              <div className="row">
                <span className="k">Based</span>
                <span className="v">Herrliberg, Switzerland</span>
              </div>
              <div className="row">
                <span className="k">Sessions</span>
                <span className="v">Remote, worldwide</span>
              </div>
            </div>
          </div>

          <div className="reveal">
            {submitted ? (
              <div className="success-state" role="status">
                <div className="check">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12l5 5L20 7"
                      stroke="#EDEDED"
                      strokeWidth="2"
                      strokeLinecap="square"
                    />
                  </svg>
                </div>
                <h3>Message received.</h3>
                <p>
                  We&rsquo;ll be in touch within 48 hours from{" "}
                  <strong style={{ color: "var(--text)" }}>
                    hello@producerflow.academy
                  </strong>
                  . Check your spam folder just in case.
                </p>
              </div>
            ) : (
              <form className="pf-form" onSubmit={onSubmit} noValidate>
                <div className={`field${errors.name ? " error" : ""}`}>
                  <label>
                    Your name <span className="req">*</span>
                    <span className="err-msg">{errors.name || "Required"}</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="First and last"
                    autoComplete="name"
                    value={data.name}
                    onChange={update("name")}
                  />
                </div>

                <div className={`field${errors.email ? " error" : ""}`}>
                  <label>
                    Email <span className="req">*</span>
                    <span className="err-msg">
                      {errors.email || "Enter a valid email"}
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@sound.com"
                    autoComplete="email"
                    value={data.email}
                    onChange={update("email")}
                  />
                </div>

                <div className="field">
                  <label>
                    Artist name{" "}
                    <span style={{ color: "var(--text-mute)" }}>(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="artist"
                    placeholder="How you release music"
                    value={data.artist}
                    onChange={update("artist")}
                  />
                </div>

                <div className={`field${errors.programme ? " error" : ""}`}>
                  <label>
                    I&rsquo;m interested in <span className="req">*</span>
                  </label>
                  <div className="radio-group">
                    {[
                      { v: "coaching", label: "1-on-1 Coaching" },
                      { v: "essentials", label: "Essentials" },
                      { v: "intro", label: "Intro" },
                      { v: "unsure", label: "Not sure yet" },
                    ].map((o) => (
                      <label key={o.v}>
                        <input
                          type="radio"
                          name="programme"
                          value={o.v}
                          checked={data.programme === o.v}
                          onChange={update("programme")}
                        />
                        {o.label}
                      </label>
                    ))}
                  </div>
                  <span className="err-msg" style={{ bottom: -4 }}>
                    {errors.programme || "Choose one"}
                  </span>
                </div>

                <div className="field">
                  <label>Where are you now?</label>
                  <div className="radio-group">
                    {[
                      { v: "starting", label: "Just starting" },
                      { v: "releasing", label: "Releasing occasionally" },
                      { v: "signed", label: "Signed to labels" },
                      { v: "fulltime", label: "Full-time artist" },
                    ].map((o) => (
                      <label key={o.v}>
                        <input
                          type="radio"
                          name="level"
                          value={o.v}
                          checked={data.level === o.v}
                          onChange={update("level")}
                        />
                        {o.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div className={`field${errors.message ? " error" : ""}`}>
                  <label>
                    What are you stuck on? <span className="req">*</span>
                    <span className="err-msg">
                      {errors.message || "Tell us a bit"}
                    </span>
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Workflow, arrangement, finishing, sound, direction…"
                    value={data.message}
                    onChange={update("message")}
                  />
                </div>

                <div className="submit-row">
                  <p className="note">
                    By submitting you agree to be contacted about your enquiry.
                    We don&rsquo;t spam and we don&rsquo;t share your details.
                  </p>
                  <button
                    type="submit"
                    className="submit"
                    disabled={submitting}
                  >
                    {submitting ? "Sending…" : "Send Message"}
                    {submitting ? null : <ArrowIcon />}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
