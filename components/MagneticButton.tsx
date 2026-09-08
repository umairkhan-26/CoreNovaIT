"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "@/lib/cursor-context";

type DragConflicts =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onDragEnter"
  | "onDragExit"
  | "onDragLeave"
  | "onDragOver"
  | "onDrop"
  | "onAnimationStart";

type MagneticButtonProps = (
  | ({ as?: "button" } & Omit<React.ComponentProps<"button">, DragConflicts>)
  | ({ as: "a" } & Omit<React.ComponentProps<"a">, DragConflicts>)
) & {
  radius?: number;
  strength?: number;
};

export default function MagneticButton({
  children,
  className,
  as = "button",
  radius = 90,
  strength = 0.35,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const { x, y, enabled } = useCursor();

  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const springX = useSpring(offsetX, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(offsetY, { stiffness: 200, damping: 15, mass: 0.3 });

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

      if (distance < radius) {
        offsetX.set(dx * strength);
        offsetY.set(dy * strength);
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
  }, [enabled, radius, strength, x, y, offsetX, offsetY]);

  if (as === "a") {
    return (
      <motion.a
        ref={ref}
        className={className}
        style={{ x: springX, y: springY }}
        {...(props as Omit<React.ComponentProps<"a">, DragConflicts>)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      {...(props as Omit<React.ComponentProps<"button">, DragConflicts>)}
    >
      {children}
    </motion.button>
  );
}
