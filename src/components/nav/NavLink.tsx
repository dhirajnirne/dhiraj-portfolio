import type { NavItem } from "@/lib/types";

interface NavLinkProps {
  item: NavItem;
  active: boolean;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ item, active, onClick, className = "" }: NavLinkProps) {
  return (
    <a
      href={item.href}
      onClick={onClick}
      className={`rounded-sm font-mono text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
        active ? "text-accent" : "text-text-muted hover:text-text"
      } ${className}`}
    >
      {item.label}
    </a>
  );
}
