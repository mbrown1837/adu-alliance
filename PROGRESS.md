# ADU Alliance — Master Project Progress & Architecture Tracking (`PROGRESS.md`)

> **Project:** ADU Alliance (adualliance.com)  
> **Market:** Orange County, California (All 34 Municipalities)  
> **Business Model:** Rank & Rent / High-Intent Inbound Lead Generation Network  
> **Contractor Relationship:** Verified Network of CSLB-Licensed California General Contractors (Class B)  
> **Active Tech Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion  
> **Primary Tracking File:** Updated after every major milestone, audit, and deployment.

---

## 📌 Executive Status Dashboard

* **Build Health:** `npm run build` passing with **0 errors, 0 warnings** (53+ pre-rendered static routes).
* **Git Repository:** `https://github.com/mbrown1837/adu-alliance` (`main` branch active).
* **Direct Lead Channel:** `(657) 298-4061` (Click-to-Call) + FormSubmit.co AJAX Lot Feasibility Engine.
* **Legal Position:** 100% compliant CSLB Builder Alliance disclaimers (no false personal license claims).

---

## 🔍 Live Site (`adualliance.com`) & GSC Forensic Fact-Check

An automated deep audit was conducted on `gsc_pages_performance.json` (182 Pages, 1,000 Queries) cross-referenced directly against the live WordPress site `https://adualliance.com`:

### Key Verified Fact: Root Permalinks are WordPress Blog Posts (`single-post`)
On the live WordPress site, URLs such as:
1. `https://adualliance.com/adu-garage-conversion-cost-in-orange-county/` (682 impr, 3 clicks)
2. `https://adualliance.com/adu-orange-county-2025-why-everyone-is-talking-about-new-laws-and-you-should-too/` (497 impr, 2 clicks, Pos 9.9)
3. `https://adualliance.com/orange-county-adu-permits-sb-543/` (208 impr, 2 clicks, Pos 9.3)
4. `https://adualliance.com/california-adu-laws-2025/` (1,150 impr, Pos 79.8)
5. `https://adualliance.com/adu-construction-cost-per-square-foot-2026-in-orange-county-exposed-guide/` (815 impr, Pos 8.4)
6. `https://adualliance.com/garage-conversion-adu-in-huntington-beach/` (69 impr, 2 clicks)

**Body Class Verification:**
`body class="wp-singular post-template-default single single-post postid-11887..."`
These are **WordPress single blog posts** configured with root permalinks (`/%postname%/`), not static service landing pages.

### SEO Impact & Strategy:
* **The Pitfall of Blind Redirects:** Blindly 301 redirecting an informational article ranking at Position 8-9 (e.g. SB 543 or Cost per sq ft) to a generic calculator or service landing page causes search intent mismatch and risks Google dropping keyword rankings (Soft 404 penalty).
* **The Correct Solution:**
  1. Informational blog posts will be pulled/served via the WordPress backend or dynamic Next.js blog template (`/blog/[slug]`).
  2. Specific informational blog URLs redirect to `/blog/[slug]` with the exact full content preserved.
  3. Commercial and transactional queries (e.g. general contractor inquiries, garage conversions, city searches) route directly to our new high-converting service and location pages.

---

## 🗺️ Completed Site Architecture (53+ Production Routes)

### 1. Core Foundation Pages
* `/` — Flagship Orange County Hub (4-field lead form, 5 models switcher, interactive estimator, Before/After proof, 34-city grid).
* `/about` — Trust authority page, CSLB Builder Alliance disclaimers, 100% permit guarantee, Irvine HQ.
* `/projects` — Real Orange County portfolio gallery (Newport Beach, Irvine, Costa Mesa, Huntington Beach before/after case studies).
* `/models` — 5 signature models (EVO Compact, Studio, One, Two, Two+) with detailed specs and plan download funnels.
* `/process` — 4-Stage turnkey roadmap, California SB 9 & AB 1033 legal protections.
* `/calculator` — Interactive Cost & Home Equity Estimator with Prop 13 tax protection facts.
* `/free-feasibility` — Dedicated high-converting property address check and lot walk booking funnel.
* `/privacy` & `/terms` — California contractor referral disclosures & TCPA communication consent.

### 2. Five Dedicated Service Money Pages
* `/services/garage-conversion` — Top GSC volume (3,069 impressions). Fastest turnkey build.
* `/services/detached-adu` — Standalone custom backyard homes.
* `/services/junior-adu` — JADU interior conversions & attached additions.
* `/services/adu-design` — 3D architectural blueprints & structural engineering.
* `/services/adu-permits` — In-house city expediting across all 34 OC municipalities.

### 3. Programmatic 34-City Orange County Location Engine (`/locations/[slug]`)
* All 34 Orange County cities (Irvine, Newport Beach, Huntington Beach, Costa Mesa, Anaheim, Santa Ana, Orange, Fullerton, Laguna Beach, Mission Viejo, etc.) statically generated via `generateStaticParams()`.
* Each page includes custom localized Title, Meta Description, City Zoning Summary, Setback rules, Permit Turnaround, and `LocalBusiness` JSON-LD Schema.

---

## 📋 Milestone & Task Log

- [x] **Milestone 1:** Analysis of 4 reference sites (EVO ADU, ADU Build LA, LADU, ADU Resource Center).
- [x] **Milestone 2:** Streamlined 1-Line Header with real-time OS System Theme Sync (`prefers-color-scheme`).
- [x] **Milestone 3:** Purged obsolete team entity claims & fake contractor license numbers (`#1094821`) to protect from CSLB liability.
- [x] **Milestone 4:** Replaced legacy static HTML bundle with pure Next.js 14 App Router architecture.
- [x] **Milestone 5:** Built Core Pages (`/about`, `/projects`, `/models`, `/process`, `/calculator`, `/free-feasibility`).
- [x] **Milestone 6:** Built 5 Core Service Pages (`/services/[slug]`).
- [x] **Milestone 7:** Generated 34 Programmatic City Pages (`/locations/[slug]`) with unique municipal zoning data.
- [x] **Milestone 8:** Mapped 281 GSC Historical Redirects in `next.config.mjs` to preserve backlink equity.
- [x] **Milestone 9:** Created living `PROGRESS.md` tracker to record facts, data, and live site audit results.
- [ ] **Milestone 10:** Connect WordPress Headless Blog Feed / REST API for ranking blog posts.
- [ ] **Milestone 11:** Final Cloudflare Pages / Vercel DNS Cutover for `adualliance.com`.

---

## 🛠️ Verification Commands

```bash
# Verify clean TypeScript & SSG build (must output 53+ routes with 0 errors)
npm run build

# Run local development server
npm run dev

# Check git status
git status
```
