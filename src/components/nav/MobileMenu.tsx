"use client";

import { X } from "lucide-react";
import { NavLink } from "./NavLink";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import type { NavItem } from "@/lib/types";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
  activeId: string;
}

export function MobileMenu({ open, onClose, items, activeId }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-50 sm:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-nav-glass backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`absolute right-0 top-0 flex h-full w-64 flex-col gap-1 border-l border-glass-border bg-nav-glass px-6 py-6 backdrop-blur-xl backdrop-saturate-150 transition-transform duration-300 ease-out-cubic ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="mb-6 ml-auto flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border text-text-muted transition-all duration-200 hover:border-accent hover:text-accent active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          <X size={16} />
        </button>
        {items.map((item) => (
          <NavLink
            key={item.href}
            item={item}
            active={activeId === item.href.slice(1)}
            onClick={onClose}
            className="py-3 text-base"
          />
        ))}
        <div className="mt-auto border-t border-border pt-6">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
