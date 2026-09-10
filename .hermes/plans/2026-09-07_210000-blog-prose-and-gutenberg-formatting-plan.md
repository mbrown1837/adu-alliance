# WordPress Gutenberg & Blog Prose Typography Remediation Plan

> **Date:** September 7, 2026  
> **Target System:** ADU Alliance (Next.js Headless WordPress Blog Engine)  
> **Goal:** Fix raw WordPress HTML formatting issues ("fazul formatting") on blog post pages by styling Gutenberg blocks, tables, images, and prose containers to render magazine-grade typography.

---

## 🎯 Problem Diagnosis
When blog posts are fetched via WordPress REST API (`cms.adualliance.com`), the content (`post.content.rendered`) contains raw Gutenberg HTML tags (`<p>`, `<h2>`, `<h3>`, `<ul>`, `<li>`, `<img>`, `<figure>`, `<table>`, etc.). Without explicit CSS rules in Tailwind or global styles, these elements render unstyled, causing broken image sizes, missing table borders, cramped paragraph spacing, and unformatted lists.

---

## 🏗️ Proposed Approach (Gutenberg Prose Styling)
1. **Global WordPress Prose Styles in `src/app/globals.css`:**
   - Add targeted CSS rules for `.prose` and WordPress block elements (`.wp-block-image`, `img`, `table`, `th`, `td`, `ul`, `ol`, `li`, `blockquote`, `h2`, `h3`).
   - Ensure responsive images (`max-width: 100%; height: auto; border-radius: 12px; margin: 2rem auto;`).
   - Style tables with clean borders, padding, and dark header rows.
   - Ensure proper vertical rhythm (`margin-bottom: 1.5rem` for paragraphs, `margin-top: 2.5rem` for headings).
2. **Blog Template Wrapper (`src/app/blog/[slug]/page.tsx`):**
   - Wrap `post.content.rendered` inside a dedicated `.prose .prose-invert` wrapper with custom max-width (`max-w-4xl mx-auto px-4`).

---

## 📋 Step-by-Step Implementation Tasks

### Task 1: Add Robust WordPress Gutenberg CSS Rules to `src/app/globals.css`
- **File to Edit:** `src/app/globals.css`
- **Code to Add:**
  ```css
  /* WordPress Gutenberg Prose & Blog Formatting Overrides */
  .prose {
    color: #cbd5e1;
    font-family: 'Outfit', sans-serif;
    font-size: 1.05rem;
    line-height: 1.8;
  }
  .prose h2 {
    color: #ffffff;
    font-weight: 800;
    font-size: 1.875rem;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
    border-bottom: 1px solid #262626;
    padding-bottom: 0.75rem;
  }
  .prose h3 {
    color: #ffac00;
    font-weight: 700;
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
  }
  .prose p {
    margin-bottom: 1.5rem;
  }
  .prose ul, .prose ol {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }
  .prose ul {
    list-style-type: disc;
  }
  .prose ol {
    list-style-type: decimal;
  }
  .prose li {
    margin-bottom: 0.5rem;
  }
  .prose img, .prose figure {
    max-width: 100%;
    height: auto;
    border-radius: 1rem;
    border: 1px solid #262626;
    margin: 2rem auto;
    box-shadow: 0 20px 25px -5px rgb(0 0_0 / 0.3);
  }
  .prose table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    font-size: 0.95rem;
  }
  .prose th, .prose td {
    border: 1px solid #262626;
    padding: 0.75rem 1rem;
    text-align: left;
  }
  .prose th {
    background-color: #151515;
    color: #ffac00;
    font-weight: bold;
  }
  .prose blockquote {
    border-left: 4px solid #ffac00;
    background-color: #151515;
    padding: 1rem 1.5rem;
    border-radius: 0 0.75rem 0.75rem 0;
    margin: 2rem 0;
    font-style: italic;
    color: #ffffff;
  }
  ```

### Task 2: Verify Build & Static Export
- Run `npx tsc --noEmit` and `npm run build` to verify all blog articles compile correctly.
