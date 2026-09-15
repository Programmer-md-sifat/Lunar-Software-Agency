import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PillButton } from "./PillButton";
import { Mail, ArrowRight, Github, Twitter, Linkedin, Check } from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer id="app-footer" className="bg-[#0B0E14] text-neutral-300 pt-20 pb-12 overflow-hidden relative">
      {/* Background ambient subtle glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#5B4DFC]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-neutral-800">
          {/* Brand & Mission column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-1 text-2xl font-bold tracking-tight text-white group">
              <span className="font-extrabold tracking-tight">Soft</span>
              <span className="font-semibold text-neutral-300">Lunar</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#5B4DFC] ml-0.5" />
            </Link>
            <p className="text-neutral-400 text-[15px] leading-relaxed max-w-sm">
              We design, engineer, and deploy high-performance custom software, mobile apps, e-commerce engines, and enterprise ERP systems that accelerate market leadership.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">Our Services</h3>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <Link to="/service" className="text-neutral-400 hover:text-white transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-neutral-400 hover:text-white transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-neutral-400 hover:text-white transition-colors">
                  E-Commerce Solutions
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-neutral-400 hover:text-white transition-colors">
                  ERP CMS Solutions
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-neutral-400 hover:text-white transition-colors">
                  Cloud Infrastructure & CI/CD
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">Company</h3>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-neutral-400 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5">
                  Careers
                  <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-[#5B4DFC]/30 text-[#9E95FF] rounded-full">
                    Hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">Stay Ahead</h3>
            <p className="text-neutral-400 text-[14px]">
              Get curated technical insights on software architecture and digital scaling.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#5B4DFC] transition-colors pr-10"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 bg-[#5B4DFC] hover:bg-[#4d3fe8] text-white rounded-lg transition-colors cursor-pointer"
                >
                  {subscribed ? <Check size={14} /> : <ArrowRight size={14} />}
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-emerald-400 font-medium">Thank you for subscribing!</p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} SoftLunar Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Operational
            </span>
            <Link to="/contact" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-neutral-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
