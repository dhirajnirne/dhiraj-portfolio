import { Wallet, TrendingUp, Gauge, Users, Sparkles } from "lucide-react";
import type { TimelineEntry as TimelineEntryType } from "@/lib/types";

const highlightIcon = (text: string) => {
  const lower = text.toLowerCase();
  if (lower.includes("budget")) return Wallet;
  if (lower.includes("revenue")) return TrendingUp;
  if (lower.includes("cost")) return Gauge;
  if (lower.includes("resource") || lower.includes("capacity")) return Users;
  return Sparkles;
};

export function TimelineEntry({ entry }: { entry: TimelineEntryType }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[160px_1fr] sm:gap-8">
      <div className="font-mono text-xs uppercase tracking-wide text-text-muted sm:pr-6 sm:pt-1 sm:text-right">
        <p>{entry.date}</p>
        <p className="mt-1">{entry.location}</p>
      </div>

      <div className="relative border-l border-border pb-2 pl-6 sm:pl-8">
        <span
          className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-bg bg-accent"
          aria-hidden="true"
        />
        <h3 className="font-display text-lg font-semibold text-text sm:text-xl">
          {entry.role}
        </h3>
        <p className="mb-4 text-sm text-text-muted">{entry.company}</p>

        {entry.highlights && entry.highlights.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {entry.highlights.map((highlight) => {
              const Icon = highlightIcon(highlight);
              return (
                <span
                  key={highlight}
                  className="flex items-center gap-1.5 rounded-full border border-accent bg-accent-soft px-3 py-1.5 font-mono text-xs font-medium text-accent"
                >
                  <Icon size={13} aria-hidden="true" />
                  {highlight}
                </span>
              );
            })}
          </div>
        )}

        <ul className="space-y-2.5">
          {entry.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-text-muted sm:text-base2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
