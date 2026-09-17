import React from "react";
import { motion } from "motion/react";
import { Crown, MessageSquareText, FileText, Zap } from "lucide-react";

export const WhatToExpectSection: React.FC = () => {
  const steps = [
    {
      id: "step-1",
      icon: Crown,
      title: "Send us a message",
      description: "Fill out our contact form with a few details. Taking the first step is quick and easy.",
    },
    {
      id: "step-2",
      icon: MessageSquareText,
      title: "We reply quickly",
      description: "Our team checks incoming messages constantly and will reply within 24 hours.",
    },
    {
      id: "step-3",
      icon: FileText,
      title: "Short meeting & clear plan",
      description: "We talk through your goals, share a simple proposal with cost estimates, and answer your questions.",
    },
    {
      id: "step-4",
      icon: Zap,
      title: "Let's start building!",
      description: "Once approved, we assign your dedicated team and kick off development immediately.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Title */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-[#0B0E14] tracking-[-0.025em] leading-[1.18]">
            What to expect when working with us
          </h2>
        </motion.div>

        {/* Right Column: Timeline Steps matching screenshot */}
        <div className="lg:col-span-7 space-y-10">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="relative pl-6 border-l-2 border-[#2563EB]/40 hover:border-[#2563EB] transition-colors duration-300 group"
              >
                {/* Header row with icon badge + title */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#F0EDFF] text-[#2563EB] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300 shadow-2xs">
                    <IconComponent size={16} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0B0E14] tracking-tight">
                    {step.title}
                  </h3>
                </div>

                {/* Description text */}
                <p className="text-neutral-500 text-sm sm:text-[15px] leading-relaxed max-w-xl pl-1">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
