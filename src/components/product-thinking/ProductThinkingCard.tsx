import { StatusDot } from "@/components/shared/StatusDot";
import type { ProductThinkingCaseStudy } from "@/lib/types";

interface ProductThinkingCardProps {
  caseStudy: ProductThinkingCaseStudy;
}

const sections: {
  key: keyof Pick<
    ProductThinkingCaseStudy,
    "user" | "insight" | "hypothesis" | "prioritizationWhy" | "outcome"
  >;
  label: string;
  accent?: boolean;
}[] = [
  { key: "user", label: "User" },
  { key: "insight", label: "Insight" },
  { key: "hypothesis", label: "Hypothesis" },
  { key: "prioritizationWhy", label: "Prioritization" },
  { key: "outcome", label: "Outcome", accent: true },
];

export function ProductThinkingCard({ caseStudy }: ProductThinkingCardProps) {
  return (
    <article className="rounded-2xl border border-glass-border bg-glass p-6 backdrop-blur-xl backdrop-saturate-150 sm:p-8">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <StatusDot status={caseStudy.status} />
        <span className="font-mono text-xs uppercase tracking-wide text-text-muted">
          {caseStudy.category}
        </span>
      </div>

      <h3 className="font-display text-xl font-semibold text-text sm:text-2xl">
        {caseStudy.title}
      </h3>
      <p className="mt-1.5 text-sm text-text-muted sm:text-base2">{caseStudy.subtitle}</p>

      <div className="mt-6 space-y-5">
        {sections.map(({ key, label, accent }) => (
          <div key={key}>
            <p
              className={`mb-1.5 font-mono text-xs uppercase tracking-wide ${
                accent ? "text-emerald" : "text-accent"
              }`}
            >
              {label}
            </p>
            <p
              className={`text-sm leading-relaxed sm:text-base2 ${
                accent ? "text-text" : "text-text-muted"
              }`}
            >
              {caseStudy[key]}
            </p>
          </div>
        ))}

        <div>
          <p className="mb-1.5 font-mono text-xs uppercase tracking-wide text-text-muted">
            What I deliberately didn&apos;t build
          </p>
          <p className="text-sm leading-relaxed text-text-muted sm:text-base2">
            {caseStudy.prioritizationSkipped}
          </p>
        </div>
      </div>
    </article>
  );
}
