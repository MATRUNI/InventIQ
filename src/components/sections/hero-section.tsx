"use client";

import React, { useState } from "react";
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
} from "lucide-react";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"ai" | "cloud" | "data">("ai");
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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden cyber-grid">
      {/* Background Animated Neon Glow Mesh with Framer Motion */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.5, 0.35],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-indigo-600/25 via-blue-500/20 to-emerald-500/15 blur-[120px] rounded-full pointer-events-none -z-10"
      />
      <div className="absolute top-10 right-10 w-72 h-72 bg-violet-600/10 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2"
            >
              <Badge variant="indigo" dot>
                Enterprise Tech Platform
              </Badge>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:inline-block">
                Sub-Second Core Web Vitals • SOC2 Type II
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-slate-950 dark:text-white">
              Engineering Next-Gen{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-emerald-600 dark:from-indigo-400 dark:via-blue-400 dark:to-emerald-300 bg-clip-text text-transparent">
                Autonomous AI
              </span>{" "}
              & Cloud Architectures
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              We design and scale sovereign generative AI pipelines, ultra-low latency microservice meshes, and real-time streaming lakehouses handling millions of requests per second.
            </p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a href="#contact" className="w-full sm:w-auto">
                <Button size="lg" variant="primary" className="w-full sm:w-auto group">
                  <span>Schedule Architecture Review</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#solutions" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Layers className="w-4 h-4 mr-1 text-indigo-600 dark:text-indigo-400" />
                  <span>Explore Solutions</span>
                </Button>
              </a>
            </motion.div>

            {/* Trust Metrics Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800/80 max-w-xl mx-auto lg:mx-0"
            >
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  2.4M<span className="text-indigo-600 dark:text-indigo-400 text-lg">+</span>
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">TPS Handled</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 tracking-tight">
                  &lt;12ms
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">p99 Settlement</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-cyan-600 dark:text-cyan-400 tracking-tight">
                  99.999%
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">SLA Availability</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Code & Architecture Telemetry Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              {/* Neon border blur halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-500 rounded-2xl blur-lg opacity-25 dark:opacity-30 group-hover:opacity-50 transition duration-500" />

              {/* Terminal Window Card */}
              <div className="relative rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl overflow-hidden text-slate-800 dark:text-slate-200 transition-colors duration-200">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-100/90 dark:bg-[#111827] border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-600 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                      <Terminal className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                      {codeSnippets[activeTab].file}
                    </span>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="p-1.5 rounded text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Copy code"
                    aria-label="Copy code snippet to clipboard"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Architecture Select Tabs */}
                <div className="flex items-center bg-slate-50/90 dark:bg-[#090D16]/90 px-3 py-1.5 border-b border-slate-200 dark:border-slate-800/60 text-xs transition-colors duration-200">
                  <button
                    onClick={() => setActiveTab("ai")}
                    className={`px-3 py-1 rounded-md font-medium transition-all cursor-pointer border ${
                      activeTab === "ai"
                        ? "bg-indigo-50 dark:bg-indigo-600/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/40 shadow-sm"
                        : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                    }`}
                  >
                    GenAI RAG Enclave
                  </button>
                  <button
                    onClick={() => setActiveTab("cloud")}
                    className={`px-3 py-1 rounded-md font-medium transition-all cursor-pointer border ${
                      activeTab === "cloud"
                        ? "bg-blue-50 dark:bg-blue-600/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-500/40 shadow-sm"
                        : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                    }`}
                  >
                    eBPF Mesh
                  </button>
                  <button
                    onClick={() => setActiveTab("data")}
                    className={`px-3 py-1 rounded-md font-medium transition-all cursor-pointer border ${
                      activeTab === "data"
                        ? "bg-emerald-50 dark:bg-emerald-600/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/40 shadow-sm"
                        : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                    }`}
                  >
                    Stream Lakehouse
                  </button>
                </div>

                {/* Code Body with Framer Motion tab transition & Syntax Highlights */}
                <div className="p-4 font-mono text-xs bg-slate-50 dark:bg-[#070A10] text-slate-800 dark:text-slate-200 overflow-x-auto min-h-[220px] transition-colors duration-200 border-y border-slate-200/80 dark:border-slate-800/80">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="leading-relaxed"
                    >
                      {activeTab === "ai" && (
                        <div className="space-y-1">
                          <div className="text-slate-500 dark:text-slate-400 italic">// Sovereign Enterprise RAG with Sub-10ms Vector Search</div>
                          <div>
                            <span className="text-purple-700 dark:text-purple-300 font-semibold">import</span> &#123; <span className="text-indigo-700 dark:text-cyan-300 font-medium">SovereignAI</span>, <span className="text-indigo-700 dark:text-cyan-300 font-medium">VectorPipeline</span> &#125; <span className="text-purple-700 dark:text-purple-300 font-semibold">from</span> <span className="text-emerald-700 dark:text-emerald-300 font-medium">&apos;@inventiq/ai-core&apos;</span>;
                          </div>
                          <div className="pt-1.5">
                            <span className="text-purple-700 dark:text-purple-300 font-semibold">export const</span> <span className="text-blue-700 dark:text-indigo-300 font-medium">agent</span> = <span className="text-purple-700 dark:text-purple-300 font-semibold">new</span> <span className="text-indigo-700 dark:text-cyan-300 font-medium">SovereignAI.Agent</span>(&#123;
                          </div>
                          <div className="pl-4 text-slate-700 dark:text-slate-300">
                            <div>knowledgeBase: <span className="text-emerald-700 dark:text-emerald-300 font-medium">&apos;enterprise-vault-v4&apos;</span>,</div>
                            <div>vectorBackend: <span className="text-emerald-700 dark:text-emerald-300 font-medium">&apos;qdrant-dense-sparse&apos;</span>,</div>
                            <div>latencyThresholdMs: <span className="text-amber-700 dark:text-amber-300 font-bold">12</span>,</div>
                            <div>securityEnclave: <span className="text-emerald-700 dark:text-emerald-300 font-medium">&apos;CONFIDENTIAL_COMPUTE&apos;</span>,</div>
                            <div>auditLogging: <span className="text-amber-700 dark:text-amber-300 font-bold">true</span></div>
                          </div>
                          <div>&#125;);</div>
                          <div className="pt-1.5">
                            <span className="text-purple-700 dark:text-purple-300 font-semibold">const</span> <span className="text-blue-700 dark:text-indigo-300 font-medium">response</span> = <span className="text-purple-700 dark:text-purple-300 font-semibold">await</span> agent.<span className="text-cyan-700 dark:text-blue-300 font-medium">query</span>(&#123;
                          </div>
                          <div className="pl-4 text-slate-700 dark:text-slate-300">
                            <div>input: <span className="text-emerald-700 dark:text-emerald-300 font-medium">&quot;Generate real-time settlement risk analysis&quot;</span>,</div>
                            <div>guardrails: [<span className="text-emerald-700 dark:text-emerald-300 font-medium">&quot;PII_REDACTION&quot;</span>, <span className="text-emerald-700 dark:text-emerald-300 font-medium">&quot;ANTI_HALLUCINATION&quot;</span>]</div>
                          </div>
                          <div>&#125;);</div>
                        </div>
                      )}

                      {activeTab === "cloud" && (
                        <div className="space-y-1">
                          <div className="text-slate-500 dark:text-slate-400 italic">// Multi-Region eBPF Traffic Mesh with Active-Active Failover</div>
                          <div><span className="text-purple-700 dark:text-purple-300 font-semibold">package</span> <span className="text-blue-700 dark:text-indigo-300 font-medium">main</span></div>
                          <div className="pt-1"><span className="text-purple-700 dark:text-purple-300 font-semibold">import</span> <span className="text-emerald-700 dark:text-emerald-300 font-medium">&quot;github.com/inventiq/mesh/ebpf&quot;</span></div>
                          <div className="pt-1.5"><span className="text-purple-700 dark:text-purple-300 font-semibold">func</span> <span className="text-cyan-700 dark:text-blue-300 font-medium">RouteHighThroughputTraffic</span>(packet *<span className="text-indigo-700 dark:text-cyan-300 font-medium">ebpf.Packet</span>) <span className="text-indigo-700 dark:text-cyan-300 font-medium">error</span> &#123;</div>
                          <div className="pl-4 text-slate-700 dark:text-slate-300">
                            <div>optimalPod := ebpf.<span className="text-cyan-700 dark:text-blue-300 font-medium">SelectTargetPod</span>(packet.TenantId, ebpf.MetricP99Latency)</div>
                            <div className="pt-1"><span className="text-purple-700 dark:text-purple-300 font-semibold">if</span> optimalPod.P99Latency &gt; <span className="text-amber-700 dark:text-amber-300 font-bold">15</span> &#123;</div>
                            <div className="pl-4"><span className="text-purple-700 dark:text-purple-300 font-semibold">return</span> ebpf.<span className="text-cyan-700 dark:text-blue-300 font-medium">TriggerFastReroute</span>(packet, <span className="text-emerald-700 dark:text-emerald-300 font-medium">&quot;canary-cluster&quot;</span>)</div>
                            <div>&#125;</div>
                            <div><span className="text-purple-700 dark:text-purple-300 font-semibold">return</span> ebpf.<span className="text-cyan-700 dark:text-blue-300 font-medium">ZeroCopyDispatch</span>(packet, optimalPod.Socket)</div>
                          </div>
                          <div>&#125;</div>
                        </div>
                      )}

                      {activeTab === "data" && (
                        <div className="space-y-1">
                          <div className="text-slate-500 dark:text-slate-400 italic">-- Sub-Second Event Processing Lakehouse</div>
                          <div><span className="text-purple-700 dark:text-purple-300 font-semibold">SELECT</span></div>
                          <div className="pl-4 text-slate-700 dark:text-slate-300">
                            <div>tenant_id, geo_cluster,</div>
                            <div><span className="text-cyan-700 dark:text-blue-300 font-medium">quantile</span>(<span className="text-amber-700 dark:text-amber-300 font-bold">0.99</span>)(request_latency_ms) <span className="text-purple-700 dark:text-purple-300 font-semibold">AS</span> p99_latency,</div>
                            <div><span className="text-cyan-700 dark:text-blue-300 font-medium">sum</span>(events_processed) <span className="text-purple-700 dark:text-purple-300 font-semibold">AS</span> total_events,</div>
                            <div><span className="text-cyan-700 dark:text-blue-300 font-medium">countIf</span>(anomaly_score &gt; <span className="text-amber-700 dark:text-amber-300 font-bold">0.92</span>) <span className="text-purple-700 dark:text-purple-300 font-semibold">AS</span> fraud_events_blocked</div>
                          </div>
                          <div><span className="text-purple-700 dark:text-purple-300 font-semibold">FROM</span> stream_telemetry_5min</div>
                          <div><span className="text-purple-700 dark:text-purple-300 font-semibold">GROUP BY</span> tenant_id, geo_cluster</div>
                          <div><span className="text-purple-700 dark:text-purple-300 font-semibold">HAVING</span> total_events &gt; <span className="text-amber-700 dark:text-amber-300 font-bold">1000000</span>;</div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Live Telemetry Bar */}
                <div className="p-3 bg-slate-50 dark:bg-[#0E1524] border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono transition-colors duration-200">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    <span>Live Cluster: 1,480 pods</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1 font-medium">
                      <Zap className="w-3 h-3 text-amber-500 dark:text-amber-400" /> 8.4ms
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <Server className="w-3 h-3 text-cyan-600 dark:text-cyan-400" /> 0.00% Err
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
