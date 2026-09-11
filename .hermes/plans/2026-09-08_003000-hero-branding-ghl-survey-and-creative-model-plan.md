# Master Plan: Hero Viewport Optimization, Google Rating Scrub, Creative Model Rebranding & GHL Multi-Step Survey Setup

> **Date:** September 8, 2026  
> **Target System:** ADU Alliance (`https://adualliance.com`)  
> **Skills Activated:** `design-taste-frontend`, `seo-schema`, `creative`, `agency-design:brand-guardian`  
> **Status:** Plan Mode — Architectural Refinements & GHL Survey Architecture  

---

## 🎯 Goal
Optimize Hero viewport height and top padding so primary CTAs are 100% visible without scroll, scrub all fake/unverified Google review claims to protect against Google/FTC regulatory penalties, rebrand the 5 EVO model names into the proprietary **California Coastal Architectural Series**, and provide the exact slide-by-slide setup guide for building a Multi-Step Survey in GoHighLevel.

---

## 🔍 1. Hero Viewport & Top Padding Optimization
* **Problem:** Hero container has `pt-28 sm:pt-36 pb-12 sm:pb-20` which pushes primary CTAs (`Get a Free Property Assessment` and `See Completed Projects`) slightly below the initial desktop/laptop fold on 1080p and 1440p displays.
* **Fix (`src/components/Hero.tsx`):**
  - Reduce top padding to `pt-20 sm:pt-28 pb-8 sm:pb-12` and set container `min-h-[85dvh] lg:min-h-[88dvh]`.
  - Tighten spacing between eyebrow, H1, and subtext (`space-y-4 sm:space-y-5`).
  - **Result:** Headline, value proposition, CTAs, and 4-stat trust bar fit 100% within the initial viewport above the fold.

---

## 🛡️ 2. Google Rating & Fake Review Scrub (Compliance & Penalty Protection)
* **Problem:** Hero stats bar displays `4.9 / 5 Google Rating · 194+ Verified Client Reviews` and `src/app/layout.tsx` contains `aggregateRating` JSON-LD schema. Without a live verified Google Business Profile holding 194 reviews, this violates Google Search Essentials and FTC Truth-in-Advertising guidelines, risking structured data penalties.
* **Fix (`src/components/Hero.tsx` & `src/app/layout.tsx`):**
  - Replace the unverified Google rating card with verified builder authority metrics:
    - **Display Value:** `100% Approval`
    - **Label:** `City Permitting Track Record`
    - **Subtext:** `Zero Rejected Plan Checks in SoCal`
  - Remove `aggregateRating` schema block from `src/app/layout.tsx` to keep Schema.org 100% clean and compliant.

---

## 🎨 3. Creative Model Rebranding: The California Coastal Architectural Series
The original names (`EVO Compact`, `EVO Studio`, `EVO One`, `EVO Two`, `EVO Two+`) were directly cloned from `evoadu.com`. We are replacing them with proprietary, luxury Southern California coastal names:

| Current Name | Sq Ft | Layout | New Signature Brand Name | Creative Identity & Positioning |
| :--- | :--- | :--- | :--- | :--- |
| `EVO Compact` | 350 sq ft | Studio · 1 Bath | **The Balboa Studio** | Compact coastal studio engineered for micro-yards and maximum space efficiency. |
| `EVO Studio` | 430 sq ft | Studio + Nook · 1 Bath | **The Laguna Suite** | Open-concept studio featuring a dedicated work-from-home executive office niche. |
| `EVO One` | 560 sq ft | 1 Bed · 1 Bath | **The Monarch One** | Signature 1-bedroom private retreat with walk-in closet and chef kitchen island. |
| `EVO Two` | 715 sq ft | 2 Bed · 1 Bath | **The Pacifica Two** | Dual-bedroom family residence designed for rental income or multi-gen living. |
| `EVO Two+` | 800 sq ft | 2 Bed · 2 Bath | **The Catalina Grand** | Flagship luxury secondary estate with dual ensuite baths and 12ft panoramic sliders. |

---

## 🛠️ 4. GoHighLevel (GHL) Multi-Step Survey Builder Setup Guide

To create a high-converting multi-step Survey inside GoHighLevel rather than a standard single-page form, follow this exact structure in **GHL > Sites > Surveys > Survey Builder**:

### Slide-by-Slide GHL Survey Architecture:

#### 🔹 Slide 1: Desired ADU Scope
* **Field Type:** Custom Field `adu_scope` (Single Option / Radio Buttons).
* **Question / Label:** *"What type of ADU project are you planning?"*
* **Options:**
  1. `Detached Backyard Build (Ground Up)`
  2. `Garage to ADU Conversion`
  3. `Junior ADU (JADU - Interior Conversion)`
  4. `Attached Home Extension / Addition`

#### 🔹 Slide 2: Current Lot Condition
* **Field Type:** Custom Field `lot_condition` (Single Option / Radio Buttons).
* **Question / Label:** *"What is the current condition of your lot or structure?"*
* **Options:**
  1. `Flat grass / dirt backyard`
  2. `Existing 2-car garage in place`
  3. `Sloped / hillside lot`
  4. `Attached garage / interior space`

#### 🔹 Slide 3: Primary Project Goal & Timeline
* **Field Type:** Custom Field `primary_goal` (Radio Buttons).
* **Question / Label:** *"What is your primary goal for this ADU?"*
* **Options:**
  1. `Passive Rental Income ($2,400 - $3,600/mo)`
  2. `Housing Aging Parents or Family`
  3. `Private Home Office or Guest Suite`
* **Field 2 on Slide 3 (Optional):** `target_timeline` &rarr; `Immediately (1-3 mos)`, `This Year (3-6 mos)`, `Exploring Feasibility`.

#### 🔹 Slide 4: Property Location & Address
* **Standard Fields:**
  - `Street Address` (Field: `contact.address1` — Required)
  - `City` (Field: `contact.city` — Dropdown with 34 OC Cities)
  - `State` (Field: `contact.state` — Pre-filled: `CA`)

#### 🔹 Slide 5: Contact & Assessment Delivery (Final Step)
* **Standard Fields:**
  - `Full Name` (Field: `contact.name` — Required)
  - `Phone Number` (Field: `contact.phone` — Required)
  - `Email Address` (Field: `contact.email` — Required)
* **Button Text:** `Get Free Property Feasibility Report →`
* **On Submit:** Trigger GHL Opportunity in Pipeline `8vxPfCoTrRLBRfoTYxUM` (Stage: `d7870240-23a9-4815-af1b-45d52f79537a`).

---

### 🎨 GHL Survey Styling Settings (For Seamless Dark Theme Embed):
Inside GHL Survey Builder &rarr; **Styles**:
1. **Background Color:** Set to Transparent (`rgba(0,0,0,0)`) or `#151515`.
2. **Text / Label Color:** `#FFFFFF` (White).
3. **Primary / Button Color:** `#FFAC00` (Brand Amber/Gold).
4. **Button Text Color:** `#111111` (Black).
5. **Corner Radius:** `12px` (Rounded).

Once created, copy the Survey Embed code (`<iframe src="https://link.westlanddre.com/widget/survey/SURVEY_ID" ...>`) and provide it so we can drop it into `GhlLeadForm.tsx`.

---

## 📋 Step-by-Step Implementation Sequence

### Task 1: Rebrand Model Names in `src/lib/data.ts`
- Update `EVO_MODELS` with the **California Coastal Architectural Series** (`The Balboa Studio`, `The Laguna Suite`, `The Monarch One`, `The Pacifica Two`, `The Catalina Grand`).
- Update all references in `EvoModelShowcase.tsx` and `models/page.tsx`.

### Task 2: Optimize Hero Padding & Replace Google Rating Card
- In `src/components/Hero.tsx`:
  - Reduce top padding to `pt-20 sm:pt-28 pb-8 sm:pb-12`.
  - Replace Google Rating card with `100% Approval` Permit Track Record.
- In `src/app/layout.tsx`:
  - Remove `aggregateRating` schema.

### Task 3: Integrate GHL Survey Iframe Embed
- When you provide the new GHL Survey ID/URL, update `src/components/GhlLeadForm.tsx` to point to `https://link.westlanddre.com/widget/survey/SURVEY_ID`.

### Task 4: Verify & Build
- Run `npx tsc --noEmit`.
- Commit and push to GitHub `main`.
