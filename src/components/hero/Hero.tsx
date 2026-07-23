import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { CtaLink } from "@/components/shared/CtaLink";
import { ResumeButtons } from "@/components/shared/ResumeButtons";
import { HeroGridBackground } from "./HeroGridBackground";
import { ProgramBoard } from "./ProgramBoard";
import { identity, heroSubhead } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <HeroGridBackground />

      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-text-muted backdrop-blur-xl">
            <span className="status-dot" />
            <MapPin size={12} aria-hidden="true" />
            {identity.location} · Product Manager · Open to roles
          </p>

          <h1 className="font-display text-hero font-semibold leading-[1.04]">
            <span className="text-text">I ship products </span>
            <span className="text-gradient-animated">people actually use.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base2 text-text-muted">{heroSubhead}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <CtaLink href="/work" variant="primary">
              View case studies
              <ArrowRight
                size={15}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </CtaLink>
            <CtaLink href="/contact" variant="secondary">
              Get in touch
            </CtaLink>
          </div>

          <div className="mt-6">
            <ResumeButtons />
          </div>
        </div>

        <div className="animate-floaty lg:justify-self-end lg:pl-6">
          <ProgramBoard />
        </div>
      </Container>
    </section>
  );
}
