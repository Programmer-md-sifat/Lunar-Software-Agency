import React from "react";
import { ProjectItem } from "../../Data/projects";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4 }}
      className="group bg-white rounded-3xl overflow-hidden border border-neutral-200/80 hover:border-neutral-300 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
      onClick={() => onSelect(project)}
    >
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-100">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-md text-[#0B0E14] shadow-sm">
            {project.category}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-10 h-10 rounded-full bg-[#0B0E14] text-white flex items-center justify-center shadow-md">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>

      <div className="p-7 flex flex-col justify-between flex-1">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#5B4DFC] mb-1.5">
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

          <div className="text-right pl-4">
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
  );
};
