import React from "react";
import { PillButton } from "../Component/Common/PillButton";
import { Check, ShieldCheck, Terminal, Heart, Sparkles, Globe } from "lucide-react";

export const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Terminal,
      title: "Clean Code & Zero Tech Debt",
      desc: "Every line of code is written with rigorous typing, modular isolation, and thorough unit tests to guarantee long-term maintainability.",
    },
    {
      icon: ShieldCheck,
      title: "Architectural Resilience",
      desc: "We build systems designed to gracefully handle network partitions, traffic spikes, and real-world failure states.",
    },
    {
      icon: Globe,
      title: "Global Collaboration",
      desc: "Distributed senior engineering squads working asynchronously across time zones with radical transparency.",
    },
    {
      icon: Heart,
      title: "Obsessive Product Craft",
      desc: "We refuse generic templates. Every animation curve, typography pairing, and database index is deliberately calibrated.",
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
            <span>Our Origin & Philosophy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B0E14] tracking-tight mb-6 leading-tight">
            We exist to engineer software that elevates enterprise standards
          </h1>
          <p className="text-neutral-500 text-lg leading-relaxed max-w-2xl mx-auto">
            SoftLunar was founded by senior systems architects who were tired of bloated consultancies and fragile outsourced codebases.
          </p>
        </div>
      </section>

      {/* Story Narrative & Visual */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-2xl relative h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80"
              alt="SoftLunar engineering workspace"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs uppercase font-bold tracking-wider text-[#A59DFE]">
                High Craft Culture
              </span>
              <h3 className="text-xl font-bold mt-1">
                Engineers building for engineers and high-growth enterprises
              </h3>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-extrabold text-[#0B0E14] tracking-tight">
              A modern software studio built on precision and velocity
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed">
              At SoftLunar, we don’t believe in massive bloated teams. Instead, we pair clients directly with elite senior front-end, mobile, backend, and cloud architects who have built and scaled systems handling millions of users.
            </p>
            <p className="text-neutral-600 text-base leading-relaxed">
              Whether building an enterprise multi-tenant ERP platform, an ultra-fast headless e-commerce experience, or a viral consumer mobile app, our codebases are delivered clean, modular, and ready to evolve with your business.
            </p>
            <div className="pt-2">
              <PillButton to="/contact" text="Work With Our Team" size="default" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Values */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-extrabold text-[#0B0E14] tracking-tight mb-3">
            Our Core Principles
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base">
            Guiding every pull request, technical RFC, and system architecture design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F0EDFF] text-[#5B4DFC] flex items-center justify-center mb-5">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#0B0E14] mb-2">{v.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
