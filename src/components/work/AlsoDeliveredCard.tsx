import { StatusDot } from "@/components/shared/StatusDot";
import type { AlsoDeliveredItem } from "@/lib/types";

export function AlsoDeliveredCard({ item }: { item: AlsoDeliveredItem }) {
  return (
    <div
      data-cursor-hover
      className="rounded-xl border border-glass-border bg-glass p-5 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 hover:-translate-y-1 hover:border-accent-muted-border hover:shadow-lg hover:shadow-black/10"
    >
      <div className="mb-2 flex flex-wrap items-center gap-3">
        <StatusDot status={item.status} />
        <span className="font-mono text-xs uppercase tracking-wide text-text-muted">
          {item.category}
        </span>
      </div>
      <h3 className="font-display text-base font-semibold text-text">{item.title}</h3>
      <p className="mb-2 text-xs text-text-muted">{item.subtitle}</p>
      <p className="mb-3 text-sm leading-relaxed text-text-muted">{item.summary}</p>
      <div className="flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-surface-2 px-2.5 py-0.5 font-mono text-[11px] text-text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
