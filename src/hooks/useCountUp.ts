"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function useCountUp(target: number, start: boolean, duration = 1400): number {
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!start || hasRun.current || reducedMotion) return;
    hasRun.current = true;

    let frame: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration, reducedMotion]);

  // Reduced motion skips the rAF loop entirely — the final value is derived
  // at render time rather than pushed through another effect+setState round trip.
  if (reducedMotion && start) return target;

  return value;
}
