# Blog Prose Engine & Local SEO Striking-Distance Master Plan

> **Date:** September 7, 2026  
> **Target System:** ADU Alliance (Next.js 15 Headless WordPress + Local SEO Engine)  
> **Skills Activated:** `seo-machine`, `claude-seo`, `seo-local`, `design-taste-frontend`  
> **Status:** Plan Mode — Ready for Execution  

---

## 🎯 Goal
Transform the blog post rendering engine into a magazine-grade, responsive typography reader with clean WordPress Gutenberg block styling, rewrite internal CMS links to native routes, and optimize 11 striking-distance Orange County city hubs to rank top 5 and deliver 5–10 monthly qualified inbound leads.

---

## 🔍 Root Cause Analysis & Audit Findings

### 1. Root Cause of "Fazul Blog Formatting":
- **Diagnosis:** `@tailwindcss/typography` was not installed in `package.json`, and `globals.css` lacked explicit CSS rules for WordPress raw HTML tags (`<h2>`, `<p>`, `<ul>`, `<ol>`, `<img>`, `<figure>`, `<table>`, `<blockquote>`).
- **Impact:** When Next.js rendered `dangerouslySetInnerHTML={{ __html: post.content.rendered }}`, browser default user-agent styles took over — headings were unstyled, images broke out of containers, paragraph line-height was cramped, and lists had no bullets.
- **Internal Links Issue:** WordPress posts contain links pointing to `https://cms.adualliance.com/slug`. These must be dynamically transformed to `/blog/slug` or native internal routes.

### 2. GSC Local SEO Striking Distance Opportunity (Positions 20–35):
The site has active impression volume on Page 2/3 for high-intent municipal commercial keywords:
- `adu builders laguna woods` (Pos 20.5 | 244 Impr)
- `adu builders brea` (Pos 30.8 | 301 Impr)
- `adu builders fountain valley` (Pos 31.8 | 236 Impr)
- `adu builders yorba linda` (Pos 32.7 | 248 Impr)
- `adu builders aliso viejo` (Pos 33.6 | 281 Impr)
- `adu builders la habra` (Pos 36.0 | 224 Impr)
- `adu builders buena park` (Pos 36.7 | 244 Impr)
- `adu builders san clemente` (Pos 45.3 | 262 Impr)
- `adu builders mission viejo` (Pos 45.6 | 245 Impr)
- `adu builders huntington beach` (Pos 56.5 | 250 Impr)

---

## 🏗️ Step-by-Step Implementation Sequence

### Task 1: Build Custom WordPress Gutenberg Prose Engine in `src/app/globals.css`
- **File to Edit:** `src/app/globals.css`
- **Code:**
```css
/* ==========================================
   WORDPRESS GUTENBERG & PROSE STYLING ENGINE
   ========================================== */
.blog-prose {
  color: #cbd5e1;
  font-family: 'Outfit', sans-serif;
  font-size: 1.0625rem;
  line-height: 1.85;
}

.blog-prose h2 {
  color: #ffffff;
  font-weight: 800;
  font-size: 1.875rem;
  letter-spacing: -0.02em;
  margin-top: 3rem;
  margin-bottom: 1.25rem;
  border-bottom: 1px solid #262626;
  padding-bottom: 0.75rem;
}

.blog-prose h3 {
  color: #ffac00;
  font-weight: 700;
  font-size: 1.375rem;
  letter-spacing: -0.01em;
  margin-top: 2.25rem;
  margin-bottom: 0.875rem;
}

.blog-prose p {
  margin-bottom: 1.5rem;
  color: #cbd5e1;
}

.blog-prose ul {
  list-style-type: disc;
  margin-top: 1rem;
  margin-bottom: 1.75rem;
  padding-left: 1.75rem;
}

.blog-prose ol {
  list-style-type: decimal;
  margin-top: 1rem;
  margin-bottom: 1.75rem;
  padding-left: 1.75rem;
}

.blog-prose li {
  margin-bottom: 0.625rem;
  color: #cbd5e1;
}

.blog-prose li strong {
  color: #ffffff;
}

.blog-prose img,
.blog-prose figure,
.blog-prose .wp-block-image {
  width: 100% !important;
  max-width: 100% !important;
  height: auto !important;
  border-radius: 1rem;
  border: 1px solid #262626;
  margin: 2.5rem auto;
  box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.5);
  display: block;
}

.blog-prose table {
  width: 100%;
  border-collapse: collapse;
  margin: 2.5rem 0;
  font-size: 0.875rem;
  font-family: monospace;
}

.blog-prose th,
.blog-prose td {
  border: 1px solid #262626;
  padding: 0.75rem 1rem;
  text-align: left;
}

.blog-prose th {
  background-color: #151515;
  color: #ffac00;
  font-weight: bold;
}

.blog-prose blockquote {
  border-left: 4px solid #ffac00;
  background-color: #151515;
  padding: 1.25rem 1.75rem;
  border-radius: 0 1rem 1rem 0;
  margin: 2.25rem 0;
  font-style: italic;
  color: #ffffff;
}

.blog-prose a {
  color: #ffac00;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease;
}

.blog-prose a:hover {
  color: #ffffff;
}

.blog-prose hr {
  border: 0;
  border-top: 1px solid #262626;
  margin: 3rem 0;
}
```

---

### Task 2: Polish Single Blog Template & Link Transformer (`src/app/blog/[slug]/page.tsx`)
- **File to Edit:** `src/app/blog/[slug]/page.tsx`
- **Actions:**
  - Create link sanitizer function that replaces `https://cms.adualliance.com/` with `/blog/` across post content.
  - Wrap rendered HTML in `.blog-prose` container with `.force-dark` context.
  - Clean up HTML entities (`&#8217;` &rarr; `'`, `&hellip;` &rarr; `...`).
  - Embed `GhlLeadForm` as a sticky CTA inside high-intent ranking articles.

---

### Task 3: Inject Striking-Distance Keywords into 11 Orange County City Hubs
- **Files to Edit:** `src/lib/data.ts` & `src/app/locations/[slug]/page.tsx`
- **Actions:**
  - Update `ORANGE_COUNTY_CITIES` data with exact target keywords:
    - Brea: `Top-Rated ADU Builders in Brea, CA`
    - Laguna Woods: `ADU Builders in Laguna Woods, CA | Senior & Backyard Living`
    - Fountain Valley: `ADU Builders in Fountain Valley, CA`
    - Yorba Linda: `ADU Builders in Yorba Linda, CA`
    - Aliso Viejo: `Licensed ADU Builders in Aliso Viejo, CA`
    - La Habra: `ADU Builders in La Habra, CA`
    - Buena Park: `ADU Builders in Buena Park, CA`
    - San Clemente: `Coastal ADU Builders in San Clemente, CA`
    - Mission Viejo: `ADU Builders in Mission Viejo, CA`
    - Huntington Beach: `ADU Builders in Huntington Beach, CA`
    - Irvine: `Premier ADU Builders in Irvine, CA`
  - Inject keywords into H1, meta titles, AEO Direct Answer boxes, and LocalBusiness JSON-LD schema.

---

### Task 4: Static Verification Build & Type Safety
- **Command:** `npx tsc --noEmit && npm run build`
- **Expected Output:** 378+ SSG routes compiled with 0 errors.
