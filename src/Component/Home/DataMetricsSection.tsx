import React from "react";
import { motion } from "motion/react";
import { ThumbsUp, FileText, Coins } from "lucide-react";

interface MetricItem {
  icon: React.ElementType;
  value: string;
  title: string;
  desc: string;
}

export const DataMetricsSection: React.FC = () => {
  const metrics: MetricItem[] = [
    {
      icon: ThumbsUp,
      value: "100%",
      title: "Clients satisfaction",
      desc: "Commitment to engineering excellence ensuring 100% verified client satisfaction across every deployment.",
    },
    {
      icon: FileText,
      value: "34%",
      title: "Decrease in expenses",
      desc: "Enterprise partners experienced on average a 34% reduction in operating costs by deploying our custom cloud solutions.",
    },
    {
      icon: Coins,
      value: "4.8m",
      title: "Users money flows",
      desc: "Over 4.8 million in secure financial and transaction volume processed through our custom e-commerce and fintech architectures.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF9FC] border-t border-neutral-100/90 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Section Heading matching uploaded screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-[#0B0E14] tracking-[-0.03em] leading-tight"
          >
            Driving success with data
          </motion.h2>
        </div>

        {/* 3-Column Metrics Grid with vertical dividers matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            const isLast = idx === metrics.length - 1;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={`py-6 md:py-4 px-4 sm:px-8 lg:px-10 flex flex-col justify-between ${
                  !isLast ? "md:border-r border-neutral-200/80" : ""
                }`}
              >
                <div>
                  {/* Top row: Circular purple icon badge + large bold metric value */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#5B4DFC] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#5B4DFC]/25 ring-4 ring-[#EDE9FE]">
                      <Icon size={20} strokeWidth={2.2} />
                    </div>
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#0B0E14] tracking-tight">
                      {item.value}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0B0E14] tracking-tight mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
