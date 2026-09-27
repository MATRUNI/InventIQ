"use client";

import React, { useState } from "react";
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
      {/* Background Animated Neon Glow Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-indigo-600/20 via-blue-500/20 to-emerald-500/15 blur-[120px] rounded-full pointer-events-none -z-10 animate-aurora" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-violet-600/10 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2">
              <Badge variant="indigo" dot>
                Enterprise Tech Platform
              </Badge>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:inline-block">
                Sub-Second Core Web Vitals • SOC2 Type II
              </span>
            </div>

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
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
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
            </div>

            {/* Trust Metrics Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800/80 max-w-xl mx-auto lg:mx-0">
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
            </div>
          </div>

          {/* Right Column: Interactive Code & Architecture Telemetry Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Neon border blur halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-500 rounded-2xl blur-lg opacity-25 dark:opacity-30 group-hover:opacity-50 transition duration-500" />

              {/* Terminal Window Card */}
              <div className="relative rounded-2xl bg-[#0B0F19] border border-slate-800 shadow-2xl overflow-hidden text-slate-200">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#111827] border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                      {codeSnippets[activeTab].file}
                    </span>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Copy code"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Architecture Select Tabs */}
                <div className="flex items-center bg-[#090D16]/90 px-3 py-1.5 border-b border-slate-800/60 text-xs">
                  <button
                    onClick={() => setActiveTab("ai")}
                    className={`px-3 py-1 rounded-md font-medium transition-all cursor-pointer ${
                      activeTab === "ai"
                        ? "bg-indigo-600/30 text-indigo-300 border border-indigo-500/40"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    GenAI RAG Enclave
                  </button>
                  <button
                    onClick={() => setActiveTab("cloud")}
                    className={`px-3 py-1 rounded-md font-medium transition-all cursor-pointer ${
                      activeTab === "cloud"
                        ? "bg-blue-600/30 text-blue-300 border border-blue-500/40"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    eBPF Mesh
                  </button>
                  <button
                    onClick={() => setActiveTab("data")}
                    className={`px-3 py-1 rounded-md font-medium transition-all cursor-pointer ${
                      activeTab === "data"
                        ? "bg-emerald-600/30 text-emerald-300 border border-emerald-500/40"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Stream Lakehouse
                  </button>
                </div>

                {/* Code Body */}
                <div className="p-4 font-mono text-xs text-slate-200 bg-[#070A10] overflow-x-auto min-h-[220px]">
                  <pre className="leading-relaxed">
                    <code>{codeSnippets[activeTab].code}</code>
                  </pre>
                </div>

                {/* Live Telemetry Bar */}
                <div className="p-3 bg-[#0E1524] border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    <span>Live Cluster: 1,480 pods</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <span className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-amber-400" /> 8.4ms
                    </span>
                    <span className="flex items-center gap-1">
                      <Server className="w-3 h-3 text-cyan-400" /> 0.00% Err
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
