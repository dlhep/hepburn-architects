"use client";

import { FormEvent, ReactNode, useState } from "react";
import { ArrowRight, LockKeyhole } from "lucide-react";

type LeadGateProps = {
  source: "architect-fee" | "build-cost";
  projectSummary: Record<string, string | number | string[]>;
  children: ReactNode;
};

export function LeadGate({ source, projectSummary, children }: LeadGateProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !consent) return;

    setStatus("sending");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          source,
          projectSummary,
        }),
      });

      if (!response.ok) throw new Error("Lead submission failed");
      setRevealed(true);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  if (revealed) {
    return (
      <div className="lead-revealed">
        <div className="lead-confirmation">
          <span>Estimate unlocked</span>
          <strong>Thanks, {name.split(" ")[0]}.</strong>
          <p>Your indicative result is shown below. We may follow up by email about the project details you entered.</p>
        </div>
        {children}
      </div>
    );
  }

  return (
    <form className="lead-gate" onSubmit={submit}>
      <LockKeyhole size={24}/>
      <div>
        <small className="eyebrow">Unlock your indicative result</small>
        <h3>Where should we send your project follow-up?</h3>
        <p>Enter your name and email to reveal the estimate. This is not a quotation or contractual offer.</p>
      </div>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          required
          placeholder="Your name"
        />
      </label>
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
          placeholder="you@example.com"
        />
      </label>
      <label className="lead-consent">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
        />
        <span>I agree that Hepburn Architects may contact me about this enquiry. <a href="/privacy" target="_blank" rel="noreferrer">Read the privacy notice.</a></span>
      </label>
      <button className="btn primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Unlocking…" : "Show my estimate"} <ArrowRight size={17}/>
      </button>
      {status === "error" && (
        <p className="lead-error">We could not submit your details. Please try again.</p>
      )}
    </form>
  );
}
