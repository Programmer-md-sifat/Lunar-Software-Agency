export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  badge: string;
  icon: string;
  features: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    shortDescription: "Tailored, scalable cloud-native architectures engineered specifically to streamline enterprise workflows.",
    fullDescription: "From complex enterprise workflows to modern distributed microservices, we build reliable, high-performance software systems that eliminate bottlenecks and scale alongside your business demands.",
    badge: "Enterprise Grade",
    icon: "Code2",
    features: [
      "Custom SaaS & Cloud Platforms",
      "API Design & Distributed Systems",
      "Legacy Codebase Modernization",
      "Automated CI/CD & Cloud Infrastructure"
    ],
    techStack: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS"],
    metrics: [
      { label: "Uptime Guaranteed", value: "99.98%" },
      { label: "Throughput Boost", value: "4.2x" }
    ]
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    shortDescription: "Native and cross-platform iOS & Android mobile applications with fluid 120fps interactions.",
    fullDescription: "We design and engineer captivating mobile products that delight end-users. Built for high responsiveness, offline capabilities, secure biometrics, and real-time syncing.",
    badge: "iOS & Android",
    icon: "Smartphone",
    features: [
      "React Native & Swift / Kotlin",
      "Offline-first Architecture & Sync",
      "Push Notifications & In-App Purchases",
      "Biometric Security & Encrypted Storage"
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL"],
    metrics: [
      { label: "Avg App Store Rating", value: "4.9★" },
      { label: "Crash-free Sessions", value: "99.9%" }
    ]
  },
  {
    id: "ecommerce-solution",
    title: "E-Commerce Solution",
    shortDescription: "High-conversion headless storefronts and multichannel commerce engines engineered for high sales volume.",
    fullDescription: "Deliver lightning-fast shopping experiences with sub-second page loads, seamless checkout gateways, automated inventory synchronization, and customized B2B/B2C logic.",
    badge: "High Conversion",
    icon: "ShoppingBag",
    features: [
      "Headless Shopify & Custom Storefronts",
      "Stripe & Multi-Currency Payment Engines",
      "Real-time Inventory & ERP Integration",
      "Cart Optimization & High-Speed Checkout"
    ],
    techStack: ["Next.js", "Shopify Plus", "Stripe", "Algolia", "Tailwind CSS", "Redis"],
    metrics: [
      { label: "Conversion Lift", value: "+38%" },
      { label: "Checkout Speed", value: "<1.2s" }
    ]
  },
  {
    id: "erp-cms-solution",
    title: "ERP CMS Solution",
    shortDescription: "Unified enterprise resource planning and bespoke content management hubs built for operational precision.",
    fullDescription: "Centralize your organization's operations, assets, human resources, and multi-channel content workflows in a single, intuitive interface with role-based governance.",
    badge: "Operational Precision",
    icon: "Layers",
    features: [
      "Custom Workflow Automation",
      "Role-Based Access Control (RBAC)",
      "Multi-Tenant Content Delivery",
      "Audit Trails & Financial Reporting"
    ],
    techStack: ["React", "NestJS", "PostgreSQL", "Prisma", "Docker", "Tailwind"],
    metrics: [
      { label: "Admin Time Saved", value: "65%" },
      { label: "Data Accuracy", value: "100%" }
    ]
  }
];
