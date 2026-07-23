import type { SkillCategory } from "@/lib/types";

export function SkillCategoryCard({ category }: { category: SkillCategory }) {
  return (
    <div
      data-cursor-hover
      className="rounded-xl border border-glass-border bg-glass p-5 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 hover:-translate-y-1 hover:border-accent-muted-border hover:shadow-lg hover:shadow-black/10"
    >
      <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-accent">
        {category.title}
      </h3>
      <ul className="space-y-2">
        {category.skills.map((skill) => (
          <li key={skill} className="flex gap-2 text-sm leading-relaxed text-text-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-muted" aria-hidden="true" />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
