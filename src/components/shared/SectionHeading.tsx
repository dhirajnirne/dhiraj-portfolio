interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 max-w-2xl sm:mb-14 ${className}`}>
      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-section font-semibold text-text">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base2 text-text-muted">{description}</p>
      )}
    </div>
  );
}
