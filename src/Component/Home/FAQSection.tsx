import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs: FAQItem[] = [
    {
      question: "How fast can we start working on my project?",
      answer:
        "We usually start within 2 to 3 days after our first call. We set up your project tools, assign dedicated developers, and invite you to a private chat channel so you get daily updates.",
    },
    {
      question: "How does pricing work?",
      answer:
        "We offer two simple pricing options: Fixed Project Pricing for clear, step-by-step projects, and Monthly Dedicated Sprints if you need continuous development and updates.",
    },
    {
      question: "Who owns the code and design files?",
      answer:
        "You own 100% of everything we build. All code, designs, and files belong entirely to you from day one.",
    },
    {
      question: "What technologies do you build with?",
      answer:
        "We build with modern, trusted tools like React, TypeScript, Node.js, Python, PostgreSQL, React Native, Flutter, AWS, and Google Cloud. Everything is built to be fast and secure.",
    },
    {
      question: "How do you make sure the software is bug-free and fast?",
      answer:
        "Our team tests every feature on multiple phones and computers before publishing. We double-check performance and security so your users get a smooth experience.",
    },
    {
      question: "Do you offer support after the project is launched?",
      answer:
        "Yes! We provide ongoing support, security updates, server monitoring, and bug fixes to keep your website or app running smoothly 24/7.",
    },
    {
      question: "Can you fix or upgrade an existing website or app?",
      answer:
        "Yes, we can take over existing projects, clean up old code, fix bugs, and add new features without breaking your live system.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-neutral-100 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-[-5%] w-[450px] h-[450px] rounded-full bg-[#EDE9FE]/40 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Centered Top Heading Block matching user request */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0EDFF] text-[#5B4DFC] text-xs font-semibold mb-4 border border-[#E2DCFF]"
          >
            <HelpCircle size={14} className="text-[#5B4DFC]" />
            <span>Frequently Asked Questions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0B0E14] tracking-[-0.03em] leading-[1.15]"
          >
            Clear answers for confident decisions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-neutral-500 text-base mt-4 leading-relaxed max-w-2xl mx-auto"
          >
            Everything you need to know about how we work, pricing, code ownership, and support.
          </motion.p>
        </div>

        {/* Centered Accordion List */}
        <div className="max-w-3xl lg:max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-white border-[#5B4DFC]/40 shadow-[0_8px_30px_rgba(91,77,252,0.08)] ring-1 ring-[#5B4DFC]/20"
                    : "bg-[#FAFAFC] hover:bg-white border-neutral-200/80 hover:border-neutral-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-6 py-5 sm:px-7 sm:py-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                      isOpen ? "text-[#5B4DFC]" : "text-[#0B0E14]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#5B4DFC] text-white rotate-180 shadow-sm"
                        : "bg-white text-neutral-500 border border-neutral-200"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={16} strokeWidth={2.5} />
                    ) : (
                      <Plus size={16} strokeWidth={2.5} />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 border-t border-neutral-100/80">
                        <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
