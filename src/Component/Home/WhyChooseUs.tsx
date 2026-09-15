import React from "react";
import { Zap, ShieldCheck, Headphones, GitMerge } from "lucide-react";
import { motion } from "motion/react";

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: Zap,
      title: "60% Faster Time-to-Market",
      desc: "Our battle-tested component blueprints and automated CI pipelines bypass months of boilerplate so you launch production-ready products earlier.",
    },
    {
      icon: ShieldCheck,
      title: "Architectural Integrity",
      desc: "Zero-compromise engineering: strict TypeScript type contracts, full test coverage, robust database migrations, and clean modular codebases.",
    },
    {
      icon: GitMerge,
      title: "Direct Senior Engineering",
      desc: "Work directly with senior systems architects and staff developers. No middlemen, no junior handoffs, and complete transparent daily progress.",
    },
    {
      icon: Headphones,
      title: "Continuous 24/7 Support",
      desc: "Dedicated SLA response guarantees, real-time APM telemetry, and long-term maintenance ensure your systems run without interruptions.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FCFCFE] border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0EDFF] text-[#5B4DFC] text-xs font-semibold mb-3">
            The SoftLunar Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B0E14] tracking-tight mb-4">
            Built for velocity, engineered for scale
          </h2>
          <p className="text-neutral-500 text-base leading-relaxed">
            We bridge the gap between design precision and cloud engineering so your digital platforms outclass competitors from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-neutral-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-neutral-300 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F0EDFF] text-[#5B4DFC] flex items-center justify-center mb-6">
                  <Icon size={24} strokeWidth={2.2} />
                </div>
                <h3 className="text-lg font-bold text-[#0B0E14] tracking-tight mb-2.5">
                  {pt.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {pt.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
