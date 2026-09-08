"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { trustPoints } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function ShowcaseCarousel() {
  const [index, setIndex] = useState(0);
  const point = trustPoints[index];

  const goTo = (next: number) => {
    setIndex((next + trustPoints.length) % trustPoints.length);
  };

  return (
    <section id="showcase" className="section-divider relative py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeading
          eyebrow="Partners"
          title="Why agency partners trust us."
          className="mb-12"
        />

        <div
          className="glass relative overflow-hidden rounded-xl2"
          style={{ aspectRatio: "16 / 9" }}
          role="group"
          aria-roledescription="carousel"
          aria-label="Partner trust points"
        >
          <motion.div
            key={point.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={point.image}
              alt={point.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10">
              <p className="text-xs font-medium uppercase tracking-wide text-white/70">
                {point.creator}
              </p>
              <h3 className="mt-2 max-w-lg font-display text-xl font-semibold text-white md:text-2xl">
                {point.title}
              </h3>
            </div>
          </motion.div>

          <button
            type="button"
            aria-label="Previous point"
            onClick={() => goTo(index - 1)}
            className="glass absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white hover:bg-white/20"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next point"
            onClick={() => goTo(index + 1)}
            className="glass absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white hover:bg-white/20"
          >
            →
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {trustPoints.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={`Go to point ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
