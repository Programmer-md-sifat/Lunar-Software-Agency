import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../../Data/projects";
import { PillButton } from "../Common/PillButton";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export const ProjectShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Custom Software", "Mobile App", "E-commerce", "ERP CMS"];

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0EDFF] text-[#5B4DFC] text-xs font-semibold mb-3">
              Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B0E14] tracking-tight">
              Selected engineering <br className="hidden sm:block" />
              deployments
            </h2>
          </div>
          <PillButton to="/projects" text="View All Projects" size="default" />
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#0B0E14] text-white shadow-sm"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.slice(0, 4).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col rounded-3xl overflow-hidden border border-neutral-200/80 hover:border-neutral-300 transition-all duration-300 hover:shadow-xl bg-white"
            >
              <div className="w-full h-64 sm:h-72 overflow-hidden relative bg-neutral-100">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-[#0B0E14] shadow-sm">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-9 h-9 rounded-full bg-[#0B0E14] text-white flex items-center justify-center shadow-md">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              <div className="p-7 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#5B4DFC] mb-1">
                    {project.client}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B0E14] tracking-tight mb-2 group-hover:text-[#5B4DFC] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md bg-neutral-100 text-neutral-600 text-[11px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-right">
                    <div className="text-base font-extrabold text-[#0B0E14]">
                      {project.stats.value}
                    </div>
                    <div className="text-[10px] uppercase font-semibold text-neutral-400">
                      {project.stats.label}
                    </div>
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
