import { SolutionItem, CaseStudyItem, BentoFeature, TestimonialItem } from "./types";

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: "generative-ai",
    title: "Enterprise Generative AI & Autonomous Agent Systems",
    tagline: "Deploy secure, deterministic LLM architectures fine-tuned on proprietary data.",
    category: "ai",
    badge: "GenAI Core 2.4",
    description:
      "Transform business processes with sovereign LLM pipelines, Retrieval-Augmented Generation (RAG) with sub-10ms vector lookups, multi-agent orchestrations, and full data privacy sandboxing.",
    metrics: [
      { label: "Vector Search Latency", value: "<8.5ms" },
      { label: "Accuracy Gain via RAG", value: "+94.2%" },
      { label: "Token Cost Reduction", value: "-62%" },
      { label: "Data Leakage Risk", value: "0.00%" },
    ],
    features: [
      "Hybrid RAG with dynamic re-ranking & dense-sparse embedding fusion",
      "Deterministic agent workflows with fallback state machines",
      "Enterprise guardrails for PII redaction and compliance gating",
      "On-premise & private VPC deployment (vLLM, TensorRT-LLM, Ollama)",
    ],
    techStack: ["PyTorch", "LangChain", "Qdrant", "vLLM", "Next.js", "FastAPI"],
    architectureSnippet: {
      title: "RAG Pipeline Query Execution",
      language: "typescript",
      code: `// Sovereign RAG Ingestion & Vector Retrieval
import { VectorPipeline, HybridRetriever, GuardrailFilter } from '@inventiq/ai-core';

export async function processEnterpriseQuery(query: string, tenantId: string) {
  const sanitized = await GuardrailFilter.redactPII(query);
  const context = await HybridRetriever.query({
    denseEmbeddings: 'text-embedding-3-large',
    sparseModel: 'bm25-enterprise',
    filter: { tenantId, classification: 'CONFIDENTIAL' },
    topK: 12,
  });

  return VectorPipeline.streamSynthesizedAnswer({
    systemPrompt: 'ENTERPRISE_SECURE_AGENT_V4',
    context,
    userQuery: sanitized,
    temperature: 0.1,
  });
}`,
    },
  },
  {
    id: "cloud-modernization",
    title: "Multi-Cloud Native Architecture & Kubernetes Mesh",
    tagline: "High-resilience, zero-downtime infrastructure engineered for global scale.",
    category: "cloud",
    badge: "Cloud Fabric v5",
    description:
      "Modernize legacy monoliths into distributed cloud-native fabrics. We build multi-region active-active clusters with automated failover, declarative GitOps, and FinOps cloud spend governance.",
    metrics: [
      { label: "Infrastructure Availability", value: "99.999%" },
      { label: "Failover RTO", value: "<1.8s" },
      { label: "Compute Utilization", value: "+78%" },
      { label: "Monthly Cloud Savings", value: "48%" },
    ],
    features: [
      "Multi-cloud active-active failover across AWS, Google Cloud, and Azure",
      "Service mesh security using Istio & Cilium eBPF network telemetry",
      "Infrastructure as Code (Terraform, OpenTofu, Pulumi) with policy-as-code",
      "Continuous GitOps deployment pipelines with ArgoCD & canary analysis",
    ],
    techStack: ["Kubernetes", "AWS EKS", "Terraform", "Cilium eBPF", "ArgoCD", "Prometheus"],
    architectureSnippet: {
      title: "eBPF Network Topology Controller",
      language: "go",
      code: `// Autonomous eBPF Load Balancer & Traffic Routing
package main

import (
  "context"
  "github.com/inventiq/mesh/ebpf"
  "github.com/inventiq/mesh/telemetry"
)

func RouteIngressTraffic(ctx context.Context, packet *ebpf.Packet) error {
  targetPod := ebpf.SelectLeastLatencyPod(packet.ServiceHash)
  if targetPod.HealthScore < 0.95 {
    telemetry.RecordFailover(packet.ServiceHash)
    return ebpf.RerouteToCanary(packet)
  }
  return ebpf.ZeroCopyForward(packet, targetPod.Address)
}`,
    },
  },
  {
    id: "data-engineering",
    title: "High-Throughput Streaming & Real-Time Lakehouse",
    tagline: "Ingest, transform, and analyze billions of daily events with sub-second freshness.",
    category: "data",
    badge: "StreamLake 3.0",
    description:
      "Eliminate batch delays. Our streaming architectures combine Apache Kafka, Apache Flink, and Iceberg Lakehouses to power real-time fraud detection, dynamic pricing, and instant executive analytics.",
    metrics: [
      { label: "Peak Ingestion Throughput", value: "3.2M msg/s" },
      { label: "End-to-End Pipeline Latency", value: "<180ms" },
      { label: "Storage Optimization", value: "65% less" },
      { label: "Query Speedup vs Legacy", value: "14x" },
    ],
    features: [
      "Real-time stateful stream processing with Apache Flink & Kafka Streams",
      "Modern open-table Lakehouse architectures on Apache Iceberg & ClickHouse",
      "Automated schema governance, CDC (Change Data Capture) via Debezium",
      "Unified semantic layer delivering real-time GraphQL & SQL interfaces",
    ],
    techStack: ["Apache Kafka", "Flink", "ClickHouse", "Apache Iceberg", "dbt", "Snowflake"],
    architectureSnippet: {
      title: "Stateful Stream Join Definition",
      language: "sql",
      code: `-- Real-Time Fraud Score Calculation with Temporal Windows
SELECT
  t.transaction_id,
  t.card_hash,
  t.amount_usd,
  b.velocity_5min,
  CASE
    WHEN t.amount_usd > 5000 AND b.velocity_5min > 8 THEN 'HIGH_RISK_BLOCK'
    ELSE 'APPROVED'
  END AS risk_decision
FROM Transactions t /*+ WATERMARK(timestamp, INTERVAL '2' SECOND) */
JOIN BehaviorProfile b /*+ TEMPORAL TABLE */
  ON t.card_hash = b.card_hash;`,
    },
  },
  {
    id: "microservices-edge",
    title: "Decoupled Micro-Frontends & Global Edge APIs",
    tagline: "Deliver instantaneous sub-50ms experiences to end users anywhere on Earth.",
    category: "microservices",
    badge: "EdgeMesh v2",
    description:
      "Empower large engineering teams with modular micro-frontend architectures, serverless edge workers, and distributed caching layers that eliminate network hops and accelerate time to market.",
    metrics: [
      { label: "Global Edge TTFB", value: "<32ms" },
      { label: "Core Web Vitals Score", value: "99/100" },
      { label: "Deployment Frequency", value: "45x / day" },
      { label: "Lighthouse Performance", value: "98+" },
    ],
    features: [
      "Edge-rendered personalized dynamic pages via Cloudflare Workers & Vercel",
      "Independent team deployments without monolithic release bottlenecks",
      "Stale-while-revalidate tiered caching with instant purge webhooks",
      "End-to-end automated synthetic monitoring and automated rollbacks",
    ],
    techStack: ["Next.js App Router", "TypeScript", "Tailwind CSS", "Cloudflare Workers", "GraphQL"],
    architectureSnippet: {
      title: "Edge Worker In-Flight Request Synthesizer",
      language: "typescript",
      code: `// Edge-Computed Dynamic Cache Layer
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const country = request.headers.get('cf-ipcountry') || 'US';
    
    // Check Multi-Region Edge KV
    const cached = await env.EDGE_CACHE.get(\`\${country}:\${url.pathname}\`);
    if (cached) {
      return new Response(cached, {
        headers: { 'Content-Type': 'application/json', 'X-Edge-Hit': 'true' }
      });
    }

    const payload = await computeGeoLocalizedData(url, country);
    await env.EDGE_CACHE.put(\`\${country}:\${url.pathname}\`, JSON.stringify(payload), { expirationTtl: 300 });
    return Response.json(payload);
  }
};`,
    },
  },
];

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    slug: "fintech-global-clearing-engine",
    title: "Ultra-Low Latency Clearing & Settlement Engine for Tier-1 Investment Bank",
    client: "Apex Global Capital",
    industry: "FinTech",
    summary:
      "Architected an ultra-fast event-driven ledger and reconciliation engine handling 2.4M transactions per second with sub-12ms p99 settlement guarantees.",
    challenge:
      "Apex's legacy mainframe batch reconciliation took 6 hours each night, creating massive settlement credit risks and regulatory reporting friction under revised Basel IV standards.",
    solution:
      "We engineered a distributed event-sourced architecture using Apache Kafka and memory-mapped Rust workers, orchestrated within private Kubernetes clusters across Frankfurt, New York, and Tokyo.",
    results: [
      { metric: "2.4M", label: "Peak TPS Handled" },
      { metric: "11.8ms", label: "p99 Settlement Latency" },
      { metric: "$38M", label: "Annual Capital Lockup Saved" },
      { metric: "100%", label: "Real-time Regulatory Compliance" },
    ],
    technologies: ["Rust", "Apache Kafka", "Kubernetes", "ClickHouse", "gRPC", "Next.js"],
    readTime: "5 min read",
    featured: true,
    testimonial: {
      quote:
        "InventIQ delivered what two prior tier-1 consulting firms said was mathematically impossible within our compliance envelope. Our settlement engine is now the benchmark of Wall Street.",
      author: "Marcus Vance",
      role: "Global Chief Technology Officer",
      company: "Apex Global Capital",
    },
    architectureHighlights: [
      "Zero-allocation memory serialization using FlatBuffers over TCP/gRPC",
      "Active-active Byzantine fault-tolerant state machine replication",
      "Automated real-time reconciliation with ledger cryptographic verification",
      "Executive real-time liquidity dashboard built on Next.js & WebSockets",
    ],
  },
  {
    slug: "healthai-clinical-decision-support",
    title: "HIPAA-Compliant Diagnostic Assistant & Multi-Modal Clinical Intelligence",
    client: "Novis Health Sciences",
    industry: "HealthTech",
    summary:
      "Developed a generative AI clinical copilot analyzing patient EHR records, radiology reports, and lab results to assist 45,000+ medical practitioners.",
    challenge:
      "Physicians spent 3.5 hours per day on EHR documentation and manual search across fragmented clinical histories, leading to physician burnout and delayed triage decisions.",
    solution:
      "Engineered an on-premise RAG platform fine-tuned on clinical nomenclature with strict differential privacy, zero PII data persistence, and verified hallucination guardrails.",
    results: [
      { metric: "-72%", label: "Physician EHR Charting Time" },
      { metric: "40M+", label: "EHR Documents Indexed" },
      { metric: "99.4%", label: "Diagnostic Accuracy Agreement" },
      { metric: "100%", label: "HIPAA & SOC2 Type II Certified" },
    ],
    technologies: ["PyTorch", "vLLM", "Qdrant Vector DB", "FastAPI", "React", "TypeScript"],
    readTime: "6 min read",
    featured: true,
    testimonial: {
      quote:
        "The diagnostic assistant is phenomenal. It surfaces critical medical histories in seconds that previously required 20 minutes of digging through historical PDFs.",
      author: "Dr. Elena Rostova",
      role: "Chief Medical Information Officer",
      company: "Novis Health Sciences",
    },
    architectureHighlights: [
      "Multi-modal embedding model for combined text, labs, and radiology reports",
      "Cryptographic token isolation guaranteeing zero tenant cross-contamination",
      "Automated citations with direct links to primary clinical literature",
      "Local offline inference capability for rural hospital resilience",
    ],
  },
  {
    slug: "omnichannel-ecommerce-scalability",
    title: "Headless E-Commerce Platform Scaling to 150K RPS on Flash Sales",
    client: "Velocita Global Retail",
    industry: "E-Commerce",
    summary:
      "Transformed a monolithic Magento storefront into an ultra-fast headless micro-frontend commerce experience generating $420M in seasonal sales.",
    challenge:
      "The client experienced repeated outages during peak holiday flash sales, with page load times exceeding 4.8 seconds and cart abandonment rates reaching 68%.",
    solution:
      "Designed a modern decoupled architecture using Next.js App Router, edge workers, and distributed Redis cluster caching with instant inventory synchronizations.",
    results: [
      { metric: "0.4s", label: "Median Edge Page Load" },
      { metric: "150,000", label: "Peak Requests / Second" },
      { metric: "+43%", label: "Checkout Conversion Lift" },
      { metric: "0.0%", label: "Downtime Over Black Friday Week" },
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Redis", "Stripe API", "AWS"],
    readTime: "4 min read",
    featured: true,
    testimonial: {
      quote:
        "We achieved our record Black Friday revenue with zero technical hiccups. InventIQ's edge engineering is simply world class.",
      author: "Julian Chen",
      role: "VP of Digital Commerce",
      company: "Velocita Retail Group",
    },
    architectureHighlights: [
      "Edge-rendered dynamic catalog pages with instantaneous cart updates",
      "Optimistic locking distributed inventory reservation queue",
      "Automated WebP/AVIF image transformation pipeline reducing bandwidth 54%",
      "Seamless payment gateway orchestration with automated failover",
    ],
  },
  {
    slug: "autonomous-supply-chain-telemetry",
    title: "IoT Edge Telemetry & Predictive Fleet Maintenance Platform",
    client: "Nautilus Marine Logistics",
    industry: "Logistics",
    summary:
      "Built a global satellite-connected IoT data streaming pipeline monitoring 1,200 cargo vessels and 90,000 engine sensors in real time.",
    challenge:
      "Unplanned mid-voyage engine failures cost up to $2.5M per incident, with spotty satellite connectivity preventing predictive insights.",
    solution:
      "Deployed lightweight edge compute gateways aboard each vessel running compressed anomaly detection models, syncing with cloud data lakes via intelligent mesh buffering.",
    results: [
      { metric: "$42M", label: "Prevented Breakdown Costs" },
      { metric: "99.98%", label: "Sensor Uptime across Fleet" },
      { metric: "-31%", label: "Fuel Inefficiency Reduction" },
      { metric: "1,200+", label: "Vessels Under Real-Time Watch" },
    ],
    technologies: ["Go", "MQTT", "ClickHouse", "TimescaleDB", "Docker", "Mapbox GL"],
    readTime: "5 min read",
    featured: false,
    testimonial: {
      quote:
        "InventIQ created a resilient edge-to-cloud mesh that functions effortlessly even when ships are in the middle of the Pacific Ocean without satellite signal.",
      author: "Captain Arthur Sterling",
      role: "Director of Global Fleet Operations",
      company: "Nautilus Logistics",
    },
    architectureHighlights: [
      "Offline-first SQLite edge buffers with prioritized satellite sync queues",
      "On-device vibration FFT analysis for pre-failure bearing detection",
      "Interactive 3D digital twin visualization built with Three.js and WebGL",
      "Automated automated work-order generation dispatched to destination ports",
    ],
  },
  {
    slug: "enterprise-saas-multi-tenant-mesh",
    title: "Zero-Downtime Database Sharding & Global Multi-Tenant Mesh",
    client: "CloudShield Security",
    industry: "DevSecOps",
    summary:
      "Redesigned the multi-tenant data tier for a cybersecurity SaaS platform, achieving seamless tenant scaling to 25,000 enterprise accounts.",
    challenge:
      "Rapid enterprise adoption caused database connection exhaustion, noisy neighbor problems, and enterprise demands for geographically isolated data sovereignty.",
    solution:
      "Implemented cell-based architecture with dynamic tenant sharding, automated cross-region database migration, and strict SOC2 encryption-at-rest envelopes.",
    results: [
      { metric: "25,000+", label: "Active Enterprise Tenants" },
      { metric: "100%", label: "Zero-Downtime Migrations" },
      { metric: "<15ms", label: "Cross-Tenant Query Isolation" },
      { metric: "-55%", label: "Database Maintenance Overhead" },
    ],
    technologies: ["PostgreSQL", "Vitess", "Kubernetes", "Go", "Terraform", "Next.js"],
    readTime: "4 min read",
    featured: false,
    testimonial: {
      quote:
        "The cell-based sharding architecture InventIQ built enabled us to sign Fortune 50 banks who demanded strict cryptographic tenant isolation.",
      author: "Sarah Lindqvist",
      role: "VP of Cloud Platform",
      company: "CloudShield Inc.",
    },
    architectureHighlights: [
      "Vitess-powered horizontal database sharding with zero query rewriting",
      "Hardware security module (HSM) per-tenant encryption key rotation",
      "Automated canary traffic draining with synthetic transaction verification",
      "Real-time resource quota enforcement via Redis token bucket filters",
    ],
  },
];

export const BENTO_FEATURES: BentoFeature[] = [
  {
    id: "ai-copilot",
    title: "Autonomous AI Intelligence",
    subtitle: "Deterministic Enterprise Inference",
    description:
      "Self-healing LLM pipelines with sub-10ms RAG vector retrieval, structured JSON enforcement, and verifiable citation trails.",
    category: "Artificial Intelligence",
    colSpan: "md:col-span-2",
    badge: "99.4% Accuracy",
    accentColor: "#6366F1",
  },
  {
    id: "edge-performance",
    title: "Sub-50ms Global Edge",
    subtitle: "Worldwide Distributed Mesh",
    description:
      "Zero-cold-start edge workers deployed across 300+ PoPs worldwide with smart multi-tier cache invalidation.",
    category: "Edge Infrastructure",
    colSpan: "md:col-span-1",
    badge: "<32ms TTFB",
    accentColor: "#3B82F6",
  },
  {
    id: "zero-trust",
    title: "Zero-Trust Security Mesh",
    subtitle: "SOC2 Type II & HIPAA Certified",
    description:
      "mTLS micro-segmentation, eBPF-level kernel traffic inspection, and automated secrets rotation that exceeds government standards.",
    category: "Cybersecurity",
    colSpan: "md:col-span-1",
    badge: "Air-Gapped Ready",
    accentColor: "#10B981",
  },
  {
    id: "high-throughput",
    title: "3M+ Msg/Sec Streaming Lakehouse",
    subtitle: "Real-time Event Processing",
    description:
      "Continuous data pipelines powered by Apache Kafka, ClickHouse, and Iceberg for instantaneous queries without ETL lag.",
    category: "Data Engineering",
    colSpan: "md:col-span-2",
    badge: "Zero-Lag Pipeline",
    accentColor: "#8B5CF6",
  },
  {
    id: "finops-optimization",
    title: "Intelligent FinOps Engine",
    subtitle: "Automated Cloud Cost Reductions",
    description:
      "Dynamic spot instance arbitrage and predictive pod downsizing that slices infrastructure bills by an average of 48%.",
    category: "Cloud Economics",
    colSpan: "md:col-span-2",
    badge: "-48% Cloud Spend",
    accentColor: "#06B6D4",
  },
  {
    id: "ci-cd-velocity",
    title: "Extreme Developer Velocity",
    subtitle: "Instant Preview Environments",
    description:
      "Sub-2 minute ephemeral preview environments with automated schema mocking and synthetic contract validation.",
    category: "Platform Engineering",
    colSpan: "md:col-span-1",
    badge: "45x Deploys/Day",
    accentColor: "#F59E0B",
  },
];

export const TRUSTED_COMPANIES = [
  { name: "Apex Capital", logo: "APEX", industry: "FinTech" },
  { name: "Novis Health", logo: "NOVIS", industry: "Healthcare" },
  { name: "Velocita", logo: "VELOCITA", industry: "Retail" },
  { name: "CloudShield", logo: "SHIELD", industry: "DevSecOps" },
  { name: "Nautilus Marine", logo: "NAUTILUS", industry: "Logistics" },
  { name: "Aether Dynamics", logo: "AETHER", industry: "AeroTech" },
  { name: "QuantIQ", logo: "QUANTIQ", industry: "AI Compute" },
  { name: "Vanguard Pay", logo: "VANGUARD", industry: "Payments" },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    quote:
      "InventIQ re-architected our legacy clearing engine in 4 months. We handled a record 2.4 million transactions per second on market volatility day with zero queue lag.",
    author: "Marcus Vance",
    role: "Global Chief Technology Officer",
    company: "Apex Global Capital",
    rating: 5,
    highlight: "2.4M TPS Handled Flawlessly",
  },
  {
    id: "2",
    quote:
      "Their generative AI engineering team understands strict enterprise compliance. The clinical assistant they built passed our external HIPAA and SOC2 audits on the first pass.",
    author: "Dr. Elena Rostova",
    role: "Chief Medical Information Officer",
    company: "Novis Health Sciences",
    rating: 5,
    highlight: "-72% Charting Time for 45K Doctors",
  },
  {
    id: "3",
    quote:
      "We slashed our AWS compute bills by $140,000 every single month while dropping our median page load times to 400 milliseconds globally.",
    author: "Julian Chen",
    role: "VP of Digital Commerce",
    company: "Velocita Retail Group",
    rating: 5,
    highlight: "$1.68M Annual Cloud Cost Saved",
  },
  {
    id: "4",
    quote:
      "InventIQ feels like having an elite SWAT team of MIT-level cloud architects directly embedded in our engineering department.",
    author: "Sarah Lindqvist",
    role: "VP of Cloud Platform",
    company: "CloudShield DevSecOps",
    rating: 5,
    highlight: "100% Zero-Downtime Sharding",
  },
];

export const STATS_HIGHLIGHTS = [
  { value: "99.999%", label: "Uptime SLA Guarantee", caption: "Across all enterprise clusters" },
  { value: "3.2M+", label: "Peak Events / Sec", caption: "Handled across real-time lakehouses" },
  { value: "-48%", label: "Avg Cloud Cost Reduction", caption: "Via automated FinOps engineering" },
  { value: "<32ms", label: "Global Edge Latency", caption: "Across 300+ worldwide edge nodes" },
];

export const TECH_STACK_ITEMS = [
  { name: "Next.js", category: "Frontend & SSR", badge: "App Router" },
  { name: "TypeScript", category: "Type Safety", badge: "Strict" },
  { name: "Tailwind CSS", category: "Design System", badge: "v4" },
  { name: "Kubernetes", category: "Orchestration", badge: "Multi-Cloud" },
  { name: "Apache Kafka", category: "Streaming", badge: "Low-Latency" },
  { name: "ClickHouse", category: "OLAP Lakehouse", badge: "Real-Time" },
  { name: "PyTorch", category: "Machine Learning", badge: "LLM Fine-Tune" },
  { name: "Qdrant", category: "Vector Engine", badge: "Dense/Sparse" },
  { name: "Docker", category: "Containers", badge: "Microservices" },
  { name: "Terraform", category: "Infrastructure", badge: "GitOps" },
  { name: "Cilium eBPF", category: "Networking", badge: "Zero-Trust" },
  { name: "AWS & GCP", category: "Cloud Providers", badge: "Multi-Region" },
];
