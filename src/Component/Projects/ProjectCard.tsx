import React from "react";
import { ProjectItem } from "../../Data/projects";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

interface ProjectCardProps {
  project: ProjectItem;
  onSelect?: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const handleClick = () => {
    // Open project in a new tab as requested
    window.open(project.liveUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      onClick={handleClick}
      className="bg-[#F5F5F8] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 border border-neutral-200/60 hover:border-neutral-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between cursor-pointer group"
    >
      {/* Top Header & Tag Chips matching screenshot */}
      <div className="mb-6">
        <div className="flex items-center justify-between gap-2 mb-3">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B0E14] tracking-tight group-hover:text-[#6952FF] transition-colors">
            {project.title}
          </h3>
          <div className="w-9 h-9 rounded-full bg-white text-neutral-400 group-hover:bg-[#6952FF] group-hover:text-white flex items-center justify-center transition-all shadow-2xs">
            <ArrowUpRight size={18} />
          </div>
        </div>

        {/* Small White Pill Chips */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3.5 py-1 rounded-full bg-white text-neutral-600 text-xs font-semibold border border-neutral-200/80 shadow-2xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Main Image Container */}
      <div className="relative w-full h-[260px] sm:h-[320px] rounded-[20px] sm:rounded-[24px] overflow-hidden bg-neutral-900">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Subtle hover gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};
