import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { TimelineEntry } from "./TimelineEntry";
import { experience } from "@/lib/content";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading eyebrow="Experience" title="Where the operating muscle comes from" />
        </ScrollReveal>

        <div className="space-y-10 sm:space-y-12">
          {experience.map((entry, index) => (
            <ScrollReveal key={`${entry.company}-${entry.role}`} index={index}>
              <TimelineEntry entry={entry} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
