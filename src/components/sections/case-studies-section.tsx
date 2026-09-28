"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CASE_STUDIES_DATA } from "@/lib/data";
import { CaseStudyItem } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import {
  ArrowRight,
  Building2,
  Clock,
  Eye,
  CheckCircle2,
  Quote,
  TrendingUp,
} from "lucide-react";

export function CaseStudiesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");
  const [activePreview, setActivePreview] = useState<CaseStudyItem | null>(null);

  const industries = ["All", "FinTech", "HealthTech", "E-Commerce", "Logistics", "DevSecOps"];

  const filteredStudies =
    selectedIndustry === "All"
      ? CASE_STUDIES_DATA
      : CASE_STUDIES_DATA.filter((c) => c.industry === selectedIndustry);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section id="case-studies" className="py-28 relative overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            <span className="h-2 w-2 rounded-full bg-[#1163FB]" />
            <span>Verified Enterprise Case Studies</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-slate-950 dark:text-white">
            Transforming Global Leaders with{" "}
            <span className="text-[#1163FB] dark:text-[#3B82F6]">
              Unrivaled Scale.
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Discover how InventIQ engineers mission-critical software, sovereign AI systems, and high-throughput cloud infrastructure that power billions in transactions.
          </p>
        </motion.div>

        {/* Industry Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setSelectedIndustry(ind)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer border whitespace-nowrap ${
                selectedIndustry === ind
                  ? "bg-[#1163FB] text-white border-[#1163FB] shadow-md shadow-[#1163FB]/25"
                  : "bg-white dark:bg-[#0E131E] text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20"
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        {/* Case Studies Grid with Appinventiv Magazine-style Cards */}
        <motion.div
          key={selectedIndustry}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredStudies.map((study) => (
            <motion.div
              key={study.slug}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="rounded-3xl bg-white dark:bg-gradient-to-b dark:from-[#0E131E] dark:to-[#080B12] border border-slate-200 dark:border-white/10 p-7 flex flex-col justify-between hover:border-[#1163FB]/60 dark:hover:border-[#1163FB]/60 hover:shadow-2xl hover:shadow-[#1163FB]/15 transition-[border-color,box-shadow] duration-200 group"
            >
                <div className="space-y-5">
                  {/* Top Row: Client & Read Time */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1163FB]/10 text-[#1163FB] dark:text-[#60A5FA] text-xs font-bold">
                      <Building2 className="w-3.5 h-3.5" />
                      {study.client}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                      <Clock className="w-3 h-3" />
                      {study.readTime}
                    </span>
                  </div>

                  {/* Monumental Impact Metric Banner (Appinventiv Signature) */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-black/40 border border-slate-200/80 dark:border-white/5 flex items-baseline justify-between group-hover:border-[#1163FB]/30 transition-colors">
                    <div>
                      <div className="text-3xl sm:text-4xl font-black font-mono text-[#1163FB] dark:text-[#3B82F6] tracking-tight">
                        {study.results[0].metric}
                      </div>
                      <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 mt-0.5">
                        {study.results[0].label}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold font-mono text-emerald-600 dark:text-emerald-400">
                        {study.results[1]?.metric}
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">
                        {study.results[1]?.label}
                      </div>
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-[#1163FB] dark:group-hover:text-[#60A5FA] transition-colors leading-snug">
                      {study.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 line-clamp-3 leading-relaxed">
                      {study.summary}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {study.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-full text-[10px] font-mono text-slate-400 font-medium">
                        +{study.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-3">
                  <Button
                    onClick={() => setActivePreview(study)}
                    variant="outline"
                    size="sm"
                    className="rounded-full text-xs gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#1163FB]" />
                    <span>Quick Preview</span>
                  </Button>

                  <Link href={`/case-studies/${study.slug}`}>
                    <Button variant="ghost" size="sm" className="rounded-full text-xs gap-1 font-semibold group/link">
                      <span>Deep Dive</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
        </motion.div>
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
                <div key={i} className="bg-slate-50 dark:bg-[#0E131E] border border-slate-200 dark:border-white/10 p-3.5 rounded-2xl">
                  <div className="text-xl font-bold font-mono text-[#1163FB] dark:text-[#3B82F6]">{r.metric}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{r.label}</div>
                </div>
              ))}
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/10 p-4 rounded-2xl space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                  The Enterprise Challenge
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activePreview.challenge}
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/10 p-4 rounded-2xl space-y-2">
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
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1163FB] dark:text-[#60A5FA] mb-2.5">
                Key Technical Architectural Decisions
              </h4>
              <ul className="space-y-2">
                {activePreview.architectureHighlights.map((arch, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial Quote */}
            {activePreview.testimonial && (
              <div className="p-4 rounded-2xl bg-[#1163FB]/5 dark:bg-[#1163FB]/10 border border-[#1163FB]/20">
                <Quote className="w-5 h-5 text-[#1163FB] mb-2" />
                <p className="text-xs text-slate-800 dark:text-slate-200 italic mb-2 leading-relaxed">
                  &ldquo;{activePreview.testimonial.quote}&rdquo;
                </p>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  {activePreview.testimonial.author} —{" "}
                  <span className="text-slate-500 dark:text-slate-400 font-normal">
                    {activePreview.testimonial.role}, {activePreview.testimonial.company}
                  </span>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/10">
              <Link href={`/case-studies/${activePreview.slug}`}>
                <Button variant="electric" size="md" className="rounded-full">
                  <span>View Detailed Deep-Dive Page</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={() => setActivePreview(null)} className="rounded-full">
                Close
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
