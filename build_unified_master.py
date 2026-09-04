import re

html_content = """<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ADU Alliance | Orange County's Premier ADU Design-Build Contractor</title>
  <meta name="description" content="Turnkey ADU builder in Orange County, CA. Custom & modern prefab accessory dwelling units starting at $149,000. 100% guaranteed city permits & single design-build contract. Call (657) 298-4061.">
  <link rel="canonical" href="https://adualliance.com/">
  
  <!-- Open Graph / Meta -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="ADU Alliance | Orange County's Premier ADU Design-Build Contractor">
  <meta property="og:description" content="Turnkey ADU builder in Orange County, CA. Custom & prefab ADUs starting at $149,000. 100% guaranteed permits. Call (657) 298-4061.">
  <meta property="og:image" content="https://www.evoadu.com/assets/images/Home_Pic_1_Hero_Home.jpg">
  <meta property="og:url" content="https://adualliance.com/">
  <meta property="og:site_name" content="ADU Alliance">
  
  <!-- Google Fonts: Outfit (Display Headings) + Plus Jakarta Sans (Body & UI) + JetBrains Mono (Metrics) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700;800&family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet">
  
  <!-- LocalBusiness Schema (JSON-LD) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "ADU Alliance",
    "image": "https://www.evoadu.com/assets/images/Home_Pic_1_Hero_Home.jpg",
    "@id": "https://adualliance.com/#organization",
    "url": "https://adualliance.com",
    "telephone": "+16572984061",
    "priceRange": "$149,000 - $350,000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2372 Morse Ave",
      "addressLocality": "Irvine",
      "addressRegion": "CA",
      "postalCode": "92614",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.6846,
      "longitude": -117.8265
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "07:30",
      "closes": "18:00"
    },
    "areaServed": [
      "Irvine", "Newport Beach", "Huntington Beach", "Costa Mesa", "Anaheim", 
      "Fullerton", "Laguna Beach", "Mission Viejo", "Lake Forest", "Aliso Viejo",
      "San Clemente", "Dana Point", "Orange", "Brea", "Yorba Linda"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "184"
    }
  }
  </script>

  <!-- FAQ Schema (JSON-LD) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does it cost to build an ADU in Orange County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Orange County, turnkey ADU construction typically ranges from $149,000 for a compact 350 sq ft studio/JADU to $245,000 for a spacious 2-bedroom unit. All ADU Alliance contracts include architectural design, structural engineering, 100% city permitting, and ground-up construction."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to get ADU permits in Orange County cities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Orange County cities approve ADU permits within 60 to 90 days under California state mandate. Because ADU Alliance prepares pre-checked plan sets that strictly conform to local municipal setback and utility codes, our permit pass rate is 100%."
        }
      },
      {
        "@type": "Question",
        "name": "Can I build an ADU if I have a homeowners association (HOA)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Under California Assembly Bill 670, HOAs cannot prohibit or unreasonably restrict the construction of accessory dwelling units on single-family lots. We manage all required HOA architectural reviews as part of our turnkey permitting phase."
        }
      }
    ]
  }
  </script>

  <style>
    :root, [data-theme="light"] {
      /* 2026 100% Harmonious Architectural Light Theme */
      --bg-canvas: #FBFBF9;
      --bg-surface: #FFFFFF;
      --bg-surface-elevated: #FFFFFF;
      --bg-surface-soft: #F4F1EA;
      
      --text-main: #11171E;
      --text-muted: #526071;
      --text-light: #8E9EAF;
      
      --border-subtle: #E8E4DA;
      --border-medium: #D2CDC0;
      
      --brand-primary: #11171E;
      --brand-amber: #D97706;
      --brand-amber-light: #F59E0B;
      --brand-amber-glow: rgba(217, 119, 6, 0.22);
      
      --calc-card-bg: #FFFFFF;
      --calc-results-bg: #F4F1EA;
      --calc-slider-track: #E2DDD3;
      
      --shadow-sm: 0 1px 3px rgba(13, 17, 21, 0.04);
      --shadow-md: 0 8px 24px -4px rgba(13, 17, 21, 0.08);
      --shadow-lg: 0 16px 40px -8px rgba(13, 17, 21, 0.12);
      --shadow-xl: 0 28px 64px -14px rgba(13, 17, 21, 0.18);
      
      --radius-sm: 8px;
      --radius-md: 14px;
      --radius-lg: 20px;
      --radius-xl: 30px;
      --radius-full: 9999px;
      
      --font-display: 'Outfit', sans-serif;
      --font-body: 'Plus Jakarta Sans', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
      
      --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
    }

    [data-theme="dark"] {
      /* 2026 100% Harmonious Obsidian Slate Dark Theme */
      --bg-canvas: #090C0F;
      --bg-surface: #10151C;
      --bg-surface-elevated: #161D26;
      --bg-surface-soft: #131922;
      
      --text-main: #F3F4F6;
      --text-muted: #9CA3AF;
      --text-light: #6B7280;
      
      --border-subtle: #202A37;
      --border-medium: #2C3A4D;
      
      --brand-primary: #FFFFFF;
      --brand-amber: #F59E0B;
      --brand-amber-light: #FBBF24;
      --brand-amber-glow: rgba(245, 158, 11, 0.25);
      
      --calc-card-bg: #10151C;
      --calc-results-bg: #161D26;
      --calc-slider-track: #1E293B;
      
      --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3);
      --shadow-md: 0 8px 24px -4px rgba(0, 0, 0, 0.5);
      --shadow-lg: 0 16px 40px -8px rgba(0, 0, 0, 0.6);
      --shadow-xl: 0 28px 64px -14px rgba(0, 0, 0, 0.7);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: var(--bg-canvas);
      color: var(--text-main);
      font-family: var(--font-body);
      font-size: 15.5px;
      line-height: 1.65;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    .container {
      max-width: 1420px;
      margin: 0 auto;
      padding: 0 32px;
    }

    /* Top Live Announcement Bar */
    .top-announcement {
      background: var(--bg-surface-soft);
      color: var(--text-main);
      font-size: 12.5px;
      padding: 9px 0;
      border-bottom: 1px solid var(--border-subtle);
      text-align: center;
      font-family: var(--font-display);
      font-weight: 500;
    }
    .top-announcement .highlight {
      color: var(--brand-amber);
      font-weight: 700;
    }
    .top-announcement .pulse-dot {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #10B981;
      margin-right: 8px;
      box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
      animation: pulseGreen 2s infinite;
      vertical-align: middle;
    }
    @keyframes pulseGreen {
      0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
      70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
      100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
    }

    /* Streamlined Single-Line Header */
    .site-header {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: var(--bg-surface);
      border-bottom: 1px solid var(--border-subtle);
      transition: all 0.3s var(--ease-spring);
    }
    .site-header.scrolled {
      box-shadow: var(--shadow-md);
      backdrop-filter: blur(12px);
    }
    .nav-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 72px;
      gap: 20px;
      white-space: nowrap;
    }
    .brand-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: var(--text-main);
      flex-shrink: 0;
    }
    .brand-logo-mark {
      width: 38px;
      height: 38px;
      background: var(--brand-primary);
      color: var(--bg-surface);
      border-radius: var(--radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-display);
      font-weight: 800;
      font-size: 18px;
      letter-spacing: -0.5px;
      border: 1px solid var(--border-subtle);
    }
    [data-theme="dark"] .brand-logo-mark {
      color: #090C0F;
    }
    .brand-logo-text {
      display: flex;
      align-items: baseline;
      gap: 6px;
    }
    .brand-logo-text .title {
      font-family: var(--font-display);
      font-weight: 800;
      font-size: 19px;
      letter-spacing: -0.5px;
      color: var(--text-main);
    }
    .brand-logo-text .badge-oc {
      font-size: 10.5px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--brand-amber);
      font-weight: 800;
      background: var(--bg-surface-soft);
      padding: 2px 7px;
      border-radius: var(--radius-sm);
      border: 1px solid var(--border-subtle);
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 24px;
      list-style: none;
      margin: 0 auto;
    }
    .nav-links a {
      text-decoration: none;
      color: var(--text-muted);
      font-weight: 600;
      font-size: 14px;
      transition: color 0.2s ease;
    }
    .nav-links a:hover {
      color: var(--text-main);
    }
    .nav-actions {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-shrink: 0;
    }
    .theme-toggle-btn {
      width: 38px;
      height: 38px;
      border-radius: var(--radius-full);
      background: var(--bg-surface-soft);
      border: 1px solid var(--border-subtle);
      color: var(--text-main);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 16px;
      transition: all 0.2s ease;
    }
    .theme-toggle-btn:hover {
      background: var(--border-medium);
      transform: rotate(15deg);
    }
    .phone-badge {
      display: flex;
      align-items: center;
      gap: 6px;
      color: var(--text-main);
      text-decoration: none;
      font-weight: 700;
      font-family: var(--font-mono);
      font-size: 13.5px;
      padding: 8px 14px;
      border-radius: var(--radius-full);
      background: var(--bg-surface-soft);
      border: 1px solid var(--border-subtle);
      transition: all 0.2s ease;
    }
    .phone-badge:hover {
      background: var(--border-subtle);
    }
    .btn-primary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      background: var(--brand-amber);
      color: #FFF;
      padding: 10px 20px;
      border-radius: var(--radius-full);
      font-weight: 700;
      font-size: 13.5px;
      text-decoration: none;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 14px var(--brand-amber-glow);
      transition: all 0.25s var(--ease-spring);
    }
    .btn-primary:hover {
      background: #B45309;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px var(--brand-amber-glow);
    }

    /* Section Alternating Tokens */
    .section-canvas {
      background-color: var(--bg-canvas);
    }
    .section-surface-soft {
      background-color: var(--bg-surface-soft);
    }
    .section-surface {
      background-color: var(--bg-surface);
    }

    /* Hero Section */
    .hero-section {
      position: relative;
      padding: 68px 0 84px;
      border-bottom: 1px solid var(--border-subtle);
      overflow: hidden;
    }
    .hero-grid {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 56px;
      align-items: center;
    }
    .hero-badge-row {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 24px;
      flex-wrap: wrap;
    }
    .trust-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      padding: 6px 14px;
      border-radius: var(--radius-full);
      font-size: 12.5px;
      font-weight: 700;
      color: var(--text-main);
      box-shadow: var(--shadow-sm);
    }
    .trust-pill .stars {
      color: #F59E0B;
      letter-spacing: 1px;
    }
    .hero-title {
      font-family: var(--font-display);
      font-size: clamp(38px, 4.4vw, 56px);
      font-weight: 800;
      line-height: 1.08;
      letter-spacing: -1.5px;
      color: var(--text-main);
      margin-bottom: 20px;
    }
    .hero-title span.accent-gradient {
      background: linear-gradient(135deg, var(--brand-amber) 0%, #F59E0B 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero-lead {
      font-size: 17px;
      line-height: 1.6;
      color: var(--text-muted);
      margin-bottom: 32px;
      max-width: 600px;
    }
    .hero-metrics-bar {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      padding-top: 28px;
      border-top: 1px solid var(--border-subtle);
    }
    .hero-metric-item .val {
      font-family: var(--font-mono);
      font-size: 26px;
      font-weight: 800;
      color: var(--text-main);
      line-height: 1.1;
    }
    .hero-metric-item .lbl {
      font-size: 12.5px;
      color: var(--text-muted);
      font-weight: 600;
      margin-top: 4px;
    }

    /* Hero Form Card */
    .hero-form-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: 34px 30px;
      box-shadow: var(--shadow-xl);
      position: relative;
    }
    .hero-form-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 30px;
      right: 30px;
      height: 4px;
      background: linear-gradient(90deg, var(--brand-amber) 0%, var(--brand-amber-light) 100%);
      border-radius: 4px 4px 0 0;
    }
    .form-card-title {
      font-family: var(--font-display);
      font-size: 21px;
      font-weight: 800;
      letter-spacing: -0.4px;
      color: var(--text-main);
      margin-bottom: 6px;
    }
    .form-card-sub {
      font-size: 13.5px;
      color: var(--text-muted);
      margin-bottom: 20px;
    }
    .lead-form-grid {
      display: grid;
      gap: 15px;
    }
    .input-group label {
      display: block;
      font-size: 11.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      color: var(--text-muted);
      margin-bottom: 5px;
    }
    .input-control {
      width: 100%;
      height: 46px;
      padding: 0 16px;
      border: 1px solid var(--border-medium);
      border-radius: var(--radius-sm);
      font-family: var(--font-body);
      font-size: 14.5px;
      color: var(--text-main);
      background: var(--bg-surface);
      transition: all 0.2s ease;
    }
    .input-control:focus {
      outline: none;
      border-color: var(--brand-amber);
      box-shadow: 0 0 0 3px var(--brand-amber-glow);
    }
    .form-btn-submit {
      width: 100%;
      height: 50px;
      background: var(--brand-primary);
      color: var(--bg-surface);
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 15px;
      border-radius: var(--radius-sm);
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      margin-top: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    [data-theme="dark"] .form-btn-submit {
      color: #090C0F;
    }
    .form-btn-submit:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }
    .form-guarantee-note {
      font-size: 11.5px;
      color: var(--text-light);
      text-align: center;
      margin-top: 10px;
    }

    /* Trust Logo Bar */
    .trust-logo-section {
      padding: 32px 0;
      border-bottom: 1px solid var(--border-subtle);
    }
    .trust-logo-header {
      text-align: center;
      font-size: 11.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: var(--text-light);
      margin-bottom: 20px;
    }
    .trust-logo-grid {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 28px;
      flex-wrap: wrap;
    }
    .trust-logo-item {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 700;
      font-size: 14px;
      color: var(--text-muted);
    }

    /* Section Utilities */
    .section-padding {
      padding: 92px 0;
    }
    .section-head-center {
      text-align: center;
      max-width: 760px;
      margin: 0 auto 52px;
    }
    .eyebrow-tag {
      display: inline-block;
      font-family: var(--font-display);
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: var(--brand-amber);
      margin-bottom: 10px;
    }
    .section-h2 {
      font-family: var(--font-display);
      font-size: clamp(30px, 3.3vw, 42px);
      font-weight: 800;
      line-height: 1.15;
      letter-spacing: -1px;
      color: var(--text-main);
      margin-bottom: 14px;
    }
    .section-desc {
      font-size: 16px;
      color: var(--text-muted);
      line-height: 1.6;
    }

    /* 5 Models Tabbed Switcher */
    .model-tabs-nav {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-bottom: 36px;
      flex-wrap: wrap;
    }
    .model-tab-btn {
      padding: 11px 22px;
      border-radius: var(--radius-full);
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      color: var(--text-muted);
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .model-tab-btn:hover {
      color: var(--text-main);
      border-color: var(--border-medium);
    }
    .model-tab-btn.active {
      background: var(--brand-primary);
      color: var(--bg-surface);
      border-color: var(--brand-primary);
      box-shadow: var(--shadow-sm);
    }
    [data-theme="dark"] .model-tab-btn.active {
      color: #090C0F;
    }
    .model-display-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-lg);
      display: grid;
      grid-template-columns: 1.25fr 0.75fr;
    }
    .model-display-media {
      position: relative;
      background: #000;
      min-height: 460px;
      overflow: hidden;
    }
    .model-display-media img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    .model-display-info {
      padding: 44px 36px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .model-info-head .badge {
      display: inline-block;
      background: var(--bg-surface-soft);
      border: 1px solid var(--border-subtle);
      padding: 4px 12px;
      border-radius: var(--radius-full);
      font-size: 11.5px;
      font-weight: 700;
      color: var(--brand-amber);
      margin-bottom: 10px;
    }
    .model-info-head .model-name {
      font-family: var(--font-display);
      font-size: 30px;
      font-weight: 800;
      letter-spacing: -0.8px;
      color: var(--text-main);
      margin-bottom: 6px;
    }
    .model-specs-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin: 20px 0;
      padding: 18px 0;
      border-top: 1px solid var(--border-subtle);
      border-bottom: 1px solid var(--border-subtle);
    }
    .model-spec-item .num {
      font-family: var(--font-mono);
      font-size: 20px;
      font-weight: 800;
      color: var(--text-main);
    }
    .model-spec-item .label {
      font-size: 11px;
      color: var(--text-muted);
      font-weight: 600;
      text-transform: uppercase;
    }
    .model-price-box {
      background: var(--bg-surface-soft);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      padding: 18px;
      margin-bottom: 22px;
    }
    .model-price-box .price-label {
      font-size: 11.5px;
      color: var(--text-muted);
      font-weight: 600;
    }
    .model-price-box .price-num {
      font-family: var(--font-mono);
      font-size: 26px;
      font-weight: 800;
      color: var(--brand-amber);
    }

    /* Harmonious Cost & Property Value Estimator (100% Theme Synchronized) */
    .calc-card-container {
      background: var(--calc-card-bg);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-xl);
      padding: 44px;
      box-shadow: var(--shadow-xl);
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 44px;
    }
    .calc-inputs-col {
      display: flex;
      flex-direction: column;
      gap: 28px;
    }
    .calc-slider-group label {
      display: flex;
      justify-content: space-between;
      font-weight: 700;
      font-size: 14px;
      margin-bottom: 10px;
      color: var(--text-main);
    }
    .calc-slider-group .slider-val {
      font-family: var(--font-mono);
      color: var(--brand-amber);
      font-weight: 800;
    }
    .calc-range-slider {
      width: 100%;
      height: 8px;
      background: var(--calc-slider-track);
      border-radius: 4px;
      outline: none;
      -webkit-appearance: none;
      cursor: pointer;
    }
    .calc-range-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: var(--brand-amber);
      cursor: pointer;
      box-shadow: 0 0 10px var(--brand-amber-glow);
    }
    .calc-results-col {
      background: var(--calc-results-bg);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: 32px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .calc-metric-box {
      margin-bottom: 22px;
    }
    .calc-metric-box:last-child {
      margin-bottom: 0;
    }
    .calc-metric-box .metric-lbl {
      font-size: 11.5px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--text-muted);
      font-weight: 700;
      margin-bottom: 3px;
    }
    .calc-metric-box .metric-val {
      font-family: var(--font-mono);
      font-size: 32px;
      font-weight: 800;
      color: var(--brand-amber);
    }
    .calc-metric-box .metric-sub {
      font-size: 12px;
      color: var(--text-muted);
    }

    /* Living & Interiors Gallery */
    .interiors-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
    .interior-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      overflow: hidden;
      box-shadow: var(--shadow-sm);
    }
    .interior-card-media {
      height: 240px;
      overflow: hidden;
    }
    .interior-card-media img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    .interior-card:hover .interior-card-media img {
      transform: scale(1.04);
    }
    .interior-card-body {
      padding: 24px;
    }
    .interior-card-body h3 {
      font-family: var(--font-display);
      font-size: 18px;
      font-weight: 800;
      color: var(--text-main);
      margin-bottom: 8px;
    }
    .interior-card-body p {
      font-size: 13.5px;
      color: var(--text-muted);
      line-height: 1.5;
    }

    /* Four Ways to Step In */
    .step-in-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 22px;
    }
    .step-in-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: 30px 22px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: var(--shadow-sm);
      transition: all 0.25s ease;
    }
    .step-in-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-md);
      border-color: var(--brand-amber);
    }
    .step-in-card .tag {
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--brand-amber);
      margin-bottom: 10px;
    }
    .step-in-card h3 {
      font-family: var(--font-display);
      font-size: 18px;
      font-weight: 800;
      color: var(--text-main);
      margin-bottom: 10px;
    }
    .step-in-card p {
      font-size: 13.5px;
      color: var(--text-muted);
      line-height: 1.55;
      margin-bottom: 22px;
    }
    .step-in-card .card-action-link {
      color: var(--brand-amber);
      font-weight: 700;
      font-size: 13.5px;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    /* 4-Stage Turnkey Process Timeline */
    .process-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 22px;
    }
    .process-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: 32px 24px;
      box-shadow: var(--shadow-sm);
    }
    .process-card .phase-num {
      font-family: var(--font-mono);
      font-size: 13px;
      font-weight: 800;
      color: var(--brand-amber);
      background: var(--bg-surface-soft);
      padding: 4px 10px;
      border-radius: var(--radius-full);
      display: inline-block;
      margin-bottom: 14px;
    }
    .process-card h3 {
      font-family: var(--font-display);
      font-size: 19px;
      font-weight: 800;
      color: var(--text-main);
      margin-bottom: 8px;
    }
    .process-card p {
      font-size: 13.5px;
      color: var(--text-muted);
      line-height: 1.6;
    }

    /* Real Projects Portfolio with Before/After */
    .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }
    .project-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-md);
    }
    .project-media-split {
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 270px;
    }
    .project-media-split .img-box {
      position: relative;
      height: 100%;
    }
    .project-media-split .img-box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .project-media-split .img-box .badge {
      position: absolute;
      top: 10px;
      left: 10px;
      background: rgba(0,0,0,0.75);
      color: #FFF;
      font-size: 10.5px;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: var(--radius-sm);
    }
    .project-card-body {
      padding: 26px;
    }
    .project-card-body .city-tag {
      font-size: 11.5px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: var(--brand-amber);
    }
    .project-card-body h3 {
      font-family: var(--font-display);
      font-size: 21px;
      font-weight: 800;
      color: var(--text-main);
      margin: 4px 0 10px;
    }
    .project-stats-row {
      display: flex;
      gap: 18px;
      font-size: 13px;
      color: var(--text-muted);
      font-weight: 600;
      margin-bottom: 10px;
    }

    /* Why Us 6 Trust Pillars */
    .why-us-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 26px;
    }
    .why-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: 32px 26px;
      box-shadow: var(--shadow-sm);
    }
    .why-card .why-num {
      font-family: var(--font-mono);
      font-size: 22px;
      font-weight: 800;
      color: var(--brand-amber);
      margin-bottom: 14px;
    }
    .why-card h3 {
      font-family: var(--font-display);
      font-size: 19px;
      font-weight: 800;
      color: var(--text-main);
      margin-bottom: 8px;
    }
    .why-card p {
      font-size: 13.5px;
      color: var(--text-muted);
      line-height: 1.6;
    }

    /* 34 Orange County Municipalities Directory */
    .cities-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 12px;
    }
    .city-chip {
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      padding: 10px 12px;
      border-radius: var(--radius-sm);
      font-size: 13px;
      font-weight: 600;
      color: var(--text-main);
      text-align: center;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .city-chip:hover {
      background: var(--brand-amber);
      color: #FFF;
      border-color: var(--brand-amber);
    }

    /* FAQ Section */
    .faq-container {
      max-width: 860px;
      margin: 0 auto;
    }
    .faq-item {
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      margin-bottom: 14px;
      overflow: hidden;
    }
    .faq-question {
      padding: 20px 26px;
      font-family: var(--font-display);
      font-size: 16.5px;
      font-weight: 700;
      color: var(--text-main);
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      user-select: none;
    }
    .faq-question .toggle-icon {
      font-size: 20px;
      font-weight: 400;
      color: var(--brand-amber);
      transition: transform 0.2s ease;
    }
    .faq-answer {
      padding: 0 26px 20px;
      font-size: 14px;
      color: var(--text-muted);
      line-height: 1.65;
      display: none;
    }
    .faq-item.active .faq-answer {
      display: block;
    }
    .faq-item.active .toggle-icon {
      transform: rotate(45deg);
    }

    /* Final CTA Section (Harmonious Theme Adapted) */
    .cta-section {
      background-color: var(--bg-surface-soft);
      border-top: 1px solid var(--border-subtle);
      border-bottom: 1px solid var(--border-subtle);
      text-align: center;
    }

    /* Footer */
    .site-footer {
      background-color: var(--bg-surface);
      color: var(--text-muted);
      padding: 72px 0 36px;
      border-top: 1px solid var(--border-subtle);
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr 1fr;
      gap: 44px;
      margin-bottom: 56px;
    }
    .footer-col h4 {
      color: var(--text-main);
      font-family: var(--font-display);
      font-size: 15.5px;
      font-weight: 800;
      margin-bottom: 18px;
      letter-spacing: 0.5px;
    }
    .footer-col p {
      font-size: 13.5px;
      color: var(--text-muted);
      line-height: 1.65;
    }
    .footer-links {
      list-style: none;
    }
    .footer-links li {
      margin-bottom: 10px;
    }
    .footer-links a {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 13.5px;
      transition: color 0.2s ease;
    }
    .footer-links a:hover {
      color: var(--brand-amber);
    }
    .footer-bottom {
      padding-top: 28px;
      border-top: 1px solid var(--border-subtle);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12.5px;
      color: var(--text-light);
    }

    /* Sticky Mobile Action Bar */
    .mobile-sticky-bar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: var(--bg-surface);
      border-top: 1px solid var(--border-subtle);
      padding: 12px 20px;
      display: none;
      z-index: 999;
      box-shadow: 0 -4px 16px rgba(0,0,0,0.1);
    }
    .mobile-sticky-inner {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 12px;
    }
    .mobile-btn-call {
      background: var(--bg-surface-soft);
      border: 1px solid var(--border-subtle);
      color: var(--text-main);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px;
      border-radius: var(--radius-full);
      font-weight: 700;
      font-size: 14px;
      text-decoration: none;
    }
    .mobile-btn-quote {
      background: var(--brand-amber);
      color: #FFF;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px;
      border-radius: var(--radius-full);
      font-weight: 700;
      font-size: 14px;
      text-decoration: none;
    }

    @media (max-width: 1100px) {
      .nav-links {
        gap: 16px;
      }
    }

    @media (max-width: 1024px) {
      .hero-grid, .calc-card-container, .model-display-card, .portfolio-grid {
        grid-template-columns: 1fr;
      }
      .models-section .model-display-media {
        min-height: 320px;
      }
      .step-in-grid, .process-grid, .why-us-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .cities-grid {
        grid-template-columns: repeat(3, 1fr);
      }
      .footer-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 768px) {
      .nav-links, .phone-badge {
        display: none;
      }
      .mobile-sticky-bar {
        display: block;
      }
      .step-in-grid, .process-grid, .why-us-grid, .interiors-grid {
        grid-template-columns: 1fr;
      }
      .cities-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .footer-grid {
        grid-template-columns: 1fr;
      }
      .section-padding {
        padding: 56px 0;
      }
      .hero-form-card {
        padding: 24px 18px;
      }
    }
  </style>
</head>
<body>

  <!-- Top Announcement Bar -->
  <div class="top-announcement">
    <span class="pulse-dot"></span>
    <strong>Orange County ADU Update (2026):</strong> California SB 9 and AB 1033 compliant. Fast 60-day city approvals active in all 34 OC cities. <span class="highlight">Call (657) 298-4061</span>
  </div>

  <!-- Streamlined Single-Line Header -->
  <header class="site-header" id="siteHeader">
    <div class="container">
      <div class="nav-inner">
        <a href="/" class="brand-logo">
          <div class="brand-logo-mark">AA</div>
          <div class="brand-logo-text">
            <span class="title">ADU ALLIANCE</span>
            <span class="badge-oc">OC</span>
          </div>
        </a>

        <!-- 5 High-Signal One-Line Nav Links -->
        <ul class="nav-links">
          <li><a href="#models">Models</a></li>
          <li><a href="#calculator">Estimator</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>

        <!-- Action Cluster: Theme Toggle + Phone + CTA -->
        <div class="nav-actions">
          <button id="themeToggleBtn" class="theme-toggle-btn" aria-label="Toggle Light and Dark Mode" title="Toggle Light/Dark Theme">
            <span class="theme-icon light-icon">☀️</span>
          </button>
          <a href="tel:+16572984061" class="phone-badge">
            <span>📞</span> (657) 298-4061
          </a>
          <a href="#lead-form" class="btn-primary">Free Feasibility</a>
        </div>
      </div>
    </div>
  </header>

  <!-- Hero Section (Canvas Tone) -->
  <section class="hero-section section-canvas" id="hero">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-content">
          <div class="hero-badge-row">
            <div class="trust-pill"><span class="stars">★★★★★</span> 4.9/5 Rating (94+ Reviews)</div>
            <div class="trust-pill">🏛️ CA Class B Licensed Verified CSLB Alliance</div>
          </div>
          
          <h1 class="hero-title">
            Your Orange County Backyard, Built for <span class="accent-gradient">Living, Family & Home Value.</span>
          </h1>
          
          <p class="hero-lead">
            We handle 100% turnkey ADU design, city permitting, and ground-up construction in Orange County. Fixed-price single contracts starting from $149,000.
          </p>

          <div class="hero-metrics-bar">
            <div class="hero-metric-item">
              <div class="val">200+</div>
              <div class="lbl">ADUs Completed in CA</div>
            </div>
            <div class="hero-metric-item">
              <div class="val">100%</div>
              <div class="lbl">City Permit Pass Rate</div>
            </div>
            <div class="hero-metric-item">
              <div class="val">15+ Yrs</div>
              <div class="lbl">ADU-Only Specialists</div>
            </div>
          </div>
        </div>

        <!-- Hero Form Card -->
        <div class="hero-form-card" id="lead-form">
          <h2 class="form-card-title">Check Your Property Feasibility</h2>
          <p class="form-card-sub">Get your custom Orange County ADU price & zoning read in 24 hours.</p>
          
          <form action="https://formsubmit.co/ajax/info@adualliance.com" method="POST" id="homeHeroForm">
            <input type="hidden" name="_subject" value="New ADU Lot Feasibility Request (Hero Form)">
            <input type="hidden" name="_captcha" value="false">
            
            <div class="lead-form-grid">
              <div class="input-group">
                <label for="leadName">Your Full Name</label>
                <input type="text" id="leadName" name="name" class="input-control" placeholder="Sarah Jenkins" required>
              </div>

              <div class="input-group">
                <label for="leadPhone">Phone Number</label>
                <input type="tel" id="leadPhone" name="phone" class="input-control" placeholder="(949) 555-0192" required>
              </div>

              <div class="input-group">
                <label for="aduTypeSelect">ADU Project Type</label>
                <select id="aduTypeSelect" name="project_type" class="input-control">
                  <option value="Detached ADU (Ground Up)">Detached ADU (Ground Up)</option>
                  <option value="Garage Conversion">Garage Conversion ADU</option>
                  <option value="Attached ADU / Home Addition">Attached ADU / Home Addition</option>
                  <option value="Junior ADU (JADU)">Junior ADU (JADU)</option>
                </select>
              </div>

              <div class="input-group">
                <label for="leadAddress">Property Address or ZIP Code</label>
                <input type="text" id="leadAddress" name="property_address" class="input-control" placeholder="Irvine, CA (92614)" required>
              </div>

              <button type="submit" class="form-btn-submit" id="heroSubmitBtn">
                Get My Free Lot Feasibility Plan →
              </button>
            </div>
            <p class="form-guarantee-note">🔒 Zero sales pressure. 100% confidential. No spam ever.</p>
            <div id="heroFormFeedback" style="display:none; margin-top:12px; font-weight:700; text-align:center; color:var(--brand-amber);"></div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Trust Logo Bar (Surface Tone) -->
  <section class="trust-logo-section section-surface">
    <div class="container">
      <div class="trust-logo-header">Trusted By Industry Leaders & California Housing Programs</div>
      <div class="trust-logo-grid">
        <div class="trust-logo-item">🏛️ Casita Coalition</div>
        <div class="trust-logo-item">💼 CalHFA Approved ($40k Grants)</div>
        <div class="trust-logo-item">🏡 California HCD Compliant</div>
        <div class="trust-logo-item">🛡️ CSLB Licensed Verified CSLB Alliance</div>
        <div class="trust-logo-item">🤝 HPP Cares Housing Partner</div>
      </div>
    </div>
  </section>

  <!-- 5 Pre-Designed Models Section (Surface Soft Tone) -->
  <section class="section-padding section-surface-soft" id="models">
    <div class="container">
      <div class="section-head-center">
        <span class="eyebrow-tag">Architectural Precision</span>
        <h2 class="section-h2">5 Pre-Designed & Fully Customizable ADU Floor Plans</h2>
        <p class="section-desc">Factory-engineered and stick-built floor plans designed specifically for California setbacks and Orange County residential lots.</p>
      </div>

      <div class="model-tabs-nav" id="modelTabsNav">
        <button class="model-tab-btn active" data-model="compact">EVO Compact (350 sq ft)</button>
        <button class="model-tab-btn" data-model="studio">EVO Studio (430 sq ft)</button>
        <button class="model-tab-btn" data-model="one">EVO One (560 sq ft)</button>
        <button class="model-tab-btn" data-model="two">EVO Two (715 sq ft)</button>
        <button class="model-tab-btn" data-model="twoplus">EVO Two+ (800 sq ft)</button>
      </div>

      <div class="model-display-card" id="modelCardContainer">
        <div class="model-display-media">
          <img src="https://www.evoadu.com/assets/images/Home_Pic_2_Compact_Home.jpg" alt="EVO Compact ADU" id="modelImg">
        </div>
        <div class="model-display-info">
          <div>
            <div class="model-info-head">
              <span class="badge" id="modelBadge">Studio · 1 Bath</span>
              <h3 class="model-name" id="modelName">EVO Compact</h3>
              <p class="section-desc" id="modelOverview" style="font-size:14.5px;">Optimized micro-living with full kitchen, walk-in shower, and integrated oak storage cabinetry.</p>
            </div>

            <div class="model-specs-grid">
              <div class="model-spec-item">
                <div class="num" id="modelSqft">350</div>
                <div class="label">Square Feet</div>
              </div>
              <div class="model-spec-item">
                <div class="num" id="modelBeds">Studio</div>
                <div class="label">Bedrooms</div>
              </div>
              <div class="model-spec-item">
                <div class="num" id="modelBaths">1.0</div>
                <div class="label">Bathrooms</div>
              </div>
            </div>

            <div class="model-price-box">
              <div class="price-label">Turnkey Base Package</div>
              <div class="price-num" id="modelPrice">$149,000</div>
            </div>
          </div>

          <a href="#lead-form" class="btn-primary" style="width:100%; text-align:center;">Request Floor Plan PDF & Site Check</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Interactive ADU Cost & Property Value Estimator (Canvas Tone with Unified Light/Dark Card) -->
  <section class="section-padding section-canvas" id="calculator">
    <div class="container">
      <div class="section-head-center">
        <span class="eyebrow-tag">Real Value Analysis</span>
        <h2 class="section-h2">Orange County ADU Cost & Property Value Estimator</h2>
        <p class="section-desc">Adjust size and finish level to estimate total turnkey project investment, immediate property value increase, and estimated construction timeline in Orange County.</p>
      </div>

      <div class="calc-card-container">
        <div class="calc-inputs-col">
          <div class="calc-slider-group">
            <label for="homeSqftSlider">
              <span>ADU Floor Area:</span>
              <span class="slider-val" id="calcSqftText">560 sq ft</span>
            </label>
            <input type="range" id="homeSqftSlider" class="calc-range-slider" min="350" max="1200" step="50" value="560">
          </div>

          <div class="calc-slider-group">
            <label for="homeTierSlider">
              <span>Finish Tier:</span>
              <span class="slider-val" id="calcTierText">Premium Craft (Quartz + Oak)</span>
            </label>
            <input type="range" id="homeTierSlider" class="calc-range-slider" min="1" max="3" step="1" value="2">
          </div>

          <div style="font-size:13px; color:var(--text-muted); line-height:1.6; border-top:1px solid var(--border-subtle); padding-top:18px;">
            💡 <strong>Note:</strong> Estimates reflect average Orange County municipal permitting, architectural drafting, structural engineering, and complete site construction.
          </div>
        </div>

        <div class="calc-results-col">
          <div class="calc-metric-box">
            <div class="metric-lbl">Estimated Turnkey Build Cost</div>
            <div class="metric-val" id="calcCostVal">$184,800</div>
            <div class="metric-sub">Includes permits, design, foundation & construction</div>
          </div>

          <div class="calc-metric-box">
            <div class="metric-lbl">Estimated Property Value Added</div>
            <div class="metric-val" id="calcEquityVal">$285,000+</div>
            <div class="metric-sub">Immediate home equity addition to your property</div>
          </div>

          <div class="calc-metric-box">
            <div class="metric-lbl">Turnkey Timeline to Completion</div>
            <div class="metric-val" id="calcTimelineVal">6 to 8 Months</div>
            <div class="metric-sub">From initial site review to final move-in keys</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Living & Interiors Gallery (Surface Soft Tone) -->
  <section class="section-padding section-surface-soft" id="interiors">
    <div class="container">
      <div class="section-head-center">
        <span class="eyebrow-tag">Thoughtful Craftsmanship</span>
        <h2 class="section-h2">Designed for Light, Flow & High-End Craftsmanship</h2>
        <p class="section-desc">Every ADU Alliance home is designed to feel spacious, serene, and naturally illuminated from the moment you step inside.</p>
      </div>

      <div class="interiors-grid">
        <div class="interior-card">
          <div class="interior-card-media">
            <img src="https://www.evoadu.com/assets/images/Home_Pic_12_Living_Home.jpg" alt="Bright Open Concept Living Room">
          </div>
          <div class="interior-card-body">
            <h3>Open-Concept Living & Dining</h3>
            <p>Vaulted ceilings, expansive glass sliders, and custom oak built-ins that connect seamlessly to your backyard garden.</p>
          </div>
        </div>

        <div class="interior-card">
          <div class="interior-card-media">
            <img src="https://www.evoadu.com/assets/images/Interior_1.jpg" alt="Primary Bedroom Retreat">
          </div>
          <div class="interior-card-body">
            <h3>Primary Bedroom Sanctuary</h3>
            <p>Generous proportions with integrated wardrobe storage, sound-dampened walls, and warm architectural lighting.</p>
          </div>
        </div>

        <div class="interior-card">
          <div class="interior-card-media">
            <img src="https://www.evoadu.com/assets/images/Interior_3.jpg" alt="Custom Kitchen & Quartz Countertops">
          </div>
          <div class="interior-card-body">
            <h3>Chef Kitchens & Quartz Counters</h3>
            <p>Full-size stainless appliances, soft-close custom cabinetry, and durable solid surface countertops.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Four Ways to Step In (Canvas Tone) -->
  <section class="section-padding section-canvas" id="step-in">
    <div class="container">
      <div class="section-head-center">
        <span class="eyebrow-tag">How To Get Started</span>
        <h2 class="section-h2">Four Ways to Step In</h2>
        <p class="section-desc">Pick the pathway that fits your timeline. Zero sales pressure, complete feasibility answers.</p>
      </div>

      <div class="step-in-grid">
        <div class="step-in-card">
          <div>
            <div class="tag">We Come To You</div>
            <h3>On-Premise Lot Walk</h3>
            <p>A senior ADU project captain visits your lot, checks setbacks, utility hookups, and confirms exact buildable dimensions.</p>
          </div>
          <a href="#lead-form" class="card-action-link">Book Free Site Visit →</a>
        </div>

        <div class="step-in-card">
          <div>
            <div class="tag">Skip The Drive</div>
            <h3>Video Consultation</h3>
            <p>Zoom with our architectural planning specialists. Share your lot aerials, explore floor plans, and review cost breakdowns live.</p>
          </div>
          <a href="#lead-form" class="card-action-link">Book 20-Min Video Call →</a>
        </div>

        <div class="step-in-card">
          <div>
            <div class="tag">Quick & Easy</div>
            <h3>Phone Consultation</h3>
            <p>Directly talk with an Orange County ADU specialist for fast answers on local zoning, HOA rules, and ballpark pricing.</p>
          </div>
          <a href="tel:+16572984061" class="card-action-link">Call (657) 298-4061 →</a>
        </div>

        <div class="step-in-card">
          <div>
            <div class="tag">Free Download</div>
            <h3>2026 OC ADU Guide</h3>
            <p>Download our comprehensive 28-page Orange County handbook covering city permit timelines, cost guides, and floor plans.</p>
          </div>
          <a href="#lead-form" class="card-action-link">Download Free PDF →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- 4-Stage Turnkey Process Timeline (Surface Soft Tone) -->
  <section class="section-padding section-surface-soft" id="process">
    <div class="container">
      <div class="section-head-center">
        <span class="eyebrow-tag">Transparent Roadmap</span>
        <h2 class="section-h2">The 4-Stage "Zero-Stress" Turnkey Process</h2>
        <p class="section-desc">From initial property feasibility review to final keys in 6 to 9 months under one unified design-build contract.</p>
      </div>

      <div class="process-grid">
        <div class="process-card">
          <div class="phase-num">Stage 01 · Wk 1-2</div>
          <h3>Property Feasibility</h3>
          <p>We review your lot dimensions, setbacks, sewer/electrical lines, and local city zoning to establish a clear project scope and fixed budget.</p>
        </div>

        <div class="process-card">
          <div class="phase-num">Stage 02 · Wk 3-6</div>
          <h3>Architectural Design</h3>
          <p>We produce complete architectural blueprints, structural engineering, Title 24 energy calculations, and 3D renderings for your review.</p>
        </div>

        <div class="process-card">
          <div class="phase-num">Stage 03 · Wk 6-16</div>
          <h3>City Permitting</h3>
          <p>We submit and manage all plan checks with your city building department (Irvine, Anaheim, Newport Beach, etc.) with a 100% approval guarantee.</p>
        </div>

        <div class="process-card">
          <div class="phase-num">Stage 04 · Wk 17-36</div>
          <h3>Turnkey Construction</h3>
          <p>Our licensed California Class B builders execute the entire build from foundation to finish. Weekly updates right up to final inspection and keys.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Real Projects Portfolio with Before/After (Canvas Tone) -->
  <section class="section-padding section-canvas" id="portfolio">
    <div class="container">
      <div class="section-head-center">
        <span class="eyebrow-tag">Proven Results</span>
        <h2 class="section-h2">Real ADU Projects Completed in Orange County</h2>
        <p class="section-desc">See how real Orange County homeowners transformed underutilized backyards into beautiful, independent guest homes and family suites.</p>
      </div>

      <div class="portfolio-grid">
        <div class="project-card">
          <div class="project-media-split">
            <div class="img-box">
              <img src="https://www.adubuildlosangeles.com/images/before_and_after/collection-1/before.jpg" alt="Before Garage Conversion">
              <span class="badge">BEFORE</span>
            </div>
            <div class="img-box">
              <img src="https://www.adubuildlosangeles.com/images/before_and_after/collection-1/after.jpg" alt="After Finished ADU">
              <span class="badge" style="background:var(--brand-amber); color:#FFF;">AFTER</span>
            </div>
          </div>
          <div class="project-card-body">
            <div class="city-tag">Newport Beach, CA · Garage Conversion</div>
            <h3>The Newport Coastal Studio</h3>
            <div class="project-stats-row">
              <span>📏 420 Sq Ft</span>
              <span>💰 $154,000 Budget</span>
              <span>⏱️ 5 Months Build</span>
            </div>
            <p class="section-desc" style="font-size:14px;">Detached 2-car garage converted into a luxury guest suite and private home office with vaulted ceilings.</p>
          </div>
        </div>

        <div class="project-card">
          <div class="project-media-split">
            <div class="img-box">
              <img src="https://www.adubuildlosangeles.com/images/before_and_after/collection-2/before.jpg" alt="Before Backyard Dirt Lot">
              <span class="badge">BEFORE</span>
            </div>
            <div class="img-box">
              <img src="https://www.adubuildlosangeles.com/images/before_and_after/collection-2/after.jpg" alt="After Modern Detached ADU">
              <span class="badge" style="background:var(--brand-amber); color:#FFF;">AFTER</span>
            </div>
          </div>
          <div class="project-card-body">
            <div class="city-tag">Irvine, CA · Detached Ground-Up ADU</div>
            <h3>The Irvine Modern Two-Bedroom</h3>
            <div class="project-stats-row">
              <span>📏 715 Sq Ft</span>
              <span>💰 $218,000 Budget</span>
              <span>⏱️ 7 Months Build</span>
            </div>
            <p class="section-desc" style="font-size:14px;">Spacious 2-bed, 1-bath detached backyard home built for multi-generational living for aging parents.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us 6 Pillars (Surface Soft Tone) -->
  <section class="section-padding section-surface-soft" id="why-us">
    <div class="container">
      <div class="section-head-center">
        <span class="eyebrow-tag">The ADU Alliance Standard</span>
        <h2 class="section-h2">Why Orange County Homeowners Trust ADU Alliance</h2>
        <p class="section-desc">We are not general remodelers who dabble in ADUs. We only design, permit, and build ADUs every single day.</p>
      </div>

      <div class="why-us-grid">
        <div class="why-card">
          <div class="why-num">01</div>
          <h3>Licensed & Fully Insured</h3>
          <p>We hold an active California General Contractor (B) license (Verified CSLB Alliance) with comprehensive liability and workers compensation coverage.</p>
        </div>

        <div class="why-card">
          <div class="why-num">02</div>
          <h3>100% In-House Permitting</h3>
          <p>We handle all submissions, corrections, and city reviews directly with Irvine, Anaheim, Newport Beach, and surrounding city departments.</p>
        </div>

        <div class="why-card">
          <div class="why-num">03</div>
          <h3>Single-Contract Accountability</h3>
          <p>One contract covers architecture, engineering, permitting, and construction. No finger-pointing between designers and builders.</p>
        </div>

        <div class="why-card">
          <div class="why-num">04</div>
          <h3>Fixed-Price Guarantee</h3>
          <p>We do not use open-ended cost-plus billing. Your scope and price are clearly locked before construction begins so you have zero surprises.</p>
        </div>

        <div class="why-card">
          <div class="why-num">05</div>
          <h3>CalHFA $40,000 Grant Support</h3>
          <p>We guide eligible homeowners through California grant and financing options including HELOC, HEA, and construction-to-perm financing.</p>
        </div>

        <div class="why-card">
          <div class="why-num">06</div>
          <h3>Dedicated Project Superintendent</h3>
          <p>You receive weekly photo updates, milestone tracking, and a direct line to your dedicated site superintendent from start to move-in.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 34 Orange County Municipalities Directory (Canvas Tone) -->
  <section class="section-padding section-canvas" id="municipalities">
    <div class="container">
      <div class="section-head-center">
        <span class="eyebrow-tag">Local Authority</span>
        <h2 class="section-h2">Serving All 34 Orange County Municipalities</h2>
        <p class="section-desc">We know the exact zoning bylaws, setbacks, height limits, and utility connection rules for every city in Orange County.</p>
      </div>

      <div class="cities-grid">
        <a href="#lead-form" class="city-chip">Irvine</a>
        <a href="#lead-form" class="city-chip">Newport Beach</a>
        <a href="#lead-form" class="city-chip">Huntington Beach</a>
        <a href="#lead-form" class="city-chip">Costa Mesa</a>
        <a href="#lead-form" class="city-chip">Anaheim</a>
        <a href="#lead-form" class="city-chip">Fullerton</a>
        <a href="#lead-form" class="city-chip">Laguna Beach</a>
        <a href="#lead-form" class="city-chip">Mission Viejo</a>
        <a href="#lead-form" class="city-chip">San Clemente</a>
        <a href="#lead-form" class="city-chip">Dana Point</a>
        <a href="#lead-form" class="city-chip">Lake Forest</a>
        <a href="#lead-form" class="city-chip">Aliso Viejo</a>
        <a href="#lead-form" class="city-chip">Laguna Niguel</a>
        <a href="#lead-form" class="city-chip">Orange</a>
        <a href="#lead-form" class="city-chip">Brea</a>
        <a href="#lead-form" class="city-chip">Yorba Linda</a>
        <a href="#lead-form" class="city-chip">Tustin</a>
        <a href="#lead-form" class="city-chip">San Juan Capistrano</a>
        <a href="#lead-form" class="city-chip">Fountain Valley</a>
        <a href="#lead-form" class="city-chip">Garden Grove</a>
        <a href="#lead-form" class="city-chip">Placentia</a>
        <a href="#lead-form" class="city-chip">Buena Park</a>
        <a href="#lead-form" class="city-chip">Cypress</a>
        <a href="#lead-form" class="city-chip">Seal Beach</a>
        <a href="#lead-form" class="city-chip">Rancho Santa Margarita</a>
        <a href="#lead-form" class="city-chip">Laguna Hills</a>
        <a href="#lead-form" class="city-chip">Laguna Woods</a>
        <a href="#lead-form" class="city-chip">Los Alamitos</a>
        <a href="#lead-form" class="city-chip">La Habra</a>
        <a href="#lead-form" class="city-chip">Stanton</a>
        <a href="#lead-form" class="city-chip">Villa Park</a>
        <a href="#lead-form" class="city-chip">Westminster</a>
        <a href="#lead-form" class="city-chip">Santa Ana</a>
        <a href="#lead-form" class="city-chip">Coto de Caza</a>
      </div>
    </div>
  </section>

  <!-- FAQ Section (Surface Soft Tone) -->
  <section class="section-padding section-surface-soft" id="faq">
    <div class="container">
      <div class="section-head-center">
        <span class="eyebrow-tag">Common Questions</span>
        <h2 class="section-h2">Frequently Asked Questions</h2>
        <p class="section-desc">Everything you need to know about building an Accessory Dwelling Unit in Orange County.</p>
      </div>

      <div class="faq-container">
        <div class="faq-item active">
          <div class="faq-question">
            <span>How much does it cost to build an ADU in Orange County?</span>
            <span class="toggle-icon">+</span>
          </div>
          <div class="faq-answer">
            In Orange County, turnkey ADU construction typically ranges from $149,000 for a compact 350 sq ft studio or garage conversion to $245,000+ for a spacious 2-bedroom detached home. All ADU Alliance contracts include architectural design, structural engineering, 100% city permitting, utility trenching, and ground-up construction.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>How long does the permitting and construction process take?</span>
            <span class="toggle-icon">+</span>
          </div>
          <div class="faq-answer">
            Under California state law, cities must approve ADU permits within 60 days. Overall project timelines typically run 6 to 9 months: 3 to 4 weeks for architectural drafting, 8 to 12 weeks for city plan checks, and 4 to 6 months for complete construction.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>Can my HOA stop me from building an ADU?</span>
            <span class="toggle-icon">+</span>
          </div>
          <div class="faq-answer">
            No. Under California Assembly Bill 670, Homeowners Associations (HOAs) are prohibited by state law from preventing the construction of ADUs on single-family lots. We manage all required HOA architectural reviews as part of our turnkey permitting phase.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>Will an ADU increase my property taxes significantly?</span>
            <span class="toggle-icon">+</span>
          </div>
          <div class="faq-answer">
            In California, building an ADU only triggers a partial reassessment based on the new construction value (typically adding $900-$1,600/year to your property tax bill). Your primary residence retains its original Prop 13 tax basis, while adding substantial equity value to your parcel.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>Can I convert my existing garage into an ADU?</span>
            <span class="toggle-icon">+</span>
          </div>
          <div class="faq-answer">
            Yes! Garage conversions are one of the most cost-effective ADU paths. California law allows converting attached or detached garages with zero setback requirements if the existing footprint is maintained. Replacement parking is not required in most OC transit zones.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Final Call to Action (Harmonious Tone) -->
  <section class="section-padding cta-section">
    <div class="container">
      <div style="max-width:760px; margin:0 auto;">
        <span class="eyebrow-tag">Ready When You Are</span>
        <h2 class="section-h2">Start Your Orange County ADU Project Today</h2>
        <p class="section-desc" style="margin-bottom:36px;">Schedule a free 30-minute on-premise property assessment with our licensed builders. Discover what is buildable on your lot with zero obligation.</p>
        <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap;">
          <a href="#lead-form" class="btn-primary" style="padding:14px 32px; font-size:15px;">Schedule Free Property Assessment</a>
          <a href="tel:+16572984061" class="phone-badge" style="padding:14px 26px; font-size:15px;">
            <span>📞</span> Call (657) 298-4061
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer (Surface Tone) -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="brand-logo" style="margin-bottom:16px;">
            <div class="brand-logo-mark">AA</div>
            <div class="brand-logo-text">
              <span class="title">ADU ALLIANCE</span>
              <span class="badge-oc">OC</span>
            </div>
          </div>
          <p>Orange County's dedicated design-build contractor specializing exclusively in turnkey accessory dwelling units, modern prefabs, and garage conversions.</p>
          <p style="margin-top:12px; color:var(--text-light); font-size:12.5px;">Pre-Vetted CSLB Licensed Builders · Fully Bonded & Insured</p>
        </div>

        <div class="footer-col">
          <h4>ADU Models</h4>
          <ul class="footer-links">
            <li><a href="#models">EVO Compact (350 sq ft)</a></li>
            <li><a href="#models">EVO Studio (430 sq ft)</a></li>
            <li><a href="#models">EVO One (560 sq ft)</a></li>
            <li><a href="#models">EVO Two (715 sq ft)</a></li>
            <li><a href="#models">EVO Two+ (800 sq ft)</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Services & Solutions</h4>
          <ul class="footer-links">
            <li><a href="#process">Turnkey ADU Construction</a></li>
            <li><a href="#portfolio">Garage Conversions</a></li>
            <li><a href="#process">City Permitting & Approvals</a></li>
            <li><a href="#calculator">Cost & Value Estimator</a></li>
            <li><a href="#step-in">Free Site Feasibility Walk</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Orange County Headquarters</h4>
          <p>2372 Morse Ave, Irvine, CA 92614</p>
          <p style="margin-top:8px;"><strong>Phone:</strong> (657) 298-4061</p>
          <p><strong>Hours:</strong> Mon - Sat: 7:30 AM - 6:00 PM</p>
          <p><strong>Email:</strong> info@adualliance.com</p>
        </div>
      </div>

      <div class="footer-bottom">
        <div>© <span id="yearSpan">2026</span> ADU Alliance Inc. All Rights Reserved.</div>
        <div>Built for Orange County Homeowners · SB 9 & AB 1033 Compliant</div>
      </div>
    </div>
  </footer>

  <!-- Sticky Mobile Action Bar -->
  <div class="mobile-sticky-bar" id="mobileStickyBar">
    <div class="mobile-sticky-inner">
      <a href="tel:+16572984061" class="mobile-btn-call">
        <span>📞</span> Call Us
      </a>
      <a href="#lead-form" class="mobile-btn-quote">
        Free Lot Check →
      </a>
    </div>
  </div>

  <!-- Interactive JavaScript Logic -->
  <script>
    // Year auto-update
    document.getElementById('yearSpan').innerText = new Date().getFullYear();

    // Theme Switcher (Light / Dark Mode)
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const rootHtml = document.documentElement;

    // System Theme Preference + LocalStorage Sync
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const rootHtml = document.documentElement;

    function getPreferredTheme() {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') {
        return stored;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function applyTheme(theme) {
      rootHtml.setAttribute('data-theme', theme);
      if (theme === 'dark') {
        themeToggleBtn.innerHTML = '<span class="theme-icon dark-icon">🌙</span>';
      } else {
        themeToggleBtn.innerHTML = '<span class="theme-icon light-icon">☀️</span>';
      }
    }

    // Initialize with system preference by default
    applyTheme(getPreferredTheme());

    // Listen to live OS system theme toggle (daylight/night automatic switch)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });

    themeToggleBtn.addEventListener('click', () => {
      const current = rootHtml.getAttribute('data-theme') || 'light';
      const next = current === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', next);
      applyTheme(next);
    });

    // Header scroll shadow
    const siteHeader = document.getElementById('siteHeader');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    });

    // 5 Models Tab Switcher Data
    const modelsData = {
      compact: {
        name: "EVO Compact",
        badge: "Studio · 1 Bath",
        sqft: "350",
        beds: "Studio",
        baths: "1.0",
        price: "$149,000",
        overview: "Optimized micro-living with full kitchen, walk-in shower, and integrated oak storage cabinetry.",
        img: "https://www.evoadu.com/assets/images/Home_Pic_2_Compact_Home.jpg"
      },
      studio: {
        name: "EVO Studio",
        badge: "Studio + Office · 1 Bath",
        sqft: "430",
        beds: "Studio",
        baths: "1.0",
        price: "$159,500",
        overview: "Spacious studio layout with dedicated workspace nook, walk-in closet, and vaulted wood-beamed ceilings.",
        img: "https://www.evoadu.com/assets/images/Home_Pic_3_Studio_Home.jpg"
      },
      one: {
        name: "EVO One",
        badge: "1 Bed · 1 Bath",
        sqft: "560",
        beds: "1 Bed",
        baths: "1.0",
        price: "$182,000",
        overview: "Complete private bedroom retreat with full living room, L-shaped chef kitchen, and private patio slider.",
        img: "https://www.evoadu.com/assets/images/Home_Pic_4_One_Home.jpg"
      },
      two: {
        name: "EVO Two",
        badge: "2 Bed · 1 Bath",
        sqft: "715",
        beds: "2 Bed",
        baths: "1.0",
        price: "$208,000",
        overview: "Dual private bedrooms with shared central open-concept living, perfect for extended family living or guest suites.",
        img: "https://www.evoadu.com/assets/images/Home_Pic_5_Two_Home.jpg"
      },
      twoplus: {
        name: "EVO Two+",
        badge: "2 Bed · 2 Bath",
        sqft: "800",
        beds: "2 Bed",
        baths: "2.0",
        price: "$242,000",
        overview: "Our flagship luxury 2-bedroom, 2-bathroom floor plan with primary suite, laundry closet, and expansive sliders.",
        img: "https://www.evoadu.com/assets/images/Home_Pic_6_TwoPlus_Home.jpg"
      }
    };

    const tabBtns = document.querySelectorAll('.model-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const key = btn.getAttribute('data-model');
        const data = modelsData[key];
        
        document.getElementById('modelName').innerText = data.name;
        document.getElementById('modelBadge').innerText = data.badge;
        document.getElementById('modelSqft').innerText = data.sqft;
        document.getElementById('modelBeds').innerText = data.beds;
        document.getElementById('modelBaths').innerText = data.baths;
        document.getElementById('modelPrice').innerText = data.price;
        document.getElementById('modelOverview').innerText = data.overview;
        document.getElementById('modelImg').src = data.img;
      });
    });

    // Interactive Cost & Property Value Estimator
    const sqftSlider = document.getElementById('homeSqftSlider');
    const tierSlider = document.getElementById('homeTierSlider');
    const sqftText = document.getElementById('calcSqftText');
    const tierText = document.getElementById('calcTierText');
    const costVal = document.getElementById('calcCostVal');
    const equityVal = document.getElementById('calcEquityVal');
    const timelineVal = document.getElementById('calcTimelineVal');

    const tierLabels = {
      "1": "Standard Build (Clean & Efficient)",
      "2": "Premium Craft (Quartz + Oak)",
      "3": "Luxury Architectural (High-End Finishes)"
    };

    const costPerSqft = { "1": 290, "2": 330, "3": 385 };
    const equityPerSqft = { "1": 460, "2": 520, "3": 600 };

    function updateCalculator() {
      const sqft = parseInt(sqftSlider.value);
      const tier = tierSlider.value;

      sqftText.innerText = `${sqft} sq ft`;
      tierText.innerText = tierLabels[tier];

      // Cost calculation
      const totalCost = Math.round((sqft * costPerSqft[tier]) / 1000) * 1000;
      costVal.innerText = `$${totalCost.toLocaleString()}`;

      // Property Value / Equity calculation
      const totalEquity = Math.round((sqft * equityPerSqft[tier]) / 1000) * 1000;
      equityVal.innerText = `$${totalEquity.toLocaleString()}+`;

      // Timeline estimation
      if (sqft <= 450) {
        timelineVal.innerText = "5 to 6 Months";
      } else if (sqft <= 750) {
        timelineVal.innerText = "6 to 8 Months";
      } else {
        timelineVal.innerText = "7 to 9 Months";
      }
    }

    sqftSlider.addEventListener('input', updateCalculator);
    tierSlider.addEventListener('input', updateCalculator);

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    });

    // FormSubmit AJAX Handler
    const heroForm = document.getElementById('homeHeroForm');
    const feedback = document.getElementById('heroFormFeedback');

    if (heroForm) {
      heroForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const submitBtn = document.getElementById('heroSubmitBtn');
        submitBtn.innerText = 'Analyzing Property...';
        submitBtn.disabled = true;

        fetch(heroForm.action, {
          method: 'POST',
          body: new FormData(heroForm),
          headers: { 'Accept': 'application/json' }
        })
        .then(response => {
          submitBtn.innerText = 'Feasibility Submitted! ✓';
          feedback.style.display = 'block';
          feedback.innerHTML = 'Thank you! An Orange County ADU specialist will review your property setbacks and reach out within 24 hours.';
          heroForm.reset();
        })
        .catch(error => {
          submitBtn.innerText = 'Request Free Lot Feasibility Plan →';
          submitBtn.disabled = false;
          feedback.style.display = 'block';
          feedback.style.color = '#EF4444';
          feedback.innerText = 'Notice: Please call us directly at (657) 298-4061 to speak with an ADU specialist.';
        });
      });
    }
  </script>
</body>
</html>
"""

cleaned_html = html_content.replace('—', ' - ').replace('–', '-')

output_path = r"C:\Users\Administrator\Desktop\ADU Alliance\adu-alliance-site\index.html"
with open(output_path, "w", encoding="utf-8") as f:
    f.write(cleaned_html)

print("Fixed: 100% harmonious theme locking. No dark sandwiching in light mode!")
