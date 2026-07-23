import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SkillCategoryCard } from "./SkillCategoryCard";
import { skillCategories } from "@/lib/content";

export function SkillsGrid() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading eyebrow="Skills" title="What I bring to the table" />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} index={index}>
              <SkillCategoryCard category={category} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
