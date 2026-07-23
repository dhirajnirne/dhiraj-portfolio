import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { CaseStudyAccordionCard } from "./CaseStudyAccordionCard";
import { AlsoDeliveredCard } from "./AlsoDeliveredCard";
import { AlsoBuiltCard } from "./AlsoBuiltCard";
import { caseStudies, alsoDelivered, alsoBuilt } from "@/lib/content";

export function WorkSection() {
  return (
    <section id="work" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Work"
            title="Products shipped, problems solved"
            description="Ordered by the strongest evidence of product ownership first — delivery and technical engagements follow as supporting proof."
          />
        </ScrollReveal>

        <div className="space-y-4">
          {caseStudies.map((cs, index) => (
            <ScrollReveal key={cs.id} index={index}>
              <CaseStudyAccordionCard caseStudy={cs} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-16">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
            Also delivered
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {alsoDelivered.map((item, index) => (
              <ScrollReveal key={item.id} index={index}>
                <AlsoDeliveredCard item={item} />
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-12">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
            Also built
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {alsoBuilt.map((item) => (
              <AlsoBuiltCard key={item.id} item={item} />
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
