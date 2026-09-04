import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import EvoModelShowcase from '@/components/EvoModelShowcase';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import LaduProcessTimeline from '@/components/LaduProcessTimeline';
import FourWaysStepIn from '@/components/FourWaysStepIn';
import WhyChooseUs from '@/components/WhyChooseUs';
import FaqSection from '@/components/FaqSection';
import PropertyAssessmentTool from '@/components/PropertyAssessmentTool';

export const metadata: Metadata = {
  title: "ADU Builders in Orange County | Turnkey Design-Build Contractor | ADU Alliance",
  description: "Premier ADU builder in Orange County, CA. Custom detached backyard homes, garage conversions, and junior ADUs. 100% guaranteed city permits & fixed-price contracts from $149,000. Call (657) 298-4061.",
  alternates: {
    canonical: 'https://adualliance.com/',
  },
  openGraph: {
    title: "ADU Builders in Orange County | ADU Alliance",
    description: "Turnkey ADU design, permitting, and construction across Orange County, CA.",
    url: 'https://adualliance.com/',
    siteName: 'ADU Alliance',
    images: [
      {
        url: 'https://www.evoadu.com/assets/images/Home_Pic_1_Hero_Home.jpg',
        width: 1200,
        height: 630,
        alt: 'Modern ADU in Orange County Backyard',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

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
