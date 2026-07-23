import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { CtaLink } from "@/components/shared/CtaLink";
import { contact, contactCopy } from "@/lib/content";

function LinkedinGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={16}
      height={16}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-section font-semibold text-text">
            {contactCopy.headline}
          </h2>
          <p className="mt-4 text-base2 text-text-muted">{contactCopy.subhead}</p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <CtaLink href={`mailto:${contact.email}`} variant="primary">
              <Mail size={16} aria-hidden="true" />
              {contact.email}
            </CtaLink>
            <CtaLink href={contact.linkedin} variant="secondary" external>
              <LinkedinGlyph />
              LinkedIn
            </CtaLink>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-text-muted">
            <span className="flex items-center gap-1.5">
              <Phone size={13} aria-hidden="true" />
              {contact.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} aria-hidden="true" />
              {contact.location}
            </span>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
