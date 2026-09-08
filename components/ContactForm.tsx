"use client";

import { useState } from "react";
import MagneticButton from "./MagneticButton";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setStatus("success");
        setFeedback(data.message || "Thank you! Your message has been received.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setFeedback(data?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setFeedback("Couldn't reach the server. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass flex flex-col gap-5 rounded-xl2 p-8">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-text-primary">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg border border-surface-glass-border bg-white/5 px-4 py-2.5 text-text-primary outline-none transition-colors focus:border-accent-solid"
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-text-primary">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-surface-glass-border bg-white/5 px-4 py-2.5 text-text-primary outline-none transition-colors focus:border-accent-solid"
          placeholder="you@company.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-text-primary">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-none rounded-lg border border-surface-glass-border bg-white/5 px-4 py-2.5 text-text-primary outline-none transition-colors focus:border-accent-solid"
          placeholder="Tell us what you're building..."
        />
      </div>

      <MagneticButton
        type="submit"
        disabled={status === "submitting"}
        className="accent-border relative mt-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-bg-base disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </MagneticButton>

      {status === "success" && (
        <p role="status" className="text-sm text-[#34A853]">
          {feedback}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm text-[#EA4335]">
          {feedback}
        </p>
      )}
    </form>
  );
}
