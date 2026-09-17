import React, { useState } from "react";
import { ChevronDown, Send, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Heading & Subtitle matching screenshot */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-[58px] font-black text-[#0B0E14] tracking-[-0.03em] leading-[1.1]">
            Have a project? <br />
            Let’s talk
          </h2>
          <p className="text-neutral-500 text-base sm:text-lg leading-relaxed max-w-md">
            If you have any questions or need assistance, the LESoft team is always ready to help.
          </p>
        </motion.div>

        {/* Right Column: Contact Form Card matching screenshot */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="bg-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 border border-neutral-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-[#0B0E14]">
                  Message Sent Successfully!
                </h3>
                <p className="text-neutral-500 text-sm max-w-xs mx-auto">
                  Thank you for reaching out to LESoft. Our team will review your message and reply within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold cursor-pointer transition-colors mt-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1: Name & Email inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <input
                    type="text"
                    required
                    placeholder="Write your name here"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 rounded-full border border-neutral-200 text-sm text-[#0B0E14] placeholder:text-neutral-400 focus:outline-none focus:border-[#2563EB] transition-colors bg-white shadow-2xs"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 rounded-full border border-neutral-200 text-sm text-[#0B0E14] placeholder:text-neutral-400 focus:outline-none focus:border-[#2563EB] transition-colors bg-white shadow-2xs"
                  />
                </div>

                {/* Row 2: Service & Budget Select Dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="relative">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-6 py-4 rounded-full border border-neutral-200 text-sm text-[#0B0E14] focus:outline-none focus:border-[#2563EB] transition-colors bg-white appearance-none cursor-pointer shadow-2xs invalid:text-neutral-400"
                    >
                      <option value="" disabled hidden>
                        What you need
                      </option>
                      <option value="Custom Software">Custom Software Development</option>
                      <option value="Mobile App">Mobile App Development</option>
                      <option value="E-commerce">E-commerce Architecture</option>
                      <option value="ERP CMS">ERP & CMS Solutions</option>
                    </select>
                    <ChevronDown
                      size={18}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
                    />
                  </div>

                  <div className="relative">
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-6 py-4 rounded-full border border-neutral-200 text-sm text-[#0B0E14] focus:outline-none focus:border-[#2563EB] transition-colors bg-white appearance-none cursor-pointer shadow-2xs invalid:text-neutral-400"
                    >
                      <option value="" disabled hidden>
                        Your Budget
                      </option>
                      <option value="$10k-$25k">$10,000 - $25,000</option>
                      <option value="$25k-$50k">$25,000 - $50,000</option>
                      <option value="$50k-$100k">$50,000 - $100,000</option>
                      <option value="$100k+">$100,000+</option>
                    </select>
                    <ChevronDown
                      size={18}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
                    />
                  </div>
                </div>

                {/* Row 3: Message Textarea */}
                <div>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us about your products & goals"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-6 rounded-[24px] border border-neutral-200 text-sm text-[#0B0E14] placeholder:text-neutral-400 focus:outline-none focus:border-[#2563EB] transition-colors bg-white resize-none shadow-2xs"
                  />
                </div>

                {/* Bottom Action Row: Blue Pill Button + Email */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm shadow-[0_8px_25px_rgba(37,99,235,0.35)] transition-all cursor-pointer"
                  >
                    Send message
                  </motion.button>

                  <a
                    href="mailto:hello@lunarsoft.com"
                    className="text-sm font-semibold text-[#0B0E14] hover:text-[#2563EB] transition-colors"
                  >
                    hello@lunarsoft.com
                  </a>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
