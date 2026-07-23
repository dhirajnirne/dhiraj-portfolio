"use client";

import { useEffect, useRef, useState } from "react";

const HOVER_SELECTOR = 'a, button, [role="button"], [data-cursor-hover]';
const LERP_FACTOR = 0.18;

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");

    const evaluate = () => {
      setEnabled(!reducedMotionQuery.matches && !coarsePointerQuery.matches);
    };

    evaluate();
    reducedMotionQuery.addEventListener("change", evaluate);
    coarsePointerQuery.addEventListener("change", evaluate);
    return () => {
      reducedMotionQuery.removeEventListener("change", evaluate);
      coarsePointerQuery.removeEventListener("change", evaluate);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("cursor-hidden");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { ...target };
    let rafId: number;

    const handlePointerMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
    };

    const handleMouseOver = (event: MouseEvent) => {
      if ((event.target as Element)?.closest?.(HOVER_SELECTOR)) {
        dotRef.current?.classList.add("cursor-dot--hover");
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      if ((event.target as Element)?.closest?.(HOVER_SELECTOR)) {
        dotRef.current?.classList.remove("cursor-dot--hover");
      }
    };

    const tick = () => {
      current.x += (target.x - current.x) * LERP_FACTOR;
      current.y += (target.y - current.y) * LERP_FACTOR;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    rafId = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("cursor-hidden");
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return <div ref={dotRef} className="cursor-dot" aria-hidden="true" />;
}
