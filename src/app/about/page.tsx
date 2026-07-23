import type { Metadata } from "next";
import { Code2, Compass, Rocket } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { CtaLink } from "@/components/shared/CtaLink";
import { aboutParagraphs } from "@/lib/content";

export const metadata: Metadata = {
  title: "About — Dhiraj Nirne",
  description:
    "Engineer-turned-product-manager who ships, not just plans — across civic tech, AI, fintech-scale operations, and consumer apps.",
};

const principles = [
  {
    icon: Code2,
    title: "Engineering-grounded",
    body: "Started as a Flutter developer shipping REST integrations and payment gateways. I pressure-test technical trade-offs myself instead of taking engineering's word for it.",
  },
  {
    icon: Compass,
    title: "Audit before roadmap",
    body: "I open every engagement by finding what's actually broken — like cutting E-Khata's median task time from 40 minutes to 15 and clearing a 40,000-item backlog.",
  },
  {
    icon: Rocket,
    title: "Accountable to ship",
    body: "Defining what to build is only half the job. I run the delivery and own what lands — from concept to 1,000+ organic downloads on Majik Kids.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            A product manager who <span className="text-gradient">ships</span>,
            not just plans
          </>
        }
        subtitle="Bengaluru-based PM with 3+ years turning ambiguous problems into shipped product — with the software background to build it, not just brief it."
      />

      <section className="pb-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-6">
              {aboutParagraphs.map((paragraph, index) => (
                <ScrollReveal key={paragraph.slice(0, 24)} index={index}>
                  <p className="text-base2 leading-relaxed text-text-muted">
                    {paragraph}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {principles.map((p, index) => {
                const Icon = p.icon;
                return (
                  <ScrollReveal key={p.title} index={index}>
                    <div
                      data-cursor-hover
                      className="glass-card glass-card-hover p-6"
                    >
                      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-glass-border bg-accent-soft text-accent">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <h3 className="font-display text-base font-semibold text-text">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-muted">
                        {p.body}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          <ScrollReveal className="mt-14">
            <div className="flex flex-wrap gap-4">
              <CtaLink href="/work" variant="primary">
                See the work
              </CtaLink>
              <CtaLink href="/thinking" variant="secondary">
                How I think
              </CtaLink>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
