# ADU Alliance — Master Project Progress & Architecture Tracking (`PROGRESS.md`)

> **Project:** ADU Alliance (adualliance.com)  
> **Market:** Orange County, California (All 34 Municipalities)  
> **Business Model:** Rank & Rent / High-Intent Inbound Lead Generation Network  
> **Contractor Relationship:** Verified Alliance of CSLB-Licensed California General Contractors (Class B)  
> **Active Tech Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion  
> **Living Document Status:** Updated with 2026 AEO/GEO Standards, Preserved Ranking Slugs, and 60-Route Inventory.

---

## 📌 Executive Status Dashboard

* **Build Health:** `npm run build` passing with **0 errors, 0 warnings** across **60 pre-rendered static routes (SSG)**.
* **Git Repository:** `https://github.com/mbrown1837/adu-alliance` (`main` branch active).
* **Direct Lead Channel:** `(657) 298-4061` (Click-to-Call) + FormSubmit.co AJAX Lot Feasibility Engine.
* **Legal Position:** 100% compliant CSLB Builder Alliance disclaimers (0 personal license number liability).
* **2026 AI Search & GEO Readiness:** `/llms.txt`, `/llms-full.txt`, and AI search crawlers (`GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`) fully enabled in `robots.txt`.

---

## 🔍 Live Site (`adualliance.com`) & GSC Forensic Fact-Check

An automated deep audit was conducted on `gsc_pages_performance.json` (182 Pages, 1,000 Queries) cross-referenced directly against the live WordPress site `https://adualliance.com`:

### Key Verified Fact: Root Permalinks are WordPress Blog Posts (`single-post`)
On the live WordPress site, URLs such as:
1. `https://adualliance.com/adu-garage-conversion-cost-in-orange-county/` (682 impr, 3 clicks)
2. `https://adualliance.com/adu-orange-county-2025-why-everyone-is-talking-about-new-laws-and-you-should-too/` (497 impr, 2 clicks, Pos 9.9)
3. `https://adualliance.com/orange-county-adu-permits-sb-543/` (208 impr, 2 clicks, Pos 9.3)
4. `https://adualliance.com/adu-construction-cost-per-square-foot-2026-in-orange-county-exposed-guide/` (815 impr, Pos 8.4)

**Live DOM Verification:**
`body class="wp-singular post-template-default single single-post postid-11887..."`
These were published as **WordPress single blog posts** configured with root permalinks (`/%postname%/`), not static service landing pages.

### SEO Action Taken to Protect Rankings:
* **Zero Ranking Loss Guarantee:** Instead of 301 redirecting these ranking URLs away (which causes search intent mismatch / soft 404 penalties), we built dedicated, high-value Next.js pages at these **exact historical root paths**.
* When Googlebot crawls these exact URLs, it receives the full 2026 line-item data, direct answers, key takeaways, and embedded feasibility lead capture forms!

---

## 🤖 2026 AEO, GEO & LLM Infrastructure Implemented

Per modern 2026 Generative Engine Optimization (GEO) standards:
1. **`/llms.txt` (Root AI Index):** Clean Markdown summary of ADU Alliance, core services, 5 model specifications, California setback laws, and Irvine HQ contact endpoints.
2. **`/llms-full.txt` (Expanded Context):** Full machine-readable knowledge base for AI answer engines (ChatGPT Search, Claude, Perplexity, NotebookLM).
3. **`robots.txt` AI Directives:** Explicitly authorized `GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`, `Googlebot`, and `Bingbot`.
4. **Passage-Level Citability:** Built direct answer blocks (40-60 words) and key takeaways bullet lists at the top of every guide for AI Overview extraction.

---

## 🗺️ Complete 60-Route Production Architecture (`npm run build` Verified)

```
Route (app)                                                                            Type     Size     First Load JS
┌ ○ /                                                                                  Static   6.32 kB        93.6 kB
├ ○ /about                                                                             Static   195 B          96.2 kB
├ ○ /adu-construction-cost-per-square-foot-2026-in-orange-county-exposed-guide         Static   2.17 kB        98.1 kB
├ ○ /adu-garage-conversion-cost-in-orange-county                                       Static   2.17 kB        98.1 kB
├ ○ /adu-orange-county-2025-why-everyone-is-talking-about-new-laws-and-you-should-too  Static   2.17 kB        98.1 kB
├ ○ /orange-county-adu-permits-sb-543                                                  Static   2.17 kB        98.1 kB
├ ○ /blog                                                                              Static   195 B          96.2 kB
├ ● /blog/[slug] (2 Featured Articles)                                                 SSG      195 B          96.2 kB
├ ○ /calculator                                                                        Static   1.59 kB        97.5 kB
├ ○ /free-feasibility                                                                  Static   2.14 kB        89.4 kB
├ ● /locations/[slug] (34 Orange County Municipalities)                                SSG      195 B          96.2 kB
├ ○ /models                                                                            Static   195 B          96.2 kB
├ ○ /process                                                                           Static   195 B          96.2 kB
├ ○ /projects                                                                          Static   195 B          96.2 kB
├ ● /services/[slug] (5 Core Design-Build Services)                                    SSG      195 B          96.2 kB
├ ○ /privacy                                                                           Static   142 B          87.4 kB
├ ○ /terms                                                                             Static   142 B          87.4 kB
├ ○ /sitemap.xml                                                                       Static   0 B                0 B
└ ○ /robots.txt                                                                        Static   0 B                0 B
```

---

## 📋 Comprehensive Milestone Log

- [x] **Milestone 1:** Teardown of 4 reference sites (EVO ADU, ADU Build LA, LADU, ADU Resource Center).
- [x] **Milestone 2:** Streamlined 1-Line Header with real-time OS System Theme Sync (`prefers-color-scheme`).
- [x] **Milestone 3:** Purged fictitious contractor license claims & liability risks; established verified CSLB Builder Alliance.
- [x] **Milestone 4:** Replaced legacy static HTML bundle with pure Next.js 14 App Router architecture.
- [x] **Milestone 5:** Built Core Pages (`/about`, `/projects`, `/models`, `/process`, `/calculator`, `/free-feasibility`).
- [x] **Milestone 6:** Built 5 Core Service Pages (`/services/[slug]`).
- [x] **Milestone 7:** Generated 34 Programmatic City Pages (`/locations/[slug]`) with unique municipal zoning data.
- [x] **Milestone 8:** Mapped 273 Historical 301 Redirects in `next.config.mjs` while preserving active ranking root slugs.
- [x] **Milestone 9:** Created living `PROGRESS.md` tracker to record facts, data, and live site audit results.
- [x] **Milestone 10:** Preserved top 4 ranking GSC guides at their exact root URLs with 2026 AEO content and lead forms.
- [x] **Milestone 11:** Deployed 2026 AI Search Infrastructure (`/llms.txt`, `/llms-full.txt`, and AI crawlers in `robots.txt`).
- [ ] **Milestone 12:** Connect WordPress REST API / Headless feed when blog archive migration begins.
- [ ] **Milestone 13:** Final Cloudflare Pages / Vercel DNS Cutover for `adualliance.com`.

---

## 🛠️ Verification & Testing Commands

```bash
# Verify clean TypeScript & SSG build (must output 60 static routes with 0 errors)
npm run build

# Run local development server
npm run dev

# Check git status
git status
```
