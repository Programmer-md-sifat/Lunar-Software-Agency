import React from "react";
import { HeroSection } from "../Component/Home/HeroSection";
import { BrandLogos } from "../Component/Home/BrandLogos";
import { SmartWorkSection } from "../Component/Home/SmartWorkSection";
import { DataMetricsSection } from "../Component/Home/DataMetricsSection";
import { StrategySection } from "../Component/Home/StrategySection";
import { FAQSection } from "../Component/Home/FAQSection";
import { WhyChooseUs } from "../Component/Home/WhyChooseUs";
import { CTASection } from "../Component/Home/CTASection";

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Exact Hero Section */}
      <HeroSection />

      {/* Brand Logos Strip matching screenshot */}
      <BrandLogos />

      {/* Working Smarter Section matching uploaded screenshot */}
      <SmartWorkSection />

      {/* Driving Success With Data Metrics Section */}
      <DataMetricsSection />

      {/* Our Strategy Section matching uploaded screenshot */}
      <StrategySection />

      {/* Frequently Asked Questions Section */}
      <FAQSection />

      {/* Why Choose Us: 60% less time & architectural performance */}
      <WhyChooseUs />

      {/* Bottom CTA */}
      <CTASection />
    </div>
  );
};
