# Deep Comprehensive 360° Platform Audit & Remediation Master Plan

> **Date:** September 8, 2026  
> **Target System:** ADU Alliance (`https://adualliance.com`)  
> **Skills Leveraged:** `design-taste-frontend`, `high-end-visual-design`, `seo-technical`, `seo-page`, `seo-local`, `form-cro`  
> **Status:** Plan Mode — Elite Architecture Review  

---

## 🎯 Executive Summary
While the structural foundation of the platform is strong, it suffers from **residual architectural bloat, broken metadata hierarchies, and unrefined typographic dominance**. This document serves as a ruthless, multi-disciplinary 360° audit across **Elite Design, Technical SEO, On-Page CRO, and Local Edge Strategy** to turn this platform into an uncontested Orange County market leader.

---

## 🎨 1. Taste Skills: Elite Design & Architecture Audit

### 1.1 Typographic Asphyxiation & Hierarchy (Design-Taste)
- **The Flaw:** In `src/app/page.tsx` and custom components (`EvoModelShowcase`), massive `text-4xl` to `text-6xl` headings are indiscriminately plastered over vital product imagery. This screams "mass-produced" rather than "custom luxury builder."
- **The Fix:** Implement strict Brutalist / Minimalist hierarchy. Scale headings down to `text-2xl` tracking-tight. The architecture (images) must breathe. Add thick `bg-gradient-to-t` scrims to protect white text from washing out against daytime skies.

### 1.2 "Sloppy" Layout Regressions
- **The Flaw:** The screenshot analysis revealed cramped strings like `FromCustom Quote`.
- **The Fix:** Introduce generous `gap-x`, consistent `h-10` input heights, and strict Tailwind typography line-heights (`leading-relaxed`, `leading-[1.1]`).

---

## ⚙️ 2. Technical SEO Audit (Critical Fixes Required)

### 2.1 Metadata Overrides & SEO Sabotage
- **The Flaw:** `src/app/page.tsx` has a hardcoded `metadata` block that is OVERRIDING the perfectly clean metadata we just built in `layout.tsx`. It contains the old 78-character title, the 199-character description, and a *relative* OpenGraph image path (`/images/...`) that breaks social media previews.
- **The Fix:** We must delete the duplicate/faulty `metadata` block from `src/app/page.tsx`, allowing the precise metadata from `layout.tsx` to automatically flow down and control the root route.

### 2.2 Schema & JSON-LD Propagation
- **The Flaw:** We placed `GeneralContractor` schema in `layout.tsx`, but nested dynamic pages (`/blog/[slug]`) risk doubling up or conflicting with their own Article schemas.
- **The Fix:** Ensure semantic separation—brand identity schema at the layout level, and specific `LocalBusiness` / `Article` schema explicitly bounded to `/locations` and `/blog` routes.

---

## 📝 3. On-Page SEO & Content Audit

### 3.1 Unnatural Content Sizing
- **The Flaw:** Several sections (e.g., `BeforeAfterSlider`) use `text-[10px]` or `text-[9px]`. Search engine parsers and ADA compliance tools punish font sizes below `12px` (equivalent to `0.75rem`), classifying them as potentially "hidden text" spam techniques.
- **The Fix:** Standardize minimum readable text to `text-xs` (`12px`) or `text-sm` (`14px`), using font-weight and opacity (`text-slate-400`) to create hierarchy instead of illegible microscopic sizes.

### 3.2 Lead Magnet Lexicon
- **The Flaw:** The codebase uses "Feasibility", "Assessment", "Estimate", and "Quote" interchangeably.
- **The Fix:** 100% strict standardization to **"Free Property Assessment"** across every single button, header, and GHL survey step to reduce cognitive load and bounce rates.

---

## 📍 4. Off-Page & Local SEO Strategy (Rank & Rent)

### 4.1 Missing Map Embeds & Geocoordinates
- **The Flaw:** To rank in 34 distinct OC municipalities, passing text strings isn't enough.
- **The Fix:** Each `/locations/[slug]` page needs an embedded local map API frame or exact latitude/longitude schema bound to that specific city's centroid to trigger the Google Local Map Pack proximity algorithms.

### 4.2 NAP (Name, Address, Phone) Consistency
- **The Flaw:** Moving from Irvine to "Serving All Over California" in the footer helps statewide reach but dilutes local Irvine map pack dominance.
- **The Fix:** Retain the HQ "Irvine, CA" address in semantic markup, but use "Serving All Over California" in visible copy.

---

## 📋 Exact Execution Steps (Action Plan)

### Task 1: Nuke the Faulty Homepage Metadata
- **File:** `src/app/page.tsx`
- **Action:** Delete lines 13-35 `export const metadata: Metadata = { ... }`.
- **Reason:** Root page must inherit the optimized 100/100 FreeScan metadata from `src/app/layout.tsx`.

### Task 2: Elite Design Typographic Purge
- **Files:** `EvoModelShowcase.tsx`, `BeforeAfterSlider.tsx`
- **Action:** 
  - Change `text-[9px]` to `text-xs text-slate-400 font-bold`.
  - Fix the `FromCustom` spacing error.
  - Deepen image gradients: `from-black via-black/80 to-transparent`.

### Task 3: Standardize the `PropertyAssessmentTool` CTA
- **Files:** `PropertyAssessmentTool.tsx`, `free-feasibility/page.tsx`
- **Action:** Replace all floating jargon with **"Free Property Assessment"**.

### Task 4: Typescript & Build Validation
- Run `npx tsc --noEmit`.
- Commit and push to deploy.

---

## ❓ Final Decision For You
This is a ruthless 360° architectural teardown. The biggest immediate SEO blocker is the `page.tsx` metadata bug overriding our previous work. 
**Shall I execute Task 1 (SEO Save) and Task 2 (Elite UI Fixes) immediately?**
