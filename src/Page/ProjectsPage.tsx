import React, { useState } from "react";
import { projectsData } from "../Data/projects";
import { ProjectCard } from "../Component/Projects/ProjectCard";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const categories = ["All", "Custom Software", "Mobile App", "E-commerce", "ERP CMS"];

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <div className="w-full pb-24">
      {/* Header */}
      <section className="pt-8 sm:pt-14 pb-12 relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#EDE9FE]/60 blur-[120px] pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0EDFF] text-[#6952FF] text-xs font-semibold mb-4 border border-[#E2DCFF]">
            <Sparkles size={14} />
            <span>Recent Projects</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B0E14] tracking-tight mb-5 leading-tight">
            Our work and success stories
          </h1>
          <p className="text-neutral-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Check out the web applications, mobile apps, and online stores we have built for our clients.
          </p>
        </div>
      </section>

      {/* Filter Category Chips */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(6);
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#6952FF] text-white shadow-md scale-105"
                  : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 2-Column Projects Grid matching screenshot */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom Centered "View more" Blue Pill Button matching screenshot */}
      <div className="flex justify-center items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setVisibleCount((prev) => prev + 4)}
          className="px-8 py-3.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm shadow-[0_8px_25px_rgba(37,99,235,0.35)] transition-all cursor-pointer inline-flex items-center gap-2"
        >
          <span>View more</span>
        </motion.button>
      </div>
    </div>
  );
};
