import React from "react";
import { ContactSection } from "../Component/Contact/ContactSection";
import { WhatToExpectSection } from "../Component/Contact/WhatToExpectSection";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full pb-20">
      {/* Contact Section matching reference image */}
      <ContactSection />

      {/* What to Expect Process Section matching uploaded reference */}
      <WhatToExpectSection />

      {/* Additional Communication Channels & Hubs */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-4 pt-12 border-t border-neutral-200/60">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#FAFAFE] p-8 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-2xs">
            <h3 className="text-xl font-bold text-[#0B0E14] mb-6">
              Direct Communication Channels
            </h3>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F0EDFF] text-[#2563EB] flex items-center justify-center shrink-0 font-bold">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Engineering Inquiries
                  </div>
                  <a
                    href="mailto:contact@lunarsoft.com"
                    className="text-[#0B0E14] font-semibold hover:text-[#2563EB] transition-colors text-base"
                  >
                    contact@lunarsoft.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F0EDFF] text-[#2563EB] flex items-center justify-center shrink-0 font-bold">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Direct Line
                  </div>
                  <a
                    href="tel:+14158902341"
                    className="text-[#0B0E14] font-semibold hover:text-[#2563EB] transition-colors text-base"
                  >
                    +1 (415) 890-2341
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F0EDFF] text-[#2563EB] flex items-center justify-center shrink-0 font-bold">
                  <Clock size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    SLA Response Speed
                  </div>
                  <p className="text-neutral-700 font-medium text-base">
                    Under 24 hours guaranteed for technical discovery
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-2xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-6">
              Global Engineering Hubs
            </h4>
            <div className="space-y-6 text-sm text-neutral-600">
              <div className="flex items-start gap-3.5">
                <MapPin size={20} className="text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0B0E14] text-base block">San Francisco HQ</strong>
                  <span className="text-neutral-500 leading-relaxed block mt-0.5">
                    550 Howard Street, Suite 400, San Francisco, CA 94105
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3.5 pt-6 border-t border-neutral-100">
                <MapPin size={20} className="text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0B0E14] text-base block">London Design & Cloud Lab</strong>
                  <span className="text-neutral-500 leading-relaxed block mt-0.5">
                    25 Bank Street, Canary Wharf, London E14 5JP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
