import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export const WhoWeAreStatement: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
      {/* Centered Pill Badge matching screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#2563EB] text-xs font-semibold mb-8 sm:mb-10 shadow-2xs"
      >
        <Sparkles size={14} className="text-[#2563EB]" />
        <span>Who we are</span>
      </motion.div>

      {/* High-Impact Statement matching screenshot typography and blue highlights */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="max-w-5xl mx-auto"
      >
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0B0E14] leading-[1.32] tracking-[-0.02em]">
          <span className="text-[#2563EB]">At LESoft,</span> we work with business owners and growing companies—helping them build faster, work smarter, and succeed through{" "}
          <span className="text-[#2563EB]">
            custom web software, fast mobile apps, smart automation, and clean designs
          </span>{" "}
          that make a real difference."
        </p>
      </motion.div>
    </section>
  );
};
