import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../../Data/navigation";
import { PillButton } from "./PillButton";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] py-3.5"
          : "bg-white/85 backdrop-blur-md border-neutral-200/60 shadow-xs py-4 lg:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo matching image.png */}
        <Link
          to="/"
          id="brand-logo-link"
          className="flex items-center gap-1 text-2xl font-bold tracking-tight text-[#0B0E14] group"
        >
          <span className="font-extrabold tracking-tight">LE</span>
          <span className="font-semibold text-neutral-800">Soft</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#5B4DFC] ml-0.5 group-hover:scale-125 transition-transform" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          id="desktop-nav-links"
          className="hidden md:flex items-center space-x-8 lg:space-x-10"
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.title}
                to={item.href}
                id={`nav-link-${item.title.toLowerCase()}`}
                className={`text-[15px] font-medium transition-colors duration-200 relative py-1 ${
                  isActive
                    ? "text-[#0B0E14] font-semibold"
                    : "text-neutral-600 hover:text-[#0B0E14]"
                }`}
              >
                {item.title}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0B0E14] rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Pill Button matching image.png */}
        <div className="hidden md:flex items-center">
          <PillButton to="/contact" text="Contact Us" size="default" />
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <PillButton to="/contact" text="Contact" size="sm" />
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-neutral-800 hover:bg-neutral-100 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-neutral-100 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.title}
                    to={item.href}
                    className={`block py-2 text-base font-medium transition-colors ${
                      isActive
                        ? "text-[#5B4DFC] font-semibold"
                        : "text-neutral-700 hover:text-neutral-900"
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-neutral-100">
                <PillButton
                  to="/contact"
                  text="Contact Us"
                  className="w-full justify-between"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
