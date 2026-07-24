import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { StatusDot } from "@/components/shared/StatusDot";
import {
  caseStudies,
  getCaseStudyBySlug,
  getAdjacentCaseStudies,
  siteUrl,
  identity,
} from "@/lib/content";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.id }));
}

// Static export (GitHub Pages build) doesn't support dynamicParams: true — an
// unrecognized slug must 404 identically on both Vercel and GitHub Pages
// rather than only working on one of them.
export const dynamicParams = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) return {};

  const title = `${caseStudy.title} — Dhiraj Nirne`;
  const url = `${siteUrl}/work/${caseStudy.id}`;
  // Setting our own `openGraph`/`twitter` objects below replaces (doesn't
  // deep-merge) the root layout's — without this, the shared og-image
  // silently disappears on every case study page. Inherit it explicitly.
  const previousImages = (await parent).openGraph?.images ?? [];

  return {
    title,
    description: caseStudy.subtitle,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description: caseStudy.subtitle,
      url,
      images: previousImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: caseStudy.subtitle,
      images: previousImages,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const { prev, next } = getAdjacentCaseStudies(slug);
  const url = `${siteUrl}/work/${caseStudy.id}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    headline: caseStudy.title,
    description: caseStudy.subtitle,
    url,
    author: { "@type": "Person", name: identity.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader eyebrow={caseStudy.category} title={caseStudy.title} subtitle={caseStudy.subtitle} />

      <section className="pb-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Link
              href="/work"
              className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-text-muted transition-colors duration-200 hover:text-accent"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              Back to all work
            </Link>

            <div className="mb-8">
              <StatusDot status={caseStudy.status} showLabel />
            </div>

            <div className="space-y-8 rounded-2xl border border-glass-border bg-glass p-6 backdrop-blur-xl backdrop-saturate-150 sm:p-8">
              <div>
                <p className="mb-1.5 font-mono text-xs uppercase tracking-wide text-accent">Problem</p>
                <p className="text-sm leading-relaxed text-text-muted sm:text-base2">{caseStudy.problem}</p>
              </div>

              <div>
                <p className="mb-1.5 font-mono text-xs uppercase tracking-wide text-accent">Role</p>
                <p className="text-sm leading-relaxed text-text-muted sm:text-base2">{caseStudy.role}</p>
              </div>

              <div>
                <p className="mb-1.5 font-mono text-xs uppercase tracking-wide text-accent">Actions</p>
                <ul className="space-y-1.5">
                  {caseStudy.actions.map((action) => (
                    <li key={action} className="flex gap-2 text-sm leading-relaxed text-text-muted sm:text-base2">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-1.5 font-mono text-xs uppercase tracking-wide text-emerald">Result</p>
                <p className="text-sm leading-relaxed text-text sm:text-base2">{caseStudy.result}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {caseStudy.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 border-t border-border pt-8 sm:grid-cols-2">
              {prev ? (
                <Link
                  href={`/work/${prev.id}`}
                  className="group flex flex-col gap-1 rounded-xl border border-border p-4 transition-colors duration-200 hover:border-accent"
                >
                  <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-text-muted">
                    <ArrowLeft size={12} aria-hidden="true" />
                    Previous
                  </span>
                  <span className="font-display text-sm font-semibold text-text group-hover:text-accent">
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  href={`/work/${next.id}`}
                  className="group flex flex-col gap-1 rounded-xl border border-border p-4 text-right transition-colors duration-200 hover:border-accent sm:items-end"
                >
                  <span className="flex items-center justify-end gap-1.5 font-mono text-xs uppercase tracking-wide text-text-muted">
                    Next
                    <ArrowRight size={12} aria-hidden="true" />
                  </span>
                  <span className="font-display text-sm font-semibold text-text group-hover:text-accent">
                    {next.title}
                  </span>
                </Link>
              ) : (
                <span />
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
