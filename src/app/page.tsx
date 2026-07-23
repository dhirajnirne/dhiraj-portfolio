import Link from "next/link";
import { ArrowUpRight, User, Layers, BrainCircuit, GitBranch, Mail } from "lucide-react";
import { Hero } from "@/components/hero/Hero";
import { StatsStrip } from "@/components/stats/StatsStrip";
import { Container } from "@/components/shared/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const explore = [
  {
    href: "/about",
    label: "About",
    icon: User,
    blurb: "Engineer-turned-PM who pressure-tests the trade-offs, not just the roadmap.",
  },
  {
    href: "/work",
    label: "Work",
    icon: Layers,
    blurb: "17+ shipped products — civic tech, AI, fintech-scale ops, consumer apps.",
  },
  {
    href: "/thinking",
    label: "Thinking",
    icon: BrainCircuit,
    blurb: "How I move an ambiguous problem to a shipped, measurable outcome.",
  },
  {
    href: "/experience",
    label: "Experience",
    icon: GitBranch,
    blurb: "8+ concurrent programs, 95% client satisfaction, org-wide KPI framework.",
  },
  {
    href: "/contact",
    label: "Contact",
    icon: Mail,
    blurb: "Email, WhatsApp, LinkedIn, and a downloadable resume — one click away.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />

      <section className="py-20 sm:py-28">
        <Container>
          <ScrollReveal>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent-2">
              Explore
            </p>
            <h2 className="max-w-2xl font-display text-section font-semibold text-text">
              Five tabs, one operator&apos;s story
            </h2>
            <p className="mt-4 max-w-2xl text-base2 text-text-muted">
              Jump straight to what you need to evaluate — each page is built to
              show how I think, not just what I&apos;ve done.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {explore.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.href} index={index}>
                  <Link
                    href={item.href}
                    data-cursor-hover
                    className="glass-card glass-card-hover group flex h-full flex-col p-6"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-glass-border bg-accent-soft text-accent transition-colors duration-300 group-hover:text-accent-2">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <ArrowUpRight
                        size={18}
                        aria-hidden="true"
                        className="text-text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-text">
                      {item.label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
                      {item.blurb}
                    </p>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
