"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Terminal,
  Zap,
  Activity,
  Layers,
  Copy,
  Check,
  Server,
  ShieldCheck,
  Cpu,
  Sparkles,
  BarChart3,
  Globe2,
} from "lucide-react";

function LiveTpsCounter() {
  const [liveTps, setLiveTps] = useState(2418900);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveTps((prev) => prev + Math.floor(Math.random() * 41) - 20);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-900 dark:text-white">
      {liveTps.toLocaleString()}
    </span>
  );
}

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"ai" | "cloud" | "data">("ai");
  const [viewMode, setViewMode] = useState<"telemetry" | "code">("telemetry");
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    ai: {
      file: "rag-agent-pipeline.ts",
      code: `// Sovereign Enterprise RAG with Sub-10ms Vector Search
import { SovereignAI, VectorPipeline } from '@inventiq/ai-core';

export const agent = new SovereignAI.Agent({
  knowledgeBase: 'enterprise-vault-v4',
  vectorBackend: 'qdrant-dense-sparse',
  latencyThresholdMs: 12,
  securityEnclave: 'CONFIDENTIAL_COMPUTE',
  auditLogging: true
});

const response = await agent.query({
  input: "Generate real-time settlement risk analysis",
  guardrails: ["PII_REDACTION", "ANTI_HALLUCINATION"]
});`,
    },
    cloud: {
      file: "ebpf-mesh-routing.go",
      code: `// Multi-Region eBPF Traffic Mesh with Active-Active Failover
package main

import "github.com/inventiq/mesh/ebpf"

func RouteHighThroughputTraffic(packet *ebpf.Packet) error {
  optimalPod := ebpf.SelectTargetPod(packet.TenantId, ebpf.MetricP99Latency)
  if optimalPod.P99Latency > 15 {
    return ebpf.TriggerFastReroute(packet, "canary-cluster")
  }
  return ebpf.ZeroCopyDispatch(packet, optimalPod.Socket)
}`,
    },
    data: {
      file: "realtime-lakehouse-stream.sql",
      code: `-- Sub-Second Event Processing Lakehouse
SELECT
  tenant_id,
  geo_cluster,
  quantile(0.99)(request_latency_ms) AS p99_latency,
  sum(events_processed) AS total_events,
  countIf(anomaly_score > 0.92) AS fraud_events_blocked
FROM stream_telemetry_5min
GROUP BY tenant_id, geo_cluster
HAVING total_events > 1000000;`,
    },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden cyber-grid">
      {/* Background Animated Neon Glow Mesh with Framer Motion */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.45, 0.25],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-gradient-to-tr from-[#1163FB]/30 via-blue-600/20 to-[#CFF601]/10 blur-[140px] rounded-full pointer-events-none -z-10"
      />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#1163FB]/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Monumental Appinventiv-Grade Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Top Pill / Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#1163FB] animate-pulse" />
              <span className="text-xs font-bold tracking-wider uppercase text-slate-800 dark:text-slate-200">
                Global Digital Product & Engineering Agency
              </span>
              <span className="hidden sm:inline-block text-[11px] font-mono text-[#1163FB] dark:text-[#60A5FA] font-semibold border-l border-slate-300 dark:border-white/10 pl-2.5">
                SOC2 • ISO 27001
              </span>
            </motion.div>

            {/* Monumental Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[72px] xl:text-[78px] font-black tracking-[-0.035em] leading-[1.04] text-slate-950 dark:text-white"
            >
              We Architect Digital Products That Scale To{" "}
              <span className="text-[#1163FB] dark:text-[#3B82F6] underline decoration-[#CFF601] decoration-wavy decoration-2">
                Billions.
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              InventIQ partners with Fortune 500s and ambitious enterprises to engineer sovereign generative AI pipelines, ultra-low latency eBPF meshes, and real-time streaming lakehouses at extreme scale.
            </motion.p>

            {/* CTA Group with Appinventiv Magnetic Pill Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a href="#contact" className="w-full sm:w-auto">
                <Button size="xl" variant="electric" className="w-full sm:w-auto group rounded-full text-base">
                  <span>Talk to Architects</span>
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1.5 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </Button>
              </a>
              <a href="#case-studies" className="w-full sm:w-auto">
                <Button size="xl" variant="outline" className="w-full sm:w-auto rounded-full text-base">
                  <BarChart3 className="w-4 h-4 mr-1.5 text-[#1163FB]" />
                  <span>Explore Case Studies</span>
                </Button>
              </a>
            </motion.div>

            {/* Enterprise Trust Ribbon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-3 text-xs text-slate-500 dark:text-slate-400 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">{"★".repeat(5)}</div>
                <span className="font-semibold text-slate-900 dark:text-white">4.9/5 Rating</span>
                <span>by Enterprise Leaders</span>
              </div>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Zero-Downtime Migration Guarantee</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Enterprise Command Center & Telemetry Cockpit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              {/* Neon border blur halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1163FB] via-[#3B82F6] to-[#CFF601]/50 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-700" />

              {/* Cockpit Card Container */}
              <div className="relative rounded-3xl bg-white dark:bg-[#0A0D15] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden text-slate-800 dark:text-slate-200 transition-[border-color,box-shadow,background-color] duration-200">
                {/* Header: Mode Selector & Status */}
                <div className="flex items-center justify-between px-5 py-3.5 bg-slate-100/90 dark:bg-[#101420] border-b border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                      <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                      <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="ml-1 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-[#1163FB]" />
                      InventIQ Mesh Core
                    </span>
                  </div>

                  {/* Mode Switch: Telemetry Simulator vs Code */}
                  <div className="flex items-center p-0.5 rounded-full bg-slate-200 dark:bg-white/10 text-[11px] font-semibold">
                    <button
                      onClick={() => setViewMode("telemetry")}
                      className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                        viewMode === "telemetry"
                          ? "bg-[#1163FB] text-white shadow-sm"
                          : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      Live Mesh
                    </button>
                    <button
                      onClick={() => setViewMode("code")}
                      className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                        viewMode === "code"
                          ? "bg-[#1163FB] text-white shadow-sm"
                          : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      Code
                    </button>
                  </div>
                </div>

                {/* Architecture Select Tabs */}
                <div className="flex items-center bg-slate-50/90 dark:bg-[#07090F] px-4 py-2 border-b border-slate-200 dark:border-white/10 text-xs">
                  <button
                    onClick={() => setActiveTab("ai")}
                    className={`px-3.5 py-1.5 rounded-full font-medium transition-all cursor-pointer border ${
                      activeTab === "ai"
                        ? "bg-[#1163FB]/10 text-[#1163FB] dark:text-[#60A5FA] border-[#1163FB]/40 shadow-sm font-semibold"
                        : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                    }`}
                  >
                    Sovereign AI
                  </button>
                  <button
                    onClick={() => setActiveTab("cloud")}
                    className={`px-3.5 py-1.5 rounded-full font-medium transition-all cursor-pointer border ${
                      activeTab === "cloud"
                        ? "bg-[#1163FB]/10 text-[#1163FB] dark:text-[#60A5FA] border-[#1163FB]/40 shadow-sm font-semibold"
                        : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                    }`}
                  >
                    eBPF Mesh
                  </button>
                  <button
                    onClick={() => setActiveTab("data")}
                    className={`px-3.5 py-1.5 rounded-full font-medium transition-all cursor-pointer border ${
                      activeTab === "data"
                        ? "bg-[#1163FB]/10 text-[#1163FB] dark:text-[#60A5FA] border-[#1163FB]/40 shadow-sm font-semibold"
                        : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                    }`}
                  >
                    Streaming Lakehouse
                  </button>
                </div>

                {/* Main Interactive Screen */}
                <div className="p-5 min-h-[260px] bg-slate-50/50 dark:bg-[#080B12] flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    {viewMode === "telemetry" ? (
                      /* Live Visual Telemetry Engine */
                      <motion.div
                        key="telemetry"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        {/* Real-time Dynamic Throughput Counter */}
                        <div className="p-4 rounded-2xl bg-white dark:bg-[#0E131E] border border-slate-200 dark:border-white/10 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                              Active Pipeline Throughput
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                              REAL-TIME
                            </span>
                          </div>
                          <div className="mt-2 flex items-baseline gap-2">
                            <LiveTpsCounter />
                            <span className="text-xs font-bold text-[#1163FB]">TPS</span>
                          </div>
                        </div>

                        {/* Interactive Node Health Grid */}
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="p-3 rounded-xl bg-white dark:bg-[#0E131E] border border-slate-200 dark:border-white/10">
                            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-[11px]">
                              <span>p99 Latency</span>
                              <Zap className="w-3.5 h-3.5 text-amber-500" />
                            </div>
                            <div className="text-lg font-bold font-mono text-slate-900 dark:text-white mt-1">
                              8.4ms
                            </div>
                            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                              Optimal (Target &lt;15ms)
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-white dark:bg-[#0E131E] border border-slate-200 dark:border-white/10">
                            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-[11px]">
                              <span>Security Enclave</span>
                              <ShieldCheck className="w-3.5 h-3.5 text-[#1163FB]" />
                            </div>
                            <div className="text-lg font-bold font-mono text-[#1163FB] dark:text-[#60A5FA] mt-1">
                              SOC2 Type II
                            </div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400">
                              Confidential Compute
                            </div>
                          </div>
                        </div>

                        {/* Animated Waveform Simulation */}
                        <div className="p-3 rounded-xl bg-slate-100 dark:bg-[#0E131E] border border-slate-200 dark:border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-300">
                            <Activity className="w-4 h-4 text-[#1163FB] animate-pulse" />
                            <span>Mesh Topology: 1,480 pods</span>
                          </div>
                          <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                            99.999% SLA
                          </span>
                        </div>
                      </motion.div>
                    ) : (
                      /* IDE Code View */
                      <motion.div
                        key="code"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-3 font-mono text-xs leading-relaxed"
                      >
                        <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/10">
                          <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                            <Terminal className="w-3.5 h-3.5 text-[#1163FB]" />
                            {codeSnippets[activeTab].file}
                          </span>
                          <button
                            onClick={handleCopy}
                            className="p-1 rounded text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                            title="Copy code"
                          >
                            {copied ? (
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                        <pre className="overflow-x-auto text-[11px] text-slate-800 dark:text-slate-200 p-2 rounded-lg bg-white dark:bg-black/40">
                          <code>{codeSnippets[activeTab].code}</code>
                        </pre>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Status Ticker */}
                <div className="px-5 py-2.5 bg-slate-100/90 dark:bg-[#07090F] border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>Global Edge: 300+ PoPs</span>
                  </div>
                  <span className="text-[#1163FB] font-semibold">Zero Cold Start</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Monumental 4-Column Stat Counter Ribbon (Appinventiv Signature) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-16 pt-12 border-t border-slate-200 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-slate-900 dark:text-white">
              1,600<span className="text-[#1163FB]">+</span>
            </div>
            <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
              Specialized Engineers
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Cloud architects & AI scientists
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-slate-900 dark:text-white">
              3,000<span className="text-[#1163FB]">+</span>
            </div>
            <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
              Products Shipped
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Delivered across 32 countries
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-emerald-600 dark:text-emerald-400">
              99.999%
            </div>
            <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
              Guaranteed Uptime
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Zero-downtime SLA compliance
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-[#1163FB] dark:text-[#3B82F6]">
              $850M<span className="text-[#CFF601]">+</span>
            </div>
            <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
              Client Value Created
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Verified business revenue lift
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
