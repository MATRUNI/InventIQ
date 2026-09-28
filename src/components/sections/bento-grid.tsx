"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Brain,
  Globe2,
  Database,
  Coins,
  Rocket,
  TrendingDown,
  Lock,
  Sparkles,
} from "lucide-react";

export function BentoGrid() {
  const [finopsSavings, setFinopsSavings] = useState(48);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="architecture" className="py-28 relative overflow-hidden transition-colors duration-200">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1163FB]/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            <span className="h-2 w-2 rounded-full bg-[#1163FB] animate-pulse" />
            <span>Architecture Foundations</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-slate-950 dark:text-white">
            Engineered for Extreme{" "}
            <span className="text-[#1163FB] dark:text-[#3B82F6]">
              Scale & Velocity.
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Every module in the InventIQ stack is purpose-built to withstand Tier-1 traffic surges, eliminate single points of failure, and enforce absolute zero-trust security.
          </p>
        </motion.div>

        {/* Bento Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: Autonomous AI Intelligence (2 cols) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="md:col-span-2 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#0E131E] dark:to-[#080B12] border border-slate-200 dark:border-white/10 p-8 relative overflow-hidden group hover:border-[#1163FB]/60 hover:shadow-2xl hover:shadow-[#1163FB]/15 transition-[border-color,box-shadow] duration-200"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 group-hover:opacity-15 transition-opacity">
              <Brain className="w-48 h-48 text-[#1163FB]" />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-2xl bg-[#1163FB]/10 border border-[#1163FB]/30 flex items-center justify-center text-[#1163FB]">
                  <Brain className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1163FB]/10 text-[#1163FB] dark:text-[#60A5FA] text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  GenAI Enterprise Engine
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Autonomous Generative AI & Deterministic RAG
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm leading-relaxed max-w-xl">
                  Private sovereign models fine-tuned on corporate knowledge bases with hybrid dense-sparse embeddings, citation verification, and strict hallucination boundaries.
                </p>
              </div>

              {/* Live Metric Simulation Pills */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5 rounded-2xl p-3.5">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">Retrieval Latency</span>
                  <span className="text-lg font-bold text-[#1163FB] dark:text-[#60A5FA] font-mono">7.8ms</span>
                </div>
                <div className="bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5 rounded-2xl p-3.5">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">Citation Accuracy</span>
                  <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400 font-mono">99.4%</span>
                </div>
                <div className="bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5 rounded-2xl p-3.5">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">Token Cost Delta</span>
                  <span className="text-lg font-bold text-cyan-600 dark:text-cyan-400 font-mono">-62%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Sub-50ms Global Edge (1 col) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#0E131E] dark:to-[#080B12] border border-slate-200 dark:border-white/10 p-8 relative overflow-hidden group hover:border-[#1163FB]/60 hover:shadow-2xl hover:shadow-[#1163FB]/15 transition-[border-color,box-shadow] duration-200 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-2xl bg-[#1163FB]/10 border border-[#1163FB]/30 flex items-center justify-center text-[#1163FB]">
                  <Globe2 className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#1163FB]/10 text-[#1163FB] dark:text-[#60A5FA] text-xs font-bold">
                  300+ Edge PoPs
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Sub-50ms Global Edge
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Compute closer to your users with edge workers, intelligent state replication, and zero cold starts.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-white/10 mt-6 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Global Median TTFB</span>
              <span className="text-xl font-mono font-bold text-[#1163FB] dark:text-[#60A5FA]">28.4ms</span>
            </div>
          </motion.div>

          {/* Card 3: Zero-Trust Security Mesh (1 col) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#0E131E] dark:to-[#080B12] border border-slate-200 dark:border-white/10 p-8 relative overflow-hidden group hover:border-emerald-500/60 hover:shadow-2xl hover:shadow-emerald-500/15 transition-[border-color,box-shadow] duration-200 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Lock className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                  mTLS & eBPF
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Zero-Trust Mesh & Kernel Isolation
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Continuous cryptographic verification for every RPC packet. SOC2 Type II, HIPAA, and GDPR air-gapped readiness.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-white/10 mt-6 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold font-mono">
                100% Policy Enforcement
              </span>
            </div>
          </motion.div>

          {/* Card 4: 3M+ Msg/Sec Streaming Lakehouse (2 cols) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="md:col-span-2 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#0E131E] dark:to-[#080B12] border border-slate-200 dark:border-white/10 p-8 relative overflow-hidden group hover:border-[#1163FB]/60 hover:shadow-2xl hover:shadow-[#1163FB]/15 transition-[border-color,box-shadow] duration-200"
          >
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-2xl bg-[#1163FB]/10 border border-[#1163FB]/30 flex items-center justify-center text-[#1163FB]">
                  <Database className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1163FB]/10 text-[#1163FB] dark:text-[#60A5FA] text-xs font-bold">
                  Real-Time Lakehouse
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  3.2M+ Msg/Sec Real-Time Event Lakehouse
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm leading-relaxed max-w-xl">
                  Unified Apache Kafka, Flink, and ClickHouse pipelines. Ingest, deduplicate, and query massive event streams in under 200ms without overnight batch bottlenecks.
                </p>
              </div>

              {/* Streaming metrics bar */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#1163FB] animate-pulse" />
                  <span className="text-slate-600 dark:text-slate-300">Kafka Pipeline Ingestion:</span>
                  <span className="text-slate-900 dark:text-white font-bold">3,240,119 events/s</span>
                </div>
                <div className="text-emerald-600 dark:text-emerald-400 font-bold">
                  Zero Buffer Overflow
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 5: FinOps Cloud Savings (2 cols) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="md:col-span-2 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#0E131E] dark:to-[#080B12] border border-slate-200 dark:border-white/10 p-8 relative overflow-hidden group hover:border-[#1163FB]/60 hover:shadow-2xl hover:shadow-[#1163FB]/15 transition-[border-color,box-shadow] duration-200"
          >
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <Coins className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-xs font-bold">
                  Autonomous FinOps
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Continuous Cloud Spend Optimization
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mt-1 text-sm max-w-md">
                    Automated spot market arbitrage, idle pod consolidation, and tiered storage lifecycles.
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-2.5 rounded-2xl text-cyan-700 dark:text-cyan-300 shrink-0">
                  <TrendingDown className="w-5 h-5" />
                  <span className="text-2xl font-bold font-mono">-{finopsSavings}%</span>
                  <span className="text-xs uppercase font-bold">Avg Reduction</span>
                </div>
              </div>

              {/* Interactive savings slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <span>Projected FinOps Cloud Efficiency</span>
                  <span>{finopsSavings}% Slashed</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="65"
                  value={finopsSavings}
                  onChange={(e) => setFinopsSavings(Number(e.target.value))}
                  className="w-full accent-[#1163FB] cursor-pointer"
                  aria-label="Adjust projected cloud savings percentage"
                />
              </div>
            </div>
          </motion.div>

          {/* Card 6: Extreme Velocity (1 col) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#0E131E] dark:to-[#080B12] border border-slate-200 dark:border-white/10 p-8 relative overflow-hidden group hover:border-[#1163FB]/60 hover:shadow-2xl hover:shadow-[#1163FB]/15 transition-[border-color,box-shadow] duration-200 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <Rocket className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-bold">
                  45x Deploys/Day
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Accelerated Engineering Velocity
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Ephemeral staging clusters, automated synthetic contract suites, and continuous canary rollbacks.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-white/10 mt-6 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500 dark:text-slate-400">Lead Time to Prod</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">&lt; 14 Mins</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
