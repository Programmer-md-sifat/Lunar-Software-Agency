import React from "react";
import { PillButton } from "../Component/Common/PillButton";
import { AboutVideoStats } from "../Component/About/AboutVideoStats";
import { WhoWeAreStatement } from "../Component/About/WhoWeAreStatement";
import { AboutMissionCard } from "../Component/About/AboutMissionCard";
import { AboutPastelStats } from "../Component/About/AboutPastelStats";
import { AboutTeamSection } from "../Component/About/AboutTeamSection";
import { Check, ShieldCheck, Terminal, Heart, Sparkles, Globe } from "lucide-react";

export const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Terminal,
      title: "Clean & High-Quality Code",
      desc: "Every line of code is written carefully and tested thoroughly to make sure your software runs reliably for years.",
    },
    {
      icon: ShieldCheck,
      title: "Strong & Secure Systems",
      desc: "We build secure software designed to handle high traffic and stay online without crashes.",
    },
    {
      icon: Globe,
      title: "Friendly & Clear Communication",
      desc: "Our developer team works closely with you, providing simple updates and total transparency.",
    },
    {
      icon: Heart,
      title: "Care for Every Detail",
      desc: "We take pride in every design, animation, and button to make your website or app look and feel amazing.",
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
            <span>Our Story & Mission</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B0E14] tracking-tight mb-6 leading-tight">
            We build software that helps companies grow with ease
          </h1>
          <p className="text-neutral-500 text-lg leading-relaxed max-w-2xl mx-auto">
            LESoft was created by senior software engineers dedicated to delivering fast, easy-to-use digital products.
          </p>
        </div>
      </section>

      {/* Video & Company Metrics Showcase matching reference */}
      <AboutVideoStats />

      {/* High Impact "Who We Are" Statement */}
      <WhoWeAreStatement />

      {/* Mission & Offset Stacked Image Card matching uploaded design */}
      <AboutMissionCard />

      {/* 3 Pastel Atmospheric Stat Cards matching uploaded design */}
      <AboutPastelStats />

      {/* Team Showcase matching reference image */}
      <AboutTeamSection />

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
