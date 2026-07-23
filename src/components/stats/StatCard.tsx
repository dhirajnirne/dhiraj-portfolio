"use client";

import { useCountUp } from "@/hooks/useCountUp";
import type { StatItem } from "@/lib/types";

export function StatCard({ stat, start }: { stat: StatItem; start: boolean }) {
  const value = useCountUp(stat.value, start);

  return (
    <div className="group px-4 py-6 text-center transition-colors duration-300 hover:bg-accent-soft sm:py-8">
      <p className="font-display text-3xl font-semibold text-text transition-transform duration-300 group-hover:scale-110 sm:text-4xl">
        {value}
        <span className="text-accent">{stat.suffix}</span>
      </p>
      <p className="mt-2 font-mono text-xs uppercase tracking-wide text-text-muted">
        {stat.label}
      </p>
    </div>
  );
}
