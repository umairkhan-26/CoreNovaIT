"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { servicesCarousel } from "@/lib/content";
import MagneticButton from "./MagneticButton";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";

export default function ModelCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (amount: number) => {
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="carousel" className="section-divider relative py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Services"
            title="One partner, every service line."
            description="From first build to ongoing growth, every service is delivered under the same trust-first process."
          />
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollBy(-360)}
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-text-primary transition-colors hover:bg-white/10"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollBy(360)}
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-text-primary transition-colors hover:bg-white/10"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="scroll-hide flex gap-6 overflow-x-auto px-6 pb-4 md:px-[max(1.5rem,calc((100vw-1280px)/2))]"
      >
        {servicesCarousel.map((item) => (
          <TiltCard
            key={item.id}
            maxTilt={6}
            className="glass group relative flex w-[300px] shrink-0 flex-col overflow-hidden rounded-xl2 md:w-[340px]"
          >
            <div className="relative h-[220px] w-full overflow-hidden">
              <Image
                src={item.image}
                alt=""
                fill
                sizes="340px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-lg font-semibold text-text-primary">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-text-secondary">
                {item.description}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <MagneticButton className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-bg-base">
                  Get a quote
                </MagneticButton>
                <Link
                  href={`/services/${item.id}`}
                  className="text-xs font-medium text-text-secondary hover:text-text-primary"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
