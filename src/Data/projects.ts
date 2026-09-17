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
    description: "A fast online shopping experience for a luxury brand with quick checkout.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=85",
    tags: ["Visual identity", "Design", "E-commerce"],
    stats: { label: "Sales Increase", value: "+54%" },
    liveUrl: "https://example.com/detos-ecommerce",
    featured: true,
  },
  {
    id: "hopstack-cloud",
    title: "Hopstack",
    client: "Hopstack Tech",
    category: "Custom Software",
    description: "An easy cloud management dashboard built to help development teams work together.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    tags: ["Visual identity", "Design", "Cloud SaaS"],
    stats: { label: "Active Users", value: "12k+" },
    liveUrl: "https://example.com/hopstack-cloud",
    featured: true,
  },
  {
    id: "mahajin-app",
    title: "Mahajin",
    client: "Mahajin Systems",
    category: "ERP CMS",
    description: "A simple task and project manager that helps remote teams organize daily work.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    tags: ["Visual identity", "Design", "E-commerce"],
    stats: { label: "Work Speed", value: "3.2x" },
    liveUrl: "https://example.com/mahajin",
    featured: true,
  },
  {
    id: "applo-saas",
    title: "Applo SaaS",
    client: "Applo Labs",
    category: "Custom Software",
    description: "A clean analytics dashboard that turns complex company data into simple charts.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=85",
    tags: ["Visual identity", "Design", "E-commerce"],
    stats: { label: "Data Speed", value: "1.2M/s" },
    liveUrl: "https://example.com/applo-saas",
    featured: true,
  },
  {
    id: "mirko-financials",
    title: "Mirko.O",
    client: "Mirko Capital",
    category: "Mobile App",
    description: "A simple finance mobile app that helps people track money and investments easily.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=85",
    tags: ["Visual identity", "Design", "E-commerce"],
    stats: { label: "Managed Assets", value: "$420M+" },
    liveUrl: "https://example.com/mirko-financials",
    featured: true,
  },
  {
    id: "boutik-design",
    title: "Boutik",
    client: "Boutik Atelier",
    category: "E-commerce",
    description: "A beautiful online store and design system crafted for luxury fashion brands.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",
    tags: ["Visual identity", "Design", "E-commerce"],
    stats: { label: "Customer Happiness", value: "98.2%" },
    liveUrl: "https://example.com/boutik",
    featured: true,
  },
];
