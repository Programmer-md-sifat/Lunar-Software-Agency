import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  Sparkles,
  Zap,
  Layers,
  Activity,
  CheckCircle2,
  Cpu,
  ShieldCheck,
} from "lucide-react";

export const SmartWorkSection: React.FC = () => {
  const [activeMetricTab, setActiveMetricTab] = useState<"telemetry" | "stack">("telemetry");

  const features = [
    {
      icon: Sparkles,
      title: "Smart AI & Time-Saving Automation",
      desc: "Speed up daily tasks with custom AI tools, helpful chatbots, and automatic updates.",
    },
    {
      icon: Zap,
      title: "Fast & Reliable Web Performance",
      desc: "Built to load instantly, stay online 24/7, and handle thousands of visitors without slowing down.",
    },
    {
      icon: Layers,
      title: "Simple All-in-One Business Tools",
      desc: "Bring your team, tasks, and data into one easy-to-use dashboard.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-white border-t border-neutral-100">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-[#EDE9FE]/50 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & 3 Feature Items */}
          <div className="lg:col-span-6 space-y-9">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0EDFF] text-[#5B4DFC] text-xs font-semibold mb-4 border border-[#E2DCFF]">
                <Activity size={13} className="animate-pulse" />
                <span>Modern Engineering Workflow</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-extrabold text-[#0B0E14] tracking-[-0.03em] leading-[1.14]">
                Working smarter, not harder for every project
              </h2>
              <p className="text-neutral-500 text-base mt-4 leading-relaxed">
                We combine friendly expert design with smart automation to build websites and software that help your business succeed.
              </p>
            </div>

            {/* 3 Vertical Feature Items matching image */}
            <div className="space-y-7">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    className="flex items-start gap-4.5 group cursor-default"
                  >
                    {/* Dark circular badge matching screenshot */}
                    <div className="w-12 h-12 rounded-full bg-[#0B0E14] text-white flex items-center justify-center shrink-0 shadow-md group-hover:bg-[#5B4DFC] group-hover:scale-105 transition-all duration-300">
                      <Icon size={20} strokeWidth={2.2} />
                    </div>

                    <div className="pt-0.5">
                      <h3 className="text-lg font-bold text-[#0B0E14] tracking-tight group-hover:text-[#5B4DFC] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-neutral-500 text-sm leading-relaxed mt-1.5 max-w-lg">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Image with unique interactive cards and corner badges */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[500px]">
              {/* Top-Right Purple Circular Arrow Button matching screenshot */}
              <Link
                to="/projects"
                title="View All Projects"
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#5B4DFC] text-white flex items-center justify-center shadow-xl shadow-[#5B4DFC]/30 hover:scale-110 hover:bg-[#4c3ef7] transition-all z-30 cursor-pointer group"
              >
                <ArrowUpRight
                  size={24}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>

              {/* Unique Element #1: Live Glassmorphism Telemetry Pill (Top Left) */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute top-5 left-5 z-20 backdrop-blur-md bg-white/90 border border-white/80 rounded-2xl px-4 py-2 shadow-lg flex items-center gap-2.5"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-[#0B0E14]">
                  99.98% System Uptime
                </span>
                <span className="text-[10px] uppercase font-bold text-neutral-400 border-l border-neutral-200 pl-2">
                  Live
                </span>
              </motion.div>

              {/* Main Photo Card matching screenshot shape & style */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-[36px] sm:rounded-[42px] overflow-hidden shadow-2xl border-4 border-white bg-neutral-100 aspect-[4/4.4]"
              >
                {/* Modern software company engineering office and tech hub */}
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                  alt="SoftLunar modern software engineering studio and development lab"
                  className="w-full h-full object-cover object-center"
                />

                {/* Subtle gradient overlay to ensure UI elements pop */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>
              

              {/* Bottom-Left "About Us" Docked Button matching screenshot */}
              <div className="absolute -bottom-3.5 -left-3.5 sm:-bottom-4 sm:-left-4 z-30">
                <Link
                  to="/about"
                  className="px-7 py-3.5 rounded-full bg-[#0B0E14] text-white text-xs sm:text-sm font-bold tracking-wide shadow-2xl hover:bg-neutral-800 transition-all flex items-center gap-2 border-2 border-white hover:scale-105 cursor-pointer"
                >
                  <span>About Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
