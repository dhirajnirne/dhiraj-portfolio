"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { StatusDot } from "@/components/shared/StatusDot";
import type { CaseStudy } from "@/lib/types";

interface CaseStudyAccordionCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyAccordionCard({ caseStudy }: CaseStudyAccordionCardProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div
      data-cursor-hover
      className={`overflow-hidden rounded-2xl border bg-glass backdrop-blur-xl backdrop-saturate-150 transition-colors duration-300 ${
        open ? "border-accent" : "border-glass-border"
      }`}
    >
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full cursor-pointer items-start justify-between gap-4 px-5 py-5 text-left transition-colors duration-200 hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent sm:px-7 sm:py-6"
        >
          <span className="flex min-w-0 flex-1 flex-col gap-2">
            <span className="flex flex-wrap items-center gap-3">
              <StatusDot status={caseStudy.status} />
              <span className="font-mono text-xs uppercase tracking-wide text-text-muted">
                {caseStudy.category}
              </span>
            </span>
            <span className="font-display text-lg font-semibold text-text sm:text-xl">
              {caseStudy.title}
            </span>
            <span className="text-sm text-text-muted">{caseStudy.subtitle}</span>
          </span>
          <ChevronDown
            aria-hidden="true"
            size={20}
            className={`mt-1 shrink-0 text-text-muted transition-transform duration-300 ${
              open ? "rotate-180 text-accent" : ""
            }`}
          />
        </button>
      </h3>

      <div id={panelId} role="region" className={`accordion-body ${open ? "is-open" : ""}`}>
        <div>
          <div className="space-y-5 px-5 pb-6 sm:px-7 sm:pb-8">
            <div>
              <p className="mb-1.5 font-mono text-xs uppercase tracking-wide text-accent">
                Problem
              </p>
              <p className="text-sm leading-relaxed text-text-muted sm:text-base2">
                {caseStudy.problem}
              </p>
            </div>

            <div>
              <p className="mb-1.5 font-mono text-xs uppercase tracking-wide text-accent">
                Role
              </p>
              <p className="text-sm leading-relaxed text-text-muted sm:text-base2">
                {caseStudy.role}
              </p>
            </div>

            <div>
              <p className="mb-1.5 font-mono text-xs uppercase tracking-wide text-accent">
                Actions
              </p>
              <ul className="space-y-1.5">
                {caseStudy.actions.map((action) => (
                  <li
                    key={action}
                    className="flex gap-2 text-sm leading-relaxed text-text-muted sm:text-base2"
                  >
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-1.5 font-mono text-xs uppercase tracking-wide text-emerald">
                Result
              </p>
              <p className="text-sm leading-relaxed text-text sm:text-base2">
                {caseStudy.result}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
