export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: "Custom Software" | "Mobile App" | "E-commerce" | "ERP CMS";
  description: string;
  image: string;
  tags: string[];
  stats: { label: string; value: string };
  featured?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "zenith-cloud-erp",
    title: "Zenith Multi-Tenant ERP Suite",
    client: "Acme Industrial Corp",
    category: "ERP CMS",
    description: "Enterprise operations hub integrating supply chain logistics, inventory synchronization, and automated ledger balancing across 14 global warehouses.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    stats: { label: "Processing Efficiency", value: "+82%" },
    featured: true,
  },
  {
    id: "aura-pay-mobile",
    title: "Aura Fintech Mobile Banking",
    client: "GlobalBank Digital",
    category: "Mobile App",
    description: "Next-generation biometric banking app with instant borderless transfers, dynamic virtual cards, and micro-investment porting.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
    tags: ["React Native", "TypeScript", "Biometrics", "WebSockets"],
    stats: { label: "Active Mobile Users", value: "480k+" },
    featured: true,
  },
  {
    id: "velox-headless-commerce",
    title: "Velox Luxury Goods Commerce",
    client: "Capsule Fashion Labs",
    category: "E-commerce",
    description: "Headless e-commerce platform delivering instant 350ms product page transitions, global currencies, and 3D product previews.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
    tags: ["Next.js", "Shopify Plus", "Stripe", "Tailwind CSS"],
    stats: { label: "Checkout Conversion", value: "+44%" },
    featured: true,
  },
  {
    id: "synthex-analytics",
    title: "Synthex Real-time Data Platform",
    client: "Segment Data Systems",
    category: "Custom Software",
    description: "High-throughput streaming analytics and anomaly detection engine processing over 12 million events every minute.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    tags: ["Distributed Systems", "Go", "React", "ClickHouse"],
    stats: { label: "Latency Reduction", value: "70ms" },
    featured: true,
  },
  {
    id: "omni-content-cms",
    title: "Omni Editorial CMS Platform",
    client: "FocalPoint Media",
    category: "ERP CMS",
    description: "Modern headless publishing cockpit powering multi-brand digital magazines with collaborative real-time editorial draft tools.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1000&q=80",
    tags: ["TypeScript", "GraphQL", "Tailwind CSS", "AWS"],
    stats: { label: "Article Publish Speed", value: "3x Faster" },
    featured: false,
  },
  {
    id: "pulse-health-tracker",
    title: "Pulse Care Clinical Companion",
    client: "Spherule BioTech",
    category: "Mobile App",
    description: "HIPAA-compliant health monitoring application connecting patients with telehealth doctors and continuous BLE sensor streaming.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    tags: ["React Native", "BLE Sync", "Encrypted SQLite"],
    stats: { label: "Patient Adherence", value: "96.4%" },
    featured: false,
  }
];
