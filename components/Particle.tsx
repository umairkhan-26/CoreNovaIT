"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "@/lib/cursor-context";

type ParticleProps = {
  className?: string;
  size?: number;
  variant?: "dot" | "ring" | "blob";
  maxOffset?: number;
  influenceRadius?: number;
};

export default function Particle({
  className = "",
  size = 8,
  variant = "dot",
  maxOffset = 12,
  influenceRadius = 260,
}: ParticleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y, enabled } = useCursor();

  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const springX = useSpring(offsetX, { stiffness: 80, damping: 20 });
  const springY = useSpring(offsetY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    if (!enabled) return;

    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = x.get() - centerX;
      const dy = y.get() - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < influenceRadius) {
        const pull = (1 - distance / influenceRadius) * maxOffset;
        const angle = Math.atan2(dy, dx);
        offsetX.set(Math.cos(angle) * pull);
        offsetY.set(Math.sin(angle) * pull);
      } else {
        offsetX.set(0);
        offsetY.set(0);
      }
    };

    const unsubX = x.on("change", update);
    const unsubY = y.on("change", update);
    return () => {
      unsubX();
      unsubY();
    };
  }, [enabled, influenceRadius, maxOffset, x, y, offsetX, offsetY]);

  const base =
    variant === "ring"
      ? "rounded-full border border-white/20"
      : variant === "blob"
        ? "rounded-full blur-md bg-white/10"
        : "rounded-full bg-white/30";

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute ${base} ${className}`}
      style={{
        width: size,
        height: size,
        x: springX,
        y: springY,
      }}
    />
  );
}
