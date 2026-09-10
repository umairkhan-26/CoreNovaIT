"use client";

import { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    name: "Alex Rivera",
    role: "Founder, Brightline Studio",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Jordan Lee",
    role: "CEO, Northwind Agency",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Morgan Blake",
    role: "Marketing Director, Vale & Co.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Sam Okafor",
    role: "Product Lead, Pixel Foundry",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Taylor Kim",
    role: "Operations Manager, Circuit Labs",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
  },
];

/**
 * Placeholder cards — swap `image` for a real client photo/video poster
 * and wire testimonial-play's onClick to an actual video/lightbox once
 * real client footage exists. Layout/interaction only, no real client
 * content.
 */
export default function Testimonials() {
  const rowRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  // Tracks which card is "active" by scroll position rather than
  // visibility — with IntersectionObserver, wide viewports that show
  // every card at once would all cross the threshold together and the
  // indicator would land on whichever happened to be processed last.
  function getStep() {
    const first = cardRefs.current[0];
    const second = cardRefs.current[1];
    if (!first) return 0;
    const width = first.getBoundingClientRect().width;
    const gap = second
      ? second.getBoundingClientRect().left - first.getBoundingClientRect().right
      : 16;
    return width + gap;
  }

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    function updateActive() {
      const step = getStep();
      if (!step || !row) return;
      const index = Math.round(row.scrollLeft / step);
      setActive(Math.min(Math.max(index, 0), TESTIMONIALS.length - 1));
    }

    updateActive();
    row.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      row.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  function goTo(index: number) {
    // scrollIntoView cooperates with scroll-snap far more reliably across
    // browsers than row.scrollTo({left}) does — the latter's smooth
    // animation kept getting cut short by the snap points along the way.
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  }

  return (
    <section className="teaser testimonials">
      <div className="wrap">
        <div className="eyebrow">Client testimonials</div>
        <h2 className="testimonials-heading">What our clients say.</h2>
        <div className="testimonials-hint">
          <span>Swipe or drag to see more</span>
          <span className="testimonials-count">
            {active + 1} / {TESTIMONIALS.length}
          </span>
        </div>
      </div>

      <div className="row-scroll testimonials-row" ref={rowRef}>
        {TESTIMONIALS.map((t, i) => (
          <div
            className="testimonial-card"
            key={t.name}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
          >
            <div className="testimonial-media">
              <img src={t.image} alt="" loading="lazy" />
              <button
                type="button"
                className="testimonial-play"
                aria-label={`Play testimonial from ${t.name}`}
              >
                <PlayIcon />
              </button>
            </div>
            <p className="testimonial-caption">
              <strong>{t.name}</strong> — {t.role}
            </p>
          </div>
        ))}
      </div>

      <div className="wrap">
        <div className="testimonials-dots">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === active}
              className={`testimonials-dot${i === active ? " active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
