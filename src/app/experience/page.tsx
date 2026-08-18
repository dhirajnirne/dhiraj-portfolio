import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { TimelineEntry } from "@/components/experience/TimelineEntry";
import { EducationCerts } from "@/components/education/EducationCerts";
import { ResumeButtons } from "@/components/shared/ResumeButtons";
import { experience } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experience — Dhiraj Nirne",
  description:
    "Roles across Cumulations Technologies, Cognizant, and a founder stint — where the operating muscle behind the product decisions comes from. Education and certifications, including SAFe 6.0 POPM.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title={
          <>
            Where the <span className="text-gradient">operating muscle</span>{" "}
            comes from
          </>
        }
        subtitle="Product manager, software developer, big-data intern, and co-founder — the delivery reps behind every product I own."
      />

      <section className="pb-16">
        <Container>
          <div className="space-y-10 sm:space-y-12">
            {experience.map((entry, index) => (
              <ScrollReveal key={`${entry.company}-${entry.role}`} index={index}>
                <TimelineEntry entry={entry} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <EducationCerts />

      <section className="py-16">
        <Container>
          <ScrollReveal>
            <div className="glass-card flex flex-col items-start gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <h2 className="font-display text-lg font-semibold text-text">
                  Want the one-page version?
                </h2>
                <p className="mt-1 text-sm text-text-muted">
                  View or download the full resume as a PDF.
                </p>
              </div>
              <ResumeButtons />
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
