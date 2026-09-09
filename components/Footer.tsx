import Link from "next/link";

const CONTACT_EMAIL = "contact@corenovait.com.au";

function NovaMark({ size = 24 }: { size?: number }) {
  return (
    <svg
      className="mark"
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="13" cy="13" r="2.4" fill="var(--accent)" />
      <path
        d="M13 1v6M13 19v6M1 13h6M19 13h6M4.5 4.5l4.2 4.2M17.3 17.3l4.2 4.2M21.5 4.5l-4.2 4.2M8.7 17.3l-4.2 4.2"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Link className="brand" href="/">
              <NovaMark />
              <span>CoreNovaIT</span>
            </Link>
            <p>
              Build. Design. Grow. Automate. A white-label development,
              design, and AI-integration partner for agencies that don&apos;t
              build in-house.
            </p>
          </div>

          <div className="foot-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services">Web Development</Link></li>
              <li><Link href="/services">App Development</Link></li>
              <li><Link href="/services">Graphic Design</Link></li>
              <li><Link href="/services">Motion Graphics</Link></li>
              <li><Link href="/services">Digital Marketing</Link></li>
              <li><Link href="/services">Social Media</Link></li>
              <li><Link href="/ai">AI Integrations</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Platforms</h4>
            <ul>
              <li><Link href="/platforms">Shopify</Link></li>
              <li><Link href="/platforms">Wix</Link></li>
              <li><Link href="/platforms">Squarespace</Link></li>
              <li><Link href="/platforms">WordPress</Link></li>
              <li><Link href="/platforms">WooCommerce</Link></li>
              <li><Link href="/platforms">Custom Development</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/process">Process</Link></li>
              <li><Link href="/partners">For Partners</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Start a Project</Link></li>
              <li><a href={`mailto:${CONTACT_EMAIL}`}>Email Us</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} CoreNovaIT — built white-label, always.</span>
          <span>Partner rates, NDA, and escalation paths available on request.</span>
        </div>
      </div>
    </footer>
  );
}
