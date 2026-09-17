import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../../Data/services";
import { Code2, Smartphone, ShoppingBag, Layers, Palette, Cloud, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export const ServicesOverview: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 size={24} className="text-[#2563EB]" />;
      case "Smartphone":
        return <Smartphone size={24} className="text-[#2563EB]" />;
      case "ShoppingBag":
        return <ShoppingBag size={24} className="text-[#2563EB]" />;
      case "Layers":
        return <Layers size={24} className="text-[#2563EB]" />;
      case "Palette":
        return <Palette size={24} className="text-[#2563EB]" />;
      case "Cloud":
        return <Cloud size={24} className="text-[#2563EB]" />;
      default:
        return <Code2 size={24} className="text-[#2563EB]" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#F3F0FF] via-[#F8FAFC] to-[#EFF6FF] border-y border-[#E2DCFF]/80 relative overflow-hidden">
      {/* Subtle background ambient blur spots */}
      <div className="absolute top-10 left-1/4 w-[450px] h-[450px] rounded-full bg-[#E2DCFF]/50 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] rounded-full bg-[#DBEAFE]/50 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0EDFF] text-[#2563EB] text-xs font-semibold mb-3 border border-[#E2DCFF] shadow-2xs">
              <Sparkles size={14} />
              <span>Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B0E14] tracking-tight leading-tight">
              Software solutions for <br className="hidden sm:block" />
              growing businesses
            </h2>
          </div>
          <p className="text-neutral-500 max-w-md text-base leading-relaxed">
            We provide end-to-end software development, design, and cloud services to help your company succeed.
          </p>
        </div>

        {/* 6 Services Grid: 2 Rows x 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-[28px] sm:rounded-[32px] bg-white border border-neutral-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)] hover:border-[#2563EB]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Row: Icon + Badge + Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#F0EDFF] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300 shadow-2xs">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-extrabold text-neutral-300 group-hover:text-[#2563EB] transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600 mb-3 border border-neutral-200/60">
                  {service.badge}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#0B0E14] tracking-tight mb-3 group-hover:text-[#2563EB] transition-colors">
                  {service.title}
                </h3>

                <p className="text-neutral-500 text-sm sm:text-[15px] leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
              </div>

              {/* Bottom Action Row */}
              <Link
                to="/service"
                className="pt-4 border-t border-neutral-100 flex items-center justify-between text-sm font-bold text-[#0B0E14] group/link"
              >
                <span className="group-hover/link:text-[#2563EB] transition-colors">Learn more</span>
                <span className="w-8 h-8 rounded-full bg-neutral-100 group-hover/link:bg-[#2563EB] group-hover/link:text-white flex items-center justify-center transition-all duration-300 shadow-2xs">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
