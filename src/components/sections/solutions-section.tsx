"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SOLUTIONS_DATA } from "@/lib/data";
import { SolutionItem } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
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

  return (
    <section id="solutions" className="py-24 bg-slate-50/70 dark:bg-[#070B14] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-14"
        >
          <Badge variant="blue" dot>
            Engineered Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 dark:text-white">
            Enterprise Solutions &{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 dark:from-blue-400 dark:via-indigo-400 dark:to-emerald-400 bg-clip-text text-transparent">
              Product Offerings
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Proven architectures deployed across Tier-1 financial institutions, healthcare providers, and high-scale consumer enterprises.
          </p>
        </motion.div>

        {/* Tabbed Navigation Bar */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer border ${
                  isActive
                    ? "bg-indigo-50 dark:bg-indigo-600/20 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-500/50 shadow-sm"
                    : "bg-white dark:bg-[#111827]/80 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Solutions Grid with Framer Motion AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredSolutions.map((solution) => (
              <motion.div
                layout
                key={solution.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-2xl bg-white dark:bg-gradient-to-b dark:from-[#111827] dark:to-[#0D131F] border border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-between hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-colors shadow-md dark:shadow-xl group"
              >
                <div className="space-y-6">
                  {/* Header row */}
                  <div className="flex items-center justify-between gap-4">
                    <Badge variant="indigo">{solution.badge}</Badge>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {solution.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  {/* Metrics Matrix */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-slate-100 dark:border-slate-800/80">
                    {solution.metrics.map((m, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-base font-bold font-mono text-emerald-600 dark:text-emerald-400">
                          {m.value}
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Key Architectural Features */}
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {solution.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <Button
                    onClick={() => setActiveModalSolution(solution)}
                    variant="outline"
                    size="sm"
                    className="gap-2 text-xs"
                  >
                    <Code2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span>View Technical Specs</span>
                  </Button>

                  <a href="#contact">
                    <Button variant="ghost" size="sm" className="gap-1 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                      <span>Deploy Solution</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
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
              <h4 className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                Executive Overview
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {activeModalSolution.description}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
                Production Performance Benchmarks
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {activeModalSolution.metrics.map((m, idx) => (
                  <div key={idx} className="bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl p-3">
                    <div className="text-lg font-bold font-mono text-emerald-600 dark:text-emerald-400">{m.value}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                Reference Implementation Architecture
              </h4>
              <div className="rounded-xl bg-[#070A10] border border-slate-800 p-4 font-mono text-xs overflow-x-auto text-slate-200">
                <div className="text-slate-400 pb-2 border-b border-slate-800 mb-2 flex items-center justify-between">
                  <span>// {activeModalSolution.architectureSnippet.title}</span>
                  <span className="uppercase text-[10px] text-indigo-400">
                    {activeModalSolution.architectureSnippet.language}
                  </span>
                </div>
                <pre>
                  <code>{activeModalSolution.architectureSnippet.code}</code>
                </pre>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Full integration documentation available upon architecture sign-off.
              </span>
              <a href="#contact" onClick={() => setActiveModalSolution(null)}>
                <Button variant="primary" size="md">
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
