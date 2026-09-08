"use client";

import Image from "next/image";
import Link from "next/link";
import { platforms } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";

export default function ToolsGrid() {
  return (
    <section id="tools" className="section-divider section-tint relative py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeading
          eyebrow="Platforms"
          title="Platforms we build on."
          description="We work in whatever platform fits the project — not whichever one we default to."
          className="mb-12"
        />

        <div className="scroll-hide -mx-6 flex snap-x gap-5 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {platforms.map((platform) => (
            <TiltCard
              key={platform.id}
              maxTilt={6}
              className="glass group relative flex w-[260px] shrink-0 snap-start flex-col overflow-hidden rounded-xl2 transition-colors hover:bg-white/[0.08] sm:w-auto"
            >
              <Link href="/services/web-development" className="flex flex-1 flex-col">
                <div className="relative h-[160px] w-full overflow-hidden">
                  <Image
                    src={platform.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 260px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-semibold text-text-primary">
                    {platform.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-sm text-text-secondary">
                    {platform.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="text-xs text-text-secondary">
                      {platform.bestFor}
                    </span>
                    <span className="shrink-0 text-xs font-medium text-accent-solid">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
