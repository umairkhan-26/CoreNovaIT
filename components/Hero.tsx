"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/content";
import MagneticButton from "./MagneticButton";
import Particle from "./Particle";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background: Ken-Burns image fallback (swap for <video> when an asset is available) */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')",
            filter: "saturate(0.85) brightness(0.55)",
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 24, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-base/60 via-bg-base/85 to-bg-base" />
      </div>

      <Particle
        className="left-[12%] top-[28%]"
        size={10}
        variant="ring"
        influenceRadius={300}
        maxOffset={16}
      />
      <Particle
        className="right-[15%] top-[20%]"
        size={6}
        variant="dot"
        influenceRadius={220}
        maxOffset={10}
      />
      <Particle
        className="bottom-[22%] left-[20%]"
        size={60}
        variant="blob"
        influenceRadius={340}
        maxOffset={14}
      />
      <Particle
        className="bottom-[30%] right-[10%]"
        size={8}
        variant="dot"
        influenceRadius={200}
        maxOffset={10}
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mb-6 rounded-full px-4 py-1.5 text-xs font-medium text-text-secondary"
        >
          Introducing {siteConfig.name}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight text-text-primary"
        >
          {siteConfig.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-balance text-lg text-text-secondary"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton className="accent-border relative rounded-full bg-white px-7 py-3 text-sm font-semibold text-bg-base transition-transform">
            Start a project
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#capabilities"
            className="glass rounded-full px-7 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-white/10"
          >
            See our process
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-text-secondary"
          />
        </svg>
      </motion.div>
    </section>
  );
}
