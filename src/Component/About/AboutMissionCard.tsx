import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export const AboutMissionCard: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
        {/* Left Column: Heading & Mission Copy */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 space-y-5"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0B0E14] tracking-[-0.025em] leading-[1.18]">
            We started with a single mission: Help startups grow
          </h2>

          <p className="text-neutral-500 text-base sm:text-lg leading-relaxed max-w-xl">
            Our mission is to build reliable, high-quality software that empowers growing teams. We simplify tech challenges so your business can innovate and succeed with confidence.
          </p>
        </motion.div>

        {/* Right Column: Offset Stacked Card with Image & Purple Action Banner */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-6 relative flex justify-center lg:justify-end"
        >
          {/* Card Wrapper with offset frame behind */}
          <div className="relative w-full max-w-[500px]">
            {/* Offset Background Frame matching screenshot */}
            <div className="absolute inset-0 translate-x-3 -translate-y-3 sm:translate-x-4 sm:-translate-y-4 rounded-[28px] sm:rounded-[32px] border-2 border-neutral-900 pointer-events-none -z-10 bg-transparent" />

            {/* Main Purple Card */}
            <div className="bg-[#6952FF] rounded-[26px] sm:rounded-[30px] p-3 sm:p-4 shadow-[0_20px_50px_rgba(105,82,255,0.25)] flex flex-col group">
              {/* Image Container */}
              <div className="relative w-full h-[260px] sm:h-[320px] rounded-[20px] sm:rounded-[24px] overflow-hidden bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1200&q=85"
                  alt="Team members joining hands in partnership and unity"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Bottom Purple Banner Button */}
              <Link
                to="/services"
                className="w-full py-4 text-center flex items-center justify-center gap-2 text-white font-bold text-base sm:text-lg hover:underline transition-all cursor-pointer"
              >
                <span>See Our Services</span>
                <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
