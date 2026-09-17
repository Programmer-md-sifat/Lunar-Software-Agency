import React from "react";
import { HeroSection } from "../Component/Home/HeroSection";
import { BrandLogos } from "../Component/Home/BrandLogos";
import { SmartWorkSection } from "../Component/Home/SmartWorkSection";
import { ServicesOverview } from "../Component/Home/ServicesOverview";
import { ProjectShowcase } from "../Component/Home/ProjectShowcase";
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

      {/* Services Overview: 6 Cards in 2 Rows with Custom Background */}
      <ServicesOverview />

      {/* Our Projects / Case Studies Showcase */}
      <ProjectShowcase />

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
