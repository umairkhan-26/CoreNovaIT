"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/platforms", label: "Platforms" },
  { href: "/process", label: "Process" },
  { href: "/ai", label: "AI" },
  { href: "/partners", label: "Partners" },
  { href: "/faq", label: "FAQ" },
];

function NovaMark({ size = 26 }: { size?: number }) {
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

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header>
      <nav className="nav">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <NovaMark />
          <span>CoreNovaIT</span>
        </Link>

        <div className="navlinks">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link className="btn btn-solid" href="/contact">
            Start a Project
          </Link>
        </div>

        <button
          className="nav-toggle"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </nav>

      <div id="mobileNav" className={open ? "open" : ""}>
        <div className="wrap">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}>
            Start a Project
          </Link>
        </div>
      </div>
    </header>
  );
}
