import React from "react";
import { JobOpening } from "../../Data/company";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";

interface JobCardProps {
  job: JobOpening;
  onApply: (job: JobOpening) => void;
}

export const JobCard: React.FC<JobCardProps> = ({ job, onApply }) => {
  return (
    <div className="p-7 sm:p-8 rounded-3xl bg-white border border-neutral-200/80 hover:border-neutral-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F0EDFF] text-[#5B4DFC]">
            {job.department}
          </span>
          <span className="text-xs text-neutral-400 font-medium">
            {job.experience} experience
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-[#0B0E14] tracking-tight mb-3">
          {job.title}
        </h3>

        <p className="text-neutral-500 text-sm leading-relaxed mb-6">
          {job.description}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-600 font-medium mb-6">
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-neutral-400" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="text-neutral-400" />
            <span>{job.type}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-8">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-md bg-neutral-100 text-neutral-600 text-[11px] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-neutral-100">
        <button
          onClick={() => onApply(job)}
          className="w-full py-3 px-4 rounded-full bg-[#0B0E14] text-white text-sm font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>Apply for this role</span>
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
