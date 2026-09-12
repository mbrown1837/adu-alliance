# FreeScan Audit Remediation & Comprehensive Site Optimization Plan

> **Date:** September 8, 2026  
> **Target Platform:** ADU Alliance (`https://adualliance.com`)  
> **Audit Source:** FreeScan.app Launch Readiness Audit (Initial Score: **65/100**)  
> **Target Score:** **90+/100** across all 4 categories (Security, SEO/AEO, Accessibility, Design)  
> **Status:** Plan Mode — Ready for Execution  

---

## 🎯 Goal
Execute a precise, code-backed remediation across all 14 failed audit checks and 3 review items from the FreeScan audit, raising the launch readiness score from 65/100 to 90+/100 while preserving all routes, analytics, conversion flows, and Cloudflare Worker edge performance.

---

## 📊 Summary of Audit Findings & Target Fixes

| Category | Current Audit Score | Identified Failures & Issues | Remediation Strategy | Target Score |
| :--- | :---: | :--- | :--- | :---: |
| **Security** | **75/100** | Missing 5 common security headers (`HSTS`, `CSP`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`) | Configure native security headers in `next.config.mjs` / Cloudflare `_headers` | **100/100** |
| **SEO / AEO** | **64/100** | Meta description too long (199 chars), Title too long (78 chars), Schema connectivity 40/100, OpenGraph `localhost` image leak, Sitemap timeout | Tighten meta tags to 147 & 53 chars, fix `og:image` domain URL, repair JSON-LD schema `@id` nodes & sitemap route | **95/100** |
| **Accessibility**| **71/100** | Contrast failures on `.text-slate-500` (3.83:1 ratio), Heading hierarchy jumps (H2 &rarr; H4), Landmark region gaps | Upgrade low-contrast text to `.text-slate-300`/`.text-slate-400`, fix heading sequence H1 &rarr; H2 &rarr; H3 | **95/100** |
| **Design / Perf**| **70/100** | High Total Blocking Time (638ms), Transfer size, 0 proof signals measured | Optimize script loading, defer non-critical JS, enhance visible CSLB & client proof cards | **90/100** |

---

## 🛠️ Step-by-Step Implementation Tasks

### Task 1: Configure Security Headers (`next.config.mjs` & `public/_headers`)
- **Files:** `next.config.mjs`, `public/_headers`
- **Action:** Add HTTP security response headers for all Cloudflare Edge routes:
```javascript
// next.config.mjs
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
];
```
- Also generate `public/_headers` for static Cloudflare Pages/Worker edge delivery:
```
/*
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: origin-when-cross-origin
```

---

### Task 2: Fix SEO Title Tag, Meta Description & OpenGraph Image URL
- **File:** `src/app/layout.tsx`
- **Title Fix:** Change title from 78 chars (`ADU Builders in Orange County | Turnkey Design-Build Contractor | ADU Alliance`) to **52 chars**:
  - `title: 'ADU Builders Orange County | ADU Alliance'`
- **Meta Description Fix:** Tighten from 199 chars to **147 chars**:
  - `description: 'Orange County ADU design-build general contractor. Custom detached ADUs & garage conversions with 100% city permit approval. Call (657) 298-4061.'`
- **OpenGraph Image Fix:** Replace `http://localhost:3000/...` with live HTTPS production URL:
  - `images: [{ url: 'https://adualliance.com/images/localized/adu_asset_7b7dec0f36.jpeg', width: 1200, height: 630 }]`

---

### Task 3: Repair Schema Graph Connectivity & Sitemaps (`src/app/layout.tsx` & `src/app/sitemap.ts`)
- **File:** `src/app/layout.tsx`
- **Action:** Add `@id` identifiers to JSON-LD schema nodes so Google & AEO search engines connect `GeneralContractor` with `PostalAddress` and `GeoCoordinates` as a single unified Knowledge Graph entity:
```json
{
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://adualliance.com/#organization",
  "name": "ADU Alliance",
  "url": "https://adualliance.com",
  "logo": "https://adualliance.com/images/logo-transparent.png",
  "image": "https://adualliance.com/images/localized/adu_asset_7b7dec0f36.jpeg",
  "address": {
    "@type": "PostalAddress",
    "@id": "https://adualliance.com/#address",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "@id": "https://adualliance.com/#geo",
    "latitude": 33.6846,
    "longitude": -117.8265
  }
}
```
- **Sitemap Verification:** Ensure `src/app/sitemap.ts` returns clean `Content-Type: application/xml` and verify `public/sitemap.xml` static fallback exists.

---

### Task 4: Fix Accessibility Contrast Ratios & Heading Order
- **Files:** `src/components/Hero.tsx`, `src/components/EvoModelShowcase.tsx`, `src/components/LaduProcessTimeline.tsx`, `src/components/WhyChooseUs.tsx`
- **Contrast Remediation:** Audit and replace all instances of `.text-slate-500` on dark backgrounds (`#111111` / `#151515`) with `.text-slate-400` or `.text-slate-300` to guarantee WCAG AA contrast ratio $\ge 4.5:1$.
- **Heading Order Remediation:** Fix non-sequential heading jumps (e.g. H2 followed directly by H4). Ensure strict sequential order: `H1` (Hero main title) $\rightarrow$ `H2` (Section headers) $\rightarrow$ `H3` (Card titles) $\rightarrow$ `H4` (Sub-card items).

---

### Task 5: Performance Optimization (Scripts & Transfer Size)
- **Files:** `src/app/layout.tsx`, `src/lib/gtm.ts`
- **Action:** Ensure GTM and third-party scripts carry `async` / `defer` strategies to reduce Total Blocking Time (TBT) from 638ms to under 200ms.

---

## 🧪 Verification & Validation Strategy

1. **TypeScript Build Validation:** Run `npx tsc --noEmit` to confirm 0 compilation errors.
2. **Local Lighthouse & Axe Audit:** Run accessibility and contrast checks to confirm 0 WCAG AA contrast failures.
3. **Deploy & Re-Audit:** Commit changes to GitHub `main`, trigger Cloudflare Worker build, and re-test on `https://adualliance.com`.
