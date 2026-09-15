import React from "react";
import { ServiceItem } from "../../Data/services";
import { Code2, Smartphone, ShoppingBag, Layers, Check, ArrowRight } from "lucide-react";
import { PillButton } from "../Common/PillButton";

interface ServiceCardProps {
  service: ServiceItem;
  onInquire: (service: ServiceItem) => void;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onInquire, index }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 size={28} className="text-[#5B4DFC]" />;
      case "Smartphone":
        return <Smartphone size={28} className="text-[#5B4DFC]" />;
      case "ShoppingBag":
        return <ShoppingBag size={28} className="text-[#5B4DFC]" />;
      case "Layers":
        return <Layers size={28} className="text-[#5B4DFC]" />;
      default:
        return <Code2 size={28} className="text-[#5B4DFC]" />;
    }
  };

  const isEven = index % 2 === 1;

  return (
    <div
      id={`service-${service.id}`}
      className={`p-8 sm:p-12 rounded-3xl border border-neutral-200/80 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 ${
        isEven ? "lg:translate-y-4" : ""
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#F0EDFF] flex items-center justify-center shrink-0">
            {getIcon(service.icon)}
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#5B4DFC]">
              {service.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0B0E14] tracking-tight">
              {service.title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {service.metrics.map((m, i) => (
            <div key={i} className="px-4 py-2 bg-[#FAFAFE] rounded-2xl border border-neutral-200/70">
              <div className="text-lg font-extrabold text-[#0B0E14]">{m.value}</div>
              <div className="text-[11px] text-neutral-500 font-medium">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-neutral-600 text-base leading-relaxed mb-8 max-w-3xl">
        {service.fullDescription}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-neutral-100">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
            Key Architectural Deliverables
          </h4>
          <ul className="space-y-3">
            {service.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                <div className="w-5 h-5 rounded-full bg-[#5B4DFC]/15 flex items-center justify-center text-[#5B4DFC] shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
              Core Technologies
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-neutral-50 text-neutral-800 text-xs font-semibold rounded-lg border border-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => onInquire(service)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#5B4DFC] hover:text-[#4d3fe8] group cursor-pointer"
            >
              <span>Initiate Discovery for {service.title}</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
