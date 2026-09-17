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
    shortDescription: "Custom web software built to make your daily business operations simpler and faster.",
    fullDescription: "We build reliable, easy-to-use custom software tailored to your business needs. Whether you need an internal portal or a web platform, we help you save time and grow easily.",
    badge: "Enterprise Grade",
    icon: "Code2",
    features: [
      "Custom Web & Cloud Software",
      "Easy API Connections",
      "Modernizing Old Software",
      "Automated Cloud Upgrades"
    ],
    techStack: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS"],
    metrics: [
      { label: "Uptime Guaranteed", value: "99.98%" },
      { label: "Work Speed Boost", value: "4.2x" }
    ]
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    shortDescription: "Fast, user-friendly mobile apps for iPhone and Android devices.",
    fullDescription: "We build smooth mobile apps that your customers will love using. They work offline, support biometric login, and send instant notifications.",
    badge: "iOS & Android",
    icon: "Smartphone",
    features: [
      "iPhone & Android Apps",
      "Works Offline & Syncs Data",
      "Push Notifications & Payments",
      "Secure Login & Face ID"
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
    shortDescription: "Fast online stores designed to increase sales and streamline checkout.",
    fullDescription: "We create fast online stores that load instantly on mobile and desktop. Make buying easy for your customers with simple payments and automated stock tracking.",
    badge: "High Sales",
    icon: "ShoppingBag",
    features: [
      "Custom Online Storefronts",
      "Secure Credit Card Payments",
      "Automatic Stock & Order Tracking",
      "Fast & Simple Checkout"
    ],
    techStack: ["Next.js", "Shopify Plus", "Stripe", "Algolia", "Tailwind CSS", "Redis"],
    metrics: [
      { label: "Sales Increase", value: "+38%" },
      { label: "Checkout Speed", value: "<1.2s" }
    ]
  },
  {
    id: "erp-cms-solution",
    title: "ERP & CMS Solutions",
    shortDescription: "All-in-one business management and content systems for your team.",
    fullDescription: "Manage your team, inventory, content, and reports from one easy dashboard. Organize your company and keep everyone working smoothly together.",
    badge: "Business Tools",
    icon: "Layers",
    features: [
      "Automated Business Tasks",
      "User Roles & Permissions",
      "Easy Content Management",
      "Simple Financial Reports"
    ],
    techStack: ["React", "NestJS", "PostgreSQL", "Prisma", "Docker", "Tailwind"],
    metrics: [
      { label: "Admin Time Saved", value: "65%" },
      { label: "Data Accuracy", value: "100%" }
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design & Branding",
    shortDescription: "Clean, attractive website and app designs that engage your audience.",
    fullDescription: "We design clean, intuitive user interfaces that make software effortless and enjoyable to use for all your customers.",
    badge: "Design Systems",
    icon: "Palette",
    features: [
      "User Journey & Wireframes",
      "Modern Design Systems",
      "Interactive Prototypes",
      "Usability & Accessibility Testing"
    ],
    techStack: ["Figma", "Framer", "Tailwind CSS", "Adobe CC", "Storybook"],
    metrics: [
      { label: "User Engagement", value: "+52%" },
      { label: "Design Handoff", value: "2x Faster" }
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps Solutions",
    shortDescription: "Secure, reliable cloud servers and setup to keep your software online 24/7.",
    fullDescription: "We set up fast, safe, and cost-effective cloud servers so your website or app stays online and performs smoothly as you grow.",
    badge: "24/7 Reliability",
    icon: "Cloud",
    features: [
      "Automated Cloud Deployments",
      "24/7 Server Monitoring",
      "Data Backup & Recovery",
      "Security & Firewall Setup"
    ],
    techStack: ["AWS", "Google Cloud", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
    metrics: [
      { label: "Server Uptime", value: "99.99%" },
      { label: "Deployment Speed", value: "10x Faster" }
    ]
  }
];
