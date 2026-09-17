import React from "react";
import { Zap, ShieldCheck, Headphones, GitMerge } from "lucide-react";
import { motion } from "motion/react";

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: Zap,
      title: "Faster Project Delivery",
      desc: "Our pre-built design tools and templates help us build your website or app quickly without months of waiting.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Quality Code",
      desc: "We write clean, bug-free code with thorough testing so your app works reliably every single time.",
    },
    {
      icon: GitMerge,
      title: "Direct Team Access",
      desc: "Talk directly with the senior developers building your project. Clear updates with no confusing middlemen.",
    },
    {
      icon: Headphones,
      title: "24/7 Helpful Support",
      desc: "We are always here to keep your software updated, secure, and running smoothly day and night.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FCFCFE] border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0EDFF] text-[#5B4DFC] text-xs font-semibold mb-3">
            The LESoft Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B0E14] tracking-tight mb-4">
            Built for speed, made for growth
          </h2>
          <p className="text-neutral-500 text-base leading-relaxed">
            We build simple, powerful software that helps your business stand out and succeed from day one.
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
