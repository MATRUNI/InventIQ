"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Globe2,
  Database,
  Coins,
  Rocket,
  TrendingDown,
  Lock,
} from "lucide-react";

export function BentoGrid() {
  const [finopsSavings, setFinopsSavings] = useState(48);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="architecture" className="py-24 relative overflow-hidden transition-colors duration-200">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
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
          <Badge variant="indigo" dot>
            Architecture Foundation
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 dark:text-white">
            Engineered for Extreme{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 dark:from-indigo-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Scale & Velocity
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Every module in the InventIQ stack is purpose-built to withstand Tier-1 traffic surges, eliminate single points of failure, and enforce absolute zero-trust posture.
          </p>
        </motion.div>

        {/* Bento Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: Autonomous AI Intelligence (2 cols) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="md:col-span-2 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-[#111827] dark:via-[#0F172A] dark:to-[#0B0F19] border border-slate-200 dark:border-slate-800 p-8 relative overflow-hidden group hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-colors shadow-md dark:shadow-xl"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 group-hover:opacity-15 transition-opacity">
              <Brain className="w-48 h-48 text-indigo-600 dark:text-indigo-400" />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Brain className="w-6 h-6" />
                </div>
                <Badge variant="indigo">GenAI Enterprise Engine</Badge>
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
                <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl p-3">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">Retrieval Latency</span>
                  <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400 font-mono">7.8ms</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl p-3">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">Citation Accuracy</span>
                  <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400 font-mono">99.4%</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl p-3">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">Token Cost Delta</span>
                  <span className="text-lg font-bold text-cyan-600 dark:text-cyan-400 font-mono">-62%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Sub-50ms Global Edge (1 col) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="rounded-2xl bg-white dark:bg-gradient-to-br dark:from-[#111827] dark:via-[#0F172A] dark:to-[#0B0F19] border border-slate-200 dark:border-slate-800 p-8 relative overflow-hidden group hover:border-blue-400 dark:hover:border-blue-500/50 transition-colors shadow-md dark:shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Globe2 className="w-6 h-6" />
                </div>
                <Badge variant="blue">300+ Edge PoPs</Badge>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Sub-50ms Global Edge
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Compute closer to your users with edge workers, intelligent state replication, and zero cold starts.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 mt-6 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Global Median TTFB</span>
              <span className="text-xl font-mono font-bold text-blue-600 dark:text-blue-400">28.4ms</span>
            </div>
          </motion.div>

          {/* Card 3: Zero-Trust Security Mesh (1 col) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="rounded-2xl bg-white dark:bg-gradient-to-br dark:from-[#111827] dark:via-[#0F172A] dark:to-[#0B0F19] border border-slate-200 dark:border-slate-800 p-8 relative overflow-hidden group hover:border-emerald-400 dark:hover:border-emerald-500/50 transition-colors shadow-md dark:shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Lock className="w-6 h-6" />
                </div>
                <Badge variant="emerald">mTLS & eBPF</Badge>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Zero-Trust Mesh & Kernel Isolation
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Continuous cryptographic verification for every RPC packet. SOC2 Type II, HIPAA, and GDPR air-gapped readiness.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 mt-6 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium font-mono">
                100% Policy Enforcement
              </span>
            </div>
          </motion.div>

          {/* Card 4: 3M+ Msg/Sec Streaming Lakehouse (2 cols) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="md:col-span-2 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-[#111827] dark:via-[#0F172A] dark:to-[#0B0F19] border border-slate-200 dark:border-slate-800 p-8 relative overflow-hidden group hover:border-violet-400 dark:hover:border-violet-500/50 transition-colors shadow-md dark:shadow-xl"
          >
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-600 dark:text-violet-400">
                  <Database className="w-6 h-6" />
                </div>
                <Badge variant="violet">Real-Time Lakehouse</Badge>
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
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#090D16] border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-violet-500 dark:bg-violet-400 animate-pulse" />
                  <span className="text-slate-600 dark:text-slate-300">Kafka Pipeline Ingestion:</span>
                  <span className="text-slate-900 dark:text-white font-bold">3,240,119 events/s</span>
                </div>
                <div className="text-violet-600 dark:text-violet-400 font-semibold">
                  Zero Buffer Overflow
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 5: FinOps Cloud Savings (2 cols) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="md:col-span-2 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-[#111827] dark:via-[#0F172A] dark:to-[#0B0F19] border border-slate-200 dark:border-slate-800 p-8 relative overflow-hidden group hover:border-cyan-400 dark:hover:border-cyan-500/50 transition-colors shadow-md dark:shadow-xl"
          >
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <Coins className="w-6 h-6" />
                </div>
                <Badge variant="cyan">Autonomous FinOps</Badge>
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
                <div className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-xl text-cyan-700 dark:text-cyan-300 shrink-0">
                  <TrendingDown className="w-5 h-5" />
                  <span className="text-2xl font-bold font-mono">-{finopsSavings}%</span>
                  <span className="text-xs uppercase font-medium">Avg Reduction</span>
                </div>
              </div>

              {/* Interactive savings slider */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Simulate enterprise cloud bill reduction:</span>
                  <span className="text-slate-900 dark:text-white font-mono font-medium">{finopsSavings}% achieved</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="65"
                  value={finopsSavings}
                  onChange={(e) => setFinopsSavings(Number(e.target.value))}
                  className="w-full accent-cyan-600 dark:accent-cyan-400 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>
            </div>
          </motion.div>

          {/* Card 6: Extreme Developer Velocity (1 col) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="rounded-2xl bg-white dark:bg-gradient-to-br dark:from-[#111827] dark:via-[#0F172A] dark:to-[#0B0F19] border border-slate-200 dark:border-slate-800 p-8 relative overflow-hidden group hover:border-amber-400 dark:hover:border-amber-500/50 transition-colors shadow-md dark:shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <Rocket className="w-6 h-6" />
                </div>
                <Badge variant="outline">GitOps v3</Badge>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                45+ Deploys Daily
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Automated ephemeral environments, zero-downtime canary releases, and AI-driven pull request test synthesis.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 mt-6 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Lead Time to Production</span>
              <span className="text-xl font-mono font-bold text-amber-600 dark:text-amber-400">&lt;6 mins</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
