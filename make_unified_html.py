import json

with open(r'C:\Users\Administrator\Desktop\ADU Alliance\gsc_pages_performance.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

pages_sorted = sorted(pages, key=lambda x: (x.get('clicks', 0), x.get('impressions', 0)), reverse=True)

table_rows_html = []
for i, p in enumerate(pages_sorted):
    url = p['keys'][0]
    clicks = p.get('clicks', 0)
    imp = p.get('impressions', 0)
    ctr = p.get('ctr', 0) * 100
    pos = p.get('position', 0)
    
    is_spam = any(s in url.lower() for s in ['adult', 'telegram', 'nude', 'bahislion', 'casino', 'poker', 'porn', 'link-'])
    is_sd = any(c in url.lower() for c in ['san-d', 'la-mesa', 'fallbrook', 'carlsbad', 'el-cajon', 'chula-vista', 'escondido', 'del-mar'])
    is_core = url in ['https://adualliance.com/', 'https://adualliance.com/about/', 'https://adualliance.com/services/', 'https://adualliance.com/contact-us/', 'https://adualliance.com/projects/', 'https://adualliance.com/adu-education/']
    is_oc = any(c in url.lower() for c in ['orange-county', 'irvine', 'newport', 'costa-mesa', 'huntington', 'anaheim', 'santa-ana', 'fullerton', 'brea', 'aliso-viejo', 'mission-viejo', 'laguna', 'san-clemente', 'buena-park', 'lake-forest', 'garden-grove', 'orange', 'tustin'])
    
    if is_spam:
        bucket = '5. REMOVE (410)'
        bucket_class = 'bg-red-950 text-red-400 border border-red-800'
        action = 'Return HTTP 410 Gone; purge from XML sitemaps.'
    elif is_core or (clicks >= 2 and is_oc):
        bucket = '1. KEEP (CORE)'
        bucket_class = 'bg-emerald-950 text-emerald-400 border border-emerald-800'
        action = 'Retain as canonical pillar; modernize with unified architecture.'
    elif is_sd:
        bucket = '3. MERGE & 301'
        bucket_class = 'bg-amber-950 text-amber-400 border border-amber-800'
        action = '301 Redirect to /services/adu-construction/ (Consolidate authority).'
    elif is_oc and (imp >= 30 or pos <= 35):
        bucket = '2. REFRESH'
        bucket_class = 'bg-blue-950 text-blue-400 border border-blue-800'
        action = 'Modernize with OC municipal permit data & LocalBusiness schema.'
    elif imp < 20 and clicks == 0:
        bucket = '3. MERGE & 301'
        bucket_class = 'bg-amber-950 text-amber-400 border border-amber-800'
        action = '301 Redirect to /locations/orange-county/ (Prune thin page).'
    else:
        bucket = '2. REFRESH'
        bucket_class = 'bg-blue-950 text-blue-400 border border-blue-800'
        action = 'Upgrade content, E-E-A-T trust signals, and CRO sticky rail.'
        
    table_rows_html.append(f'''
    <tr class="hover:bg-white/5 border-b border-brand-borderDark/40 transition-colors gsc-row" data-url="{url.lower()}">
      <td class="p-3 text-[11px] font-mono text-slate-500">{i+1:03d}</td>
      <td class="p-3 text-xs font-mono text-white break-all">{url}</td>
      <td class="p-3 text-xs font-mono font-bold text-center text-brand-amber">{clicks}</td>
      <td class="p-3 text-xs font-mono text-center text-slate-400">{imp}</td>
      <td class="p-3 text-xs font-mono text-center text-slate-400">{ctr:.1f}%</td>
      <td class="p-3 text-xs font-mono text-center text-slate-400">{pos:.1f}</td>
      <td class="p-3 text-center"><span class="px-2 py-0.5 text-[10px] font-mono font-bold rounded-full {bucket_class}">{bucket}</span></td>
      <td class="p-3 text-xs text-slate-400">{action}</td>
    </tr>''')

rows_joined = "\n".join(table_rows_html)

full_html = '''<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ADU ALLIANCE — Master Unified Architectural Platform (2026 Edition)</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              black: '#111111',
              dark: '#151515',
              charcoal: '#1E293B',
              amber: '#FFAC00',
              amberDark: '#E09600',
              terracotta: '#C85A32',
              linen: '#F0EEEB',
              sand: '#F5F5F4',
              borderDark: '#262626',
              emerald: '#22C55E',
            }
          },
          fontFamily: {
            sans: ['Outfit', '-apple-system', 'sans-serif'],
            editorial: ['"Instrument Serif"', 'Georgia', 'serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          }
        }
      }
    }
  </script>
  <style>
    body {
      background-color: #111111;
      color: #ffffff;
      font-family: 'Outfit', sans-serif;
    }
    .glass-nav {
      background: rgba(17, 17, 17, 0.88);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
    }
  </style>
</head>
<body class="bg-brand-black text-white selection:bg-brand-amber selection:text-black">

  <!-- Header -->
  <header class="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-brand-borderDark px-6 py-4 transition-all">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <a href="#" class="flex items-center gap-3 group">
        <div class="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black font-black text-lg tracking-tighter">
          A<span class="text-brand-amber">A</span>
        </div>
        <div>
          <span class="font-black text-xl tracking-tighter text-white uppercase block leading-none">
            ADU ALLIANCE
          </span>
          <span class="text-[9px] font-mono uppercase tracking-widest text-slate-400">
            Orange County Design-Build
          </span>
        </div>
      </a>

      <nav class="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-300">
        <a href="#services" class="hover:text-white transition-colors">1. Services (ADU Build LA)</a>
        <a href="#models" class="hover:text-white transition-colors">2. Models (EVO)</a>
        <a href="#process" class="hover:text-white transition-colors">3. Process (LADU)</a>
        <a href="#entry-ways" class="hover:text-white transition-colors">4. Lead Funnels (ARC)</a>
        <a href="#seo-pruning" class="text-brand-amber hover:underline font-mono">GSC SEO Pruning</a>
      </nav>

      <div class="flex items-center gap-4">
        <a href="tel:6572984061" class="text-xs font-mono font-bold text-slate-300 hover:text-white">
          (657) 298-4061
        </a>
        <a href="#assessment" class="px-5 py-2.5 bg-brand-amber hover:bg-brand-amberDark text-black font-black text-xs uppercase tracking-wider rounded-full shadow transition-all">
          Free Assessment
        </a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="relative min-h-[92vh] flex flex-col justify-end pt-36 pb-20 px-6 overflow-hidden bg-brand-black text-white">
    <div class="absolute inset-0 z-0">
      <img src="https://www.adubuildlosangeles.com/_next/image?url=%2Fimages%2Fnew-images%2FHero%2FModern_ADU_in_suburban_backyard_202607271433.jpeg&w=3840&q=75" alt="Modern ADU" class="w-full h-full object-cover object-center scale-105">
      <div class="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-black/40"></div>
    </div>

    <div class="max-w-7xl mx-auto w-full relative z-10 space-y-12">
      <div class="space-y-6 max-w-4xl">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-brand-amber backdrop-blur-md">
          <span class="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></span>
          ORANGE COUNTY’S DEDICATED DESIGN-BUILD CONTRACTOR
        </div>

        <h1 class="font-black uppercase tracking-tighter text-white leading-[0.95] text-5xl sm:text-7xl lg:text-8xl">
          ADU Builders <br />
          <span class="text-slate-300 font-editorial italic font-normal text-brand-terracotta lowercase tracking-normal">
            Orange County
          </span>
        </h1>

        <p class="text-base sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
          We only build ADUs. One contract covers custom 3D design, in-house municipal permits across all 34 OC cities, and ground-up turnkey construction.
        </p>

        <div class="flex flex-wrap gap-4 pt-2">
          <a href="#assessment" class="px-8 py-4 bg-brand-amber hover:bg-brand-amberDark text-black font-black text-xs uppercase tracking-wider rounded-full shadow transition-all">
            Get Free Property Assessment &rarr;
          </a>
          <a href="#services" class="px-8 py-4 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-xs uppercase tracking-wider rounded-full backdrop-blur-md transition-all">
            Explore Services
          </a>
        </div>
      </div>

      <!-- 4 Trust Stats Bar (ADU Build LA) -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-brand-dark/80 border border-brand-borderDark backdrop-blur-xl shadow-2xl">
        <div class="border-r border-brand-borderDark/80 last:border-0 pr-4">
          <div class="text-3xl sm:text-4xl font-mono font-black text-white">200+</div>
          <div class="text-xs font-bold uppercase tracking-wider text-slate-200 mt-1">ADUs Completed</div>
          <div class="text-[11px] text-slate-400 font-mono mt-0.5">Across Southern California</div>
        </div>
        <div class="border-r border-brand-borderDark/80 last:border-0 pr-4 pl-0 sm:pl-4">
          <div class="text-3xl sm:text-4xl font-mono font-black text-brand-amber">15+ Years</div>
          <div class="text-xs font-bold uppercase tracking-wider text-slate-200 mt-1">ADU-Exclusive Focus</div>
          <div class="text-[11px] text-slate-400 font-mono mt-0.5">Dedicated specialist team</div>
        </div>
        <div class="border-r border-brand-borderDark/80 last:border-0 pr-4 pl-0 sm:pl-4">
          <div class="text-3xl sm:text-4xl font-mono font-black text-white">4.9 / 5</div>
          <div class="text-xs font-bold uppercase tracking-wider text-slate-200 mt-1">Google Rating</div>
          <div class="text-[11px] text-slate-400 font-mono mt-0.5">194+ Verified Client Reviews</div>
        </div>
        <div class="pl-0 sm:pl-4">
          <div class="text-3xl sm:text-4xl font-mono font-black text-brand-emerald">Class B</div>
          <div class="text-xs font-bold uppercase tracking-wider text-slate-200 mt-1">Licensed & Insured</div>
          <div class="text-[11px] text-slate-400 font-mono mt-0.5">CA License #1094821</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Main Unified Sections Container -->
  <main class="max-w-7xl mx-auto px-6 py-24 space-y-24">

    <!-- 1. BASE STRUCTURE: ADU BUILD LA 5 SERVICES -->
    <section id="services" class="space-y-12">
      <div class="border-b border-brand-borderDark pb-6">
        <span class="text-xs font-mono uppercase tracking-widest text-brand-amber font-bold">1. BASE STRUCTURE: ADU BUILD LA</span>
        <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white mt-1">
          ADU Services from an Orange County Design-Build Team
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-brand-dark p-6 rounded-3xl border border-brand-borderDark space-y-4">
          <div class="aspect-[16/10] rounded-2xl overflow-hidden"><img src="https://www.adubuildlosangeles.com/_next/image?url=%2Fimages%2Fnew-images%2FADU%2FModern_ADU_in_suburban_backyard_202607271417.jpeg&w=3840&q=75" class="w-full h-full object-cover"></div>
          <span class="text-xs font-mono font-bold text-brand-amber">01. ARCHITECTURE</span>
          <h3 class="text-xl font-bold text-white">ADU Plans & Design</h3>
          <p class="text-xs text-slate-400 leading-relaxed">Custom site-specific 3D architectural plan sets, structural calculations, and Title 24 energy compliance.</p>
        </div>

        <div class="bg-brand-dark p-6 rounded-3xl border border-brand-borderDark space-y-4">
          <div class="aspect-[16/10] rounded-2xl overflow-hidden"><img src="https://www.adubuildlosangeles.com/_next/image?url=%2Fimages%2Fnew-images%2FADU%2FModern_ADU_in_suburban_backyard_202607271417_2.jpeg&w=3840&q=75" class="w-full h-full object-cover"></div>
          <span class="text-xs font-mono font-bold text-brand-amber">02. PERMITTING</span>
          <h3 class="text-xl font-bold text-white">ADU Permits & Approvals</h3>
          <p class="text-xs text-slate-400 leading-relaxed">100% In-house submissions and correction responses across Irvine, Newport Beach, and all 34 OC cities.</p>
        </div>

        <div class="bg-brand-dark p-6 rounded-3xl border border-brand-borderDark space-y-4">
          <div class="aspect-[16/10] rounded-2xl overflow-hidden"><img src="https://www.adubuildlosangeles.com/_next/image?url=%2Fimages%2Fnew-images%2FADU%2FModern_ADU_in_backyard_202607271417_2.jpeg&w=3840&q=75" class="w-full h-full object-cover"></div>
          <span class="text-xs font-mono font-bold text-brand-amber">03. HIGH-ROI CONVERSION</span>
          <h3 class="text-xl font-bold text-white">Garage to ADU Conversion</h3>
          <p class="text-xs text-slate-400 leading-relaxed">Turn your 2-car garage into a legal 1-bedroom rental unit with zero loss of yard space in 10-14 weeks.</p>
        </div>
      </div>
    </section>

    <!-- 2. VISUAL POLISH & MODEL EXPERIENCE: EVO -->
    <section id="models" class="space-y-12">
      <div class="border-b border-brand-borderDark pb-6">
        <span class="text-xs font-mono uppercase tracking-widest text-brand-amber font-bold">2. VISUAL POLISH & MODELS: EVO</span>
        <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white mt-1">
          Find your ADU &bull; 5 Signature Models
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 aspect-[16/9] relative rounded-3xl overflow-hidden bg-brand-dark border border-brand-borderDark flex flex-col justify-end p-8">
          <img src="https://www.evoadu.com/assets/images/Home_Pic_2_Compact_Home.jpg" class="absolute inset-0 w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
          <div class="relative z-10 space-y-2">
            <h3 class="text-6xl font-black uppercase text-white">Compact</h3>
            <p class="text-base text-white/90">From <span class="font-mono text-brand-amber font-bold">$145,800</span> &bull; 350 sq ft</p>
          </div>
        </div>

        <div class="aspect-[4/3] relative rounded-3xl overflow-hidden bg-brand-dark border border-brand-borderDark flex flex-col justify-end p-6">
          <img src="https://www.evoadu.com/assets/images/Home_Pic_3_Studio_Home.jpg" class="absolute inset-0 w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
          <div class="relative z-10 space-y-1">
            <h3 class="text-4xl font-black uppercase text-white">Studio</h3>
            <p class="text-xs text-white/90">From <span class="font-mono text-brand-amber font-bold">$157,920</span> &bull; 430 sq ft</p>
          </div>
        </div>

        <div class="aspect-[4/3] relative rounded-3xl overflow-hidden bg-brand-dark border border-brand-borderDark flex flex-col justify-end p-6">
          <img src="https://www.evoadu.com/assets/images/Home_Pic_4_One_Home.jpg" class="absolute inset-0 w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
          <div class="relative z-10 space-y-1">
            <h3 class="text-4xl font-black uppercase text-white">One</h3>
            <p class="text-xs text-white/90">From <span class="font-mono text-brand-amber font-bold">$179,680</span> &bull; 560 sq ft</p>
          </div>
        </div>

        <div class="aspect-[4/3] relative rounded-3xl overflow-hidden bg-brand-dark border border-brand-borderDark flex flex-col justify-end p-6">
          <img src="https://www.evoadu.com/assets/images/Home_Pic_5_Two_Home.jpg" class="absolute inset-0 w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
          <div class="relative z-10 space-y-1">
            <h3 class="text-4xl font-black uppercase text-white">Two</h3>
            <p class="text-xs text-white/90">From <span class="font-mono text-brand-amber font-bold">$203,050</span> &bull; 715 sq ft</p>
          </div>
        </div>

        <div class="aspect-[4/3] relative rounded-3xl overflow-hidden bg-brand-dark border border-brand-borderDark flex flex-col justify-end p-6">
          <img src="https://www.evoadu.com/assets/images/Home_Pic_6_TwoPlus_Home.jpg" class="absolute inset-0 w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
          <div class="relative z-10 space-y-1">
            <h3 class="text-4xl font-black uppercase text-white">Two+</h3>
            <p class="text-xs text-white/90">From <span class="font-mono text-brand-amber font-bold">$238,000</span> &bull; 800 sq ft</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. PROCESS TRANSPARENCY: LADU -->
    <section id="process" class="space-y-12">
      <div class="border-b border-brand-borderDark pb-6">
        <span class="text-xs font-mono uppercase tracking-widest text-brand-amber font-bold">3. PROCESS TRANSPARENCY: LADU</span>
        <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white mt-1">
          From Site Visit to Keys in 6 to 9 Months &bull; Zero Rejected Permits
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-8 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-3">
          <span class="text-xs font-mono font-bold text-brand-amber">PHASE 01 (WK 0)</span>
          <h3 class="text-xl font-bold uppercase text-white">Free Site Walk</h3>
          <p class="text-xs text-slate-400">On-site survey of setbacks, utility tie-ins, and zoning parameters.</p>
        </div>
        <div class="p-8 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-3">
          <span class="text-xs font-mono font-bold text-brand-amber">PHASE 02 (WK 1-4)</span>
          <h3 class="text-xl font-bold uppercase text-white">3D Design & Engineering</h3>
          <p class="text-xs text-slate-400">Custom 3D plan drafting, structural calculations, and Title 24 compliance.</p>
        </div>
        <div class="p-8 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-3">
          <span class="text-xs font-mono font-bold text-brand-amber">PHASE 03 (WK 5-14)</span>
          <h3 class="text-xl font-bold uppercase text-white">In-House Permits</h3>
          <p class="text-xs text-slate-400">100% Managed plan check submissions with city building departments.</p>
        </div>
      </div>
    </section>

    <!-- 4. LEAD MAGNETS & MULTIPLE ENTRY POINTS: ARC -->
    <section id="entry-ways" class="space-y-12">
      <div class="border-b border-brand-borderDark pb-6">
        <span class="text-xs font-mono uppercase tracking-widest text-brand-amber font-bold">4. LEAD FUNNELS: ADU RESOURCE CENTER</span>
        <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white mt-1">
          Four Ways to Step In
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="p-6 bg-brand-dark rounded-3xl border border-brand-amber space-y-3">
          <span class="text-[10px] font-mono font-bold text-brand-amber bg-black px-2 py-0.5 rounded">WE COME TO YOU</span>
          <h3 class="text-lg font-bold text-white">On-Premise Lot Walk</h3>
          <p class="text-xs text-slate-400">Free 30-min property assessment with an in-house engineer.</p>
          <a href="#assessment" class="block text-center py-2.5 bg-brand-amber text-black font-bold text-xs uppercase rounded-full">Schedule Walk</a>
        </div>
        <div class="p-6 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-3">
          <span class="text-[10px] font-mono text-slate-400 bg-black px-2 py-0.5 rounded">SKIP THE DRIVE</span>
          <h3 class="text-lg font-bold text-white">Video Consultation</h3>
          <p class="text-xs text-slate-400">Zoom with a senior planner to review 3D models.</p>
          <a href="#assessment" class="block text-center py-2.5 bg-white/10 text-white font-bold text-xs uppercase rounded-full">Book Video Call</a>
        </div>
        <div class="p-6 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-3">
          <span class="text-[10px] font-mono text-slate-400 bg-black px-2 py-0.5 rounded">QUICK & EASY</span>
          <h3 class="text-lg font-bold text-white">Phone Consultation</h3>
          <p class="text-xs text-slate-400">15-minute direct Q&A on costs and setbacks.</p>
          <a href="tel:6572984061" class="block text-center py-2.5 bg-white/10 text-white font-bold text-xs uppercase rounded-full">Call Now</a>
        </div>
        <div class="p-6 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-3">
          <span class="text-[10px] font-mono text-slate-400 bg-black px-2 py-0.5 rounded">FREE DOWNLOAD</span>
          <h3 class="text-lg font-bold text-white">2026 OC ADU Guide</h3>
          <p class="text-xs text-slate-400">28-page PDF guide with cost tables & permit rules.</p>
          <a href="#assessment" class="block text-center py-2.5 bg-white/10 text-white font-bold text-xs uppercase rounded-full">Download PDF</a>
        </div>
      </div>
    </section>

    <!-- GSC Pruning Section -->
    <section id="seo-pruning" class="space-y-8">
      <div class="border-b border-brand-borderDark pb-4">
        <span class="text-xs font-mono uppercase tracking-widest text-brand-amber font-bold">GSC AUDIT &bull; 182 PAGES</span>
        <h2 class="text-3xl font-black uppercase text-white mt-1">SEO Pruning & Migration Matrix</h2>
      </div>

      <div class="overflow-x-auto bg-brand-dark rounded-3xl border border-brand-borderDark max-h-[400px] overflow-y-auto">
        <table class="w-full text-left text-xs border-collapse">
          <thead class="sticky top-0 bg-brand-black text-white font-mono border-b border-brand-borderDark z-20">
            <tr>
              <th class="p-3">#</th>
              <th class="p-3">Indexed URL</th>
              <th class="p-3 text-center text-brand-amber">Clicks</th>
              <th class="p-3 text-center">Impressions</th>
              <th class="p-3 text-center">CTR</th>
              <th class="p-3 text-center">Avg Pos</th>
              <th class="p-3 text-center">Action Bucket</th>
              <th class="p-3">Migration Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-brand-borderDark/40">
''' + rows_joined + '''
          </tbody>
        </table>
      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer class="bg-brand-black text-slate-400 py-12 px-6 border-t border-brand-borderDark text-xs">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
      <div><strong>ADU ALLIANCE</strong> &bull; CA General Contractor License #1094821 &bull; Direct Phone: (657) 298-4061</div>
      <div>&copy; 2026 ADU Alliance LLC. Master Unified Platform.</div>
    </div>
  </footer>

</body>
</html>'''

with open(r'C:\Users\Administrator\Desktop\ADU Alliance\ADU_Alliance_Rebrand_Design_Brief_System.html', 'w', encoding='utf-8') as f:
    f.write(full_html)

print("Master Synthesized HTML generated successfully! Total size:", len(full_html), "bytes")
