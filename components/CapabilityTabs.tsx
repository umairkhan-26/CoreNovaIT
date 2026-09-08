"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { capabilityTabs } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function CapabilityTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = capabilityTabs[activeIndex];

  const goTo = (index: number) => {
    setActiveIndex((index + capabilityTabs.length) % capabilityTabs.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goTo(activeIndex + 1);
    if (e.key === "ArrowLeft") goTo(activeIndex - 1);
  };

  return (
    <section id="capabilities" className="section-divider relative py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeading
          eyebrow="Our process"
          title="How we work."
          description="The same three-phase process runs under every service, so you always know what happens next."
          className="mb-12"
        />

        <div
          role="tablist"
          aria-label="Capabilities"
          onKeyDown={handleKeyDown}
          className="mb-10 flex flex-wrap gap-2"
        >
          {capabilityTabs.map((tab, index) => (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={index === activeIndex}
              aria-controls={`panel-${tab.id}`}
              tabIndex={index === activeIndex ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                index === activeIndex
                  ? "text-bg-base"
                  : "glass text-text-secondary hover:text-text-primary"
              }`}
            >
              {index === activeIndex && (
                <motion.span
                  layoutId="tab-highlight"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
          >
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="font-display text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
                {active.headline}
              </h3>
              <p className="mt-4 text-text-secondary">{active.body}</p>
            </motion.div>

            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                aria-label="Previous capability"
                onClick={() => goTo(activeIndex - 1)}
                className="glass flex h-10 w-10 items-center justify-center rounded-full text-text-primary hover:bg-white/10"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next capability"
                onClick={() => goTo(activeIndex + 1)}
                className="glass flex h-10 w-10 items-center justify-center rounded-full text-text-primary hover:bg-white/10"
              >
                →
              </button>
              <span className="text-xs text-text-secondary">
                {activeIndex + 1} / {capabilityTabs.length}
              </span>
            </div>
          </div>

          <div
            className="glass relative overflow-hidden rounded-xl2"
            style={{ aspectRatio: "4 / 3" }}
          >
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={active.image}
                alt={active.headline}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
