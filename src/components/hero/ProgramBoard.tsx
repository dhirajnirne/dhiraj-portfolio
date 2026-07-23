import { StatusDot } from "@/components/shared/StatusDot";
import { programBoard } from "@/lib/content";

export function ProgramBoard() {
  return (
    <div className="w-full rounded-2xl border border-glass-border bg-glass p-4 shadow-2xl shadow-black/20 backdrop-blur-xl backdrop-saturate-150 sm:p-5">
      <div className="mb-4 flex items-center justify-between px-1">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
          Program Board
        </p>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-emerald">
          <span className="status-dot" style={{ "--dot-color": "var(--emerald)" } as React.CSSProperties} />
          live
        </span>
      </div>

      <div className="space-y-2">
        {programBoard.map((row) => (
          <div
            key={row.name}
            data-cursor-hover
            className="flex items-center justify-between gap-3 rounded-lg bg-surface-2 px-4 py-3 transition-all duration-200 hover:translate-x-0.5 hover:bg-accent-soft"
          >
            <div className="flex min-w-0 items-center gap-3">
              <StatusDot status={row.status} />
              <div className="min-w-0">
                <p className="truncate font-display text-sm font-medium text-text">{row.name}</p>
                <p className="font-mono text-[11px] text-text-muted">{row.category}</p>
              </div>
            </div>
            <span className="shrink-0 font-mono text-xs text-text-muted">{row.note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
