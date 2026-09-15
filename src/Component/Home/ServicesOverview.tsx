import React, { useState } from "react";
import { Link } from "react-router-dom";
import { servicesData, ServiceItem } from "../../Data/services";
import { Code2, Smartphone, ShoppingBag, Layers, ArrowUpRight, Check } from "lucide-react";
import { motion } from "motion/react";

export const ServicesOverview: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem>(servicesData[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 size={24} className="text-[#5B4DFC]" />;
      case "Smartphone":
        return <Smartphone size={24} className="text-[#5B4DFC]" />;
      case "ShoppingBag":
        return <ShoppingBag size={24} className="text-[#5B4DFC]" />;
      case "Layers":
        return <Layers size={24} className="text-[#5B4DFC]" />;
      default:
        return <Code2 size={24} className="text-[#5B4DFC]" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAFAFE] border-t border-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0EDFF] text-[#5B4DFC] text-xs font-semibold mb-3">
              Specialized Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B0E14] tracking-tight">
              Engineering solutions for <br className="hidden sm:block" />
              modern businesses
            </h2>
          </div>
          <p className="text-neutral-500 max-w-md text-base leading-relaxed">
            We provide full-lifecycle engineering from architecture ideation to high-scale deployment across four core technological pillars.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const isSelected = selectedService.id === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedService(service)}
                className={`p-7 rounded-3xl transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                  isSelected
                    ? "bg-white shadow-[0_20px_45px_rgba(91,77,252,0.08)] border-[#5B4DFC]/30 ring-1 ring-[#5B4DFC]/20"
                    : "bg-white/70 hover:bg-white border-neutral-200/80 hover:border-neutral-300 shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#F0EDFF] flex items-center justify-center">
                      {getIcon(service.icon)}
                    </div>
                    <span className="text-xs font-semibold text-neutral-400">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-neutral-100 text-neutral-600 mb-3">
                    {service.badge}
                  </div>

                  <h3 className="text-xl font-bold text-[#0B0E14] tracking-tight mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-sm font-semibold text-[#0B0E14] group">
                    <span className="group-hover:text-[#5B4DFC] transition-colors">Learn more</span>
                    <span className="w-7 h-7 rounded-full bg-neutral-100 group-hover:bg-[#5B4DFC] group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Service Focus Showcase Banner */}
        <div className="mt-12 bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#5B4DFC]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5B4DFC]">
                  Deep Dive • {selectedService.title}
                </span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold text-[#0B0E14] mb-4">
                {selectedService.fullDescription}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {selectedService.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-neutral-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-[#5B4DFC]/15 flex items-center justify-center text-[#5B4DFC]">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
                Production Stack & Metrics
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedService.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white text-neutral-800 text-xs font-semibold rounded-lg border border-neutral-200 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-200/60">
                {selectedService.metrics.map((m, idx) => (
                  <div key={idx}>
                    <div className="text-2xl font-extrabold text-[#5B4DFC]">{m.value}</div>
                    <div className="text-xs text-neutral-500 font-medium">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  to="/service"
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-[#0B0E14] text-white text-xs font-medium hover:bg-neutral-800 transition-colors gap-2"
                >
                  Explore Complete Service Specs <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
