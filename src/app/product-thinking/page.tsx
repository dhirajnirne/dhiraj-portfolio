import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ProductThinkingCard } from "@/components/product-thinking/ProductThinkingCard";
import { productThinkingCaseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Product Thinking — Dhiraj Nirne",
  description:
    "How I reason about product decisions — the user, the insight, the hypothesis, and what I chose not to build — across TGI Sports, Hello UPI, and Majik Kids.",
};

export default function ProductThinkingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Product Thinking"
        title={
          <>
            The reasoning behind the <span className="text-gradient">roadmap</span>
          </>
        }
        subtitle="Same products as Work — told through the decisions behind them: who was struggling, what I found, what I bet on, and what I deliberately left out."
      />

      <section className="pb-20">
        <Container>
          <div className="space-y-6">
            {productThinkingCaseStudies.map((cs, index) => (
              <ScrollReveal key={cs.id} index={index}>
                <ProductThinkingCard caseStudy={cs} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
