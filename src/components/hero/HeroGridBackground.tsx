"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function HeroGridBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;

    let inView = true;
    let frame: number | null = null;

    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView && frame === null) frame = requestAnimationFrame(onScroll);
    });
    io.observe(el);

    function onScroll() {
      frame = null;
      if (!inView || !el) return;
      const offset = window.scrollY * 0.08;
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    }

    const handler = () => {
      if (frame === null) frame = requestAnimationFrame(onScroll);
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", handler);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [reducedMotion]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        ref={ref}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 20%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 20%, black 0%, transparent 75%)",
          opacity: 0.5,
        }}
        aria-hidden="true"
      />
    </div>
  );
}
