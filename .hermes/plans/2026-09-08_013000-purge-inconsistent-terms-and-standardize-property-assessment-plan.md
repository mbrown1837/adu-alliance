# Master Plan: Standardize "Free Property Assessment" Terminology & Purge Inconsistent Copy

> **Date:** September 8, 2026  
> **Target System:** ADU Alliance (`https://adualliance.com`)  
> **Goal:** Standardize 100% of lead capture CTAs, headings, button labels, and GHL survey copy around the official original ADU Alliance lead magnet term: **"Free Property Assessment"** (purging any stray "Feasibility Report" terminology).  
> **Status:** Plan Mode — Ready for Review & Execution  

---

## 🎯 Goal
Ensure 100% brand terminology parity across all site pages (`Hero.tsx`, `Navbar.tsx`, `GhlLeadForm.tsx`, `PropertyAssessmentTool.tsx`, `/free-feasibility` route) and GHL Survey Slides using the original, proven ADU Alliance lead magnet title: **"Free Property Assessment"**.

---

## 🔍 Alignment Analysis & Terminology Rules

| Element / Touchpoint | Inconsistent / Stray Term (To Purge) | Standardized Original ADU Alliance Term |
| :--- | :--- | :--- |
| **Hero & Section Buttons** | *Get Free Feasibility* | **`Get a Free Property Assessment`** |
| **Form Container Header** | *Feasibility Survey* | **`Free Property Assessment`** |
| **GHL Lead Form Subtitle** | *Request Feasibility Report* | **`Request Your Free Property Assessment`** |
| **Standalone Route Title** | `/free-feasibility` | Re-frame heading to **`Free Property Assessment Desk`** |
| **GHL Survey Final Slide** | *Send Feasibility Report* | **`Where should we send your Free Property Assessment?`** |

---

## 📝 Exact GHL Survey Slide Copy (100% Original Brand Parity)

### 🔹 Slide 1: ADU Scope
* **Title:** `What type of ADU project are you planning?`
* **Subtext:** `Select your preferred build type to customize your free property assessment.`

### 🔹 Slide 2: Lot Condition
* **Title:** `What is the current condition of your lot or structure?`
* **Subtext:** `Select your lot setup so our design-build team can review your parcel requirements.`

### 🔹 Slide 3: Primary Goal
* **Title:** `What is your primary goal for this ADU?`
* **Subtext:** `Tell us your main objective so we can tailor your property assessment.`

### 🔹 Slide 4: Property & Contact Details (Final Step)
* **Title:** `Where should we send your Free Property Assessment?`
* **Subtext:** `Enter your address and contact details below for your free, no-obligation assessment.`

---

## 📋 Codebase Standardisation Tasks

### Task 1: Audit and Replace Stray Phrases in `src/components/GhlLeadForm.tsx`
- Replace `Loading Secure Multi-Step Feasibility Survey...` with `Loading Secure Property Assessment Form...`.
- Replace title attribute `ADU Alliance Multi-Step Property Feasibility Survey` with `ADU Alliance Free Property Assessment`.

### Task 2: Standardize Standalone Route `src/app/free-feasibility/page.tsx`
- Update page title and H1 header to: **`Get a Free Property Assessment`**.
- Keep route URL `/free-feasibility` active for SEO link preservation, but align all visible heading and CTA copy to **"Free Property Assessment"**.

### Task 3: Standardize `src/components/PropertyAssessmentTool.tsx`
- Ensure section header reads: **`Request Your Free Property Assessment`**.
- Subheading: `One dedicated contractor handles custom 3D plans, city permits, and ground-up construction.`

### Task 4: Verification & Edge Push
- Run `npx tsc --noEmit` to verify 0 errors.
- Commit and push to GitHub `main` branch.
