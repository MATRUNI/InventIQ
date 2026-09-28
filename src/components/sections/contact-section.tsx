"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Send,
  CheckCircle,
  Mail,
  Building,
  User,
  MessageSquare,
  ShieldAlert,
  Clock,
  CheckCircle2,
} from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please provide a valid work email address"),
  company: z.string().min(2, "Company name is required"),
  service: z.string().min(1, "Please select an engineering service"),
  budget: z.string().min(1, "Please select an estimated budget range"),
  timeline: z.string().min(1, "Please select an expected project timeline"),
  message: z.string().min(10, "Please provide at least 10 characters describing your technical requirements"),
  honeypot: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    message: string;
    leadId?: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      budget: "",
      timeline: "",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSubmissionResult({
          success: true,
          message: resData.message,
          leadId: resData.leadId,
        });
        reset();
      } else {
        setSubmissionResult({
          success: false,
          message: resData.error || "Submission failed. Please try again.",
        });
      }
    } catch {
      setSubmissionResult({
        success: false,
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent transition-colors duration-200">
      {/* Background glow highlights */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Architecture Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                <span className="h-2 w-2 rounded-full bg-[#1163FB] animate-pulse" />
                <span>Direct Access to Principal Architects</span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-slate-950 dark:text-white">
                Schedule Your{" "}
                <span className="text-[#1163FB] dark:text-[#3B82F6]">
                  Architecture Review.
                </span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                Connect directly with our Principal Solutions Architects. We do not do high-pressure sales pitches—we conduct concrete technical reviews of your bottlenecks, cost leaks, and scale requirements.
              </p>
            </div>

            {/* Value Guarantees */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 bg-white dark:bg-[#0E131E] border border-slate-200 dark:border-white/10 p-4 rounded-2xl">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Strict Non-Disclosure Guarantee
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    We execute mutual NDAs prior to any code or infrastructure telemetry inspection.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white dark:bg-[#0E131E] border border-slate-200 dark:border-white/10 p-4 rounded-2xl">
                <Clock className="w-5 h-5 text-[#1163FB] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    4-Hour Business SLA Response
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Every inbound inquiry is reviewed by an Engineering Director, not an automated sales bot.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white dark:bg-[#0E131E] border border-slate-200 dark:border-white/10 p-4 rounded-2xl">
                <ShieldAlert className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Comprehensive Technical Blueprint
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Receive a 12-page written architectural roadmap with latency estimates and FinOps savings.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 space-y-2 font-mono">
              <div>Direct Enterprise Email: <span className="text-slate-900 dark:text-white font-medium">architects@inventiq.tech</span></div>
              <div>Global Response Center: <span className="text-slate-900 dark:text-white font-medium">San Francisco • London • Singapore</span></div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Lead Gen Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-white dark:bg-[#0E131E] border border-slate-200 dark:border-white/10 p-8 sm:p-10 shadow-2xl relative">
              {/* Submission status feedback toast */}
              <AnimatePresence>
                {submissionResult && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mb-6 p-4 rounded-xl border flex items-start gap-3 ${
                      submissionResult.success
                        ? "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-200"
                        : "bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-500/40 text-rose-800 dark:text-rose-200"
                    }`}
                  >
                    {submissionResult.success ? (
                      <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <ShieldAlert className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <div className="font-semibold text-sm">
                        {submissionResult.success ? "Request Dispatched Successfully" : "Submission Notice"}
                      </div>
                      <div className="text-xs mt-0.5">{submissionResult.message}</div>
                      {submissionResult.leadId && (
                        <div className="text-[11px] font-mono mt-1 opacity-80">
                          Tracking ID: {submissionResult.leadId}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Honeypot field (hidden from humans, catches bots) */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-label="Leave this field blank"
                  id="contact-honeypot"
                  className="hidden"
                  {...register("honeypot")}
                />

                {/* Name & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Elena Rostova"
                      {...register("name")}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                        errors.name ? "border-rose-500" : "border-slate-300 dark:border-slate-800"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-500 dark:text-rose-400 font-medium">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      Work Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="name@company.com"
                      {...register("email")}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                        errors.email ? "border-rose-500" : "border-slate-300 dark:border-slate-800"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-500 dark:text-rose-400 font-medium">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Company & Primary Service Area */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-company" className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-slate-400" />
                      Company Name *
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      placeholder="e.g. Apex Global"
                      {...register("company")}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                        errors.company ? "border-rose-500" : "border-slate-300 dark:border-slate-800"
                      }`}
                    />
                    {errors.company && (
                      <p className="text-[11px] text-rose-500 dark:text-rose-400 font-medium">{errors.company.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-service" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Primary Service Focus *
                    </label>
                    <select
                      id="contact-service"
                      {...register("service")}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                        errors.service ? "border-rose-500" : "border-slate-300 dark:border-slate-800"
                      }`}
                    >
                      <option value="" className="bg-white dark:bg-[#111827]">Select Architecture Track</option>
                      <option value="Generative AI & Agent Systems" className="bg-white dark:bg-[#111827]">
                        Generative AI & Agent Systems
                      </option>
                      <option value="Multi-Cloud & Kubernetes Mesh" className="bg-white dark:bg-[#111827]">
                        Multi-Cloud & Kubernetes Mesh
                      </option>
                      <option value="Streaming Lakehouse & Data Platform" className="bg-white dark:bg-[#111827]">
                        Streaming Lakehouse & Data Platform
                      </option>
                      <option value="Edge APIs & Micro-Frontends" className="bg-white dark:bg-[#111827]">
                        Edge APIs & Micro-Frontends
                      </option>
                      <option value="Comprehensive Architecture Audit" className="bg-white dark:bg-[#111827]">
                        Comprehensive Architecture Audit
                      </option>
                    </select>
                    {errors.service && (
                      <p className="text-[11px] text-rose-500 dark:text-rose-400 font-medium">{errors.service.message}</p>
                    )}
                  </div>
                </div>

                {/* Budget & Target Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-budget" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Estimated Project Scope / Budget *
                    </label>
                    <select
                      id="contact-budget"
                      {...register("budget")}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                        errors.budget ? "border-rose-500" : "border-slate-300 dark:border-slate-800"
                      }`}
                    >
                      <option value="" className="bg-white dark:bg-[#111827]">Select Budget Range</option>
                      <option value="$25k - $50k" className="bg-white dark:bg-[#111827]">$25k - $50k (Assessment / PoC)</option>
                      <option value="$50k - $150k" className="bg-white dark:bg-[#111827]">$50k - $150k (Production Service)</option>
                      <option value="$150k - $500k" className="bg-white dark:bg-[#111827]">$150k - $500k (Full Modernization)</option>
                      <option value="$500k+" className="bg-white dark:bg-[#111827]">$500k+ (Enterprise Overhaul)</option>
                    </select>
                    {errors.budget && (
                      <p className="text-[11px] text-rose-500 dark:text-rose-400 font-medium">{errors.budget.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-timeline" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Target Implementation Timeline *
                    </label>
                    <select
                      id="contact-timeline"
                      {...register("timeline")}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                        errors.timeline ? "border-rose-500" : "border-slate-300 dark:border-slate-800"
                      }`}
                    >
                      <option value="" className="bg-white dark:bg-[#111827]">Select Target Timeline</option>
                      <option value="Immediate (< 30 days)" className="bg-white dark:bg-[#111827]">Immediate (&lt; 30 days)</option>
                      <option value="1 to 3 months" className="bg-white dark:bg-[#111827]">1 to 3 months</option>
                      <option value="3 to 6 months" className="bg-white dark:bg-[#111827]">3 to 6 months</option>
                      <option value="Exploratory / Planning" className="bg-white dark:bg-[#111827]">Exploratory / Planning</option>
                    </select>
                    {errors.timeline && (
                      <p className="text-[11px] text-rose-500 dark:text-rose-400 font-medium">{errors.timeline.message}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                    Architecture Objectives & Requirements *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Briefly describe your existing architecture, performance bottlenecks, or GenAI use case..."
                    {...register("message")}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                      errors.message ? "border-rose-500" : "border-slate-300 dark:border-slate-800"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-500 dark:text-rose-400 font-medium">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="xl"
                  variant="electric"
                  isLoading={isSubmitting}
                  className="w-full justify-center group text-base font-bold rounded-full"
                >
                  <span>Submit Architecture Inquiry</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1.5 transition-transform duration-300 ml-2">
                    <Send className="w-3.5 h-3.5 text-white" />
                  </div>
                </Button>

                <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
                  By submitting, you agree to our standard mutual enterprise confidentiality agreement.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
