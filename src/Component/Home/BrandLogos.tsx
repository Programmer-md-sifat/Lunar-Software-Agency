import React from "react";
import { motion } from "motion/react";

export const BrandLogos: React.FC = () => {
  return (
    <div className="w-full py-10 lg:py-14 border-t border-neutral-100/80 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity">
          {/* Capsule */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-2.5 text-neutral-400 hover:text-neutral-900 transition-colors cursor-default"
          >
            <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor">
              <rect x="6" y="8" width="20" height="16" rx="8" opacity="0.35" />
              <circle cx="16" cy="16" r="6" opacity="0.75" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-neutral-500 hover:text-neutral-900 transition-colors">
              Capsule
            </span>
          </motion.div>

          {/* Spherule */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-2.5 text-neutral-500 hover:text-neutral-900 transition-colors cursor-default"
          >
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2">
              <circle cx="16" cy="16" r="11" />
              <ellipse cx="16" cy="16" rx="11" ry="5" />
              <line x1="16" y1="5" x2="16" y2="27" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-neutral-600 hover:text-neutral-900 transition-colors">
              Spherule
            </span>
          </motion.div>

          {/* FocalPoint */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-2.5 text-neutral-700 hover:text-neutral-950 transition-colors cursor-default"
          >
            <svg width="28" height="28" viewBox="0 0 32 32" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {Array.from({ length: 16 }).map((_, i) => {
                const angle = (i * 360) / 16;
                const rad = (angle * Math.PI) / 180;
                const x1 = 16 + 4 * Math.cos(rad);
                const y1 = 16 + 4 * Math.sin(rad);
                const x2 = 16 + 12 * Math.cos(rad);
                const y2 = 16 + 12 * Math.sin(rad);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
              })}
            </svg>
            <span className="text-xl font-extrabold tracking-tight text-neutral-800 hover:text-neutral-950 transition-colors">
              FocalPoint
            </span>
          </motion.div>

          {/* Acme Corp */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-2.5 text-neutral-800 hover:text-black transition-colors cursor-default"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-neutral-900">
              Acme Corp
            </span>
          </motion.div>

          {/* Segment */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-2.5 text-neutral-600 hover:text-neutral-900 transition-colors cursor-default"
          >
            <svg width="26" height="26" viewBox="0 0 28 28" fill="currentColor">
              <path d="M14 3C7.925 3 3 7.925 3 14s4.925 11 11 11 11-4.925 11-11c0-1.657-.367-3.23-1.025-4.643l-4.59 4.59A5.962 5.962 0 0114 20c-3.314 0-6-2.686-6-6s2.686-6 6-6c1.472 0 2.82.532 3.864 1.414l4.242-4.242A10.938 10.938 0 0014 3z" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-neutral-700 hover:text-neutral-900 transition-colors">
              Segment
            </span>
          </motion.div>

          {/* GlobalBank */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-2.5 text-neutral-400 hover:text-neutral-800 transition-colors cursor-default"
          >
            <svg width="26" height="26" viewBox="0 0 28 28" fill="currentColor" opacity="0.8">
              <circle cx="14" cy="14" r="11" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M14 3a11 11 0 0 0 0 22M3 14h22M6 8h16M6 20h16" fill="none" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-neutral-500 hover:text-neutral-800 transition-colors">
              GlobalBank
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
