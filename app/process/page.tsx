import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Process" };

const STEPS = [
  { num: "01", title: "Discovery Call", desc: "Goals, audience, budget, timeline." },
  { num: "02", title: "Proposal & Scope of Work", desc: "Deliverables, milestones, pricing." },
  { num: "03", title: "Kickoff", desc: "Point of contact assigned, shared tools set up." },
  { num: "04", title: "Execution in Sprints", desc: "Visible progress, not one black-box delivery." },
  { num: "05", title: "Client Review Checkpoints", desc: "Feedback built into the process, not bolted on after." },
  { num: "06", title: "Delivery & Handover", desc: "Final files and access, documentation, training." },
  { num: "07", title: "Post-Launch Support", desc: "Bug fixes, maintenance, or a retainer option." },
];

export default function ProcessPage() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="eyebrow page-eyebrow">The process</div>
        <h1 className="page-h1">Every engagement, one structure.</h1>
        <p className="page-intro">
          Regardless of platform or service, every project runs through the
          same seven checkpoints — so you always know exactly where it
          stands.
        </p>
        <div className="ledger" style={{ marginTop: 20 }}>
          {STEPS.map((s) => (
            <div className="ledger-row" key={s.num}>
              <div className="ledger-num">{s.num}</div>
              <div className="ledger-title">{s.title}</div>
              <div className="ledger-desc">{s.desc}</div>
            </div>
          ))}
        </div>
        <p className="page-intro">
          Each platform layers its own detail on top of this structure — see{" "}
          <Link className="link-arrow" href="/platforms">
            Platforms →
          </Link>{" "}
          for the platform-specific version.
        </p>
      </div>
    </section>
  );
}
