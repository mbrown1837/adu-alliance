import { B1_TAX_POST } from './blog-b1';
import { B2_GARAGE_POST } from './blog-b2';

export interface BlogAuthor {
  name: string;
  role: string;
  bio: string;
  type?: 'Organization' | 'Person';
  avatarUrl?: string;
}

export interface BlogReviewer {
  name: string;
  role: string;
  credentials?: string;
  bio?: string;
}

export interface BlogSource {
  title: string;
  url: string;
  citationPassage?: string;
  note?: string;
}

export interface BlogFaqItem {
  question: string;
  answer: string;
}

export interface BlogTocItem {
  id: string;
  title: string;
  level: number;
}

export interface BlogPostData {
  slug: string;
  status: 'draft' | 'published';
  title: string;
  excerpt: string;
  content: string; // Sanitized HTML content styled via .blog-prose
  category: string;
  readTime: string;
  publishedAt: string; // ISO Date YYYY-MM-DD
  updatedAt?: string;   // Optional ISO Date YYYY-MM-DD
  featuredImage: {
    url: string;
    alt: string;
    caption?: string;
    credit?: string;
    width?: number;
    height?: number;
  };
  author: BlogAuthor;
  reviewer?: BlogReviewer;
  sources?: BlogSource[];
  tableOfContents?: BlogTocItem[];
  faq?: BlogFaqItem[];
  relatedSlugs?: string[];
  seoTitle?: string;
  seoDescription?: string;
  noIndex?: boolean;
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

/**
 * Validates whether a blog post meets all requirements for publication.
 * Prevents publishing placeholder records with missing content, unverified dates, or reserved slugs.
 */
export function validatePostForPublication(post: BlogPostData): ValidationResult {
  const errors: string[] = [];

  if (!post.slug || typeof post.slug !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug)) {
    errors.push('Invalid slug format: must be lowercase alphanumeric with hyphens');
  }

  const reservedSlugs = new Set(['preview', 'draft', 'admin', 'api', 'new', 'categories']);
  if (reservedSlugs.has(post.slug)) {
    errors.push(`Reserved slug cannot be used for public articles: ${post.slug}`);
  }

  if (!post.title || post.title.trim().length < 10) {
    errors.push('Title must be at least 10 characters long');
  }

  if (!post.excerpt || post.excerpt.trim().length < 20) {
    errors.push('Excerpt must be at least 20 characters long');
  }

  if (!post.content || post.content.trim().length < 100) {
    errors.push('Article content must be at least 100 characters long');
  }

  if (!post.publishedAt || !/^\d{4}-\d{2}-\d{2}$/.test(post.publishedAt)) {
    errors.push('Valid publishedAt date (YYYY-MM-DD) is required for publication');
  }

  if (isNaN(new Date(post.publishedAt).getTime())) {
    errors.push('publishedAt date must be a valid calendar date');
  }

  if (!post.featuredImage || !post.featuredImage.url) {
    errors.push('Featured image URL is required');
  }

  if (!post.author || !post.author.name) {
    errors.push('Author name is required');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Default organizational editorial byline for ADU Alliance.
 * Describes editorial responsibility plainly without claiming unverified credentials.
 */
export const DEFAULT_ORGANIZATIONAL_AUTHOR: BlogAuthor = {
  type: 'Organization',
  name: 'ADU Alliance Editorial Desk',
  role: 'Planning & Educational Research',
  bio: 'ADU Alliance provides educational guides and planning tools for Orange County homeowners exploring accessory dwelling units.',
  avatarUrl: '/images/logo-transparent.png',
};

/**
 * Local Content Repository
 * Draft records carry status: 'draft' and are excluded from public routes, listings, and sitemaps.
 */
export const BLOG_POSTS: BlogPostData[] = [
  B1_TAX_POST,
  B2_GARAGE_POST,
  {
    slug: 'orange-county-adu-fee-categories-estimate-guide',
    status: 'draft',
    title: 'Understanding ADU Fee Categories in Orange County: How to Request a Property-Specific Estimate',
    excerpt: 'Navigating ADU city fees in Orange County? Learn about the four fee categories, statutory size thresholds, and how to request a property-specific estimate.',
    content: '',
    category: 'Permits & Fees',
    readTime: '7 min read',
    publishedAt: '',
      featuredImage: {
      url: '/images/localized/adu_asset_52dc4cc0e2.jpg',
      alt: 'Architectural blueprints and municipal planning permit documents for an ADU',
      width: 1200,
      height: 514,
    },
    author: DEFAULT_ORGANIZATIONAL_AUTHOR,
    seoTitle: 'Understanding Orange County ADU Fees (Categories & Estimate Checklist)',
    seoDescription: 'Navigating ADU city fees in Orange County? Learn about the four fee categories, statutory size thresholds, and how to request a property-specific estimate.',
  },
];

/**
 * Filter for publicly published and valid articles only.
 * Sorts published posts newest first.
 */
export function getPublishedPosts(): BlogPostData[] {
  return BLOG_POSTS.filter((post) => post.status === 'published' && validatePostForPublication(post).valid).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/**
 * Retrieve a published article by slug for public routes.
 * Returns null if the slug is not found or fails publication validation.
 */
export function getPublishedPostBySlug(slug: string): BlogPostData | null {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post || post.status !== 'published' || !validatePostForPublication(post).valid) {
    return null;
  }
  return post;
}

/**
 * Retrieve related published articles.
 * Excludes the current post and drafts. Returns an empty array if none exist.
 */
export function getRelatedPublishedPosts(currentPost: BlogPostData): BlogPostData[] {
  if (!currentPost.relatedSlugs || currentPost.relatedSlugs.length === 0) {
    return [];
  }
  return currentPost.relatedSlugs
    .filter((slug) => slug !== currentPost.slug)
    .map((slug) => getPublishedPostBySlug(slug))
    .filter((p): p is BlogPostData => p !== null && p.status === 'published');
}

/**
 * Retrieve any post (published or draft) strictly for internal development preview routes.
 */
export function getPreviewPostBySlug(slug: string): BlogPostData | null {
  return BLOG_POSTS.find((p) => p.slug === slug) || null;
}

/**
 * Get distinct categories from published posts.
 */
export function getPublishedCategories(): string[] {
  const categories = getPublishedPosts().map((p) => p.category);
  return Array.from(new Set(categories));
}

/**
 * Synthetic Sample Preview Post
 * Isolated from public listings, public routes, and production sitemaps.
 * Uses neutral synthetic prose to test layout, typography, tables, TOC, and source rendering.
 */
export const SAMPLE_PREVIEW_POST: BlogPostData = {
  slug: 'sample-template-preview',
  status: 'draft',
  title: 'Sample Guide: Technical Architecture & Planning Considerations for Accessory Dwelling Units',
  excerpt: 'A synthetic technical overview demonstrating the ADU Alliance article layout, responsive tables, anchor navigation, and source citations.',
  category: 'Planning & Architecture',
  readTime: '5 min read',
  publishedAt: '',
  featuredImage: {
    url: '/images/localized/adu_asset_52dc4cc0e2.jpg',
    alt: 'Sample architectural concept rendering for template layout demonstration',
    caption: 'Sample architectural concept rendering for template layout demonstration.',
    credit: 'Placeholder stock asset for demonstration',
    width: 1200,
    height: 514,
  },
  author: {
    type: 'Organization',
    name: 'ADU Alliance Editorial Desk',
    role: 'Planning & Educational Research',
    bio: 'ADU Alliance provides educational guides and planning tools for Orange County homeowners exploring accessory dwelling units.',
    avatarUrl: '/images/logo-transparent.png',
  },
  reviewer: {
    name: 'Simulated Professional Reviewer (Test Preview Only)',
    role: 'Structural Engineering Review',
    credentials: 'For Template Demonstration Only',
  },
  tableOfContents: [
    { id: 'introduction', title: '1. Introduction to Planning Standards', level: 2 },
    { id: 'setback-envelope', title: '2. The Setback & Dimensional Envelope', level: 2 },
    { id: 'utility-pathways', title: '3. Evaluating Utility Connection Pathways', level: 2 },
    { id: 'hypothetical-space', title: '4. Illustrative Space Allocation Model', level: 2 },
    { id: 'frequently-asked-questions', title: '5. Frequently Asked Questions', level: 2 },
  ],
  sources: [
    {
      title: 'California Department of Housing and Community Development (HCD) ADU Portal',
      url: 'https://www.hcd.ca.gov/building-standards/adu',
      citationPassage: 'California Government Code Chapter 4.4 (§ 66310 et seq.)',
      note: 'State statutory reference for accessory dwelling unit zoning standards.',
    },
    {
      title: 'California Building Standards Commission (Title 24)',
      url: 'https://www.dgs.ca.gov/BSC',
      citationPassage: 'California Residential Code (Title 24, Part 2.5)',
      note: 'State building and life-safety code standards.',
    },
  ],
  faq: [
    {
      question: 'What is the purpose of this section in the template?',
      answer: 'This section exercises the optional FAQ block component in the shared article renderer, ensuring semantic heading hierarchy and clear contrast.',
    },
    {
      question: 'How are anchor targets handled when navigating from the Table of Contents?',
      answer: 'Every heading and section ID includes top scroll margin (scroll-mt-28) to prevent the fixed sticky header from overlapping text when jumped to.',
    },
  ],
  content: `
    <p id="introduction">This synthetic text demonstrates the layout, typography, and component behavior of the ADU Alliance article template. It is designed to verify visual hierarchy and readability on multiple screen widths.</p>
    
    <p>In residential construction planning, evaluating site conditions, local zoning rules, and structural parameters early in the design phase prevents costly revisions during municipal plan check.</p>
    
    <h2 id="setback-envelope">2. The Setback & Dimensional Envelope</h2>
    <p>Standard architectural guidelines require careful alignment between proposed building footprints and site property lines:</p>
    <ul>
      <li><strong>Property Line Offsets:</strong> State standards establish maximum allowable side and rear setbacks for detached accessory units.</li>
      <li><strong>Front Setbacks:</strong> Municipal front yard requirements must be coordinated with allowable building footprints.</li>
      <li><strong>Height Allowances:</strong> Vertical envelope limits vary based on whether the structure is single-story or two-story.</li>
    </ul>

    <blockquote>
      "Early site verification of recorded easements and underground utilities ensures architectural plans move smoothly through city plan check."
    </blockquote>

    <h2 id="utility-pathways">3. Evaluating Utility Connection Pathways</h2>
    <p>Before construction begins, builders and designers evaluate three primary infrastructure connections:</p>
    <ol>
      <li><strong>Sanitary Sewer:</strong> Verifying gravity slope from the proposed fixture drains to the property sewer lateral.</li>
      <li><strong>Electrical Service:</strong> Performing electrical load calculations under the California Electrical Code.</li>
      <li><strong>Water Supply:</strong> Checking supply pressure and meter capacity for proposed fixture units.</li>
    </ol>

    <h2 id="hypothetical-space">4. Illustrative Space Allocation Model</h2>
    <p>The table below provides a hypothetical model comparing space distribution between a compact conversion and a detached build. All figures are illustrative examples for space planning:</p>

    <table>
      <thead>
        <tr>
          <th>Planning Factor</th>
          <th>Compact Conversion (~400 Sq Ft)</th>
          <th>Detached Two-Bedroom (~750 Sq Ft)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Living / Kitchen Area</strong></td>
          <td>~220 sq ft (Open layout)</td>
          <td>~380 sq ft (Kitchen + living room)</td>
        </tr>
        <tr>
          <td><strong>Bedroom Space</strong></td>
          <td>~120 sq ft (Studio/1-bed area)</td>
          <td>~240 sq ft (Two private bedrooms)</td>
        </tr>
        <tr>
          <td><strong>Bathroom & Utility</strong></td>
          <td>~60 sq ft (Full 3-piece bath)</td>
          <td>~130 sq ft (Bath + laundry closet)</td>
        </tr>
        <tr>
          <td><strong>Footprint Impact</strong></td>
          <td>Zero net loss of yard area</td>
          <td>Requires dedicated rear-yard ground space</td>
        </tr>
      </tbody>
    </table>

    <p>For additional details on evaluating project cost categories based on your own project inputs, visit our <a href="/calculator">interactive ADU budget worksheet</a>.</p>
  `,
  seoTitle: 'Sample Template Preview | ADU Alliance',
  seoDescription: 'Internal development preview demonstrating article layout, typography, responsive tables, and source citations.',
  noIndex: true,
};
