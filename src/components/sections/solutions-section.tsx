"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SOLUTIONS_DATA } from "@/lib/data";
import { SolutionItem } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import {
  Cpu,
  Cloud,
  Database,
  Layers,
  CheckCircle,
  Code2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function SolutionsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalSolution, setActiveModalSolution] = useState<SolutionItem | null>(null);

  const categories = [
    { id: "all", label: "All Engineering Capabilities", icon: Layers },
    { id: "ai", label: "Generative AI Systems", icon: Cpu },
    { id: "cloud", label: "Cloud Fabric & Mesh", icon: Cloud },
    { id: "data", label: "High-Throughput Streaming", icon: Database },
    { id: "microservices", label: "Decoupled Edge APIs", icon: Code2 },
  ];

  const filteredSolutions =
    selectedCategory === "all"
      ? SOLUTIONS_DATA
      : SOLUTIONS_DATA.filter((s) => s.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
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
    <section id="solutions" className="py-28 bg-slate-50/70 dark:bg-[#07090F] relative transition-colors duration-200">
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
            <span>Enterprise Solutions & Offerings</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-slate-950 dark:text-white">
            Architected for Disruption.{" "}
            <span className="text-[#1163FB] dark:text-[#3B82F6]">
              Built for Scale.
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Proven enterprise architectures deployed across Tier-1 financial institutions, healthcare providers, and high-scale consumer platforms.
          </p>
        </motion.div>

        {/* Tabbed Navigation Bar (Appinventiv Style Pills) */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer border ${
                  isActive
                    ? "bg-[#1163FB] text-white border-[#1163FB] shadow-md shadow-[#1163FB]/25"
                    : "bg-white dark:bg-[#0E131E] text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Solutions Grid */}
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {filteredSolutions.map((solution) => (
            <motion.div
              key={solution.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="rounded-3xl bg-white dark:bg-gradient-to-b dark:from-[#0E131E] dark:to-[#080B12] border border-slate-200 dark:border-white/10 p-8 flex flex-col justify-between hover:border-[#1163FB]/60 dark:hover:border-[#1163FB]/60 hover:shadow-2xl hover:shadow-[#1163FB]/15 transition-[border-color,box-shadow] duration-200 group"
            >
                <div className="space-y-6">
                  {/* Header row */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1163FB]/10 text-[#1163FB] dark:text-[#60A5FA] text-xs font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                      {solution.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                      {solution.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-[#1163FB] dark:group-hover:text-[#60A5FA] transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mt-2.5 text-sm leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  {/* Metrics Matrix */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-slate-100 dark:border-white/10">
                    {solution.metrics.map((m, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-lg font-bold font-mono text-[#1163FB] dark:text-[#3B82F6]">
                          {m.value}
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Key Architectural Features */}
                  <ul className="space-y-2.5">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {solution.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                  <Button
                    onClick={() => setActiveModalSolution(solution)}
                    variant="outline"
                    size="sm"
                    className="rounded-full gap-2 text-xs font-semibold"
                  >
                    <Code2 className="w-4 h-4 text-[#1163FB]" />
                    <span>View Technical Specs</span>
                  </Button>

                  <a href="#contact">
                    <Button variant="ghost" size="sm" className="rounded-full gap-1 text-xs font-semibold group/link">
                      <span>Deploy Blueprint</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>

      {/* Interactive Modal for Deep Solution Specs */}
      {activeModalSolution && (
        <Modal
          isOpen={!!activeModalSolution}
          onClose={() => setActiveModalSolution(null)}
          title={activeModalSolution.title}
          subtitle={activeModalSolution.tagline}
        >
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#1163FB] dark:text-[#60A5FA] mb-2">
                Executive Overview
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {activeModalSolution.description}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
                Production Performance Benchmarks
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {activeModalSolution.metrics.map((m, idx) => (
                  <div key={idx} className="bg-slate-100 dark:bg-[#0E131E] border border-slate-200 dark:border-white/10 rounded-2xl p-3.5">
                    <div className="text-lg font-bold font-mono text-[#1163FB] dark:text-[#3B82F6]">{m.value}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                Reference Implementation Architecture
              </h4>
              <div className="rounded-2xl bg-[#080B12] border border-white/10 p-4 font-mono text-xs overflow-x-auto text-slate-200">
                <div className="text-slate-400 pb-2 border-b border-white/10 mb-2 flex items-center justify-between">
                  <span>// {activeModalSolution.architectureSnippet.title}</span>
                  <span className="uppercase text-[10px] text-[#1163FB] font-bold">
                    {activeModalSolution.architectureSnippet.language}
                  </span>
                </div>
                <pre>
                  <code>{activeModalSolution.architectureSnippet.code}</code>
                </pre>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Full enterprise reference blueprint delivered under NDA.
              </span>
              <a href="#contact" onClick={() => setActiveModalSolution(null)}>
                <Button variant="electric" size="md" className="rounded-full">
                  Request Solution Blueprint
                </Button>
              </a>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
