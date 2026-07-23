import Link from "next/link";
import type { NavItem } from "@/lib/types";

interface NavLinkProps {
  item: NavItem;
  active: boolean;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ item, active, onClick, className = "" }: NavLinkProps) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`group relative rounded-sm font-mono text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
        active ? "text-text" : "text-text-muted hover:text-text"
      } ${className}`}
    >
      {item.label}
      <span
        aria-hidden="true"
        className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-gradient-to-r from-accent via-accent-2 to-accent-3 transition-all duration-300 ${
          active ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-60"
        }`}
      />
    </Link>
  );
}
