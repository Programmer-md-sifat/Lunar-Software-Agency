export interface BrandLogo {
  name: string;
  symbol: string;
  style: "capsule" | "spherule" | "focalpoint" | "acme" | "segment" | "globalbank";
}

export const brandLogos: BrandLogo[] = [
  { name: "Capsule", symbol: "pill", style: "capsule" },
  { name: "Spherule", symbol: "circle-dot", style: "spherule" },
  { name: "FocalPoint", symbol: "sunburst", style: "focalpoint" },
  { name: "Acme Corp", symbol: "sparkle-four", style: "acme" },
  { name: "Segment", symbol: "pie-segment", style: "segment" },
  { name: "GlobalBank", symbol: "globe-mesh", style: "globalbank" },
];

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  tags: string[];
}

export const jobOpenings: JobOpening[] = [
  {
    id: "senior-fullstack-engineer",
    title: "Senior Full-Stack Engineer (React & Node)",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead architecture for large-scale enterprise custom software projects. Build resilient frontend systems and scalable backend microservices.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"]
  },
  {
    id: "lead-mobile-developer",
    title: "Lead Mobile Developer (React Native / iOS)",
    department: "Mobile Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Craft high-performance, animation-rich iOS and Android mobile solutions for world-class fintech and e-commerce clients.",
    tags: ["React Native", "Swift", "Kotlin", "Animation", "Performance"]
  },
  {
    id: "solutions-architect-erp",
    title: "Solutions Architect (ERP & Cloud CMS)",
    department: "Solutions",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    experience: "6+ years",
    description: "Design robust data models and custom enterprise ERP pipelines connecting high-volume business systems.",
    tags: ["System Design", "AWS", "Prisma", "Distributed Systems"]
  },
  {
    id: "ui-ux-product-designer",
    title: "Senior Product Designer (Design Systems)",
    department: "Design",
    location: "New York, NY / Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Formulate crisp, accessible design systems, interactive prototypes, and luxury digital experiences.",
    tags: ["Figma", "Design Systems", "Prototyping", "UX Strategy"]
  }
];

export const clientReviews = [
  {
    quote: "SoftLunar delivered our core ERP solution 3 weeks ahead of schedule. Their attention to UX and architectural durability transformed our operational velocity.",
    author: "Elena Rostova",
    role: "Chief Technology Officer",
    company: "Acme Industrial Corp",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The mobile app engineered by SoftLunar holds a consistent 4.9 rating on the App Store with zero downtime during our viral product launch.",
    author: "Marcus Vance",
    role: "VP of Product",
    company: "GlobalBank Digital",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Their headless e-commerce engineering boosted our conversion by 44% within the first month. An exceptionally talented software engineering team.",
    author: "Sophia Chen",
    role: "Head of Digital Commerce",
    company: "Capsule Fashion Labs",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  }
];
