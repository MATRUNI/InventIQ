import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustTicker } from "@/components/sections/trust-ticker";
import { BentoGrid } from "@/components/sections/bento-grid";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { RoiCalculator } from "@/components/sections/roi-calculator";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "InventIQ | Enterprise Cloud Architecture & Sovereign AI Systems",
  description:
    "InventIQ engineers resilient multi-cloud architectures, real-time streaming lakehouses, and sovereign GenAI agent pipelines with sub-second speeds and 99.999% SLAs.",
  keywords: [
    "Enterprise AI",
    "Cloud Architecture",
    "Generative AI RAG",
    "Kubernetes Mesh",
    "eBPF Networking",
    "Streaming Lakehouse",
    "FinOps Cloud Savings",
    "InventIQ",
  ],
  openGraph: {
    title: "InventIQ | Enterprise Cloud Architecture & Sovereign AI Systems",
    description:
      "Deploy sovereign GenAI pipelines, ultra-low latency microservice meshes, and real-time streaming lakehouses.",
    type: "website",
    locale: "en_US",
    siteName: "InventIQ",
  },
  twitter: {
    card: "summary_large_image",
    title: "InventIQ | Enterprise Cloud & Sovereign AI",
    description:
      "Enterprise cloud architecture, sovereign GenAI systems, and real-time streaming lakehouses.",
  },
};

export default function Home() {
  // Structured Data (JSON-LD) for Search Engines
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "InventIQ",
    url: "https://inventiq.tech",
    description:
      "Enterprise Cloud Architecture, Sovereign Generative AI, and Real-Time Streaming Systems.",
    knowsAbout: [
      "Artificial Intelligence",
      "Cloud Architecture",
      "Kubernetes",
      "eBPF Networking",
      "High Throughput Data Engineering",
      "Micro-Frontends",
    ],
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "InventIQ Platform Mesh",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Cloud, Kubernetes, Linux",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-[#F9FAFB] flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Search Engine Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />

      {/* Sticky Global Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <TrustTicker />
        <BentoGrid />
        <SolutionsSection />
        <CaseStudiesSection />
        <RoiCalculator />
        <TechStackSection />
        <TestimonialsSection />
        <CtaBanner />
        <ContactSection />
      </main>

      {/* Enterprise Global Footer */}
      <Footer />
    </div>
  );
}
