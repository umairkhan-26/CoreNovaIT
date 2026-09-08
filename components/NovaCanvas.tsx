"use client";

import { useEffect, useRef } from "react";

type Particle = {
  angle: number;
  radius: number;
  speed: number;
  r: number;
  wobble: number;
};

/**
 * The hero's pulsing "nova" core with orbiting particles — a canvas
 * animation, so it's a client component. Respects prefers-reduced-motion
 * (renders one static frame instead of looping).
 */
export default function NovaCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const size = 380;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const accentColor = () =>
      getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() ||
      "#ff8a44";
    const lineColor = () =>
      getComputedStyle(document.documentElement).getPropertyValue("--line").trim() || "#333";

    const particles: Particle[] = [];
    const N = 46;
    for (let i = 0; i < N; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 60 + Math.random() * 130;
      particles.push({
        angle,
        radius,
        speed: (0.06 + Math.random() * 0.1) * (Math.random() < 0.5 ? -1 : 1),
        r: 1 + Math.random() * 1.8,
        wobble: Math.random() * Math.PI * 2,
      });
    }

    const cx = size / 2;
    const cy = size / 2;
    let raf = 0;

    function draw(t: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, size, size);
      const accent = accentColor();
      const line = lineColor();

      ctx.strokeStyle = line;
      ctx.lineWidth = 1;
      [60, 100, 140, 180].forEach((r) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.globalAlpha = 0.55;
        ctx.stroke();
      });
      ctx.globalAlpha = 1;

      const pulse = reduce ? 0.5 : Math.sin(t / 900) * 0.5 + 0.5;
      const coreR = 16 + pulse * 4;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR * 4);
      grad.addColorStop(0, accent);
      grad.addColorStop(0.35, accent + "55");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, coreR * 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = accent;
      ctx.beginPath();
      ctx.arc(cx, cy, coreR * 0.42, 0, Math.PI * 2);
      ctx.fill();

      particles.forEach((p) => {
        const a = reduce ? p.angle : p.angle + (t / 1000) * p.speed;
        const wob = reduce ? 0 : Math.sin(t / 1400 + p.wobble) * 3;
        const x = cx + Math.cos(a) * (p.radius + wob);
        const y = cy + Math.sin(a) * (p.radius + wob);
        ctx.beginPath();
        ctx.fillStyle = accent;
        ctx.globalAlpha = 0.55 + 0.35 * Math.sin((reduce ? 0 : t / 600) + p.wobble);
        ctx.arc(x, y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      if (!reduce) {
        raf = requestAnimationFrame(draw);
      }
    }

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      id="nova"
      ref={canvasRef}
      width={380}
      height={380}
      role="img"
      aria-label="A pulsing nova core with orbiting particles, representing CoreNovaIT."
    />
  );
}
