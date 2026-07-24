import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StatusDot } from "@/components/shared/StatusDot";
import type { CaseStudy } from "@/lib/types";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <h3>
      <Link
        href={`/work/${caseStudy.id}`}
        data-cursor-hover
        className="group flex items-start justify-between gap-4 rounded-2xl border border-glass-border bg-glass px-5 py-5 backdrop-blur-xl backdrop-saturate-150 transition-colors duration-300 hover:border-accent sm:px-7 sm:py-6"
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
        <ArrowRight
          aria-hidden="true"
          size={20}
          className="mt-1 shrink-0 text-text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent"
        />
      </Link>
    </h3>
  );
}
