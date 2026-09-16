export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: "Custom Software" | "Mobile App" | "E-commerce" | "ERP CMS";
  description: string;
  image: string;
  tags: string[];
  stats: { label: string; value: string };
  liveUrl: string;
  featured?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "detos-ecommerce",
    title: "Detos Ecommerce",
    client: "Detos Studio",
    category: "E-commerce",
    description: "High-performance luxury e-commerce experience with headless checkout and instant page transitions.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=85",
    tags: ["Visual identity", "Illustration", "E-commerce"],
    stats: { label: "Conversion Rate", value: "+54%" },
    liveUrl: "https://example.com/detos-ecommerce",
    featured: true,
  },
  {
    id: "hopstack-cloud",
    title: "Hopstack",
    client: "Hopstack Tech",
    category: "Custom Software",
    description: "Cloud management and intelligence workspace powering enterprise devops infrastructure.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    tags: ["Visual identity", "Illustration", "Cloud SaaS"],
    stats: { label: "Active Deployments", value: "12k+" },
    liveUrl: "https://example.com/hopstack-cloud",
    featured: true,
  },
  {
    id: "mahajin-app",
    title: "Mahajin",
    client: "Mahajin Systems",
    category: "ERP CMS",
    description: "Intuitive task management and operational workflow engine for distributed teams.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    tags: ["Visual identity", "Illustration", "E-commerce"],
    stats: { label: "Task Velocity", value: "3.2x" },
    liveUrl: "https://example.com/mahajin",
    featured: true,
  },
  {
    id: "applo-saas",
    title: "Applo SaaS",
    client: "Applo Labs",
    category: "Custom Software",
    description: "SaaS analytics suite with real-time telemetry and customized executive dashboards.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=85",
    tags: ["Visual identity", "Illustration", "E-commerce"],
    stats: { label: "Data Throughput", value: "1.2M/s" },
    liveUrl: "https://example.com/applo-saas",
    featured: true,
  },
  {
    id: "mirko-financials",
    title: "Mirko.O",
    client: "Mirko Capital",
    category: "Mobile App",
    description: "Modern financial management and wealth suite designed to simplify asset tracking.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=85",
    tags: ["Visual identity", "Illustration", "E-commerce"],
    stats: { label: "Managed Assets", value: "$420M+" },
    liveUrl: "https://example.com/mirko-financials",
    featured: true,
  },
  {
    id: "boutik-design",
    title: "Boutik",
    client: "Boutik Atelier",
    category: "E-commerce",
    description: "Elevated design system and commerce workspace for luxury fashion brands.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",
    tags: ["Visual identity", "Illustration", "E-commerce"],
    stats: { label: "User Engagement", value: "98.2%" },
    liveUrl: "https://example.com/boutik",
    featured: true,
  },
];
