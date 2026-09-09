# ADU Alliance — Master Project Progress & Architecture Tracking (`PROGRESS.md`)

> **Project:** ADU Alliance (adualliance.com)  
> **Market:** Orange County, California (All 34 Municipalities)  
> **Business Model:** Rank & Rent / High-Intent Inbound Lead Generation Network  
> **Contractor Relationship:** Verified Alliance of CSLB-Licensed California General Contractors (Class B)  
> **Active Tech Stack:** Next.js 15.5 + React 19 + TypeScript + Tailwind CSS + Framer Motion  
> **CRM & Analytics:** GoHighLevel (GHL) Form Embed + Google Tag Manager (`GTM-KNC2GR4`) + GA4 (`G-C1EYM0JCZC`)  
> **Living Document Status:** Updated with Zero-Tolerance Contrast Fixes, GHL Skeleton Loader, Smooth Navigation Anchors, and 378+ Route SSG Inventory.

---

## 📌 Executive Status Dashboard

* **Build Health:** `npx tsc --noEmit` passing with **0 errors**, `npm run build` passing with **0 warnings** across **378+ pre-rendered static routes (SSG)** (including 323 live WordPress blog posts).
* **Git Repository:** `https://github.com/mbrown1837/adu-alliance` (`main` branch active, commit `bed9914`).
* **Direct Lead Channel:** `(657) 298-4061` (Click-to-Call) + Official GoHighLevel (GHL) Form Embed (`5SviqisRQjnrGLdX2rLq`).
* **CRM Automation:** Automatically creates Opportunity in GHL Pipeline `8vxPfCoTrRLBRfoTYxUM` (Stage: `d7870240-23a9-4815-af1b-45d52f79537a`) and adds formatted contact project notes.
* **Legal Position:** 100% compliant CSLB Builder Alliance disclaimers (0 personal license number liability).
* **2026 AI Search & GEO Readiness:** `/llms.txt`, `/llms-full.txt`, and AI search crawlers (`GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`) fully enabled in `robots.txt`.

---

## 🔍 Audit Remediation & Feature Execution Log

1. **Contrast & Theme Fix (`src/app/globals.css` & `.force-dark`):**
   - Removed wildcard `html.light .text-white` `!important` rule that turned dark container text dark blue `#0F172A`.
   - Enforced `.force-dark` on `Hero.tsx`, `LaduProcessTimeline.tsx` cards, Client Portal Box, and `Footer.tsx` so text remains 100% crisp white/amber on dark backgrounds regardless of global theme mode!
2. **GHL Iframe Skeleton Loader & Telephone Fallback (`src/components/GhlLeadForm.tsx`):**
   - Added animated skeleton loader during iframe initialization and a prominent telephone fallback banner: *"Having trouble loading the form? Call Planning Desk: (657) 298-4061"*.
3. **Smooth Navigation & Anchor Mapping (`src/components/Navbar.tsx`):**
   - Mapped homepage nav links to smooth-scroll anchors (`/#models`, `/#process`, `/#projects`) to eliminate 404 route errors when navigating on `/`.
4. **Distinct Service Imagery (`src/lib/data.ts`):**
   - Assigned authentic 2-car garage driveway conversion photo to `garage-conversion` service scope instead of repeated cottage assets.
5. **PDF Guide Download CTA (`src/components/FourWaysStepIn.tsx`):**
   - Updated "Download Free PDF" card button to route cleanly to `#assessment`.

---

## 🗺️ Complete Multi-Page Route Inventory

* **`/`** — Authority Homepage (Hero, Services, Models, Before/After Slider, 4-Phase Roadmap, Trust Pillars, FAQs, GHL Assessment Tool).
* **`/services`** — Comprehensive Services Hub & Comparison Matrix.
* **`/services/[slug]`** (5 Routes) — `/services/detached-adu`, `/services/garage-conversion`, `/services/junior-adu`, `/services/adu-design`, `/services/adu-permits`.
* **`/locations/[slug]`** (34 Routes) — 34 Orange County Municipalities with LocalBusiness Schema.
* **`/models`** — 5 Signature Prefab & Custom Floor Plans.
* **`/process`** — 4-Stage Transparent Design-Build Roadmap.
* **`/calculator`** — Interactive ADU Cost & Rental ROI Calculator.
* **`/projects`** — Real Orange County ADU Transformation Portfolio.
* **`/free-feasibility`** — Dedicated High-Converting Lot Feasibility Landing Page with GHL Embed.
* **`/about`** — Company Background, CSLB Class B General Contractor Alliance Story.
* **`/blog`** — ADU Insights & Guides Index.
* **`/blog/[slug]`** (323 Routes) — Headless WordPress Single Posts synced live with `cms.adualliance.com`.
* **`/privacy` & `/terms`** — CCPA, TCPA, and California Rank-and-Rent Regulatory Disclosures.
