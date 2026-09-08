"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useCursor } from "@/lib/cursor-context";

export default function CursorGlow() {
  const { x, y, enabled } = useCursor();

  const springX = useSpring(x, { damping: 25, stiffness: 150, mass: 0.4 });
  const springY = useSpring(y, { damping: 25, stiffness: 150, mass: 0.4 });

  const trailX = useSpring(x, { damping: 40, stiffness: 60, mass: 0.8 });
  const trailY = useSpring(y, { damping: 40, stiffness: 60, mass: 0.8 });

  const dx = useTransform(() => x.get() - springX.get());
  const dy = useTransform(() => y.get() - springY.get());
  const tiltY = useTransform(dx, [-40, 40], [-18, 18]);
  const tiltX = useTransform(dy, [-40, 40], [18, -18]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{ perspective: 600 }}
    >
      {/* Outer trailing neon halo */}
      <motion.div
        className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "conic-gradient(from 0deg, #4285F4, #EA4335, #FBBC05, #34A853, #4285F4)",
          filter: "blur(80px)",
          opacity: 0.38,
          mixBlendMode: "screen",
        }}
      />

      {/* Core neon orb with 3D tilt */}
      <motion.div
        className="absolute left-0 top-0 h-[160px] w-[160px] rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          rotateX: tiltX,
          rotateY: tiltY,
          transformStyle: "preserve-3d",
          background:
            "radial-gradient(circle, rgba(138,180,248,1) 0%, rgba(234,67,53,0.7) 42%, transparent 70%)",
          filter: "blur(22px)",
          opacity: 1,
          mixBlendMode: "screen",
        }}
      />

      {/* Sharp neon core point */}
      <motion.div
        className="absolute left-0 top-0 h-3 w-3 rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: "#f5f5f7",
          boxShadow:
            "0 0 12px 3px rgba(138,180,248,0.9), 0 0 30px 10px rgba(234,67,53,0.5)",
          opacity: 0.9,
        }}
      />
    </div>
  );
}
