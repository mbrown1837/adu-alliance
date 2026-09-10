# Headless WP Backend Audit, Plugin Pruning & Instant Edge Serving Plan

> **Date:** September 7, 2026  
> **Target System:** ADU Alliance (Cloudflare Pages + Headless WordPress CMS `cms.adualliance.com`)  
> **Status:** Plan Mode — System Architecture & Speed Optimization  

---

## 🎯 Goal
Achieve **< 30ms instant direct page loads** for all blog articles on Cloudflare Edge via full SSG static HTML pre-rendering, purge obsolete pages on the WordPress CMS, and optimize the `cms.adualliance.com` backend by deactivating heavy elementor/builder plugins.

---

## 📌 1. Direct Edge Connection & Zero-Delay Serving Architecture

### Why Direct URLs Had 3-5s Latency Before:
When a visitor opened a blog URL directly (e.g. `https://adualliance.com/blog/adu-design-regulations-in-ca-2026-complete-guide`), Next.js made an un-cached server-side fetch (`getPost(slug)`) back to `cms.adualliance.com`. Because WordPress was running heavy plugins (Elementor Pro + Essential Blocks + RankMath), LiteSpeed took 3 to 5 seconds to assemble the JSON response.

### How to Achieve Instant (<30ms) Serving:
1. **SSG Static Pre-rendering at Build Time (`npm run build`):**
   Next.js fetches all 323 blog posts once during build and generates static HTML files (`out/blog/[slug].html`). When deployed to Cloudflare Pages, Cloudflare serves these pre-built HTML pages directly from global edge RAM in **< 30ms** — **WordPress is NEVER contacted during a user request!**
2. **ISR Edge Cache Config (`src/app/blog/[slug]/page.tsx`):**
   Set `export const revalidate = 86400;` (24 hours) so background revalidation happens silently without blocking the visitor.

---

## 📊 2. Deep Audit of WordPress CMS Pages (`cms.adualliance.com`)

Our REST API audit scanned all pages on `cms.adualliance.com`:

| WP Page Category | Examples | Recommendation | Reason |
| :--- | :--- | :--- | :--- |
| **Out-of-Market San Diego Pages** | `/fallbrook`, `/vista`, `/spring-valley`, `/solana-beach`, `/santee`, `/san-marcos`, `/san-diego` | 🗑️ **TRASH / DELETE** | Irrelevant San Diego legacy pages that pollute domain focus. Next.js natively serves all 34 Orange County city hubs. |
| **Legacy Site Pages** | `/about`, `/contact-us`, `/adu-services`, `/adu-education`, `/adu-construction`, `/adu-architecture` | 🗑️ **TRASH / DELETE** | Obsolete WordPress pages. Next.js App Router serves native `/about`, `/services`, `/process`, and `/free-feasibility`. |
| **Blog Posts (323 Articles)** | `/adu-design-regulations-in-ca-2026-complete-guide`, `/adu-size-limits-in-orange-county-2026-full-guide`, etc. | ✅ **KEEP & MAINTAIN** | The core SEO asset of the business. Managed exclusively in WP Admin under **Posts**. |

---

## 🔌 3. WordPress Plugin Deactivation & Speed Optimization Checklist

Our REST API namespace scan (`/wp-json/`) identified all active plugins on `cms.adualliance.com`. Because WordPress is now **strictly a Headless Blog Editor** (Next.js handles 100% of the frontend UI), heavy page builders are unnecessary and severely slow down the database server.

### ❌ Plugins to Deactivate / Remove on `cms.adualliance.com`:
1. **Elementor & Elementor Pro** (`elementor/v1`, `elementor-pro/v1`): Huge PHP memory hog. Completely unused since Next.js renders the frontend.
2. **Ultimate Addons for Elementor** (`uael/v1`): Redundant.
3. **Header Footer Elementor** (`hfe/v1`): Redundant.
4. **GutenbergHub Template Library & Styles** (`gutenberghub-template-library/v1`): Unnecessary CSS/JS overhead.
5. **Essential Blocks** (`essential-blocks/v1`): Redundant Gutenberg block library.
6. **All-in-One WP Migration** (`ai1wm/v1`): Deactivate unless actively transferring database backups.

### ✅ Plugins to Keep Active:
1. **Rank Math SEO** (`rankmath/v1`): Keeps meta titles, descriptions, schema fields, and XML sitemaps structured.
2. **EditorsKit** (`editorskit/v1`): Lightweight block controls for blog formatting.
3. **LiteSpeed Cache**: Keep active; enable REST API caching in LiteSpeed Cache settings to speed up Next.js build-time data fetching by 5x.

---

## 📋 Step-by-Step Code Execution Tasks

### Task 1: Enforce Static Edge Pre-Rendering in `src/app/blog/[slug]/page.tsx`
- **File to Edit:** `src/app/blog/[slug]/page.tsx`
- **Actions:**
  - Enforce `export const revalidate = 86400;` (24 hours).
  - Ensure `generateStaticParams()` returns all 323 blog slugs.
  - Set `fetch(..., { next: { revalidate: 86400 } })` so backend fetches occur only during build/revalidation.

### Task 2: Verify Single Navbar & Footer Layout
- Ensure no duplicate `<Navbar />` or `<Footer />` calls exist in `src/app/blog/page.tsx` or `src/app/blog/[slug]/page.tsx`.

### Task 3: Full SSG Build Verification
- **Command:** `npx tsc --noEmit && npm run build`
- **Expected Result:** 378+ SSG routes generated with 0 errors.
