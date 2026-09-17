import React, { useState } from "react";
import { servicesData, ServiceItem } from "../Data/services";
import { ServiceCard } from "../Component/Service/ServiceCard";
import { StrategySection } from "../Component/Home/StrategySection";
import { TechStackSection } from "../Component/Service/TechStackSection";
import { Check, Cpu, Layers, Sparkles, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const ServicePage: React.FC = () => {
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<ServiceItem | null>(null);
  const [inquirySent, setInquirySent] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setSelectedServiceForInquiry(null);
    }, 2800);
  };

  return (
    <div className="w-full pb-20">
      {/* Page Header */}
      <section className="pt-6 sm:pt-12 pb-16 relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#EDE9FE]/60 blur-[120px] pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0EDFF] text-[#5B4DFC] text-xs font-semibold mb-4 border border-[#E2DCFF]">
            <Sparkles size={14} />
            <span>Our Core Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B0E14] tracking-tight mb-6 leading-tight">
            Software solutions built for your growing business
          </h1>
          <p className="text-neutral-500 text-lg leading-relaxed max-w-2xl mx-auto">
            From web applications and mobile apps to online stores and custom business tools, we build software that works for you.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            onInquire={(svc) => setSelectedServiceForInquiry(svc)}
          />
        ))}
      </section>

      {/* Our Strategy Section */}
      <div className="mt-16 sm:mt-24">
        <StrategySection />
      </div>

      {/* Technology Stack: What We Build With */}
      <div className="mt-16 sm:mt-24">
        <TechStackSection />
      </div>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {selectedServiceForInquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedServiceForInquiry(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-100 text-neutral-400"
              >
                <X size={20} />
              </button>

              {inquirySent ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <Check size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B0E14] mb-2">Request Sent!</h3>
                  <p className="text-neutral-500 text-sm">
                    Our team lead for <strong>{selectedServiceForInquiry.title}</strong> will review your message and reach out within 24 hours.
                  </p>
                </div>
              ) : (
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5B4DFC]">
                    Get In Touch
                  </span>
                  <h3 className="text-2xl font-bold text-[#0B0E14] mb-2">
                    Inquire about {selectedServiceForInquiry.title}
                  </h3>
                  <p className="text-neutral-500 text-sm mb-6">
                    Leave your contact details and a short description of what you need.
                  </p>

                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-[#5B4DFC]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Corporate Email *"
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-[#5B4DFC]"
                    />
                    <textarea
                      rows={3}
                      required
                      placeholder="Brief description of requirements or current stack..."
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-[#5B4DFC] resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full py-3 rounded-full bg-[#0B0E14] text-white text-sm font-semibold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send size={15} />
                      <span>Send Discovery Brief</span>
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
