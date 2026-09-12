# Pivot Plan: Purge Pre-Fabricated Model Claims & Position 100% Custom Ground-Up Construction

> **Date:** September 8, 2026  
> **Target System:** ADU Alliance (`https://adualliance.com`)  
> **Goal:** Completely remove all references to pre-fabricated/modular ADU models and re-position the platform strictly around 100% custom, stick-built ground-up construction and custom garage conversions executed on-site by CSLB-licensed general contractors.  
> **Status:** Plan Mode — Ready for Execution  

---

## 🎯 Goal
Eliminate all pre-fabricated / modular model claims across the site, remove or refactor the model showcase section into a **Custom Architectural Layout & Floor Plan Options Guide**, update navigation links (`Navbar.tsx` & `Footer.tsx`), clean `public/llms.txt` / `public/llms-full.txt`, and ensure 100% messaging alignment with custom stick-built general contracting.

---

## 🔍 Current Context & Problem Statement
* **Current Issue:** The platform currently features sections titled "Pre-Designed Models" and "EVO Series" (`EvoModelShowcase.tsx`), which implies pre-fabricated or modular factory-built units delivered on a flatbed truck.
* **Contractor Reality:** Alliance contractors **DO NOT** install pre-fab / modular units. They perform **100% custom ground-up stick-built construction** (poured concrete foundation, wood/steel framing, custom Title 24 engineering, on-site trades) and **custom garage conversions**.
* **Risk of Inaccuracy:** Showcasing modular/prefab units creates client expectation misalignment, wrong lead inquiries, and misrepresents contractor capabilities.

---

## 🏗️ Architecture & Proposed Approach

1. **Refactor `EvoModelShowcase.tsx` $\rightarrow$ `CustomFloorPlanGuide.tsx`:**
   - Re-title the section to: **"Custom Architectural Layout Options"** (Subtext: *100% Ground-Up Stick-Built Construction · Designed & Built On-Site for Your Unique Parcel*).
   - Re-frame the 5 floor plan options not as "pre-fab models to buy", but as **"Proven Custom Architectural Floor Plans & Layout Concepts"** (e.g., *Custom 350 sq ft Studio*, *Custom 560 sq ft 1-Bedroom*, *Custom 800 sq ft 2-Bedroom Dual Suite*).
   - Emphasize key custom construction highlights: Poured slab foundation, custom framing, Title 24 energy compliance, 100% on-site craftsmanship, zero modular shortcuts.

2. **Navigation & Route Updates:**
   - Change `Navbar.tsx` link from `ADU Models` to `Custom Layouts` or `Services`.
   - Update `Footer.tsx` links accordingly.
   - Redirect `/models` route or keep as `/custom-layouts` explaining custom floor plan options.

3. **AEO & LLM Context Clean Up:**
   - Update `public/llms.txt` and `public/llms-full.txt` to explicitly state: *"ADU Alliance contractors do NOT install pre-fabricated or modular units. All structures are 100% custom stick-built ground-up homes or custom garage conversions built on-site to local California building codes."*

---

## 📋 Step-by-Step Implementation Tasks

### Task 1: Refactor Model Data in `src/lib/data.ts`
- Rename `EVO_MODELS` to `CUSTOM_FLOOR_PLANS`.
- Update item taglines and descriptions to explicitly mention custom ground-up construction:
  - *Example:* "Custom ground-up stick-built studio layout engineered specifically for your setback requirements."

### Task 2: Refactor `EvoModelShowcase.tsx` to `CustomFloorPlanGuide.tsx`
- **File:** `src/components/CustomFloorPlanGuide.tsx` (or update `EvoModelShowcase.tsx`).
- **Heading Update:**
  - `CUSTOM ARCHITECTURAL CONCEPTS`
  - **H2:** `Custom Floor Plans Tailored to Your Property`
  - **Subtext:** `Every ADU we build is 100% custom stick-built on-site. Explore our proven architectural layout options designed for maximum livability, local city approvals, and property value.`
- **Badge:** `100% On-Site Stick Built · 0% Prefab`

### Task 3: Update Navigation (`src/components/Navbar.tsx` & `src/components/Footer.tsx`)
- In `Navbar.tsx`: Update navigation label from `#models` / `ADU Models` to `Floor Plans` / `Custom Layouts`.
- In `Footer.tsx`: Update quick links to match.

### Task 4: Update AEO & LLM AI Context (`public/llms.txt` & `public/llms-full.txt`)
- In `public/llms.txt`: Re-frame model list under `Custom Architectural Layout Concepts (100% Ground-Up Build)`.
- Explicitly add rule: *"ADU Alliance does not sell pre-fabricated or manufactured modular units. Every ADU is custom designed, engineered, permitted, and constructed on-site."*

### Task 5: Verification & Push
- Run `npx tsc --noEmit` to confirm 0 TypeScript errors.
- Commit and push to GitHub `main` branch.

---

## ⚠️ Risks & Tradeoffs
- **SEO Impact:** Existing links to `/models` will remain active, but the page content will clearly explain custom ground-up floor plan options, preserving URL equity while fixing messaging accuracy.
- **Lead Quality:** High-ticket leads looking for custom $200k+ builds will convert much higher, while low-quality inquiries seeking cheap pre-fab drop-offs will self-qualify out.
