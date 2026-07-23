import { Nav } from "@/components/nav/Nav";
import { Hero } from "@/components/hero/Hero";
import { StatsStrip } from "@/components/stats/StatsStrip";
import { About } from "@/components/about/About";
import { WorkSection } from "@/components/work/WorkSection";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { SkillsGrid } from "@/components/skills/SkillsGrid";
import { EducationCerts } from "@/components/education/EducationCerts";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/shared/Footer";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <StatsStrip />
        <About />
        <WorkSection />
        <ExperienceTimeline />
        <SkillsGrid />
        <EducationCerts />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
