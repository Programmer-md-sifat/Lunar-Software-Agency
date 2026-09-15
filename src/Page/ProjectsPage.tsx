import React, { useState } from "react";
import { projectsData, ProjectItem } from "../Data/projects";
import { ProjectCard } from "../Component/Projects/ProjectCard";
import { PillButton } from "../Component/Common/PillButton";
import { X, ExternalLink, Check, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ["All", "Custom Software", "Mobile App", "E-commerce", "ERP CMS"];

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full pb-20">
      {/* Header */}
      <section className="pt-6 sm:pt-12 pb-14 relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#EDE9FE]/60 blur-[120px] pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0EDFF] text-[#5B4DFC] text-xs font-semibold mb-4 border border-[#E2DCFF]">
            <Sparkles size={14} />
            <span>Proven Enterprise Impact</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B0E14] tracking-tight mb-6 leading-tight">
            Engineered deployments that create measurable advantage
          </h1>
          <p className="text-neutral-500 text-lg leading-relaxed max-w-2xl mx-auto">
            Explore our featured software systems, mobile applications, e-commerce architectures, and ERP/CMS implementations.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#0B0E14] text-white shadow-sm scale-105"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden relative shadow-2xl my-8 border border-neutral-100"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-20 p-2 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-neutral-600 hover:text-black shadow-md transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="h-64 sm:h-80 w-full relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#5B4DFC] text-white inline-block mb-2">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="text-neutral-300 text-xs font-medium mt-1">
                    Client: {selectedProject.client}
                  </p>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Project Overview
                  </h4>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4 bg-[#FAFAFE] rounded-2xl border border-neutral-200/70 mb-6">
                  <div>
                    <div className="text-xs uppercase font-bold text-neutral-400">Primary Impact</div>
                    <div className="text-2xl font-extrabold text-[#5B4DFC] mt-0.5">
                      {selectedProject.stats.value}
                    </div>
                    <div className="text-xs text-neutral-500 font-medium">
                      {selectedProject.stats.label}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-neutral-400">Architecture</div>
                    <div className="text-sm font-bold text-[#0B0E14] mt-1">
                      Cloud-Native Distributed
                    </div>
                    <div className="text-xs text-neutral-500 font-medium">
                      Production Verified
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Engineered Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs font-semibold rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <PillButton
                    to="/contact"
                    text="Request Similar Architecture"
                    variant="dark"
                    size="sm"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-xs font-semibold text-neutral-500 hover:text-neutral-800"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
