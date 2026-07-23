"use client";

import { useEffect, useState } from "react";

export function useStickyNav(threshold = 12): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sentinel = document.createElement("div");
    sentinel.style.position = "absolute";
    sentinel.style.top = "0";
    sentinel.style.left = "0";
    sentinel.style.height = `${threshold}px`;
    sentinel.style.width = "1px";
    sentinel.style.pointerEvents = "none";
    document.body.prepend(sentinel);

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, [threshold]);

  return scrolled;
}
