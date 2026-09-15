import React from "react";
import { clientReviews } from "../../Data/company";
import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0EDFF] text-[#5B4DFC] text-xs font-semibold mb-3">
              Client Trust
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B0E14] tracking-tight">
              Backed by visionary <br className="hidden sm:block" />
              product leaders
            </h2>
          </div>
          <div className="flex items-center gap-1.5 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
            <span className="text-neutral-700 font-bold text-sm ml-2">4.98 / 5.0 Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientReviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#FAFAFE] p-8 rounded-3xl border border-neutral-200/80 flex flex-col justify-between"
            >
              <div>
                <Quote size={32} className="text-[#5B4DFC]/30 mb-4" />
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  "{review.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-neutral-200/60">
                <img
                  src={review.avatar}
                  alt={review.author}
                  loading="lazy"
                  className="w-11 h-11 rounded-full object-cover border border-white shadow-xs"
                />
                <div>
                  <div className="text-sm font-bold text-[#0B0E14]">{review.author}</div>
                  <div className="text-xs text-neutral-500 font-medium">
                    {review.role}, {review.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
