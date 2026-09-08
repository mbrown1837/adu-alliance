# Comprehensive Audit Remediation, Local SEO & GHL Integration Master Plan

> **Date:** September 7, 2026  
> **Target Project:** ADU Alliance (Orange County Next.js 15 SSG Production Platform)  
> **Status:** Plan Finalized & Verified — Ready for Implementation  

---

## 🎯 Goal
Execute complete audit remediation: create dedicated `/services` hub, enrich local SEO content on all 34 city hubs and 5 service pages, embed the live GoHighLevel form (`5SviqisRQjnrGLdX2rLq`), inject GTM (`GTM-KNC2GR4`) & GA4 (`G-C1EYM0JCZC`), fix image hotlinking & metrics, and verify a 378+ static page build.

---

## 🏗️ Architecture & Page Structure Matrix

| Route / Endpoint | Page Purpose | SEO & Conversion Role | Status |
| :--- | :--- | :--- | :--- |
| **`/`** | Authority Homepage | Main conversion hub, Before/After sliders, GHL assessment tool, 4-phase roadmap. | Needs GHL embed & image fix |
| **`/services`** | **Main Services Hub (NEW)** | Comprehensive index of all 5 ADU services with comparison, costs, and timeline matrix. | **To Create** |
| **`/services/[slug]`** (5 pages) | Service Money Pages | High-intent search pages (`/garage-conversion`, `/detached-adu`, etc.) with line-item costs and city permit details. | To enrich |
| **`/locations/[slug]`** (34 pages) | Programmatic OC City Hubs | City-specific setback rules, zoning codes, local building department details, and LocalBusiness Schema. | To enrich |
| **`/models`** | Signature Floor Plans | Studio to 2-Bed ADU models with sqft, turnkey prices, and feature breakdowns. | Complete |
| **`/process`** | Turnkey Roadmap | 4-stage transparency from Feasibility to Key Handover with Gantt timeline. | Complete |
| **`/calculator`** | Interactive Estimator | Dynamic cost estimator & rental cash-flow projector for Orange County lots. | Complete |
| **`/projects`** | Portfolio & Case Studies | Real Orange County builds with distinct transformation stories. | To enrich |
| **`/free-feasibility`** | Lead Capture Landing Page | Full-page conversion funnel with direct GHL Form embed. | Needs GHL embed |
| **`/about`** | Builder Alliance & Trust | Company story, verified CSLB Class B partner network disclosure, and warranty specs. | Complete |
| **`/blog` & `/blog/[slug]`** (323+ pages) | Dynamic Headless WP Hub | 100% synchronized live with WordPress REST API (`cms.adualliance.com`). | Complete |
| **`/privacy` & `/terms`** | Legal & Compliance | TCPA consent, CCPA compliance, and matching network disclosures for Google Ads safety. | Complete |

---

## 📋 Step-by-Step Implementation Sequence

### Step 1: Create Dedicated `/services` Hub Page & Update Navbar
- **File to create:** `src/app/services/page.tsx`
  - Display all 5 core services with icons, turnaround times, typical cost ranges, and feature lists.
  - Include comparison table between Detached ADU vs Garage Conversion vs JADU.
  - Inject `Service` and `BreadcrumbList` JSON-LD schema.
- **File to edit:** `src/components/Navbar.tsx`
  - Update nav link from `/services/garage-conversion` to `/services`.

### Step 2: Embed Live GHL Lead Form (`5SviqisRQjnrGLdX2rLq`)
- **File to create:** `src/components/GhlLeadForm.tsx`
  - Encapsulate the GHL iframe (`https://link.westlanddre.com/widget/form/5SviqisRQjnrGLdX2rLq`) and lazy-load `form_embed.js`.
- **Files to update:**
  - `src/components/PropertyAssessmentTool.tsx`: Replace dummy state wizard with `GhlLeadForm`.
  - `src/components/FeasibilityForm.tsx`: Mount `GhlLeadForm` across all single blog posts.
  - `src/app/free-feasibility/page.tsx`: Embed `GhlLeadForm` as the primary action.

### Step 3: Inject GTM (`GTM-KNC2GR4`) & GA4 (`G-C1EYM0JCZC`) in `src/app/layout.tsx`
- Add GTM script in `<head>` and `<noscript>` iframe in `<body>`.
- Add GA4 measurement script.

### Step 4: Fix Before/After Image Hotlinks & Metrics
- **File to edit:** `src/lib/data.ts`
  - Replace duplicate LA links with distinct, high-res Newport Beach vs Irvine project images.
  - Set accurate metric values: `$2,400/mo Est. Rental Potential` and `$150,000+ Added Property Equity`.
- **File to edit:** `src/components/BeforeAfterSlider.tsx`: Cleanly render both metrics.

### Step 5: Deepen Local SEO Content on 34 City Pages (`/locations/[slug]`)
- **File to edit:** `src/app/locations/[slug]/page.tsx`
  - Ensure rich local zoning content: 4-foot setback mandates, AB 1033 condo conveyance status, municipal building department review times (e.g. Irvine vs Newport Beach vs Anaheim), and local FAQs.
  - Verify complete `LocalBusiness` JSON-LD schema with geo-coordinates.

### Step 6: Full Verification Build
- Run `npm run build` to verify that all 378+ routes compile cleanly as static SSG with 0 errors.
