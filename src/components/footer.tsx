import React from "react";
import Link from "next/link";
import { Cpu, Activity } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#060911] border-t border-slate-800/80 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info & Status */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-emerald-500 p-[1.5px]">
                <div className="w-full h-full bg-[#090D16] rounded-[6px] flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="text-lg font-black tracking-tight text-white">
                Invent<span className="text-indigo-400">IQ</span>
              </span>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Engineering sovereign enterprise AI pipelines, ultra-low latency microservice meshes, and real-time streaming lakehouses for high-scale organizations worldwide.
            </p>

            {/* Live Uptime Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <Activity className="w-3.5 h-3.5" />
              <span>All Systems Operational • 99.999% SLA</span>
            </div>

            {/* Security Standards */}
            <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono text-slate-400">
              <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded">SOC2 TYPE II</span>
              <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded">HIPAA READY</span>
              <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded">ISO 27001</span>
              <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded">GDPR AIR-GAPPED</span>
            </div>
          </div>

          {/* Column: Solutions */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#solutions" className="hover:text-indigo-400 transition-colors">
                  Generative AI Systems
                </a>
              </li>
              <li>
                <a href="/#solutions" className="hover:text-indigo-400 transition-colors">
                  Cloud Native Kubernetes Mesh
                </a>
              </li>
              <li>
                <a href="/#solutions" className="hover:text-indigo-400 transition-colors">
                  Streaming Lakehouse (Flink/Kafka)
                </a>
              </li>
              <li>
                <a href="/#solutions" className="hover:text-indigo-400 transition-colors">
                  Edge APIs & Micro-Frontends
                </a>
              </li>
              <li>
                <a href="/#roi-calculator" className="hover:text-indigo-400 transition-colors">
                  Enterprise FinOps Engine
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Case Studies */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm">Case Studies</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/case-studies/fintech-global-clearing-engine"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Apex Global (2.4M TPS)
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies/healthai-clinical-decision-support"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Novis Health (GenAI EHR)
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies/omnichannel-ecommerce-scalability"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Velocita (150K RPS Flash Sale)
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies/autonomous-supply-chain-telemetry"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Nautilus IoT Fleet Telemetry
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies/enterprise-saas-multi-tenant-mesh"
                  className="hover:text-emerald-400 transition-colors"
                >
                  CloudShield Multi-Tenant Sharding
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Architecture & Company */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm">Enterprise</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#architecture" className="hover:text-indigo-400 transition-colors">
                  Architecture Overview
                </a>
              </li>
              <li>
                <a href="/#tech-stack" className="hover:text-indigo-400 transition-colors">
                  Production Tech Stack
                </a>
              </li>
              <li>
                <a href="/#roi-calculator" className="hover:text-indigo-400 transition-colors">
                  ROI Savings Calculator
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="hover:text-indigo-400 transition-colors">
                  Client Endorsements
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-indigo-400 transition-colors">
                  Schedule Architecture Review
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 mt-12 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-400">
            © {new Date().getFullYear()} InventIQ Inc. All rights reserved. Architected for enterprise scale.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400 hover:text-slate-300 cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-slate-400 hover:text-slate-300 cursor-pointer">
              Security Disclosures
            </span>
            <span className="text-slate-400 hover:text-slate-300 cursor-pointer">
              SOC2 Verification
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
