import React, { useState, useEffect } from "react";
import { PillButton } from "../Common/PillButton";
import { Wand2, ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeroSlide {
  title: string;
  des: string;
}

export const HeroSection: React.FC = () => {
  const slides: HeroSlide[] = [
    {
      title: "Custom Web & Software Development",
      des: "Empowering enterprises with ultra-fast web platforms, cloud architectures, and scalable software built to accelerate digital growth.",
    },
    {
      title: "Mobile Apps & AI-Powered Solutions",
      des: "Engineered for speed and engagement. We craft high-performance mobile apps and integrate AI to elevate user experiences.",
    },
    {
      title: "Enterprise Cloud & Custom ERP Systems",
      des: "Streamline operations and eliminate technical debt with resilient cloud infrastructure, custom CMS, and automated business workflows.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const checklistItems = [
    "IT Service Features",
    "Software Integration Solutions",
    "Workspace for everyone",
    "Technical support team",
  ];

  return (
    <section className="relative w-full pt-6 sm:pt-10 pb-16 lg:pb-24 overflow-hidden">
      {/* Soft atmospheric gradients matching screenshot */}
      <div className="absolute top-0 left-[-10%] w-[520px] h-[520px] rounded-full bg-[#EDE9FE]/50 blur-[110px] pointer-events-none -z-10" />
      <div className="absolute top-[20%] right-[-10%] w-[580px] h-[580px] rounded-full bg-[#F3E8FF]/40 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] left-[35%] w-[450px] h-[450px] rounded-full bg-[#EDE9FE]/30 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Pill badge, features */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Top Badge matching image.png */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 pl-3.5 pr-2 py-1.5 rounded-full bg-[#F0EDFF] border border-[#E2DCFF] text-[#5B4DFC] text-xs sm:text-sm font-medium hover:bg-[#EAE5FF] transition-colors cursor-pointer shadow-[0_2px_10px_rgba(91,77,252,0.06)] group mb-7"
            >
              <Wand2 size={15} className="text-[#5B4DFC]" strokeWidth={2.2} />
              <span className="tracking-tight font-medium text-[13px] sm:text-[14px]">
                Best Generative Support Supportflow
              </span>
              <span className="w-5 h-5 rounded-full bg-[#5B4DFC] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform ml-1">
                <ArrowRight size={11} strokeWidth={2.6} />
              </span>
            </motion.div>

            {/* Rotating Hero Content Area with fixed minimum height to prevent layout shifts */}
            <div className="min-h-[260px] sm:min-h-[240px] lg:min-h-[270px] w-full flex flex-col justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-extrabold text-[#0B0E14] tracking-[-0.03em] leading-[1.14] max-w-2xl">
                    {slides[currentIndex].title}
                  </h1>

                  <p className="text-neutral-600 text-base sm:text-lg font-normal mt-5 mb-6 max-w-xl leading-relaxed">
                    {slides[currentIndex].des}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Indicator Dots with Direct Interaction */}
            <div className="flex items-center gap-2 mb-8">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? "w-8 bg-[#5B4DFC]"
                      : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>

            {/* Checklist: 2x2 grid matching image.png */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 w-full max-w-xl"
            >
              {checklistItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#5B4DFC] flex items-center justify-center text-white shrink-0 shadow-sm shadow-[#5B4DFC]/20">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-[#1E293B] font-medium text-[15px] tracking-tight">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            
          </div>

          {/* Right Column: Hero photo, geometric asterism, and stat card */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px]">
              {/* Main Photo Card matching image.png */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full h-[430px] sm:h-[490px] rounded-[38px] overflow-hidden shadow-[0_28px_60px_-15px_rgba(15,23,42,0.18)] relative bg-neutral-100"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85"
                  alt="SoftLunar team collaborating around a laptop"
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle vignette/warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Geometric Asterism / Starburst decoration (overlapping photo and stat card) */}
              <motion.div
                initial={{ opacity: 0, rotate: -25, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="absolute -bottom-4 left-24 sm:left-28 z-30 pointer-events-none"
              >
                <svg
                  width="68"
                  height="68"
                  viewBox="0 0 100 100"
                  className="text-[#5B4DFC] drop-shadow-[0_4px_12px_rgba(91,77,252,0.25)] animate-[spin_30s_linear_infinite]"
                  stroke="currentColor"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                >
                  {/* 16-point asterism matching the exact icon in the user screenshot */}
                  {Array.from({ length: 16 }).map((_, i) => {
                    const angle = (i * 360) / 16;
                    const rad = (angle * Math.PI) / 180;
                    const x1 = 50 + 8 * Math.cos(rad);
                    const y1 = 50 + 8 * Math.sin(rad);
                    const x2 = 50 + 44 * Math.cos(rad);
                    const y2 = 50 + 44 * Math.sin(rad);
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
                  })}
                </svg>
              </motion.div>

              {/* Floating Stat Card matching image.png */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-8 left-[-16px] sm:-left-8 z-20 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.12)] border border-neutral-100/90 w-[210px] sm:w-[230px]"
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-[#0B0E14] tracking-tight">
                  35+
                </div>
                <p className="text-neutral-500 text-[13px] sm:text-[14px] font-medium leading-snug mt-1.5">
                  Successfully Project Delivery Done
                </p>
                {/* Visual Progress Bar matching image.png */}
                <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden mt-3.5">
                  <div className="h-full w-[70%] bg-[#0B0E14] rounded-full" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
