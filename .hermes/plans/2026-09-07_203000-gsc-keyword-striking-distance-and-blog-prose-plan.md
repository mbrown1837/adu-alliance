# GSC Keyword Striking-Distance Push & Blog Typography Plan (5-10 Monthly Inbound Leads)

> **Date:** September 7, 2026  
> **Target System:** ADU Alliance (Orange County Next.js 15 SSG Production Platform)  
> **Status:** Plan Mode — Local SEO & Content Optimization  

---

## 🎯 Goal
Push 12 high-intent Orange County "striking distance" keywords (currently ranking in Positions 20–35) to Page 1 (Top 5) across priority city hubs and money pages to generate 5–10 monthly qualified leads, and fix blog HTML typography/image formatting without deleting any indexed content.

---

## 📊 1. GSC Keyword Analysis & Local SEO Mapping

From GSC performance data (`gsc_queries_performance.json`), the site has existing impression equity on Page 2 & Page 3 for high-converting commercial intent queries:

| Search Query | GSC Position | Impressions | Target Route / Page | Exact Keyword Action |
| :--- | :--- | :--- | :--- | :--- |
| **`adu builders laguna woods`** | **20.5** | 244 | `/locations/laguna-woods` | Inject in H1, Meta Title, Direct Answer Box & Schema |
| **`adu builders la habra`** | **36.0** | 224 | `/locations/la-habra` | Inject in H1, Meta Title, Direct Answer Box & Schema |
| **`adu builders fountain valley`** | **31.8** | 236 | `/locations/fountain-valley` | Inject in H1, Meta Title, Direct Answer Box & Schema |
| **`adu builders brea`** | **30.8** | 301 | `/locations/brea` | Inject in H1, Meta Title, Direct Answer Box & Schema |
| **`adu builders yorba linda`** | **32.7** | 248 | `/locations/yorba-linda` | Inject in H1, Meta Title, Direct Answer Box & Schema |
| **`adu builders aliso viejo`** | **33.6** | 281 | `/locations/aliso-viejo` | Inject in H1, Meta Title, Direct Answer Box & Schema |
| **`adu builders buena park`** | **36.7** | 244 | `/locations/buena-park` | Inject in H1, Meta Title, Direct Answer Box & Schema |
| **`adu builders san clemente`** | **45.3** | 262 | `/locations/san-clemente` | Inject in H1, Meta Title, Direct Answer Box & Schema |
| **`adu builders mission viejo`** | **45.6** | 245 | `/locations/mission-viejo` | Inject in H1, Meta Title, Direct Answer Box & Schema |
| **`adu builders huntington beach`** | **56.5** | 250 | `/locations/huntington-beach` | Inject in H1, Meta Title, Direct Answer Box & Schema |
| **`adu builders orange county`** | **65.0** | 391 | `/` (Homepage) & `/services` | Inject in Hero H1, Meta Title & Authority Badges |
| **`garage conversion adu cost`** | **80.8** | 360 | `/services/garage-conversion` | Inject in H1, H2, and Line-Item Cost Table |

---

## ❓ 2. Advisory on Blog Posts: Delete vs. Format Fix

> **USER QUESTION:** *"Mai nia blogs check kiye hai laikin wo sahi show ni horahai like formatting ni theek to kia humai abhi liye unkai khatam kr dainai chayie site sai ya ni?"*

### ⚠️ Critical SEO Warning: DO NOT DELETE BLOGS!
- **Why Deleting is Dangerous:** The 323 blog posts represent the core topical authority and search impression footprint of `adualliance.com`. Deleting them would drop domain siteRadius/siteFocus scores and trigger a Google penalty for thin topical coverage.
- **The Correct Solution:** The single blog post template (`src/app/blog/[slug]/page.tsx`) needs modern Tailwind `prose-invert` styling, HTML entity decoder (`&#8217;` &rarr; `'`), responsive image wrappers (`max-w-full rounded-2xl shadow-xl`), and proper line height. This takes 5 minutes to fix and makes all 323 blog posts look magazine-grade!

---

## 📋 Step-by-Step Implementation Sequence

### Task 1: Fix Blog Single Page Typography & Image Formatting
- **File to Edit:** `src/app/blog/[slug]/page.tsx`
- **Actions:**
  - Add HTML entity cleanup helper (`replace(/&#8217;/g, "'").replace(/&amp;/g, '&')`).
  - Update `prose` container styling:
    ```tsx
    <div className="prose prose-invert prose-brand prose-lg max-w-none
                    prose-headings:font-display prose-headings:font-bold prose-headings:text-white
                    prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-brand-borderDark prose-h2:pb-3
                    prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-brand-amber
                    prose-p:text-slate-300 prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-base
                    prose-img:rounded-2xl prose-img:border prose-img:border-brand-borderDark prose-img:my-8 prose-img:shadow-2xl prose-img:w-full prose-img:object-cover
                    prose-a:text-brand-amber prose-a:font-semibold hover:prose-a:underline
                    prose-ul:text-slate-300 prose-li:marker:text-brand-amber prose-li:my-1
                    prose-blockquote:border-brand-amber prose-blockquote:bg-brand-dark prose-blockquote:py-3 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:text-slate-200"
         dangerouslySetInnerHTML={{ __html: post.content.rendered }}
    />
    ```

---

### Task 2: Inject Striking Distance Keywords into 11 Priority Location Hubs
- **File to Edit:** `src/lib/data.ts` & `src/app/locations/[slug]/page.tsx`
- **Actions:**
  - Update `ORANGE_COUNTY_CITIES` metadata titles and H1 tags to match exact GSC keywords:
    - Brea: `Top-Rated ADU Builders in Brea, CA | Turnkey Design & Permits`
    - Laguna Woods: `ADU Builders in Laguna Woods, CA | Turnkey Senior & Guest Units`
    - Fountain Valley: `ADU Builders in Fountain Valley, CA | Custom Design & City Permits`
    - Aliso Viejo: `Licensed ADU Builders in Aliso Viejo, CA | Turnkey Construction`
    - Yorba Linda: `ADU Builders in Yorba Linda, CA | Custom Backyard Homes`
    - La Habra: `ADU Builders in La Habra, CA | Garage Conversions & Detached ADUs`
    - Buena Park: `ADU Builders in Buena Park, CA | Guaranteed City Approvals`
    - San Clemente: `Coastal ADU Builders in San Clemente, CA | Turnkey Design-Build`
    - Mission Viejo: `ADU Builders in Mission Viejo, CA | Custom Detached & Garage ADUs`
    - Huntington Beach: `ADU Builders in Huntington Beach, CA | Coastal & Backyard Units`

---

### Task 3: Inject Money Keywords on Homepage & Garage Conversion Page
- **File to Edit:** `src/app/page.tsx`, `src/app/services/page.tsx`, `src/app/services/[slug]/page.tsx`
- **Actions:**
  - Inject `adu builders orange county` and `adu contractor orange county` into Hero & Services H1/H2 headings.
  - Inject `garage conversion adu cost` into `/services/garage-conversion` H1 & line-item cost table header.

---

### Task 4: Full Verification Build
- **Command:**
  ```bash
  cd "C:/Users/Administrator/Desktop/ADU Alliance" && npx tsc --noEmit && npm run build
  ```
- **Verification:** Confirm all 378+ SSG static routes compile cleanly with 0 TypeScript or Webpack errors.
