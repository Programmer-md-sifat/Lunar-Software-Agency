import React from "react";
import { PillButton } from "../Common/PillButton";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#0B0E14] text-white">
      {/* Soft atmospheric gradient glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#5B4DFC]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#5B4DFC]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5B4DFC]/20 border border-[#5B4DFC]/30 text-[#A59DFE] text-xs font-semibold mb-6"
          >
            <Sparkles size={14} />
            <span>Ready to build something great?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6"
          >
            Build your website & app <br />
            faster and stress-free.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-400 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
          >
            Book a free, friendly chat with our development team. Get a clear project plan and estimate within 48 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <PillButton
              to="/contact"
              text="Book a Free Call"
              variant="purple"
              size="lg"
            />
            <PillButton
              to="/projects"
              text="View Our Work"
              variant="light"
              size="lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
