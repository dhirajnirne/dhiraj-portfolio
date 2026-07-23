import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { Container } from "./Container";
import { contact, identity, navItems, whatsappUrl } from "@/lib/content";

function LinkedinGlyph() {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

const socials = [
  { label: "Email", href: `mailto:${contact.email}`, icon: Mail, external: false },
  { label: "WhatsApp", href: whatsappUrl, icon: MessageCircle, external: true },
  { label: "LinkedIn", href: contact.linkedin, icon: LinkedinGlyph, external: true },
];

export function Footer() {
  return (
    <footer className="border-t border-glass-border py-12">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-sm font-semibold text-text"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-accent via-accent-2 to-accent-3 text-[0.7rem] font-bold text-accent-contrast">
                DN
              </span>
              {identity.name}
            </Link>
            <p className="mt-3 max-w-xs text-sm text-text-muted">
              {identity.positioningLine}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-text-muted">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors duration-200 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-glass-border pt-6 sm:flex-row">
          <p className="font-mono text-xs text-text-muted">
            © {new Date().getFullYear()} {identity.name} · {contact.location}
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-glass-border text-text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
