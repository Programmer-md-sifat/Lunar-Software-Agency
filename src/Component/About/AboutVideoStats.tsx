import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, X, Volume2, Sparkles, Users } from "lucide-react";

export const AboutVideoStats: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const stats = [
    {
      value: "14+",
      label: "Years of experience",
    },
    {
      value: "3k",
      label: "Project done",
    },
    {
      value: "1k+",
      label: "Client satisfy",
    },
    {
      value: "20",
      label: "Company trusted us",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 my-12 sm:my-16">
      {/* Outer Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white rounded-[32px] sm:rounded-[36px] overflow-hidden border border-neutral-200/80 shadow-[0_15px_45px_rgba(0,0,0,0.04)]"
      >
        {/* Top: Video / Photo Presentation with Play Button */}
        <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] bg-neutral-900 overflow-hidden group cursor-pointer"
             onClick={() => setIsVideoOpen(true)}>
          {/* Team Collaboration Photo matching screenshot */}
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=85"
            alt="Engineering team collaboration and project planning"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Gentle cinematic overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

          {/* Centered Glowing Purple Play Button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative flex items-center justify-center">
              {/* Outer pulsing ring */}
              <span className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#6952FF]/30 animate-ping opacity-60 pointer-events-none" />
              
              {/* Secondary soft aura */}
              <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#6952FF]/40 blur-md pointer-events-none" />

              {/* Main Circular Button */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#6952FF] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(105,82,255,0.45)] group-hover:bg-[#5B4DFC] transition-all cursor-pointer pointer-events-auto"
                aria-label="Play company culture video"
              >
                <Play
                  size={26}
                  className="translate-x-0.5 fill-white text-white"
                  strokeWidth={2}
                />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom: 4 Metrics Grid matching screenshot */}
        <div className="py-8 sm:py-10 px-6 sm:px-12 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-100">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center ${
                  idx > 0 && idx % 2 === 0 ? "pt-4 md:pt-0" : ""
                } ${idx === 1 ? "pt-0" : ""} ${idx > 1 ? "pt-4 md:pt-0" : ""}`}
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#6952FF] tracking-tight leading-none mb-2"
                >
                  {stat.value}
                </motion.span>
                <span className="text-neutral-500 text-sm sm:text-[15px] font-medium tracking-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-neutral-900/90 border-b border-neutral-800 text-white">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#6952FF]" />
                  <span className="text-sm font-bold">Behind SoftLunar Engineering Studio</span>
                </div>
                <button
                  onClick={() => setIsVideoOpen(false)}
                  className="p-1.5 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close video"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Video Player */}
              <div className="aspect-video w-full bg-black relative">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="SoftLunar Culture Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Modal Footer Note */}
              <div className="px-6 py-3 bg-neutral-950 text-neutral-400 text-xs flex items-center justify-between">
                <span>14+ years crafting resilient software architectures.</span>
                <span className="text-[#6952FF] font-semibold">Press Esc to close</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
