"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { navLinks } from "@/lib/content";
import MagneticButton from "./MagneticButton";
import Logo from "./Logo";

export default function Header() {
  const { scrollY } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const blurValue = useTransform(scrollY, [0, 120], [0, 20]);
  const backdropFilter = useTransform(blurValue, (v) => `blur(${v}px) saturate(150%)`);
  const bgColor = useTransform(
    scrollY,
    [0, 120],
    ["rgba(10, 10, 12, 0)", "rgba(10, 10, 12, 0.6)"]
  );
  const borderColor = useTransform(
    scrollY,
    [0, 120],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.12)"]
  );

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backdropFilter,
        WebkitBackdropFilter: backdropFilter,
      }}
    >
      <motion.div
        className="absolute inset-0 border-b"
        style={{
          backgroundColor: bgColor,
          borderColor: borderColor,
        }}
      />
      <nav className="relative mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-10">
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <MagneticButton
            as="a"
            href="/#carousel"
            className="accent-border relative rounded-full bg-white/5 px-5 py-2 text-sm font-medium text-text-primary transition-colors hover:bg-white/10"
          >
            Get started
          </MagneticButton>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`h-[1.5px] w-6 bg-text-primary transition-transform ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-[1.5px] w-6 bg-text-primary transition-transform ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="glass relative mx-4 mb-4 flex flex-col gap-4 rounded-2xl p-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#carousel"
            className="rounded-full bg-white/10 px-5 py-2 text-center text-sm font-medium text-text-primary"
            onClick={() => setMenuOpen(false)}
          >
            Get started
          </a>
        </div>
      )}
    </motion.header>
  );
}
