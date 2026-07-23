import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ResumeButtons } from "@/components/shared/ResumeButtons";
import { contact, contactCopy, whatsappUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — Dhiraj Nirne",
  description:
    "Get in touch with Dhiraj Nirne — email, WhatsApp, or LinkedIn. Resume available to view or download.",
};

function LinkedinGlyph({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    hint: "Opens your mail app",
    external: false,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: contact.phone,
    href: whatsappUrl,
    hint: "Opens a WhatsApp chat",
    external: true,
  },
  {
    icon: LinkedinGlyph,
    label: "LinkedIn",
    value: "Dhiraj Nirne",
    href: contact.linkedin,
    hint: "Opens LinkedIn profile",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        align="center"
        title={
          <>
            Got a delivery that needs an{" "}
            <span className="text-gradient">operator</span>?
          </>
        }
        subtitle={contactCopy.subhead}
      />

      <section className="pb-24">
        <Container>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {channels.map((c, index) => {
              const Icon = c.icon;
              return (
                <ScrollReveal key={c.label} index={index}>
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    data-cursor-hover
                    className="glass-card glass-card-hover group flex h-full flex-col items-start p-6"
                  >
                    <div className="mb-4 flex w-full items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-glass-border bg-accent-soft text-accent transition-colors duration-300 group-hover:text-accent-2">
                        <Icon size={20} />
                      </span>
                      <ArrowUpRight
                        size={16}
                        aria-hidden="true"
                        className="text-text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </div>
                    <p className="font-mono text-xs uppercase tracking-wide text-text-muted">
                      {c.label}
                    </p>
                    <p className="mt-1 break-all font-display text-sm font-semibold text-text">
                      {c.value}
                    </p>
                    <p className="mt-2 text-xs text-text-muted">{c.hint}</p>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal className="mx-auto mt-6 max-w-3xl">
            <div className="glass-card flex flex-col items-center gap-5 p-8 text-center">
              <div>
                <h2 className="font-display text-lg font-semibold text-text">
                  Prefer the resume first?
                </h2>
                <p className="mt-1 text-sm text-text-muted">
                  View it in the browser or download the PDF.
                </p>
              </div>
              <ResumeButtons className="justify-center" />
              <p className="flex items-center gap-1.5 font-mono text-xs text-text-muted">
                <MapPin size={13} aria-hidden="true" />
                {contact.location}
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
