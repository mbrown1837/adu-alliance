# Deep Remediation, Theme Contrast & Navigation Fix Master Plan

> **Date:** September 7, 2026  
> **Target System:** ADU Alliance (Orange County Next.js 15 SSG Production Platform)  
> **Status:** Plan Mode — Zero-Tolerance Quality & Contrast Remediation  

---

## 🎯 Goal
Fix all visual regressions introduced by theme switching, eliminate invisible text on dark containers, add skeleton & telephone fallbacks for the GHL iframe, resolve navigation routing/404 issues, assign distinct service photos for garage conversions vs detached builds, and wire the PDF download CTA.

---

## 🔍 Root Cause Analysis & Architecture Strategy

### 1. Root Cause of Invisible Text (Issue #1)
- **Problem:** Brute-force CSS in `src/app/globals.css` (`html.light .text-white { color: #0F172A !important; }`) forced ALL `.text-white` classes to turn dark navy blue (`#0F172A`) when light mode was enabled.
- **Visual Failure:** Dark-background containers (Hero section with dark image overlay, 4-Phase Process cards, Digital Client Portal box, and Footer) were forced to display dark blue text on black/dark backgrounds, rendering text 100% invisible.
- **Architectural Solution:**
  - Strip brute-force `!important` text overrides from `src/app/globals.css`.
  - Enforce explicit `dark` container contexts on Hero (`Hero.tsx`), Process Timeline (`LaduProcessTimeline.tsx`), Client Portal box, and Footer so they ALWAYS retain crisp white/amber text on dark backgrounds regardless of global light/dark toggle state.

### 2. GHL Iframe Loading & Skeleton Fallback (Issue #2)
- **Problem:** If a user has a slow connection, adblocker, or Brave shield, the GHL iframe leaves a blank box.
- **Solution:** Add a skeleton loader animation and a prominent telephone fallback callout (`Call (657) 298-4061 for immediate lot feasibility`).

### 3. Navigation Anchor & Route Alignment (Issue #3)
- **Problem:** Users on the homepage clicking `Models`, `Services`, `Process` expect smooth scroll to `/#models`, `/#services`, `/#process`, while on inner pages they expect full sub-page navigation.
- **Solution:** Configure `Navbar.tsx` to handle anchor links on `/` and full routes on sub-pages seamlessly, ensuring zero 404s.

### 4. Service Image Distinction (Issue #4)
- **Problem:** Step 02 (Permits), Step 03 (Detached), and Step 04 (Garage Conversion) used similar wooden cottage photos.
- **Solution:** Map distinct localized assets in `src/lib/data.ts`:
  - Step 01 (Architecture): Architectural floor plan / 3D design set.
  - Step 02 (Permitting): Municipal plan check approval set.
  - Step 03 (Detached ADU): Ground-up detached backyard home.
  - Step 04 (Garage Conversion): 2-Car garage retrofit drive-up transformation.
  - Step 05 (JADU): Interior attached suite layout.

### 5. PDF Guidebook Download CTA (Issue #5)
- **Problem:** "DOWNLOAD FREE PDF →" button in `FourWaysStepIn.tsx` did not execute a download.
- **Solution:** Update button to trigger an actual PDF download (`href="/downloads/2026-orange-county-adu-guide.pdf" download`) or scroll to GHL assessment form.

---

## 📋 Step-by-Step Implementation Tasks

### Task 1: Fix `src/app/globals.css` & Enforce Dark Container Contrast
- **File to edit:** `src/app/globals.css`
  - Remove wildcard `html.light .text-white` and `html.light .text-slate-300` `!important` overrides.
  - Define scoped `.force-dark` utility:
    ```css
    .force-dark {
      background-color: #111111 !important;
      color: #ffffff !important;
    }
    .force-dark .text-white,
    .force-dark h1,
    .force-dark h2,
    .force-dark h3 {
      color: #ffffff !important;
    }
    .force-dark .text-slate-300,
    .force-dark .text-slate-400,
    .force-dark p {
      color: #cbd5e1 !important;
    }
    .force-dark .text-brand-amber {
      color: #ffac00 !important;
    }
    ```
- **Files to update:**
  - `src/components/Hero.tsx`: Add `force-dark` wrapper to hero container.
  - `src/components/LaduProcessTimeline.tsx`: Add `force-dark` to phase cards and Client Portal box.
  - `src/components/Footer.tsx`: Add `force-dark` to footer wrapper.

---

### Task 2: Enhance GHL Iframe Loading & Fallback in `src/components/GhlLeadForm.tsx`
- **File to edit:** `src/components/GhlLeadForm.tsx`
  - Add `isLoading` state and CSS skeleton loader.
  - Add fallback banner:
    ```tsx
    <div className="text-center py-3 px-4 bg-brand-black rounded-xl border border-brand-borderDark text-xs text-slate-300 mt-3">
      <span>Having trouble loading the form? </span>
      <a href="tel:6572984061" className="text-brand-amber font-bold hover:underline">
        Call our Irvine Planning Desk directly at (657) 298-4061
      </a>
    </div>
    ```

---

### Task 3: Smooth-Scroll Section Anchors & Navigation in `src/components/Navbar.tsx`
- **File to edit:** `src/components/Navbar.tsx`
  - Update nav links to use section anchors on homepage (`/#models`, `/#services`, `/#process`, `/#calculator`, `/#projects`, `/blog`, `/about`) so desktop and mobile users get smooth scrolling to homepage tools without 404s.

---

### Task 4: Assign Distinct Local Assets for Garage Conversion vs Detached Build
- **File to edit:** `src/lib/data.ts`
  - Update `ADU_SERVICES`:
    - `garage-conversion`: Set image to dedicated garage conversion asset (`/images/localized/adu_asset_fe36bce2c5.jpg` / `/images/localized/adu_asset_19f8aacb8b.jpg`).
    - `detached-adu`: Set image to detached cottage build asset (`/images/localized/adu_asset_52dc4cc0e2.jpg`).
    - `adu-design`: Set image to architectural design asset (`/images/localized/adu_asset_d6555d69cf.jpeg`).
    - `adu-permits`: Set image to municipal permit approval set (`/images/localized/adu_asset_6f93b1c435.jpeg`).

---

### Task 5: Wire PDF Download CTA in `src/components/FourWaysStepIn.tsx`
- **File to edit:** `src/components/FourWaysStepIn.tsx`
  - Update 4th card CTA button to link to `#assessment` or download `/downloads/2026-orange-county-adu-guide.pdf`.

---

### Task 6: Full Verification Build
- **Command:**
  ```bash
  cd "C:/Users/Administrator/Desktop/ADU Alliance" && npx tsc --noEmit && npm run build
  ```
- **Verification:** Ensure 378+ SSG static routes compile cleanly with 0 errors.

---

## 🧪 Validation Checklist
1. **Contrast Test:** Toggle Light and Dark mode using the Sun/Moon icon in Navbar. Confirm Hero text, 4-Phase Roadmap cards, and Client Portal box remain 100% crisp white/amber on dark backgrounds in both themes.
2. **Navigation Test:** Click `Models`, `Services`, `Process`, `Estimator`, `Projects` on Navbar. Confirm smooth scrolling to sections without 404 errors.
3. **Form Test:** Inspect GHL iframe container in `#assessment` for proper skeleton loading and telephone fallback link.
4. **Build Check:** Confirm `npx tsc --noEmit` passes with 0 errors.
