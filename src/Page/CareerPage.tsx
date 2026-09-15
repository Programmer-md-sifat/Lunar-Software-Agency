import React, { useState } from "react";
import { jobOpenings, JobOpening } from "../Data/company";
import { JobCard } from "../Component/Career/JobCard";
import { ApplyModal } from "../Component/Career/ApplyModal";
import { HeartHandshake, Laptop, Compass, Award, Sparkles } from "lucide-react";

export const CareerPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  const perks = [
    {
      icon: Laptop,
      title: "Remote-First Culture",
      desc: "Work from anywhere in the world with flexible hours and dedicated home office allowances.",
    },
    {
      icon: Compass,
      title: "Engineering Autonomy",
      desc: "Architect systems using modern tools. We trust our engineers with ownership and continuous deployment.",
    },
    {
      icon: HeartHandshake,
      title: "Health & Well-being",
      desc: "Comprehensive health, dental, and wellness stipends, plus generous paid parental and sabbatical leave.",
    },
    {
      icon: Award,
      title: "Continuous Mastery",
      desc: "$3,000 annual learning budget for conferences, advanced certifications, and technical research.",
    },
  ];

  return (
    <div className="w-full pb-20">
      {/* Header */}
      <section className="pt-6 sm:pt-12 pb-16 relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#EDE9FE]/60 blur-[120px] pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0EDFF] text-[#5B4DFC] text-xs font-semibold mb-4 border border-[#E2DCFF]">
            <Sparkles size={14} />
            <span>Join SoftLunar</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B0E14] tracking-tight mb-6 leading-tight">
            Build critical software with high-craft engineers
          </h1>
          <p className="text-neutral-500 text-lg leading-relaxed max-w-2xl mx-auto">
            We are looking for exceptional builders who care deeply about code quality, distributed performance, and pristine user interfaces.
          </p>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="bg-white p-7 rounded-3xl border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F0EDFF] text-[#5B4DFC] flex items-center justify-center mb-5">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#0B0E14] mb-2">{p.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-[#0B0E14] tracking-tight mb-2">
            Open Positions ({jobOpenings.length})
          </h2>
          <p className="text-neutral-500 text-sm">
            All positions are open to global remote candidates with overlapping core hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobOpenings.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onApply={(j) => setSelectedJob(j)}
            />
          ))}
        </div>
      </section>

      {/* Apply Modal */}
      <ApplyModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
      />
    </div>
  );
};
