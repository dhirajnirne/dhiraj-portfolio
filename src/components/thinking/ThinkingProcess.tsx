"use client";

import { useState } from "react";
import { Search, PenTool, Rocket, LineChart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  key: string;
  label: string;
  icon: LucideIcon;
  headline: string;
  principle: string;
  example: string;
}

const steps: Step[] = [
  {
    key: "audit",
    label: "Audit",
    icon: Search,
    headline: "Find what's actually broken",
    principle:
      "I don't start from a wishlist — I start from evidence. Map the real flow end to end, watch where users stall, and quantify the pain before proposing anything.",
    example:
      "On BBMP's E-Khata portal I traced the full property-record flow, surfaced a 40,000-item unresolved-issue backlog, and found duplicate data entry conflicting with the Kaveri land-records system.",
  },
  {
    key: "define",
    label: "Define",
    icon: PenTool,
    headline: "Decide what to build next",
    principle:
      "Turn the audit into a sequenced, testable plan. Prioritise by impact and risk, write it so engineering can build without guesswork, and make the trade-offs explicit.",
    example:
      "I redesigned the E-Khata flow, scoped automated identity/property verification to replace manual checks, and specced a tight Kaveri integration to kill the redundant data entry.",
  },
  {
    key: "deliver",
    label: "Deliver",
    icon: Rocket,
    headline: "Run it and own it",
    principle:
      "Defining is half the job. I lead the delivery — coordinating engineering, managing dependencies and risk, and staying accountable for what actually ships.",
    example:
      "I led front-end development of the new portal and coordinated the systems integration end to end, keeping delivery on track across a live civic platform.",
  },
  {
    key: "measure",
    label: "Measure",
    icon: LineChart,
    headline: "Prove it moved",
    principle:
      "A ship only counts if the numbers move. I define the KPI up front and hold the outcome against it — no vanity metrics.",
    example:
      "Median time-on-platform dropped from 40 minutes to 15, the open-issue backlog fell from 40,000+ to ~200, and the portal now serves roughly 5 crore hits a month.",
  },
];

export function ThinkingProcess() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  const Icon = step.icon;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[300px_1fr]">
      {/* Step selector */}
      <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
        {steps.map((s, i) => {
          const StepIcon = s.icon;
          const isActive = i === active;
          return (
            <button
              key={s.key}
              type="button"
              onClick={() => setActive(i)}
              data-cursor-hover
              className={`group flex flex-1 items-center gap-3 rounded-xl border px-4 py-3 text-left font-mono text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:flex-none ${
                isActive
                  ? "border-accent-muted-border bg-accent-soft text-text shadow-[var(--glow-accent)]"
                  : "border-glass-border bg-glass text-text-muted hover:border-accent-muted-border hover:text-text"
              }`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-xs transition-colors duration-300 ${
                  isActive
                    ? "border-transparent bg-gradient-to-br from-accent to-accent-2 text-accent-contrast"
                    : "border-glass-border text-text-muted group-hover:text-accent"
                }`}
              >
                <StepIcon size={16} aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">
                  0{i + 1}
                </span>
                <span className="font-display text-sm font-semibold">
                  {s.label}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Active step detail */}
      <div className="glass-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-glass-border bg-accent-soft text-accent">
            <Icon size={20} aria-hidden="true" />
          </span>
          <h3 className="font-display text-xl font-semibold text-text">
            {step.headline}
          </h3>
        </div>
        <p className="text-base2 leading-relaxed text-text-muted">
          {step.principle}
        </p>
        <div className="mt-6 rounded-xl border border-glass-border bg-surface-2-muted p-4">
          <p className="mb-1.5 font-mono text-xs uppercase tracking-wide text-accent-2">
            In practice · E-Khata
          </p>
          <p className="text-sm leading-relaxed text-text">{step.example}</p>
        </div>
      </div>
    </div>
  );
}
