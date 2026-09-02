# Knowledge Base: Orange County ADU SEO, Content Pruning & Multi-Location Architecture
*Synthesized from 55 Master SEO Source Dossiers + Live GSC Search Analytics (`adualliance.com`) + Dual-Engine Routing (`claude-seo` & `seomachine`)*

---

## 1. Executive Master Routing Framework (`claude-seo` vs `seomachine`)

Based on source-verified repository codebases (`AgricIDaniel/claude-seo` and `TheCraigHewitt/seomachine`), ADU Alliance operations follow a strict 70/30 division of labor:

```text
┌────────────────────────────────────────────────────────────────────────┐
│ 70% Technical, Local, Schema, Audit & Drift  ──> AgricIDaniel/claude-seo│
│ 30% Brand DNA, Copywriting, CRO & Polishing  ──> TheCraigHewitt/seomachine│
└────────────────────────────────────────────────────────────────────────┘
```

### Standard Operating Chains:
1. **Chain A (Baseline & Audit):** `seo-machine-context-setup` (scaffolds 11 Brand DNA files) $\rightarrow$ `claude-seo-audit` (crawl & technical health) $\rightarrow$ `claude-seo-local` & `claude-seo-maps` (GBP, citations, geo-grid) $\rightarrow$ `claude-seo-drift` (freeze baseline snapshot).
2. **Chain B (Local Page Deployment):** `claude-seo-cluster` (SERP-overlap clustering) $\rightarrow$ `claude-seo-content-brief` (writing brief) $\rightarrow$ `seomachine:copywriting` (2,000+ word draft) $\rightarrow$ `seo:seo-editor` (humanize tone, strip AI fluff) $\rightarrow$ `claude-seo-schema` (generate valid LocalBusiness JSON-LD) $\rightarrow$ Live Deployment.
3. **Chain C (Monthly Performance & Attribution):** `claude-seo-google` (pull GSC & GA4 queries) $\rightarrow$ `analytics-tracking` (verify phone & form events) $\rightarrow$ `seo:seo-client-reporting` (executive update).

---

## 2. Core Synthesis: 55 Source Dossiers on Local SEO & Content Pruning

### A. The 5-Bucket Content Pruning Framework (2026 Edition)
*(Sources: Search Engine Land, SEOZoom, Wixdek, Enterprise Search Architecture)*

Content pruning is **not** bulk deleting pages; it is systematic quality curation to maximize crawl budget and domain focus score (`siteFocusScore` / `siteRadius`):

| Bucket | Criteria | Action | Rule / Precaution |
| :--- | :--- | :--- | :--- |
| **1. KEEP** | High clicks, top 1-5 rank, core brand/service assets | Retain as canonical pillar | Protect internal link equity; never alter URL slug. |
| **2. REFRESH** | High impressions, rank pos 6-25, declining velocity | Upgrade content, add schema, localize with OC data | Add local proof, update Title 24 2026 laws, add interactive tools. |
| **3. MERGE** | Thin, cannibalizing, near-duplicate city pages | Consolidate into primary regional hub via 301 redirect | Map 301 redirects to closest parent; avoid generic homepage dumps. |
| **4. NOINDEX** | Utility pages, private thank-you, internal tags | Set `noindex, follow` tag | **Never** combine `noindex` with `robots.txt` Disallow (prevents Google seeing tag). |
| **5. REMOVE** | Spam-infected URLs, 404 dead ends, zero-value scrap | Return HTTP 410 Gone or 301 to parent pillar | Completely remove from XML sitemaps; submit sitemap update in GSC. |

### B. Doorway Page Avoidance & The "Swap Test"
*(Sources: Google Search Central, RicketyRoo, Semrush, Big Red SEO)*

* **Google Spam Policy 2026:** Prohibits *"multiple pages targeted at specific regions or cities that funnel users to one page with substantially similar content."*
* **The RicketyRoo Swap Test:** If you can swap the city name (e.g. replace *"Irvine"* with *"Huntington Beach"*) and the page text still makes 100% sense without factual errors, **it is a doorway page**.
* **Localization Requirements for Orange County Cities:**
  1. Municipal zoning & permit specifics (e.g. Irvine Community Development Dept vs Anaheim Planning vs Newport Beach Coastal Commission).
  2. Local setback rules, height limits (16 ft vs 18-24 ft for two-story), and parking exemptions (AB 2097 transit radius).
  3. Real local project references, micro-neighborhood case studies, and localized cost estimations.

### C. Multi-Location LocalBusiness Schema Standards
*(Sources: HiAgency, Kursor Creative, Content Powered, DeltaV Digital)*

* Multi-location sites must link individual location pages to the parent brand via `@id` and `branchOf` / `parentOrganization`.
* Required Schema properties: `name`, `address` (with 5-decimal precision `geo` coordinates), `telephone` `(657) 298-4061`, `areaServed` (Orange County municipalities), `priceRange` (`$$$$`), `hasOfferCatalog` with pre-engineered ADU models.

---

## 3. Live GSC Audit & 5-Bucket Pruning Plan (`adualliance.com`)

*Data Source: Google Search Console API via Service Account `seo-khata@disco-beanbag-464700-f6.iam.gserviceaccount.com` (16-Month Performance)*

### GSC Overall Metrics:
* Total Indexed Pages Evaluated: **182 URLs**
* Total Organic Ranking Queries: **1,000 Queries**
* Historical Malware / Spam Finding: **2 infected URLs** (`/adult-movies-telegram-link/`, `/nudes-trade-telegram/`) + old spam queries (`bahislion`). These must be permanently returned as HTTP 410 Gone.

### 5-Bucket Action Plan for ADU Alliance:

#### Bucket 1: KEEP (Core Brand & High-Performing Assets) — 11 URLs
* `https://adualliance.com/` (Homepage)
* `https://adualliance.com/about/` (About Us)
* `https://adualliance.com/services/` (Services Hub)
* `https://adualliance.com/projects/` (Case Studies & Project Gallery)
* `https://adualliance.com/adu-garage-conversion-cost-in-orange-county/` (Top Organic Winner)
* `https://adualliance.com/garage-conversion-adu-in-huntington-beach/`
* `https://adualliance.com/granny-apartments-in-huntington-beach/`
* `https://adualliance.com/orange-county-adu-permits-sb-543/`
* `https://adualliance.com/adu-orange-county-2025-why-everyone-is-talking-about-new-laws-and-you-should-too/`
* `https://adualliance.com/services/adu-construction/`
* `https://adualliance.com/contact-us/`

#### Bucket 2: REFRESH & LOCALIZE (High-Opportunity Striking Distance) — 114 URLs
* All Orange County City landing pages (`/locations/irvine/`, `/locations/santa-ana/`, `/locations/laguna-hills/`, `/locations/san-clemente/`, `/locations/buena-park/`, `/locations/lake-forest/`, `/locations/brea/`, `/locations/aliso-viejo/`, `/adu-builders-in-huntington-beach/`, `/junior-adus-in-garden-grove/`, etc.).
* **Action:** Upgrade these pages from thin Elementor text to rich, non-doorway local landing pages featuring the new design system, interactive cost calculator, city-specific permit regulations (LADBS/OC Planning), and local project photography.

#### Bucket 3: MERGE & 301 CONSOLIDATE (San Diego & Out-of-Territory Thin Pages) — 57 URLs
* Outdated San Diego County pages (`/san-deigo-county/carlsbad/`, `/san-diego-county/adu-architecture/`, `/adu-laws-in-san-diego/`, `/adu-laws-in-la-mesa-ca/`, `/junior-adu-construction-in-fallbrook/`, etc.).
* **Action:** Implement clean 301 redirects routing these non-core pages to their relevant parent pillars (`/services/adu-construction/` or `/locations/orange-county/`), consolidating all accumulated domain authority into the core Orange County cluster.

#### Bucket 4 & 5: REMOVE (HTTP 410 GONE) & SITEMAP CLEANUP
* `https://adualliance.com/adult-movies-telegram-link/` $\rightarrow$ Return HTTP 410 Gone
* `https://adualliance.com/nudes-trade-telegram/` $\rightarrow$ Return HTTP 410 Gone
* **Action:** Purge completely from XML sitemaps and disavow in GSC.
