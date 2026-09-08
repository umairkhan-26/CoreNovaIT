import type { Metadata } from "next";

export const metadata: Metadata = { title: "Platforms" };

const PLATFORMS = [
  {
    tag: "E-commerce",
    name: "Shopify",
    blurb: "Store architecture, theme development, and app integrations, built for real product catalogs.",
    points: [
      "Theme customization or custom Liquid development",
      "Payment, shipping, reviews & email app integrations",
      "Product upload with variants and inventory",
      "Live test transaction before go-live",
    ],
  },
  {
    tag: "Guided build",
    name: "Wix",
    blurb: "Template or fully custom design, built in the Wix Editor with the apps your client needs.",
    points: [
      "Wireframe and layout approval upfront",
      "Booking, forms & e-commerce app integrations",
      "SEO basics: meta tags, alt text, sitemap",
      "Plain-language content-editing guide on handover",
    ],
  },
  {
    tag: "Guided build",
    name: "Squarespace",
    blurb: "Template selection by industry, with custom CSS where the design needs it.",
    points: [
      "Structure and page-hierarchy planning",
      "Booking, email marketing & analytics integrations",
      "Native features disclosed vs. custom code",
      "Short training video for content management",
    ],
  },
  {
    tag: "Custom CMS",
    name: "WordPress",
    blurb: "Custom-built or premium-theme sites, always staged before they touch production.",
    points: [
      "Staging environment — never built on live",
      "Vetted, fully documented plugin selection",
      "Security setup: SSL, firewall, backups, hardening",
      "Cross-browser and cross-device QA",
    ],
  },
  {
    tag: "E-commerce",
    name: "WooCommerce",
    blurb: "Store architecture and checkout built around your client's tax and shipping complexity.",
    points: [
      "Tax rules, shipping zones & payment gateways",
      "Product upload with variants, stock & SKUs",
      "End-to-end cart and checkout testing",
      "Order-flow monitoring through the first week",
    ],
  },
  {
    tag: "Full build",
    name: "Custom Development",
    blurb: "Bespoke architecture for requirements no platform template can meet.",
    points: [
      "Technical architecture: stack, hosting, database",
      "Sprint-based development with visible progress",
      "API and integration development, documented",
      "Codebase docs and architecture diagram on handover",
    ],
  },
];

export default function PlatformsPage() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="eyebrow page-eyebrow">Platforms</div>
        <h1 className="page-h1">Fluent in whatever your client already picked.</h1>
        <p className="page-intro">
          Each platform runs its own documented workflow, from discovery to
          post-launch — nothing generic, nothing improvised.
        </p>
        <div className="grid-3" style={{ marginTop: 40 }}>
          {PLATFORMS.map((p) => (
            <article className="plat-card" key={p.name}>
              <span className="plat-tag">{p.tag}</span>
              <h3>{p.name}</h3>
              <p>{p.blurb}</p>
              <ul>
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
