import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CASE_STUDIES_DATA } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Building2,
  Clock,
  CheckCircle2,
  Quote,
  Shield,
  Layers,
  ArrowRight,
} from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES_DATA.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES_DATA.find((s) => s.slug === slug);
  if (!study) return { title: "Case Study Not Found - InventIQ" };

  return {
    title: `${study.title} | InventIQ Case Study`,
    description: study.summary,
    openGraph: {
      title: `${study.title} | InventIQ`,
      description: study.summary,
      type: "article",
    },
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES_DATA.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  // Schema.org Article JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: study.title,
    description: study.summary,
    author: {
      "@type": "Organization",
      name: "InventIQ Enterprise Engineering",
    },
    publisher: {
      "@type": "Organization",
      name: "InventIQ",
    },
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-white flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Link
              href="/#case-studies"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all Case Studies</span>
            </Link>
          </div>

          {/* Article Header */}
          <div className="space-y-4 border-b border-slate-800 pb-10">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="emerald" dot>
                {study.industry}
              </Badge>
              <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                {study.readTime}
              </span>
              <span className="flex items-center gap-1 text-xs font-mono text-indigo-400">
                <Building2 className="w-3.5 h-3.5" />
                {study.client}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
              {study.title}
            </h1>

            <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
              {study.summary}
            </p>
          </div>

          {/* Quantified Impact Metric Highlights */}
          <div className="my-10">
            <h2 className="text-sm font-mono uppercase tracking-wider text-emerald-400 mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Verified Production Benchmarks
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {study.results.map((res, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-gradient-to-b from-[#111827] to-[#0D1424] border border-slate-800 p-5 shadow-lg"
                >
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400">
                    {res.metric}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Content: Challenge vs Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="rounded-2xl bg-[#0D121F] border border-rose-900/30 p-6 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-rose-400">
                The Core Challenge & Constraints
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {study.challenge}
              </p>
            </div>

            <div className="rounded-2xl bg-[#0D121F] border border-indigo-900/30 p-6 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-400">
                The InventIQ Engineering Solution
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {study.solution}
              </p>
            </div>
          </div>

          {/* Architectural Breakthrough Highlights */}
          <div className="my-12 rounded-2xl bg-[#0F172A]/70 border border-slate-800 p-8 space-y-6">
            <div className="flex items-center gap-2.5">
              <Layers className="w-5 h-5 text-indigo-400" />
              <h3 className="text-lg font-bold text-white">
                Key Technical Architectural Decisions
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {study.architectureHighlights.map((arch, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 leading-relaxed">{arch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Testimonial */}
          {study.testimonial && (
            <div className="my-12 p-8 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/30 relative">
              <Quote className="w-8 h-8 text-indigo-400/40 mb-3" />
              <p className="text-base sm:text-lg text-slate-200 italic leading-relaxed mb-4">
                &ldquo;{study.testimonial.quote}&rdquo;
              </p>
              <div>
                <div className="font-bold text-white text-sm">
                  {study.testimonial.author}
                </div>
                <div className="text-xs text-slate-400">
                  {study.testimonial.role}, {study.testimonial.company}
                </div>
              </div>
            </div>
          )}

          {/* Tech Stack Employed */}
          <div className="my-12">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Technologies & Infrastructure Deployed
            </h3>
            <div className="flex flex-wrap gap-2">
              {study.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-indigo-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom CTA Box */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-indigo-900/30 to-blue-900/30 border border-indigo-500/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">
                Ready to achieve similar breakthroughs?
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Book a confidential 45-minute architectural review with our principal engineers.
              </p>
            </div>
            <Link href="/#contact">
              <Button size="lg" variant="primary" className="whitespace-nowrap">
                <span>Schedule Architectural Review</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
