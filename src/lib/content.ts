import type {
  AlsoBuiltItem,
  AlsoDeliveredItem,
  CaseStudy,
  CertificationItem,
  ContactInfo,
  EducationItem,
  NavItem,
  ProgramBoardRow,
  SkillCategory,
  StatItem,
  TimelineEntry,
} from "./types";

export const identity = {
  name: "Dhiraj Nirne",
  positioningLine: "I ship products people actually use.",
  location: "Bengaluru, India",
};

// Canonical origin for SEO (metadataBase, sitemap, JSON-LD, canonical links).
// The site also deploys to GitHub Pages as a secondary mirror, but Vercel is
// the one authoritative origin search engines should index — single source
// of truth so a future domain change only touches this one line.
export const siteUrl = "https://portfolio-three-lime-57.vercel.app";

export const contact: ContactInfo = {
  email: "dhirajnirne@gmail.com",
  phone: "+91 7016010500",
  location: "Bengaluru, India",
  linkedin: "https://www.linkedin.com/in/dhiraj-n-012ab2136/",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Thinking", href: "/thinking" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

// Resume file lives in /public — served from site root.
// Next only rewrites basePath automatically for next/link and next/image —
// a raw href to a public/ asset needs it prepended manually. Empty on Vercel
// (root-served); set to /dhiraj-portfolio by the GitHub Pages workflow.
export const resumePath = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/Dhiraj-Nirne-Resume.pdf`;

// WhatsApp deep link (digits only, no +/spaces) + mailto for contact actions.
export const whatsappUrl = "https://wa.me/917016010500";

export const heroSubhead =
  "Dhiraj Nirne — Product Manager with 3+ years turning ambiguous problems into shipped product across civic tech, AI, fintech-scale operations, and consumer apps. A software engineering background and hands-on delivery leadership mean I don't just define the roadmap — I can ship it.";

export const stats: StatItem[] = [
  { value: 17, suffix: "+", label: "products and platforms shipped" },
  { value: 8, suffix: "+", label: "concurrent programs run at once" },
  { value: 95, suffix: "%", label: "client satisfaction score" },
  { value: 40, suffix: "%", label: "lift in program visibility" },
];

export const programBoard: ProgramBoardRow[] = [
  {
    name: "BBMP E-Khata",
    category: "Civic tech",
    status: "shipped",
    note: "5cr hits/mo",
  },
  {
    name: "Majik Kids",
    category: "Consumer",
    status: "live",
    note: "1k+ downloads",
  },
  {
    name: "BAMUL",
    category: "Agri-fintech",
    status: "shipped",
    note: "₹2,000cr/yr",
  },
  {
    name: "10 more products",
    category: "Global",
    status: "active",
    note: "In delivery",
  },
];

export const aboutHeadline =
  "A product manager who ships, not just plans";

export const aboutParagraphs: string[] = [
  "I started as a software developer, shipping Flutter apps with REST integrations and payment gateways. That engineering grounding is still what separates my product decisions from guesswork — I can pressure-test a technical trade-off myself, not just take engineering's word for it.",
  "Across a dozen-plus products — civic platforms, AI tools, consumer apps, enterprise-scale migrations — I've owned the parts of the job that actually move a product forward: auditing what's broken, defining what to build next, running the delivery, and being accountable for what ships. On BBMP's E-Khata portal that meant cutting median time-on-platform from 40 minutes to 15 and clearing a 40,000-item user issue backlog down to around 200. On Majik Kids it meant owning the product from concept to 1,000+ organic downloads in two months.",
  "The delivery and program work — running 8+ concurrent engagements at Cumulations Technologies, building the KPI and risk frameworks that keep every one of them visible — is the operating muscle behind the product decisions, not a separate job. It's why the products I own tend to actually ship.",
];

// Tier 1 — full accordion case studies (Problem / Role / Actions / Result)
export const caseStudies: CaseStudy[] = [
  {
    id: "bbmp-ekhata",
    title: "BBMP E-Khata",
    subtitle: "Bengaluru civic property-record portal",
    category: "Civic tech",
    status: "shipped",
    problem:
      "Bengaluru's E-Khata portal — the city's property record and tax system — had a slow, confusing flow that pushed users to spend up to 40 minutes on a task they wanted to finish and leave. A backlog of over 40,000 unresolved user issues had built up, and duplicate data entry against the Kaveri land-records portal was creating conflicting records.",
    role: "Audit lead and UX owner.",
    actions: [
      "Audited the existing flow end to end and proposed a redesigned process",
      "Led front-end development of the new portal",
      "Automated identity and property verifications that had been manual",
      "Integrated tightly with the Kaveri land-records portal to eliminate redundant, conflicting data entry between the two systems",
    ],
    result:
      "Cut median time-on-platform from 40 minutes to 15, brought the open user-issue backlog down from 40,000+ to around 200, and removed a major source of data conflict between BBMP and Kaveri records. The portal now serves roughly 5 crore hits a month.",
    tags: ["UX strategy", "Process audit", "Systems integration", "Stakeholder management"],
  },
  {
    id: "majik-kids",
    title: "Majik Kids",
    subtitle: "Audio stories app for kids and parents",
    category: "Consumer",
    status: "live",
    problem:
      "Parents needed a simple, engaging audio-story experience for kids — built from zero to launch.",
    role: "Product owner, full lifecycle.",
    actions: [
      "Owned the product lifecycle from concept through Flutter build and Appwrite backend integration",
      "Ran Kanban and Scrum delivery, tracked in Jira",
    ],
    result:
      "Drove organic growth to 1,000+ downloads across both app stores within 2 months of launch.",
    tags: ["Product lifecycle", "Flutter", "Growth"],
  },
  {
    id: "bamul",
    title: "BAMUL",
    subtitle: "Bengaluru Milk Union — Oracle EBS migration and platform modernization",
    category: "Agri-tech / Fintech-scale",
    status: "shipped",
    problem:
      "Karnataka's largest dairy cooperative was running core operations — procurement, transport, processing, and distribution — on an ageing Oracle EBS system that couldn't keep pace with the scale of the network or the money moving through it.",
    role:
      "Program and delivery lead — owned the migration end to end across a 13-person cross-functional team.",
    actions: [
      "Directed the migration from legacy Oracle EBS to a modernized platform, building middleware to bridge old and new systems",
      "Led a 13-person team — 4 database engineers, 4 backend developers, 3 web and 2 mobile frontend engineers — across Angular, Node.js, Flutter, and SQL/PL-SQL",
      "Scoped and sequenced procurement, transport, processing, and distribution workflows across multiple linked projects inside a single delivery calendar",
      "Owned the finance and payment-processing workstream underpinning the cooperative's yearly transaction volume",
    ],
    result:
      "Delivered the migration in 8 months against a program spanning a full year, supporting a statewide farmer network and a payment pipeline processing roughly ₹2,000 crore annually — without disrupting daily procurement operations.",
    tags: ["Program leadership", "Systems migration", "Cross-functional team leadership"],
  },
  {
    id: "ragmetrics",
    title: "Ragmetrics",
    subtitle: "AI KPI measurement tool",
    category: "AI / LLM",
    status: "shipped",
    problem:
      "Teams had no reliable way to measure LLM output quality against real KPIs — only ad hoc spot checks.",
    role: "Product direction and technical delivery.",
    actions: [
      "Directed synthetic-data generation pipelines and automated LLM evaluation criteria",
      "Worked directly with engineers on prompt engineering and data-pipeline design",
      "Ran stakeholder research to align tooling with real measurement needs",
    ],
    result:
      "Improved AI model evaluation accuracy and aligned the tool to what stakeholders actually needed to measure.",
    tags: ["AI / LLM", "Product strategy", "Data pipelines"],
  },
  {
    id: "ai-dashboard",
    title: "AI Dashboard",
    subtitle: "AI-powered BI tool",
    category: "AI / BI",
    status: "shipped",
    problem:
      "The business needed an AI-driven analytics tool to support faster, more competitive decision-making.",
    role: "Product vision and cross-functional lead.",
    actions: [
      "Defined product vision and scope, aligning AI-driven analytics with business goals",
      "Led the cross-functional team integrating real-time analytics and UX improvements",
      "Conducted market and competitive analysis",
    ],
    result:
      "Shipped a tool delivering actionable insights and visualizations that informed roadmap priorities and competitive positioning.",
    tags: ["AI / BI", "Market analysis", "Cross-functional leadership"],
  },
  {
    id: "tgi-sports",
    title: "TGI Sports",
    subtitle: "Real-time stadium advertising platform (internal codename: Vault) — UK",
    category: "AdTech / Sports",
    status: "shipped",
    problem:
      "Broadcasters needed to book and manage LED ad placements live, across stadiums, during real sporting events — with MLB league onboarding, geography-based targeting, and multiple display sizes all integrating with existing stadium hardware.",
    role: "Program owner — held scope, risk, and timeline end to end.",
    actions: [
      "Directed MLB league onboarding workflows and geography-based targeting logic",
      "Coordinated multi-vendor LED display integrations with stadium systems",
      "Ran bi-weekly stakeholder reviews and QA release gates",
    ],
    result:
      "Platform went live during real sporting events, on schedule. The client renewed the contract on the strength of delivery.",
    tags: ["Program ownership", "Stakeholder management", "Vendor coordination"],
  },
  {
    id: "hello-upi",
    title: "Hello UPI / Tonetag",
    subtitle: "In-car contactless payments — Tata Motors",
    category: "Fintech",
    status: "shipped",
    problem:
      "A connected-vehicle platform needed a secure, fast UPI-based in-car payment flow for Tata Motors.",
    role: "Technical product and delivery owner.",
    actions: [
      "Managed development and integration of an iOS SDK for in-car UPI payments",
      "Designed the QR-scanning payment workflow and coordinated SDK architecture with engineering",
      "Ran usability testing and QA on encryption and fraud-prevention mechanisms",
    ],
    result:
      "Achieved a 15% reduction in average transaction time versus conventional methods, with fraud prevention validated pre-launch.",
    tags: ["Fintech", "SDK", "Security & QA"],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((cs) => cs.id === slug);
}

export function getAdjacentCaseStudies(slug: string) {
  const i = caseStudies.findIndex((cs) => cs.id === slug);
  return {
    prev: i > 0 ? caseStudies[i - 1] : null,
    next: i >= 0 && i < caseStudies.length - 1 ? caseStudies[i + 1] : null,
  };
}

// Tier 2 — "Also delivered": compact cards, real client/professional work below the full case studies
export const alsoDelivered: AlsoDeliveredItem[] = [
  {
    id: "therahome",
    title: "TheraHome",
    subtitle: "At-home physiotherapy app",
    category: "Healthcare",
    status: "shipped",
    summary:
      "Defined product strategy for an ML-powered (Google ML Kit) tracking app with a doctor-facing dashboard and telemedicine features — shipped healthcare-compliant and patient-centric.",
    tags: ["Healthcare", "ML", "Product strategy"],
  },
  {
    id: "neurolign",
    title: "Neurolign",
    subtitle: "Mobile eye-scan health screening",
    category: "Health-tech / AI",
    status: "active",
    summary:
      "Managed delivery and owned QA for a camera-based capture pipeline feeding a predictive health model — screening for eye-health issues and early risk indicators from a standard phone camera.",
    tags: ["Project management", "Health-tech", "Quality ownership"],
  },
  {
    id: "arise",
    title: "Arise",
    subtitle: "Gig workforce platform — USA",
    category: "HR-tech",
    status: "live",
    summary:
      "Coordinated resource planning, sprint execution, and QA sign-off for a $200M+ HR-tech enterprise's gig-worker onboarding and compliance-training app across a 10–15 person distributed team.",
    tags: ["Technical delivery", "Flutter", "Distributed teams"],
  },
  {
    id: "berlinger",
    title: "Berlinger",
    subtitle: "Regulated supply-tracking platform — Switzerland",
    category: "Medtech",
    status: "shipped",
    summary:
      "Directed requirements gathering, sprint planning, and compliance sign-off for a Swiss medtech supply-tracking platform — delivered on schedule with zero critical post-launch defects.",
    tags: ["Regulatory compliance", "Process automation"],
  },
  {
    id: "bandhan-dhatu",
    title: "Bandhan Dhatu",
    subtitle: "Internal scrap-metal operations platform",
    category: "Internal tooling",
    status: "shipped",
    summary:
      "Directed delivery of an internal platform covering metal intake, transport coordination, grading, and payout — replacing a manual, error-prone process with one traceable flow.",
    tags: ["Project management", "Internal tooling", "Process automation"],
  },
  {
    id: "emm",
    title: "EMM",
    subtitle: "Enterprise mobility management for internal Android fleet",
    category: "Internal tooling",
    status: "shipped",
    summary:
      "Directed the build of an internal Android Enterprise Mobility Management tool, defining the policy and control feature set for centralized, policy-based device management.",
    tags: ["Product ownership", "Enterprise mobility"],
  },
];

// Tier 3 — "Also built": one-line prototype mentions
export const alsoBuilt: AlsoBuiltItem[] = [
  {
    id: "aair",
    name: "Aair",
    role: "Developer + PM",
    description:
      "Bengaluru hyperlocal roadside assistance — on-demand puncture-repair booking.",
  },
  {
    id: "citybot",
    name: "CityBot",
    role: "Developer + PM · Prototype",
    description:
      "Civic-issue reporting prototype — photo capture, AI-generated caption, auto-tweeted and tagged to the right municipal authority by location.",
  },
  {
    id: "ezlar",
    name: "EZLAR",
    role: "Project Manager",
    description:
      "Skill-building app for children with special abilities — articles and games for cognitive, motor, social, and behavioral development.",
  },
  {
    id: "karecircle",
    name: "KareCircle",
    role: "Developer + PM",
    description:
      "Elderly-care app with geofencing, family break-the-fence alerts, and fall detection.",
  },
];

export const experience: TimelineEntry[] = [
  {
    role: "Project Manager",
    company: "Cumulations Technologies",
    location: "Bengaluru",
    date: "Nov 2023—Present",
    bullets: [
      "Run portfolio-level delivery across 8+ concurrent AI, mobile, and enterprise web programs at once",
      "Built the KPI and risk-management framework now used org-wide — 40% lift in program visibility, 30% fewer escalations",
      "Own project-level budgeting end to end — planning, tracking, and controlling costs across every program in the portfolio",
      "Improved cost-per-project efficiency through tighter resource allocation and reduced delivery waste",
      "Contributed directly to portfolio revenue growth by improving delivery efficiency and expanding scope within existing client engagements",
      "Standardised Agile ceremonies across teams of 5–15, cutting cycle time by 20%",
      "Introduced AI-agent-assisted QA workflows, cutting QA cycle time by 20%",
      "Primary point of contact across three global engagements — Arise (USA), TGI Sports (UK), Berlinger (Switzerland) — holding a 95% client satisfaction score",
      "Lead resource and capacity planning across design, engineering, QA, and data science, plus vendor coordination portfolio-wide",
    ],
    highlights: [
      "Project budgeting & cost control",
      "Revenue growth",
      "Cost-per-project efficiency",
      "Resource & capacity planning",
    ],
  },
  {
    role: "Software Developer",
    company: "Cumulations Technologies",
    location: "Bengaluru",
    date: "Jan 2023—Oct 2023",
    bullets: [
      "Built Flutter apps integrating RESTful APIs and payment gateways",
      "Cut production crash rate from 2.1% to 0.3% through rigorous QA",
      "Translated business requirements into technical specs and delivery plans",
    ],
  },
  {
    role: "Big Data Intern",
    company: "Cognizant Technology Solutions",
    location: "Pune",
    date: "May 2022—Dec 2022",
    bullets: [
      "Supported ETL pipeline delivery and data processing for enterprise clients",
      "Optimised pipelines, improving processing speed by 35%",
      "Contributed to an analytics dashboard used by 500+ stakeholders",
    ],
  },
  {
    role: "Co-Founder",
    company: "Mom's Chapati",
    location: "Pune",
    date: "Apr 2019—Feb 2020",
    bullets: [
      "Ran procurement, logistics, supply chain, and day-to-day operations for a 12-person team",
      "Scaled to ₹90,000 in monthly revenue within 6 months, on 200+ daily orders",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Product",
    skills: [
      "Product strategy",
      "Product discovery",
      "Roadmapping",
      "PRDs & user stories",
      "Feature prioritisation",
      "A/B testing",
      "User research",
      "Stakeholder management",
      "Go-to-market strategy",
      "Market & competitive analysis",
    ],
  },
  {
    title: "Program & portfolio",
    skills: [
      "Program governance",
      "Cross-project dependency management",
      "KPI & risk frameworks",
      "Project budgeting & cost control",
      "Resource & capacity planning",
      "Vendor coordination",
      "Agile at scale",
    ],
  },
  {
    title: "Technical",
    skills: [
      "Flutter / Dart",
      "REST APIs",
      "AWS",
      "Python",
      "React / TypeScript",
      "SQL",
      "AI / ML & LLM tooling",
      "OpenAI APIs",
      "Power Automate / Power Apps",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Jira",
      "Confluence",
      "Asana",
      "Notion",
      "Miro",
      "MS Project",
      "Figma",
      "Power BI",
      "Google Analytics",
      "Git / GitHub",
      "Slack",
    ],
  },
];

export const education: EducationItem = {
  degree: "B.Tech, Electronics & Telecommunication",
  institution: "Bharati Vidyapeeth College of Engineering, Pune",
  location: "Pune",
  date: "2018–2022",
  detail: "CGPA 8.92/10",
};

export const certifications: CertificationItem[] = [
  { name: "AI for Product Management", issuer: "Pendo", year: "2024" },
  {
    name: "DP-100: Microsoft Certified Data Scientist Associate",
    issuer: "Microsoft",
    year: "2023",
  },
  { name: "Python for Data Science", issuer: "DataCamp", year: "2023" },
  { name: "Consumer Analytics", issuer: "Coursera / Wharton", year: "2022" },
];

export const contactCopy = {
  headline: "Got a delivery that needs an operator?",
  subhead:
    "Whichever lens you need — program, project, product, or technical — I'm a straightforward email away.",
};
