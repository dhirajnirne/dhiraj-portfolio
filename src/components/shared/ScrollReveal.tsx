"use client";

import { useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode } from "react";

let sharedObserver: IntersectionObserver | null = null;
const callbacks = new Map<Element, () => void>();

function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined") return null;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callbacks.get(entry.target)?.();
            sharedObserver?.unobserve(entry.target);
            callbacks.delete(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
  }
  return sharedObserver;
}

interface ScrollRevealProps {
  children: ReactNode;
  index?: number;
  as?: ElementType;
  className?: string;
}

export function ScrollReveal({
  children,
  index = 0,
  as: Tag = "div",
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = getObserver();
    if (!observer) return;

    callbacks.set(el, () => setVisible(true));
    observer.observe(el);

    return () => {
      callbacks.delete(el);
      observer.unobserve(el);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${Math.min(index, 8) * 75}ms` }}
    >
      {children}
    </Tag>
  );
}
