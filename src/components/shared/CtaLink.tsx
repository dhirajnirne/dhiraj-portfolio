import type { ReactNode } from "react";
import Link from "next/link";

interface CtaLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}

export function CtaLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: CtaLinkProps) {
  const variantClass =
    variant === "primary"
      ? "bg-gradient-to-r from-accent via-accent-2 to-accent-3 text-accent-contrast shadow-[0_8px_30px_-10px_var(--accent)] hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-8px_var(--accent)]"
      : "border border-border text-text hover:-translate-y-0.5 hover:border-accent hover:text-accent";

  const classes = `group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 font-mono text-sm font-medium transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${variantClass} ${className}`;

  const inner = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <span
          className="absolute inset-0 origin-left scale-x-0 bg-white/20 transition-transform duration-300 ease-out group-hover:scale-x-100"
          aria-hidden="true"
        />
      )}
    </>
  );

  const isInternal = href.startsWith("/") && !external;

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={classes}
    >
      {inner}
    </a>
  );
}
