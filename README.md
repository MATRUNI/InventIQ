# InventIQ | Enterprise Tech Website & Product Showcase

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)](https://react.dev/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

A modern, high-performance tech corporate and product showcase website built with Next.js (App Router), TypeScript, Tailwind CSS, and enterprise-grade design aesthetics. Inspired by industry leaders like [Appinventiv](https://appinventiv.com/) and styled using the **"Cyber-Obsidian & Neon Glow"** theme for B2B tech, SaaS, and engineering agencies.

---

## 🎨 Theme & Design Aesthetics: "Cyber-Obsidian & Neon Glow"

- **Canvas Background**: Deep Obsidian (`#090D16` / `#0B0F19`)
- **Card Surface**: Elevated Glassmorphism (`#111827` with 1px border `#1F2937`)
- **Primary Accent**: Indigo (`#6366F1`) & Electric Blue (`#3B82F6`)
- **Secondary Accent**: Emerald (`#10B981`) & Violet (`#8B5CF6`)
- **Typography**: High Contrast (`#F9FAFB`) & Muted Slate (`#9CA3AF`)
- **Theme Toggle**: Seamless Dark/Light/System switching powered by `next-themes`

---

## 🚀 Key Features & Architectural Modules

1. **Sticky Header & Brand Navigation**:
   - Monogram logo, smooth navigation anchors, real-time enterprise status indicator (`SLA: 99.999% Operational`), Theme Toggle, and "Talk to Architects" CTA.
   - Fully responsive drawer navigation for mobile and tablet devices.

2. **Hero Section & Live Telemetry Terminal**:
   - High-impact dynamic headline and live SLA metrics.
   - Interactive multi-tab code terminal showcasing:
     - `GenAI RAG Enclave` (TypeScript)
     - `eBPF Mesh` (Go)
     - `Stream Lakehouse` (SQL)
   - Live cluster telemetry bar (1,480 pods active, 8.4ms latency, 0.00% error rate).

3. **Trust Ticker**:
   - Enterprise client badges from Fortune 500 and tech industry leaders (Apex Capital, Novis Health, Velocita, CloudShield).

4. **Features Bento Grid**:
   - Asymmetric bento layout highlighting core tech capabilities:
     - *Autonomous AI Intelligence* (99.4% accuracy, -62% token cost)
     - *Sub-50ms Global Edge* (300+ Edge PoPs)
     - *Zero-Trust Security Mesh* (mTLS & eBPF kernel isolation)
     - *3.2M+ Msg/Sec Real-Time Event Lakehouse*
     - *Intelligent FinOps Engine* with interactive cloud spend reduction slider
     - *Extreme Developer Velocity* (45+ deploys daily)

5. **Solutions & Products Showcase**:
   - Categorized offerings with tabbed navigation: *Generative AI Systems*, *Cloud Fabric*, *High-Throughput Streaming*, and *Decoupled Edge APIs*.
   - Production performance benchmark metrics and tech stack badges.
   - Accessible interactive modal previewing deep technical specifications and architecture implementations.

6. **Interactive Case Studies & Portfolio**:
   - Filterable grid across industries (*FinTech*, *HealthTech*, *E-Commerce*, *Logistics*, *DevSecOps*).
   - "Quick Preview" modal for instant on-page review.
   - Dedicated slug routes (`/case-studies/[slug]`) pre-rendered statically with `generateStaticParams`, structured JSON-LD schemas, and executive testimonials.

7. **Interactive Infrastructure ROI Calculator**:
   - Live slider controls:
     - Monthly Cloud Spend ($10k - $500k/mo)
     - Daily API Requests / Events (5M - 250M/day)
     - Engineering Team Size (5 - 200+ engineers)
   - Real-time calculated annual savings, p99 latency speedup, reclaimed engineering hours, and projected 3-year enterprise ROI.

8. **Battle-Tested Technology Ecosystem**:
   - Next.js App Router, TypeScript, Tailwind CSS, Kubernetes, Kafka, ClickHouse, PyTorch, Qdrant, Cilium eBPF, Docker, Terraform, and Multi-Cloud providers.

9. **Enterprise Testimonials**:
   - Verified endorsements from global CTOs and VPs of Engineering with quantified outcomes.

10. **Interactive Lead Gen & Architecture Consultation**:
    - Built with **React Hook Form** + **Zod** schema validation.
    - Fields: Full Name, Work Email, Company, Service Track, Budget Range, Implementation Timeline, and Technical Requirements.
    - Anti-spam honeypot protection.
    - Connected to Next.js API route (`/api/contact`) returning tracking IDs and lead routing feedback.

11. **SEO & Enterprise Security Optimization**:
    - OpenGraph & Twitter metadata tags.
    - Schema.org JSON-LD structured data (`Organization`, `SoftwareApplication`, `TechArticle`).
    - Dynamic XML Sitemap (`/sitemap.xml`) and Robots (`/robots.txt`).
    - HTTP Security Headers in `next.config.ts` (CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server-Side Rendering & Static Site Generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) + `@hookform/resolvers`

---

## 📦 Getting Started

### Prerequisites
- Node.js 20+
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/MATRUNI/InventIQ.git
cd InventIQ

# Install dependencies
npm install

# Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to explore the website.

### Production Build

```bash
# Build optimized static and dynamic routes
npm run build

# Start production server
npm run start
```

---

## 📂 Project Structure

```
inventiq/
├── public/                 # Static assets (favicons, icons)
├── src/
│   ├── app/
│   │   ├── api/contact/    # Server-side lead generation API route
│   │   ├── case-studies/   # Dynamic slug route (/case-studies/[slug])
│   │   ├── globals.css     # Cyber-Obsidian tokens & glassmorphism utilities
│   │   ├── layout.tsx      # RootLayout with ThemeProvider & metadata
│   │   ├── page.tsx        # Enterprise Landing Page
│   │   ├── robots.ts       # Dynamic robots.txt
│   │   └── sitemap.ts      # Dynamic sitemap.xml
│   ├── components/
│   │   ├── navbar.tsx      # Sticky Navigation Bar
│   │   ├── footer.tsx      # Enterprise Footer
│   │   ├── theme-provider.tsx # next-themes wrapper
│   │   ├── sections/       # Modular page sections
│   │   │   ├── hero-section.tsx
│   │   │   ├── trust-ticker.tsx
│   │   │   ├── bento-grid.tsx
│   │   │   ├── solutions-section.tsx
│   │   │   ├── case-studies-section.tsx
│   │   │   ├── roi-calculator.tsx
│   │   │   ├── tech-stack-section.tsx
│   │   │   ├── testimonials-section.tsx
│   │   │   ├── cta-banner.tsx
│   │   │   └── contact-section.tsx
│   │   └── ui/             # Reusable UI primitives (Button, Badge, Modal, ThemeToggle)
│   └── lib/
│       ├── data.ts         # Enterprise datasets & mock metrics
│       ├── types.ts        # TypeScript interfaces
│       └── utils.ts        # cn utility helper
├── next.config.ts          # Security headers & Next.js config
├── tsconfig.json           # Strict TypeScript configuration
└── package.json            # Project dependencies and scripts
```
