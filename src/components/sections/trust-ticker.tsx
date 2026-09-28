"use client";

import React from "react";
import { CheckCircle2, Shield } from "lucide-react";

export function TrustTicker() {
  const enterprisePartners = [
    { name: "GOOGLE CLOUD", tier: "Premier Partner", category: "AI & Infrastructure" },
    { name: "KPMG", tier: "Enterprise Audit", category: "Compliance & Advisory" },
    { name: "IKEA", tier: "Global Architecture", category: "Omnichannel Scale" },
    { name: "DOMINO'S", tier: "High-Volume Delivery", category: "Edge Logistics" },
    { name: "AMAZON AWS", tier: "Advanced Tier", category: "Cloud Architecture" },
    { name: "DATABRICKS", tier: "Lakehouse Partner", category: "Data Engineering" },
    { name: "SNOWFLAKE", tier: "Select Tech", category: "Streaming Analytics" },
    { name: "CLOUDFLARE", tier: "Workers Network", category: "Global Edge Mesh" },
    { name: "APEX CAPITAL", tier: "Tier-1 Clearing", category: "FinTech 2.4M TPS" },
    { name: "NOVIS HEALTH", tier: "HIPAA Clinical", category: "Sovereign AI" },
  ];

  // Duplicate for smooth seamless infinite scroll
  const marqueeList = [...enterprisePartners, ...enterprisePartners];

  return (
    <section className="py-14 border-y border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-[#080B12] overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="h-2 w-2 rounded-full bg-[#1163FB] animate-ping" />
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Trusted by Global Enterprises & Fortune 500 Innovators
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs font-medium text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% Zero Data Breach Record
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span>SOC2 Type II • ISO 27001</span>
          </div>
        </div>
      </div>

      {/* Infinite Smooth Scrolling Marquee Container */}
      <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex items-center gap-6 py-2">
          {marqueeList.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white dark:bg-[#0E131E] border border-slate-200/80 dark:border-white/10 hover:border-[#1163FB]/50 shadow-sm hover:shadow-md transition-[border-color,box-shadow] duration-200 group shrink-0 cursor-default"
            >
              <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-[#1163FB] transition-colors" />
              <div>
                <span className="text-sm font-black font-mono tracking-widest text-slate-800 dark:text-slate-200 group-hover:text-[#1163FB] transition-colors">
                  {partner.name}
                </span>
                <div className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                  {partner.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
