"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CASE_STUDIES_DATA } from "@/lib/data";
import { CaseStudyItem } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import {
  ArrowRight,
  Building2,
  Clock,
  Eye,
  CheckCircle2,
  Quote,
} from "lucide-react";

export function CaseStudiesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");
  const [activePreview, setActivePreview] = useState<CaseStudyItem | null>(null);

  const industries = ["All", "FinTech", "HealthTech", "E-Commerce", "Logistics", "DevSecOps"];

  const filteredStudies =
    selectedIndustry === "All"
      ? CASE_STUDIES_DATA
      : CASE_STUDIES_DATA.filter((c) => c.industry === selectedIndustry);

  return (
    <section id="case-studies" className="py-24 relative overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <Badge variant="emerald" dot>
            Verified Enterprise Impact
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 dark:text-white">
            Case Studies &{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
              Client Breakthroughs
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Explore how the world's most demanding enterprises scale without downtime using InventIQ architecture.
          </p>
        </div>

        {/* Industry Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setSelectedIndustry(ind)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer border whitespace-nowrap ${
                selectedIndustry === ind
                  ? "bg-emerald-50 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-500/40 shadow-sm"
                  : "bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.slug}
              className="rounded-2xl bg-white dark:bg-gradient-to-b dark:from-[#111827] dark:to-[#0A0E18] border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:border-emerald-400 dark:hover:border-emerald-500/40 transition-all duration-300 shadow-md dark:shadow-xl group"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <Badge variant="emerald">{study.industry}</Badge>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {study.readTime}
                  </span>
                </div>

                {/* Title & Client */}
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-indigo-600 dark:text-indigo-400 font-mono mb-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{study.client}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors leading-snug">
                    {study.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {study.summary}
                </p>

                {/* Quantitative Impact Highlights */}
                <div className="grid grid-cols-2 gap-2 pt-2 pb-1 border-y border-slate-100 dark:border-slate-800/80">
                  {study.results.slice(0, 2).map((res, idx) => (
                    <div key={idx} className="bg-slate-50 dark:bg-slate-900/70 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800/60">
                      <div className="text-base font-bold font-mono text-emerald-600 dark:text-emerald-400">
                        {res.metric}
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">{res.label}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {study.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {study.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400">
                      +{study.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                <Button
                  onClick={() => setActivePreview(study)}
                  variant="outline"
                  size="sm"
                  className="text-xs gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Preview</span>
                </Button>

                <Link href={`/case-studies/${study.slug}`}>
                  <Button variant="ghost" size="sm" className="text-xs gap-1 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white">
                    <span>Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Preview Modal */}
      {activePreview && (
        <Modal
          isOpen={!!activePreview}
          onClose={() => setActivePreview(null)}
          title={activePreview.title}
          subtitle={`Client: ${activePreview.client} • Industry: ${activePreview.industry}`}
        >
          <div className="space-y-6">
            {/* Impact Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {activePreview.results.map((r, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-xl">
                  <div className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400">{r.metric}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{r.label}</div>
                </div>
              ))}
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-slate-900/60 border border-rose-200 dark:border-slate-800 p-4 rounded-xl space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                  The Enterprise Challenge
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activePreview.challenge}
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900/60 border border-emerald-200 dark:border-slate-800 p-4 rounded-xl space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  InventIQ Architecture Solution
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activePreview.solution}
                </p>
              </div>
            </div>

            {/* Architecture Highlights */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                Key Technical Architectural Decisions
              </h4>
              <ul className="space-y-2">
                {activePreview.architectureHighlights.map((arch, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial Quote */}
            {activePreview.testimonial && (
              <div className="p-4 rounded-xl bg-indigo-50/50 dark:bg-gradient-to-r dark:from-indigo-950/40 dark:to-slate-900 border border-indigo-200 dark:border-indigo-900/50">
                <Quote className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mb-2" />
                <p className="text-xs text-slate-800 dark:text-slate-200 italic mb-2">
                  &ldquo;{activePreview.testimonial.quote}&rdquo;
                </p>
                <div className="text-xs font-semibold text-slate-900 dark:text-white">
                  {activePreview.testimonial.author} —{" "}
                  <span className="text-slate-500 dark:text-slate-400 font-normal">
                    {activePreview.testimonial.role}, {activePreview.testimonial.company}
                  </span>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
              <Link href={`/case-studies/${activePreview.slug}`}>
                <Button variant="emerald" size="md">
                  View Detailed Deep-Dive Page
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={() => setActivePreview(null)}>
                Close
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
