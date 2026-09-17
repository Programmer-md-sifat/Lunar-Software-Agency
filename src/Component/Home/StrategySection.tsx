import React from "react";
import { motion } from "motion/react";
import {
  Compass,
  LayoutGrid,
  Code2,
  ShieldCheck,
  Rocket,
  TrendingUp,
} from "lucide-react";

interface StrategyStep {
  step: string;
  phase: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  iconBg: string;
  cardBg: string;
  borderColor: string;
}

export const StrategySection: React.FC = () => {
  const steps: StrategyStep[] = [
    {
      step: "STEP 01",
      phase: "PHASE 01",
      title: "Discovery & Planning",
      desc: "We align on scope, deliverables, roadmap details, and clear business metrics before coding.",
      icon: Compass,
      iconBg: "bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] shadow-sky-500/25",
      cardBg: "bg-gradient-to-b from-[#F0F9FF]/80 via-white to-white",
      borderColor: "border-sky-100/80 hover:border-sky-300",
    },
    {
      step: "STEP 02",
      phase: "PHASE 02",
      title: "UI/UX Architecture",
      desc: "We design wireframes, responsive grids, user flows, and hi-fi design mockups for approval.",
      icon: LayoutGrid,
      iconBg: "bg-gradient-to-br from-[#10B981] to-[#059669] shadow-emerald-500/25",
      cardBg: "bg-gradient-to-b from-[#F0FDF4]/80 via-white to-white",
      borderColor: "border-emerald-100/80 hover:border-emerald-300",
    },
    {
      step: "STEP 03",
      phase: "PHASE 03",
      title: "Sprint-Based Dev",
      desc: "Clean coding, version-controlled repository updates, and agile modular components creation.",
      icon: Code2,
      iconBg: "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] shadow-blue-500/25",
      cardBg: "bg-gradient-to-b from-[#EFF6FF]/80 via-white to-white",
      borderColor: "border-blue-100/80 hover:border-blue-300",
    },
    {
      step: "STEP 04",
      phase: "PHASE 04",
      title: "Rigorous Testing",
      desc: "Cross-device verification, manual QA runs, automated unit scripts, and load testing checks.",
      icon: ShieldCheck,
      iconBg: "bg-gradient-to-br from-[#14B8A6] to-[#0F766E] shadow-teal-500/25",
      cardBg: "bg-gradient-to-b from-[#F0FDFA]/80 via-white to-white",
      borderColor: "border-teal-100/80 hover:border-teal-300",
    },
    {
      step: "STEP 05",
      phase: "PHASE 05",
      title: "Deployment & Go-Live",
      desc: "Production setup, CI/CD pipeline deployments, domain bindings, and automated cloud syncs.",
      icon: Rocket,
      iconBg: "bg-gradient-to-br from-[#0284C7] to-[#2563EB] shadow-blue-500/25",
      cardBg: "bg-gradient-to-b from-[#F0F9FF]/80 via-white to-white",
      borderColor: "border-sky-100/80 hover:border-sky-300",
    },
    {
      step: "STEP 06",
      phase: "PHASE 06",
      title: "Evolution & SLA",
      desc: "Continuous performance audits, feature scale integrations, and support SLA maintenance.",
      icon: TrendingUp,
      iconBg: "bg-gradient-to-br from-[#06B6D4] to-[#0284C7] shadow-cyan-500/25",
      cardBg: "bg-gradient-to-b from-[#ECFEFF]/80 via-white to-white",
      borderColor: "border-cyan-100/80 hover:border-cyan-300",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FCFCFE] border-t border-neutral-100/80 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#E0F2FE]/40 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-[#EDE9FE]/40 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header: Title on Left, Accent bar & Text on Right matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#0B0E14] tracking-[-0.03em] leading-tight"
            >
              Our Proven Strategy & Engineering Process
            </motion.h2>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start lg:items-end">
            <div className="max-w-md">
              {/* Dark horizontal bar matching screenshot */}
              <div className="w-16 h-1 bg-[#0B0E14] rounded-full mb-4" />
              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                Modern software engineering is all about velocity, reliability, and precision. We handle every complex architectural detail so you can focus entirely on expanding your business without the hassle.
              </p>
            </div>
          </div>
        </div>

        {/* 6-Card Grid: 3 columns x 2 rows matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className={`p-7 sm:p-8 rounded-[30px] sm:rounded-[32px] border ${item.borderColor} ${item.cardBg} shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* Card Top: Squircle Icon on Left, Step Pill Badge on Right */}
                  <div className="flex items-center justify-between gap-4 mb-7">
                    <div
                      className={`w-13 h-13 rounded-2xl flex items-center justify-center text-white shadow-md ${item.iconBg}`}
                    >
                      <Icon size={22} strokeWidth={2.4} />
                    </div>

                    <span className="text-[11px] font-extrabold text-neutral-600 bg-white/90 border border-neutral-200/90 px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-2xs">
                      {item.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-[#0B0E14] tracking-tight mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-500 text-sm leading-relaxed mb-8">
                    {item.desc}
                  </p>
                </div>

                {/* Card Bottom: Phase Tag on Left, Subtle Dot on Right */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-neutral-400">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                    {item.phase}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-neutral-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
