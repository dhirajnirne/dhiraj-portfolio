import { Eye, Download } from "lucide-react";
import { resumePath } from "@/lib/content";

interface ResumeButtonsProps {
  className?: string;
}

/**
 * Resume actions — "View" opens the PDF in a new tab; "Download" forces a
 * save via the download attribute (works because the file is same-origin).
 */
export function ResumeButtons({ className = "" }: ResumeButtonsProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={resumePath}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-accent via-accent-2 to-accent-3 px-6 py-3 font-mono text-sm font-medium text-accent-contrast shadow-[0_8px_30px_-10px_var(--accent)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-8px_var(--accent)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        <Eye size={16} aria-hidden="true" />
        View resume
      </a>
      <a
        href={resumePath}
        download="Dhiraj-Nirne-Resume.pdf"
        className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-sm font-medium text-text transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        <Download size={16} aria-hidden="true" />
        Download PDF
      </a>
    </div>
  );
}
