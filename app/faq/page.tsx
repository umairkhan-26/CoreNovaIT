import type { Metadata } from "next";

export const metadata: Metadata = { title: "FAQ" };

const FAQS = [
  {
    q: "Will your branding show up anywhere my client can see?",
    a: "No. Staging URLs, invoices, emails, and footers all stay white-label — our name never appears in a client-facing deliverable.",
  },
  {
    q: "Which platforms do you actually build on?",
    a: "Shopify, Wix, Squarespace, WordPress, WooCommerce, and fully custom development — each with its own documented workflow, from discovery through post-launch.",
  },
  {
    q: "How does AI get added to an existing site?",
    a: "As a modular layer on top of whatever platform you're already on — chatbots, recommendations, search, or automation — scoped, tested, and disclosed before launch, with no vendor lock-in.",
  },
  {
    q: "What happens after launch?",
    a: "A bug-fix window on every project, plus an optional maintenance or SLA-based support retainer, so nothing is stranded once the site goes live.",
  },
  {
    q: "Who owns the code and designs when it's done?",
    a: "You and your client do. IP and ownership terms are agreed upfront and everything is fully transferable — no lock-in to us as the developer.",
  },
];

export default function FaqPage() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head">
          <h1>Questions.</h1>
        </div>
        <div className="faq">
          {FAQS.map((item, i) => (
            <details key={item.q} open={i === 0}>
              <summary>
                {item.q}
                <span className="plus" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
