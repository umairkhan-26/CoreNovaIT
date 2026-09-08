import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "For Agency Partners" };

const TRUST_ITEMS = [
  { title: "White-label readiness", desc: "our branding never appears in emails, invoices, staging URLs, or footers." },
  { title: "Non-compete assurance", desc: "written confirmation we won't approach your end-clients directly." },
  { title: "Communication that reflects well on you", desc: "professional, fast, no jargon to translate." },
  { title: "Scalability", desc: "one project or ten at once, no drop in quality." },
  { title: "Reporting you can forward as-is", desc: "clean updates you can send straight to your client." },
  { title: "Clear IP and ownership terms", desc: "all code, designs, and assets are fully transferable." },
  { title: "Consistent quality across platforms", desc: "not just one specialty." },
  { title: "Backup and redundancy", desc: "a team behind the work, not a single point of failure." },
  { title: "Agency-friendly pricing", desc: "partner rates, an NDA, and a clear escalation path." },
  { title: "Fast turnaround without sacrificing QA", desc: "your reputation depends on our delivery." },
];

const PROOF_ITEMS = [
  "Staging link access throughout every build, on every platform.",
  "App and plugin lists disclosed upfront — no hidden paid dependencies.",
  "Theme and plugin edits documented, so you're never locked into one developer.",
  "Security checklists and architecture diagrams shared as written documents.",
  "Every AI feature scoped and tested before launch, with data use disclosed in writing.",
];

export default function PartnersPage() {
  return (
    <div>
      <section className="sec">
        <div className="wrap">
          <div className="eyebrow page-eyebrow">For agency partners</div>
          <h1 className="page-h1">What you&apos;re really evaluating.</h1>
          <p className="page-intro">
            Since you resell our work under your own brand, we know what
            you&apos;re quietly checking for before you hand us a client — so
            we build our process around it.
          </p>

          <div className="trust-list">
            {TRUST_ITEMS.map((item) => (
              <div className="trust-item" key={item.title}>
                <span className="trust-check">✓</span>
                <p>
                  <strong>{item.title}</strong> — {item.desc}
                </p>
              </div>
            ))}
          </div>

          <h2 className="section-subhead">Proof, not promises.</h2>
          <div className="proof-list">
            {PROOF_ITEMS.map((item) => (
              <div className="proof-item" key={item}>
                <span>—</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <h2 className="h2-sm">Ready to send us a client?</h2>
          <Link href="/contact" className="btn btn-solid">
            Become a Partner
          </Link>
        </div>
      </section>
    </div>
  );
}
