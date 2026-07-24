import type { MetadataRoute } from "next";
import { navItems, caseStudies, siteUrl } from "@/lib/content";

// Required under output: "export" (GitHub Pages build) — Next 16 errors at
// build time on /sitemap.xml without this explicit declaration, even though
// the function has no request-time dependency.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = navItems.map((item) => ({
    url: `${siteUrl}${item.href}`,
    lastModified: now,
    changeFrequency: item.href === "/" ? "yearly" : "monthly",
    priority: item.href === "/" ? 1 : item.href === "/work" ? 0.8 : 0.6,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${siteUrl}/work/${cs.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
