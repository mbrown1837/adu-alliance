# Elite Design & Architecture Audit Plan (High-End Visual Design & Brutalist UI)

> **Date:** September 8, 2026  
> **Target System:** ADU Alliance (`https://adualliance.com`)  
> **Skills Activated:** `design-taste-frontend`, `high-end-visual-design`, `minimalist-ui`, `agency-testing:accessibility-auditor`  
> **Status:** Plan Mode — Ready for Execution  

---

## 🎯 Goal
Execute a sweeping UI/UX refinement across the Custom Floor Plan Showcase and Sticky Bottom Bar components, solving severe typography dominance, contrast failures, and formatting errors to elevate the site's design to a premium, high-end architectural standard.

---

## 🔍 Vision Analysis & Audit Findings

Based on the deep AI visual analysis of your screenshots, the current layout suffers from the following critical design regressions:

1. **Typographic Asphyxiation (Headphones Overpowering Content):**
   - The card titles (`text-4xl` or `text-5xl`) are massively oversized. They hijack the visual hierarchy and obscure the actual architectural product photography. In premium real estate, **the imagery must be the hero, not the typography**.
   - Awkward visual line breaking and layout constraints make the text look unpolished.

2. **Severe Contrast & Scrim Failures:**
   - **White text over bright sky:** The card lacks a proper protecting gradient overlay (scrim), causing white text to vanish into the bright parts of the background images.
   - **Illegible Buttons:** Dark gray "CONFIGURE" buttons placed over dark grass backgrounds have zero contrast. Plus, the text inside the button is microscopic (`text-[10px]`) and unreadable.

3. **Formatting Errors:**
   - **Missing Spaces:** The pricing string concatenates without a space, resulting in `FromCustom Quote Available`.
   - **Subtext Contrast:** The Sticky Bottom Bar subtext ("Single-contract design...") uses dark gray font on a dark gray background, failing all WCAG AA contrast matrices.

---

## 🏗️ Proposed UI/UX Architecture

We will apply the strict principles of **`high-end-visual-design`** and **`minimalist-ui`**:
- **Let the Architecture Breathe:** Reduce heading scale massively. Use crisp `text-xl` or `text-2xl` font sizing.
- **Deepen the Scrims:** Introduce a `bg-gradient-to-t from-brand-black via-brand-black/80 to-black/10` to guarantee 100% text legibility regardless of the photo lighting.
- **Alignment:** Re-align the CTA button with the text flow (left-aligned) and convert it to a high-contrast ghost button (`border border-white/40 hover:bg-white`).
- **Fix Data Formatting:** Interject non-breaking spaces and proper bullet separators.

---

## 📋 Step-by-Step Implementation Tasks

### Task 1: Refine `src/components/EvoModelShowcase.tsx` Cards
- **Scale Down Typography:** Reduce `<h3 className="text-3xl lg:text-5xl...">` to `<h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white mb-2">`.
- **Fix the Scrim Overlay:** Apply a heavy protecting gradient:
  `<div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-black/20" />`
- **Fix the Spacing Error:**
  Ensure the pricing text renders correctly with spaces: `<span>From </span><span className="text-brand-amber font-bold">{model.priceFormatted}</span>`.
- **Relocate & Redesign the CTA Button:**
  Move the button directly under the subtext, left-aligned, and style it as a clear architectural button:
  `<span className="inline-flex px-4 py-2 border border-white/20 text-white text-xs font-bold uppercase hover:bg-brand-amber hover:text-black hover:border-brand-amber transition-colors rounded-full">Layout Details &rarr;</span>`

### Task 2: Fix `src/components/StickyBottomBar.tsx` Contrast
- Read and update the hard-to-read text.
- Change any `.text-slate-500` or dark-on-dark styles to `.text-slate-300` or `.text-slate-200`.

### Task 3: Final Verification
- Run `npx tsc --noEmit` and review code before executing `git push`.

---

## ⚠️ Resulting Impact
This execution shifts the website from looking "noisy and built by a developer" to looking like a "high-end Southern California architectural firm." The photography will take center stage, and users will be easily guided to the CTAs.
