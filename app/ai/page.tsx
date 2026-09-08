import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "AI Integrations" };

const AI_ITEMS = [
  "AI chatbots and virtual assistants for customer support and lead capture",
  "AI-powered product recommendations for Shopify and WooCommerce stores",
  "Content and copy generation tools embedded into CMS workflows",
  "AI-driven, natural-language product or content search",
  "Automated email and marketing personalization",
  "Voice and image recognition for custom applications",
  "Workflow automation connecting your site or app to internal tools",
  "Analytics and predictive insights dashboards",
];

export default function AiPage() {
  return (
    <div>
      <section className="sec ai-sec" style={{ borderTop: "none" }}>
        <div className="wrap">
          <div className="eyebrow page-eyebrow">AI Integrations</div>
          <h1 className="page-h1">Add intelligence to any platform.</h1>
          <p className="page-intro">
            Every AI feature is scoped and tested before launch, and added as
            a modular layer — it never locks a client into a single vendor.
            Costs and API dependencies are disclosed upfront, with no hidden
            usage fees.
          </p>
          <div className="ai-grid" style={{ marginTop: 40 }}>
            {AI_ITEMS.map((item) => (
              <div className="ai-item" key={item}>
                <span className="dash">—</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="wrap">
          <h2 className="h2-sm">Want AI layered onto an existing site?</h2>
          <Link href="/contact" className="btn btn-solid">
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}
