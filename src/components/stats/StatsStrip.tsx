"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/shared/Container";
import { StatCard } from "./StatCard";
import { stats } from "@/lib/content";

export function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="border-y border-glass-border bg-surface-muted backdrop-blur-sm backdrop-saturate-150"
    >
      <Container>
        <div className="grid grid-cols-2 divide-y divide-border sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} start={visible} />
          ))}
        </div>
      </Container>
    </section>
  );
}
