import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { aboutHeadline, aboutParagraphs } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading eyebrow="About" title={aboutHeadline} />
        </ScrollReveal>

        <div className="max-w-3xl space-y-6">
          {aboutParagraphs.map((paragraph, index) => (
            <ScrollReveal key={paragraph.slice(0, 24)} index={index}>
              <p className="text-base2 leading-relaxed text-text-muted">{paragraph}</p>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
