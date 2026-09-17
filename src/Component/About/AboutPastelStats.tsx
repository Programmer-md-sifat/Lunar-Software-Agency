import React from "react";
import { motion } from "motion/react";

interface StatItem {
  id: string;
  metric: string;
  title: string;
  subtitle: string;
  gradient: string;
  border: string;
  glow: string;
}

export const AboutPastelStats: React.FC = () => {
  const stats: StatItem[] = [
    {
      id: "stat-1",
      metric: "14+",
      title: "Years of experience",
      subtitle: "Software engineering expertise that delivers proven business growth.",
      gradient: "from-[#FDF2F8] via-[#FCE7F3]/70 to-[#FAE8FF]/80",
      border: "border-pink-200/60",
      glow: "hover:shadow-[0_20px_40px_rgba(236,72,153,0.12)]",
    },
    {
      id: "stat-2",
      metric: "100+",
      title: "Projects delivered",
      subtitle: "Fast, reliable web and mobile applications tailored for users.",
      gradient: "from-[#E0F2FE] via-[#E0F7FA]/70 to-[#E0F2FE]/80",
      border: "border-sky-200/60",
      glow: "hover:shadow-[0_20px_40px_rgba(14,165,233,0.12)]",
    },
    {
      id: "stat-3",
      metric: "86+",
      title: "Brands transformed",
      subtitle: "From initial project design to long-term digital success.",
      gradient: "from-[#EEF2FF] via-[#E0E7FF]/70 to-[#EDE9FE]/80",
      border: "border-indigo-200/60",
      glow: "hover:shadow-[0_20px_40px_rgba(99,102,241,0.12)]",
    },
  ];

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {stats.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            whileHover={{ y: -6 }}
            className={`min-h-[320px] sm:min-h-[360px] p-8 sm:p-10 rounded-[28px] sm:rounded-[34px] bg-gradient-to-b ${item.gradient} border ${item.border} ${item.glow} shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-all duration-300 relative overflow-hidden group`}
          >
            {/* Subtle atmospheric cloud texture overlay */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/30 rounded-full blur-2xl pointer-events-none" />

            {/* Top Metric Number */}
            <div className="relative z-10">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#0B0E14] tracking-tight leading-none">
                {item.metric}
              </span>
            </div>

            {/* Bottom Details */}
            <div className="relative z-10 space-y-1.5 mt-12">
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0B0E14] tracking-tight">
                {item.title}
              </h3>
              <p className="text-neutral-600/90 text-sm font-medium leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
