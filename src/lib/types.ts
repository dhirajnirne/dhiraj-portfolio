export type StatusKind = "shipped" | "live" | "active";

export interface NavItem {
  label: string;
  href: string;
}

export interface ProgramBoardRow {
  name: string;
  category: string;
  status: StatusKind;
  note: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  status: StatusKind;
  problem: string;
  role: string;
  actions: string[];
  result: string;
  tags: string[];
}

export interface ProductThinkingCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  status: StatusKind;
  user: string;
  insight: string;
  hypothesis: string;
  prioritizationWhy: string;
  prioritizationSkipped: string;
  outcome: string;
}

export interface AlsoDeliveredItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  status: StatusKind;
  summary: string;
  tags: string[];
}

export interface AlsoBuiltItem {
  id: string;
  name: string;
  role: string;
  description: string;
}

export interface TimelineEntry {
  role: string;
  company: string;
  location: string;
  date: string;
  bullets: string[];
  highlights?: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  date: string;
  detail: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  // Set for credentials actively being pursued but not yet awarded — rendered
  // as an "In progress" pill so the list never overstates what's been earned.
  inProgress?: boolean;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}
