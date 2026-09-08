"use client";

import { useState, type FormEvent } from "react";

const TO = "umairkhan62661@gmail.com";

const SERVICES = [
  "Web Development",
  "App Development",
  "Graphic Design",
  "Motion Graphics",
  "Digital Marketing",
  "Social Media",
  "AI Integrations",
  "Not sure yet",
];

/**
 * There is no backend here — CoreNovaIT's site doesn't run a server that
 * can receive form submissions, so "Send" builds a mailto: link from the
 * fields and opens the visitor's email client with everything pre-filled.
 *
 * If you later add a real backend (an API route, Formspree, etc.), swap
 * handleSubmit's mailto redirect for a fetch() POST — the form/state
 * below doesn't need to change.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(SERVICES[0]);
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState("");

  function buildMailto() {
    const subject = `New project inquiry — ${service}${name ? ` (${name})` : ""}`;
    const body = [
      `Name: ${name}`,
      `Agency/Company: ${company || "—"}`,
      `Email: ${email}`,
      `Service needed: ${service}`,
      "",
      "Project details:",
      details,
    ].join("\n");
    return `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }
    window.location.href = buildMailto();
    setStatus(
      `Opening your email app… if nothing happens, email us directly at ${TO}.`
    );
  }

  return (
    <div className="form-wrap">
      <form onSubmit={handleSubmit} noValidate>
        <div className="field-row">
          <div className="field">
            <label htmlFor="cf-name">Name</label>
            <input
              id="cf-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="cf-company">Agency / Company</label>
            <input
              id="cf-company"
              name="company"
              type="text"
              autoComplete="organization"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="cf-email">Email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="cf-service">What do you need?</label>
          <select
            id="cf-service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="cf-details">Project details</label>
          <textarea
            id="cf-details"
            name="details"
            required
            placeholder="Platform, timeline, budget range, anything else we should know."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>

        <div>
          <button type="submit" className="btn btn-solid">
            Send via Email
          </button>
          <p className="form-note" style={{ marginTop: 12 }}>
            Clicking Send opens your email app with these details pre-filled,
            addressed to CoreNovaIT — nothing is sent from this page directly.
          </p>
          {status && <p id="formStatus">{status}</p>}
        </div>
      </form>

      <aside className="contact-side">
        <h3>Prefer to just email us?</h3>
        <p>Skip the form and write to us directly — same inbox either way.</p>
        <div className="direct">
          <a className="mailto" href={`mailto:${TO}`}>
            {TO}
          </a>
        </div>
      </aside>
    </div>
  );
}
