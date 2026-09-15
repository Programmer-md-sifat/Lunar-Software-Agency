import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle2, Sparkles, Send } from "lucide-react";
import { PillButton } from "../Component/Common/PillButton";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "Custom Software Development",
    budget: "$25,000 - $50,000",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full pb-20">
      {/* Header */}
      <section className="pt-6 sm:pt-12 pb-16 relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#EDE9FE]/60 blur-[120px] pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0EDFF] text-[#5B4DFC] text-xs font-semibold mb-4 border border-[#E2DCFF]">
            <Sparkles size={14} />
            <span>Direct Engineering Consultation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B0E14] tracking-tight mb-6 leading-tight">
            Let's build your next breakthrough software system
          </h1>
          <p className="text-neutral-500 text-lg leading-relaxed max-w-2xl mx-auto">
            Speak directly with a Senior Solutions Architect. We respond within 24 hours with an actionable technical plan and timeline.
          </p>
        </div>
      </section>

      {/* Main Grid: Form & Info */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-[0_15px_45px_rgba(0,0,0,0.03)]">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B0E14] mb-3">
                  Discovery Request Received!
                </h3>
                <p className="text-neutral-500 text-base max-w-md mx-auto mb-8">
                  Thank you, <strong>{formData.fullName}</strong>. A Senior Systems Architect has been assigned to your brief and will contact you at <strong>{formData.email}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold hover:bg-neutral-200 cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm focus:outline-none focus:border-[#5B4DFC] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-2">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@enterprise.com"
                      className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm focus:outline-none focus:border-[#5B4DFC] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Vanguard Tech Ltd."
                      className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm focus:outline-none focus:border-[#5B4DFC] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-2">
                      Target Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm focus:outline-none focus:border-[#5B4DFC] bg-white transition-colors"
                    >
                      <option>Custom Software Development</option>
                      <option>Mobile App Development</option>
                      <option>E-commerce Solution</option>
                      <option>ERP CMS Solution</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-2">
                    Estimated Budget Range
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {["$15k - $25k", "$25k - $50k", "$50k - $100k", "$100k+"].map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`py-2.5 px-3 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                          formData.budget === b
                            ? "bg-[#5B4DFC] text-white border-[#5B4DFC]"
                            : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-2">
                    Project Goals & Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the problem you're solving, target users, timeline expectations, or existing technical architecture..."
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm focus:outline-none focus:border-[#5B4DFC] resize-none transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#0B0E14] text-white text-sm font-bold hover:bg-neutral-800 transition-colors shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Request Discovery Consultation</span>
                    <Send size={15} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-[11px] text-neutral-400 text-center mt-3">
                    Strict NDA protection. We never share your data or contact info.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact info & office cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAFAFE] p-8 rounded-3xl border border-neutral-200/80">
              <h3 className="text-xl font-bold text-[#0B0E14] mb-6">
                Direct Communication Channels
              </h3>
              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#F0EDFF] text-[#5B4DFC] flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      Engineering Inquiries
                    </div>
                    <a
                      href="mailto:contact@softlunar.dev"
                      className="text-[#0B0E14] font-semibold hover:text-[#5B4DFC] transition-colors"
                    >
                      contact@softlunar.dev
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#F0EDFF] text-[#5B4DFC] flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      Direct Line
                    </div>
                    <a
                      href="tel:+14158902341"
                      className="text-[#0B0E14] font-semibold hover:text-[#5B4DFC] transition-colors"
                    >
                      +1 (415) 890-2341
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#F0EDFF] text-[#5B4DFC] flex items-center justify-center shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      SLA Response Speed
                    </div>
                    <p className="text-neutral-700 font-medium">
                      Under 24 hours guaranteed for technical discovery
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs">
              <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-4">
                Global Engineering Hubs
              </h4>
              <div className="space-y-4 text-sm text-neutral-600">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#5B4DFC] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0B0E14] block">San Francisco HQ</strong>
                    <span>550 Howard Street, Suite 400, San Francisco, CA 94105</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 pt-3 border-t border-neutral-100">
                  <MapPin size={18} className="text-[#5B4DFC] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0B0E14] block">London Design & Cloud Lab</strong>
                    <span>25 Bank Street, Canary Wharf, London E14 5JP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
