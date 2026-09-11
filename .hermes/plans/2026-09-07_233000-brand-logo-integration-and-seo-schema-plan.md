# Brand Logo Integration, Favicon & SEO Knowledge Graph Master Plan

> **Date:** September 7, 2026  
> **Target System:** ADU Alliance (`https://adualliance.com`)  
> **Skills Activated:** `design-taste-frontend`, `seo-schema`, `seo-local`  
> **Status:** Plan Mode — Architectural Brand Integration  

---

## 🎯 Goal
Integrate the official ADU Alliance transparent logo (`/images/logo-transparent.png`) into the Next.js header, footer, `Organization` JSON-LD schema, OpenGraph social sharing tags, and favicon suite to cement brand entity authority in Google Knowledge Graph and social platforms.

---

## 🔍 SEO & Brand Impact Analysis

### 1. **Google Knowledge Graph & Local SEO Impact:**
- **Schema.org Alignment:** Google's `GeneralContractor` and `Organization` schema guidelines require an official `logo` URL. Providing `https://adualliance.com/images/logo-transparent.png` helps Google index the brand entity, populate Knowledge Panels, and verify Google Maps / GBP association.
- **Brand Search Consistency:** Using the exact original logo across the site and social channels prevents brand confusion and reinforces domain authority.

### 2. **Social Media & OpenGraph Impact:**
- When sharing `https://adualliance.com` on WhatsApp, iMessage, LinkedIn, X, or Facebook, the OpenGraph `og:image` and `twitter:image` tags will display the official brand logo, maximizing click-through rates (CTR) and social trust.

---

## 🎨 Taste-Skill Integration Architecture (`design-taste-frontend`)

1. **Header Navigation (`src/components/Navbar.tsx`):**
   - Replace the generic text monogram box with the transparent PNG logo (`/images/logo-transparent.png` at 36px height) rendered cleanly beside the `ADU ALLIANCE` typography.
2. **Footer Brand Block (`src/components/Footer.tsx`):**
   - Display the transparent logo in the top footer column above the company description.
3. **Favicon Suite Generation:**
   - Convert `logo-transparent.png` into clean, high-DPI favicons:
     - `/public/favicon.ico` (32x32 Multi-resolution ICO)
     - `/public/favicon-32x32.png` (32x32 PNG)
     - `/public/apple-touch-icon.png` (180x180 PNG)
4. **Schema & OpenGraph Metadata (`src/app/layout.tsx`):**
   - Update `schemaData` to include `"logo": "https://adualliance.com/images/logo-transparent.png"`.
   - Update `openGraph` and `twitter` image tags.

---

## 📋 Step-by-Step Implementation Sequence

### Task 1: Generate High-DPI Favicons from Transparent Logo
- Convert `/public/images/logo-transparent.png` into:
  - `public/favicon.ico`
  - `public/favicon-32x32.png`
  - `public/apple-touch-icon.png`

### Task 2: Integrate Transparent Logo in Header (`src/components/Navbar.tsx`)
- Edit `Navbar.tsx` to render `<img src="/images/logo-transparent.png" alt="ADU Alliance Logo" className="h-9 w-auto" />`.

### Task 3: Integrate Transparent Logo in Footer (`src/components/Footer.tsx`)
- Edit `Footer.tsx` to render the transparent logo in the brand column.

### Task 4: Update Schema & Metadata in `src/app/layout.tsx`
- Add `"logo": "https://adualliance.com/images/logo-transparent.png"` to JSON-LD `GeneralContractor` schema.
- Update `openGraph` and `twitter` image metadata.

### Task 5: Build & Type Safety Check
- Run `npx tsc --noEmit`.
- Commit and push to GitHub `main` branch.
