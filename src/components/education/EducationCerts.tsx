import { Container } from "@/components/shared/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { education, certifications } from "@/lib/content";

export function EducationCerts() {
  return (
    <section className="border-y border-glass-border bg-surface-muted py-14 backdrop-blur-sm backdrop-saturate-150">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <ScrollReveal>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
              Education
            </p>
            <h3 className="font-display text-base font-semibold text-text">{education.degree}</h3>
            <p className="mt-1 text-sm text-text-muted">
              {education.institution} · {education.date}
            </p>
            <p className="mt-1 font-mono text-xs text-text-muted">{education.detail}</p>
          </ScrollReveal>

          <ScrollReveal index={1}>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
              Certifications
            </p>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex flex-wrap items-baseline justify-between gap-x-3 text-sm">
                  <span className="flex flex-wrap items-baseline gap-2 text-text">
                    {cert.name}
                    {cert.inProgress && (
                      <span className="rounded-full border border-accent-muted-border bg-accent-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                        In progress
                      </span>
                    )}
                  </span>
                  <span className="font-mono text-xs text-text-muted">
                    {cert.issuer} · {cert.inProgress ? `Expected ${cert.year}` : cert.year}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
