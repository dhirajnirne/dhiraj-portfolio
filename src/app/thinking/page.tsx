import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ThinkingProcess } from "@/components/thinking/ThinkingProcess";
import { SkillCategoryCard } from "@/components/skills/SkillCategoryCard";
import { CtaLink } from "@/components/shared/CtaLink";
import { skillCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Thinking — Dhiraj Nirne",
  description:
    "How I move an ambiguous problem to a shipped, measurable outcome — Audit, Define, Deliver, Measure — plus the product, program, and technical toolkit behind it.",
};

export default function ThinkingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Thinking"
        title={
          <>
            From <span className="text-gradient">ambiguity</span> to a shipped,
            measurable outcome
          </>
        }
        subtitle="Every product I own runs through the same loop. Step through it below — each stage is mapped to a real decision on the E-Khata rebuild."
      />

      <section className="pb-16">
        <Container>
          <ScrollReveal>
            <ThinkingProcess />
          </ScrollReveal>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <ScrollReveal>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent-2">
              Toolkit
            </p>
            <h2 className="max-w-2xl font-display text-section font-semibold text-text">
              The muscle behind the method
            </h2>
            <p className="mt-4 max-w-2xl text-base2 text-text-muted">
              Product judgment, program discipline, and enough technical depth
              to pressure-test the build myself.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category, index) => (
              <ScrollReveal key={category.title} index={index}>
                <SkillCategoryCard category={category} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-14">
            <div className="flex flex-wrap gap-4">
              <CtaLink href="/work" variant="primary">
                See it applied
              </CtaLink>
              <CtaLink href="/contact" variant="secondary">
                Work with me
              </CtaLink>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
