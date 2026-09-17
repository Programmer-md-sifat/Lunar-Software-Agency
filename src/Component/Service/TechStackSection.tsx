import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Layers,
  Sparkles,
  Code2,
  Server,
  Smartphone,
  Database,
  Cloud,
  Bot,
  CheckCircle2,
  Cpu,
} from "lucide-react";

interface TechCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  accentColor: string;
  bgLight: string;
  technologies: {
    name: string;
    description: string;
    highlight?: boolean;
  }[];
}

export const TechStackSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories: TechCategory[] = [
    {
      id: "frontend",
      name: "FRONTEND",
      icon: Code2,
      accentColor: "#3B82F6",
      bgLight: "bg-blue-50 text-blue-600 border-blue-100",
      technologies: [
        { name: "React", description: "High-performance SPA & reactive UI components" },
        { name: "Next.js", description: "Server-side rendered & static hybrid web apps" },
        { name: "Vue.js", description: "Lightweight, progressive frontend frameworks" },
        { name: "TypeScript", description: "Strictly typed enterprise architecture" },
        { name: "Tailwind CSS", description: "Utility-first responsive design systems" },
        { name: "JavaScript", description: "Modern ES6+ client-side logic" },
      ],
    },
    {
      id: "backend",
      name: "BACKEND",
      icon: Server,
      accentColor: "#6366F1",
      bgLight: "bg-indigo-50 text-indigo-600 border-indigo-100",
      technologies: [
        { name: "PHP", description: "Mature server-side scripting runtime" },
        { name: "Laravel", description: "Robust MVC enterprise web framework" },
        { name: "Node.js", description: "Event-driven asynchronous I/O backend" },
        { name: "Express", description: "Minimalist, fast microservice routing" },
        { name: "Python", description: "Data-intensive computations & services" },
        { name: "Django", description: "High-security batteries-included Python framework" },
        { name: "REST & GraphQL", description: "Predictable API querying & schema federation" },
      ],
    },
    {
      id: "mobile",
      name: "MOBILE",
      icon: Smartphone,
      accentColor: "#0EA5E9",
      bgLight: "bg-sky-50 text-sky-600 border-sky-100",
      technologies: [
        { name: "Flutter", description: "Cross-platform multi-device compiled native UI" },
        { name: "React Native", description: "Native iOS & Android apps with shared logic" },
        { name: "iOS (Swift)", description: "First-class Apple ecosystem performance" },
        { name: "Android (Kotlin)", description: "Modern native Android engineering" },
      ],
    },
    {
      id: "database",
      name: "DATABASE",
      icon: Database,
      accentColor: "#10B981",
      bgLight: "bg-emerald-50 text-emerald-600 border-emerald-100",
      technologies: [
        { name: "PostgreSQL", description: "Advanced relational ACID database engine" },
        { name: "MySQL", description: "Proven relational data store for high concurrency" },
        { name: "MongoDB", description: "Flexible document-based NoSQL persistence" },
        { name: "Redis", description: "Sub-millisecond in-memory caching & queues" },
        { name: "Firebase", description: "Realtime synchronized cloud document storage" },
      ],
    },
    {
      id: "cloud",
      name: "CLOUD & DEVOPS",
      icon: Cloud,
      accentColor: "#2563EB",
      bgLight: "bg-blue-50 text-blue-600 border-blue-100",
      technologies: [
        { name: "AWS", description: "Global hyperscale cloud infrastructure" },
        { name: "Azure", description: "Microsoft cloud enterprise solutions" },
        { name: "Google Cloud", description: "Cloud Run, BigQuery & managed AI services" },
        { name: "Docker", description: "Predictable lightweight containerization" },
        { name: "Kubernetes", description: "Automated cluster orchestration & auto-scaling" },
        { name: "CI/CD", description: "Automated test suites & zero-downtime rollouts" },
        { name: "Nginx", description: "High-throughput reverse proxy & SSL load balancing" },
      ],
    },
    {
      id: "ai",
      name: "AI & AUTOMATION",
      icon: Bot,
      accentColor: "#8B5CF6",
      bgLight: "bg-purple-50 text-purple-600 border-purple-100",
      technologies: [
        { name: "OpenAI GPT", description: "State-of-the-art LLM generative reasoning" },
        { name: "LangChain", description: "Chained prompt pipelines & agentic retrieval" },
        { name: "Python AI/ML", description: "Custom neural network training & inference" },
        { name: "Zapier & n8n", description: "Autonomous workflow webhook orchestrations" },
      ],
    },
  ];

  const filteredCategories =
    activeFilter === "all"
      ? categories
      : categories.filter((c) => c.id === activeFilter);

  return (
    <section className="py-20 lg:py-28 bg-[#FCFCFD] border-y border-neutral-200/70 relative overflow-hidden">
      {/* Subtle backdrop mesh */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-blue-50/60 to-purple-50/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header matching screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#2563EB] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-2xs"
          >
            <Cpu size={14} className="text-[#2563EB]" />
            <span>TECHNOLOGY STACK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-[52px] font-black text-[#0B0E14] tracking-[-0.03em] leading-tight"
          >
            What We Build With
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-neutral-500 text-sm sm:text-base mt-4 leading-relaxed max-w-xl mx-auto"
          >
            Battle-tested technologies selected for long-term scalability, top-tier security standards, and rapid continuous delivery.
          </motion.p>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-xs font-extrabold tracking-wide transition-all cursor-pointer ${
                activeFilter === "all"
                  ? "bg-[#0B0E14] text-white shadow-sm"
                  : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200/70"
              }`}
            >
              All Stacks ({categories.reduce((acc, c) => acc + c.technologies.length, 0)})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-extrabold tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeFilter === cat.id
                    ? "bg-[#0B0E14] text-white shadow-sm"
                    : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200/70"
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-[10px] opacity-70">({cat.technologies.length})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Structured Row Layout - Elevated from reference design */}
        <div className="bg-white rounded-[32px] p-6 sm:p-10 lg:p-12 border border-neutral-200/80 shadow-[0_8px_35px_rgba(0,0,0,0.03)] space-y-6 sm:space-y-8 divide-y divide-neutral-100">
          {filteredCategories.map((cat, idx) => {
            const Icon = cat.icon;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start ${
                  idx > 0 ? "pt-6 sm:pt-8" : ""
                }`}
              >
                {/* Left Category Label */}
                <div className="lg:col-span-3 flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center border shrink-0 ${cat.bgLight}`}
                  >
                    <Icon size={18} strokeWidth={2.4} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-[15px] font-black text-[#2563EB] tracking-wider uppercase">
                      {cat.name}
                    </h3>
                    <span className="text-[11px] text-neutral-400 font-medium">
                      {cat.technologies.length} core tools
                    </span>
                  </div>
                </div>

                {/* Right Technology Pills Row */}
                <div className="lg:col-span-9 flex flex-wrap items-center gap-2.5 sm:gap-3">
                  {cat.technologies.map((tech) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ y: -2 }}
                      className="px-4 sm:px-5 py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-[13px] font-bold bg-white text-neutral-800 border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-neutral-300 hover:shadow-[0_4px_14px_rgba(0,0,0,0.06)] transition-all cursor-default"
                    >
                      {tech.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
