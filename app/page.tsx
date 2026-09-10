import Link from "next/link";
import NovaCanvas from "@/components/NovaCanvas";
import Testimonials from "@/components/Testimonials";

const SERVICES = [
  { num: "01", name: "Web Development", blurb: "Shopify, Wix, Squarespace, WordPress, WooCommerce, or fully custom." },
  { num: "02", name: "App Development", blurb: "Sprint-based delivery with visible progress each phase." },
  { num: "03", name: "Graphic Design", blurb: "Brand assets and layouts documented for any future designer." },
  { num: "04", name: "Motion Graphics", blurb: "Animation and video work built to spec and delivered ready to publish." },
  { num: "05", name: "Digital Marketing", blurb: "Campaigns run on reporting you can forward straight to your client." },
  { num: "06", name: "Social Media", blurb: "Ongoing content and management on a cadence your client sees." },
  { num: "07", name: "AI Integrations", blurb: "Layered onto any service above — modular, disclosed, no lock-in." },
];

const PLATFORMS = [
  { tag: "E-commerce", name: "Shopify", blurb: "Theme dev, app integrations, and a live test transaction before launch." },
  { tag: "Guided build", name: "Wix", blurb: "Template or custom, handed over with a plain-language editing guide." },
  { tag: "Custom CMS", name: "WordPress", blurb: "Staging-first, security-hardened, and documented plugin by plugin." },
  { tag: "Full build", name: "Custom Development", blurb: "Architecture docs, code review, and an admin guide on handover." },
];

export default function HomePage() {
  return (
    <div>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">White-label development · design · AI partner</div>
            <h1>
              Build. Design.
              <br />
              Grow. Automate.
            </h1>
            <p className="hero-sub">
              CoreNovaIT is the engine behind agencies that don&apos;t build
              in-house. From a single-page Wix site to full custom
              development with AI integration, we run every engagement in
              the open — sprints you can see, checkpoints you control, and a
              handover with nothing left a mystery.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-solid">
                Start a Project
              </Link>
              <Link href="/partners" className="btn btn-ghost">
                Become a Partner
              </Link>
            </div>
          </div>
          <div className="hero-canvas-wrap">
            <NovaCanvas />
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="teaser">
        <div className="wrap teaser-head">
          <h2>One partner, every service line.</h2>
          <Link className="link-arrow" href="/services">
            View all services →
          </Link>
        </div>
        <div className="row-scroll wrap" style={{ paddingLeft: 0, paddingRight: 0 }}>
          {SERVICES.map((s) => (
            <article className="svc-card" key={s.num}>
              <div className="svc-num">{s.num}</div>
              <h3>{s.name}</h3>
              <p>{s.blurb}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="teaser">
        <div className="wrap">
          <div className="teaser-head">
            <h2>Every engagement, one structure.</h2>
            <Link className="link-arrow" href="/process">
              See the full process →
            </Link>
          </div>
          <div className="steps-peek">
            <div className="ledger-row">
              <div className="ledger-num">01</div>
              <div className="ledger-title">Discovery Call</div>
            </div>
            <div className="ledger-row">
              <div className="ledger-num">04</div>
              <div className="ledger-title">Execution in Sprints</div>
            </div>
            <div className="ledger-row">
              <div className="ledger-num">07</div>
              <div className="ledger-title">Post-Launch Support</div>
            </div>
          </div>
        </div>
      </section>

      <section className="teaser">
        <div className="wrap teaser-head">
          <h2>Fluent in whatever your client already picked.</h2>
          <Link className="link-arrow" href="/platforms">
            View all platforms →
          </Link>
        </div>
        <div className="row-scroll wrap" style={{ paddingLeft: 0, paddingRight: 0 }}>
          {PLATFORMS.map((p) => (
            <article className="plat-card" key={p.name}>
              <span className="plat-tag">{p.tag}</span>
              <h3>{p.name}</h3>
              <p>{p.blurb}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="teaser">
        <div className="wrap">
          <div className="teaser-head">
            <h2>Add intelligence to any platform.</h2>
            <Link className="link-arrow" href="/ai">
              Explore AI integrations →
            </Link>
          </div>
          <p className="page-intro" style={{ marginTop: 0 }}>
            Every AI feature is scoped and tested before launch, and added as
            a modular layer — chatbots, recommendations, search, or
            automation — with no vendor lock-in.
          </p>
        </div>
      </section>

      <section className="teaser">
        <div className="wrap">
          <div className="teaser-head">
            <h2>What agency partners are really evaluating.</h2>
            <Link className="link-arrow" href="/partners">
              See what partners get →
            </Link>
          </div>
          <div className="partner-peek">
            <div className="partner-peek-item">
              <strong>White-label readiness</strong>
              <p>Our branding never appears in a client-facing deliverable.</p>
            </div>
            <div className="partner-peek-item">
              <strong>Clear IP &amp; ownership</strong>
              <p>All code, designs, and assets are fully transferable.</p>
            </div>
            <div className="partner-peek-item">
              <strong>Reporting you can forward</strong>
              <p>Clean updates you can send straight to your client.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="wrap">
          <h2>Let&apos;s build something together.</h2>
          <p>
            CoreNovaIT is structured to be an invisible extension of your
            agency — reliable, documented, and ready to scale with you across
            every service line, AI included.
          </p>
          <Link href="/contact" className="btn btn-solid">
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}
