import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../../Data/projects";
import { PillButton } from "../Common/PillButton";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const ProjectShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Custom Software", "Mobile App", "E-commerce", "ERP CMS"];

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 lg:py-28 bg-[#FAFAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0EDFF] text-[#2563EB] text-xs font-semibold mb-3 border border-[#E2DCFF] shadow-2xs">
              <Sparkles size={14} />
              <span>Our Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B0E14] tracking-tight leading-tight">
              Featured projects & <br className="hidden sm:block" />
              recent software builds
            </h2>
          </div>
          <PillButton to="/projects" text="View All Projects" size="default" />
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#2563EB] text-white shadow-md scale-105"
                  : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.slice(0, 4).map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group flex flex-col rounded-[28px] sm:rounded-[32px] overflow-hidden border border-neutral-200/80 hover:border-[#2563EB]/40 transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)] bg-white"
              >
                <div className="w-full h-64 sm:h-72 overflow-hidden relative bg-neutral-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-[#0B0E14] shadow-xs">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center shadow-lg">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>

                <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-1.5">
                      {project.client}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0B0E14] tracking-tight mb-2 group-hover:text-[#2563EB] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Callout Button */}
        <div className="mt-14 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm shadow-[0_8px_25px_rgba(37,99,235,0.3)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.4)] transition-all cursor-pointer"
          >
            <span>Explore All Projects</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
