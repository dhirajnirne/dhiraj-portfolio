"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { useStickyNav } from "@/hooks/useStickyNav";
import { useActiveSection } from "@/hooks/useActiveSection";
import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";
import { navItems, identity } from "@/lib/content";

const sectionIds = navItems.map((item) => item.href.slice(1));

export function Nav() {
  const scrolled = useStickyNav(12);
  const activeId = useActiveSection(sectionIds);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? "border-b border-glass-border bg-nav-glass backdrop-blur-xl backdrop-saturate-150" : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#"
          className="rounded-sm font-display text-sm font-semibold tracking-tight text-text transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          {identity.name}
        </a>

        <nav className="hidden items-center gap-8 sm:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} item={item} active={activeId === item.href.slice(1)} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border text-text-muted transition-all duration-200 hover:border-accent hover:text-accent active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:hidden"
          >
            <Menu size={16} />
          </button>
        </div>
      </Container>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={navItems}
        activeId={activeId}
      />
    </header>
  );
}
