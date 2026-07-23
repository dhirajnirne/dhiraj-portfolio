import type { AlsoBuiltItem } from "@/lib/types";

export function AlsoBuiltCard({ item }: { item: AlsoBuiltItem }) {
  return (
    <div
      data-cursor-hover
      className="rounded-xl border border-glass-border bg-glass p-4 backdrop-blur-md backdrop-saturate-150 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-muted-border"
    >
      <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-sm font-semibold text-text">{item.name}</h3>
        <span className="font-mono text-[11px] uppercase tracking-wide text-text-muted">
          {item.role}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-text-muted">{item.description}</p>
    </div>
  );
}
