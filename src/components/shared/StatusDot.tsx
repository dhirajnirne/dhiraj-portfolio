import type { CSSProperties } from "react";
import type { StatusKind } from "@/lib/types";

const statusColorVar: Record<StatusKind, string> = {
  shipped: "var(--emerald)",
  live: "var(--amber)",
  active: "var(--accent)",
};

const statusLabel: Record<StatusKind, string> = {
  shipped: "Shipped",
  live: "Live",
  active: "Active",
};

interface StatusDotProps {
  status: StatusKind;
  showLabel?: boolean;
  className?: string;
}

export function StatusDot({ status, showLabel = false, className = "" }: StatusDotProps) {
  const style = { "--dot-color": statusColorVar[status] } as CSSProperties;

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="status-dot" style={style} aria-hidden="true" />
      {showLabel && (
        <span className="font-mono text-xs uppercase tracking-wide text-text-muted">
          {statusLabel[status]}
        </span>
      )}
    </span>
  );
}
