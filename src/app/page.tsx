import React from 'react';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import EvoModelShowcase from '@/components/EvoModelShowcase';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import LaduProcessTimeline from '@/components/LaduProcessTimeline';
import FourWaysStepIn from '@/components/FourWaysStepIn';
import WhyChooseUs from '@/components/WhyChooseUs';
import FaqSection from '@/components/FaqSection';
import PropertyAssessmentTool from '@/components/PropertyAssessmentTool';

export default function HomePage() {
  return (
    <div className="bg-brand-canvas text-brand-main min-h-screen">
      {/* 1. Authority Hero (ADU Build LA + EVO) */}
      <Hero />

      {/* 2. Core Design-Build Services (ADU Build LA Base Structure) */}
      <ServicesSection />

      {/* 3. Visual Models & Living Experience (EVO Visual Polish) */}
      <EvoModelShowcase />

      {/* 4. Real Before & After Case Studies (ADU Build LA Proof) */}
      <BeforeAfterSlider />

      {/* 5. Process Transparency & Timeline (LADU Roadmap) */}
      <LaduProcessTimeline />

      {/* 6. Lead Magnets & Entry Pathways (ADU Resource Center) */}
      <FourWaysStepIn />

      {/* 7. 6 Trust Pillars (ADU Build LA) */}
      <WhyChooseUs />

      {/* 8. Common Questions (Search-Optimized FAQ) */}
      <FaqSection />

      {/* 9. Instant Property Assessment Wizard */}
      <PropertyAssessmentTool />
    </div>
  );
}
