import type { ReactNode } from "react";
import { Container } from "@/components/shared/Container";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: PageHeaderProps) {
  const isCenter = align === "center";
  return (
    <header className="relative overflow-hidden pb-10 pt-32 sm:pt-40">
      <div className="grid-overlay pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <Container className={isCenter ? "text-center" : ""}>
        <p
          className={`mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.28em] text-accent-2 ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-2 shadow-[0_0_10px_2px_var(--accent-2)]" />
          {eyebrow}
        </p>
        <h1 className="font-display text-hero font-semibold leading-[1.05] text-text">
          {title}
        </h1>
        {subtitle ? (
          <p
            className={`mt-5 text-base2 text-text-muted ${
              isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
            }`}
          >
            {subtitle}
          </p>
        ) : null}
      </Container>
    </header>
  );
}
