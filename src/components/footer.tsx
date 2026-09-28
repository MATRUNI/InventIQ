"use client";

import React from "react";
import Link from "next/link";
import { Cpu, Activity } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-[#05070C] border-t border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 text-xs transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info & Status */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1163FB] via-[#2563EB] to-[#CFF601] p-[1.5px]">
                <div className="w-full h-full bg-[#080B12] rounded-[10px] flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-[#1163FB]" />
                </div>
              </div>
              <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                Invent<span className="text-[#1163FB] dark:text-[#3B82F6]">IQ</span>
              </span>
            </Link>

            <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed max-w-sm">
              Engineering digital products, sovereign enterprise AI pipelines, and distributed cloud meshes that power billions in transactions for Fortune 500s worldwide.
            </p>

            {/* Live Uptime Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono font-bold">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <Activity className="w-3.5 h-3.5" />
              <span>All Systems Operational • 99.999% SLA</span>
            </div>

            {/* Security Standards */}
            <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono text-slate-600 dark:text-slate-400">
              <span className="px-2.5 py-1 bg-white dark:bg-[#0E131E] border border-slate-200 dark:border-white/10 rounded-full font-bold">SOC2 TYPE II</span>
              <span className="px-2.5 py-1 bg-white dark:bg-[#0E131E] border border-slate-200 dark:border-white/10 rounded-full font-bold">HIPAA COMPLIANT</span>
              <span className="px-2.5 py-1 bg-white dark:bg-[#0E131E] border border-slate-200 dark:border-white/10 rounded-full font-bold">ISO 27001</span>
              <span className="px-2.5 py-1 bg-white dark:bg-[#0E131E] border border-slate-200 dark:border-white/10 rounded-full font-bold">DELOITTE FAST 500</span>
            </div>
          </div>

          {/* Column: Solutions */}
          <div className="space-y-3">
            <h4 className="text-slate-900 dark:text-white font-bold text-sm">Capabilities</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#solutions" className="hover:text-[#1163FB] dark:hover:text-[#60A5FA] transition-colors">
                  Generative AI Systems
                </a>
              </li>
              <li>
                <a href="/#solutions" className="hover:text-[#1163FB] dark:hover:text-[#60A5FA] transition-colors">
                  Cloud Native Kubernetes Mesh
                </a>
              </li>
              <li>
                <a href="/#solutions" className="hover:text-[#1163FB] dark:hover:text-[#60A5FA] transition-colors">
                  Streaming Lakehouse (Flink/Kafka)
                </a>
              </li>
              <li>
                <a href="/#solutions" className="hover:text-[#1163FB] dark:hover:text-[#60A5FA] transition-colors">
                  Edge APIs & Micro-Frontends
                </a>
              </li>
              <li>
                <a href="/#roi-calculator" className="hover:text-[#1163FB] dark:hover:text-[#60A5FA] transition-colors">
                  Enterprise FinOps Engine
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Case Studies */}
          <div className="space-y-3">
            <h4 className="text-slate-900 dark:text-white font-bold text-sm">Featured Work</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/case-studies/fintech-global-clearing-engine"
                  className="hover:text-[#1163FB] dark:hover:text-[#60A5FA] transition-colors"
                >
                  Apex Global (2.4M TPS)
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies/healthai-clinical-decision-support"
                  className="hover:text-[#1163FB] dark:hover:text-[#60A5FA] transition-colors"
                >
                  Novis Health (GenAI Clinical)
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies/omnichannel-ecommerce-scalability"
                  className="hover:text-[#1163FB] dark:hover:text-[#60A5FA] transition-colors"
                >
                  Velocita (150K RPS Flash Sale)
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies/autonomous-supply-chain-telemetry"
                  className="hover:text-[#1163FB] dark:hover:text-[#60A5FA] transition-colors"
                >
                  Nautilus IoT Fleet Telemetry
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies/enterprise-saas-multi-tenant-mesh"
                  className="hover:text-[#1163FB] dark:hover:text-[#60A5FA] transition-colors"
                >
                  CloudShield Multi-Tenant Sharding
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Architecture & Company */}
          <div className="space-y-3">
            <h4 className="text-slate-900 dark:text-white font-bold text-sm">Enterprise</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#architecture" className="hover:text-[#1163FB] dark:hover:text-[#60A5FA] transition-colors">
                  Architecture Overview
                </a>
              </li>
              <li>
                <a href="/#tech-stack" className="hover:text-[#1163FB] dark:hover:text-[#60A5FA] transition-colors">
                  Production Tech Stack
                </a>
              </li>
              <li>
                <a href="/#roi-calculator" className="hover:text-[#1163FB] dark:hover:text-[#60A5FA] transition-colors">
                  ROI Savings Calculator
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="hover:text-[#1163FB] dark:hover:text-[#60A5FA] transition-colors">
                  Client Endorsements
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-[#1163FB] dark:hover:text-[#60A5FA] transition-colors">
                  Schedule Architecture Review
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 mt-12 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} InventIQ Inc. All rights reserved. Global product & cloud engineering agency.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 cursor-pointer">
              Security Disclosures
            </span>
            <span className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 cursor-pointer">
              SOC2 Verification
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
