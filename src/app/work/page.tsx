import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { CaseStudyCard } from "@/components/work/CaseStudyCard";
import { AlsoDeliveredCard } from "@/components/work/AlsoDeliveredCard";
import { AlsoBuiltCard } from "@/components/work/AlsoBuiltCard";
import { caseStudies, alsoDelivered, alsoBuilt } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work — Dhiraj Nirne",
  description:
    "Case studies and shipped products across civic tech, AI, fintech-scale operations, healthcare, and consumer apps.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title={
          <>
            Products <span className="text-gradient">shipped</span>, problems
            solved
          </>
        }
        subtitle="Ordered by the strongest evidence of product ownership first — delivery and technical engagements follow as supporting proof. Open any case study for the full Problem / Role / Actions / Result."
      />

      <section className="pb-16">
        <Container>
          <div className="space-y-4">
            {caseStudies.map((cs, index) => (
              <ScrollReveal key={cs.id} index={index}>
                <CaseStudyCard caseStudy={cs} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-16">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-accent-2">
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
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-accent-2">
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
    </>
  );
}
