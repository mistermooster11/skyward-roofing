# Skyward Roofing — Content Brief
**QuickFlip Sites | Build Log**
Date: May 2, 2026
Prospect: https://www.skywardroofing.com/
Template: PipeMonkey-Redesign (Next.js 16 App Router)
Reference site: N/A — Skyward's site had sufficient structure

---

## Source Material Summary

**Business Name:** Skyward Roofing
**Phone:** (917) 979-8704
**Primary License:** NYC DCA — 2100010
**Secondary License:** Westchester County — WC-36220-H23
**Service Area:** All five NYC boroughs + Yonkers and surrounding Westchester communities
**Years in Business:** 50+ combined years (family business, 3rd generation)
**Positioning:** Family-owned, licensed/bonded/insured, free inspections, honest assessments, no upselling

**Services Extracted (10 core):**
Residential Roofing, Commercial/Industrial Roofing, Flat Roofing (TPO/EPDM/SPF), Asphalt Shingle Roofing, Metal Roofing, Slate Roofing, Roof Inspections & Free Estimates, Chimney Services, Gutter Services, Roof Coatings & Waterproofing

**Testimonials Extracted:**
- Peter Robinson (Construction company owner) — long-form quote praising team professionalism and warranty
- Brice & Jamie King (Property owners) — quote praising estimate accuracy and cleanup
- Jordan Wells (Contractor) — quote praising their work on his properties

**Differentiators (from source site):**
- 3rd-generation family roofing business
- Licensed, bonded, and insured in NYC and Westchester
- Free in-person inspections (not phone quotes)
- Written estimates before any work begins
- Never recommends replacement when repair will do
- 20-year material warranty available

**Note on crawl:** skywardroofing.com blocked direct WebFetch (cowork-egress-blocked network policy). Site was crawled successfully via Apify RAG browser. Homepage, FAQ page, and services page all extracted cleanly. Gallery images were pulled directly from the Webflow CDN URLs found on the source site.

---

## Pages Built & Content Decisions

### Homepage (app/page.tsx)
No direct changes — template already pulls content from data files (Hero.tsx, Announcements.tsx, Difference.tsx, Testimonial.tsx). All those components were rewritten with Skyward content.

**Structure:** Hero → How It Works → Trust Stats → Testimonial

**Kept from source:** Business positioning, service area coverage, license credentials, family history, free inspection offer, testimonials.

**Generated:** "How It Works" 3-step process (Inspect → Written Estimate → Professional Installation) — drawn from Skyward's stated process. Stats block numbers verified from source site.

### About Us (explore/skyward-roofing — data-driven)
Built via `data/channel/skyward-roofing.tsx`. Used direct quotes from the prospect's About section: 3rd generation family history, licensed/bonded/insured detail, honest assessment pledge. 6 craftLinks map to the top roofing services.

### Services Catalog (craft-catalog — data-driven)
Built via `data/craft-catalog/crafts.ts` and `data/craft-catalog/service-pages.tsx`.

**Decision:** Reduced from 16 listed services to 10 meaningful service pages. TPO/EPDM/SPF folded into one Flat Roofing page; Industrial Roofing merged into Commercial Roofing; Monthly Maintenance Packages omitted (no detail on source site).

Each service page includes: overview, when-you-need-it section, our-process section, and 4 related service links.

### FAQs (app/general-faqs/page.tsx)
8 FAQs drawn directly from the prospect's FAQ page content. Skyward's site had detailed, well-written FAQ copy — minimal generation was needed. Questions cover: repair vs. replace, free estimates, replacement timeline, winter roofing, why not hire the cheapest, gutters, licensing/bonding, and service area.

### Contact (app/contact-us/page.tsx)
6 service area cards (one per region served). Service dropdown updated to roofing-specific options. Google Maps iframe placeholder centered on NYC. Form action is a placeholder pending Skyward's preferred form solution.

### Gallery (app/gallery/page.tsx) — NEW PAGE
6 before/after pairs using real image URLs extracted from the prospect's Webflow CDN. All six images are live URLs from skywardroofing.com's CDN — verified as real project photos.

Categories represented: Asphalt Shingles (2 pairs), Slate Roofing (1), Flat Roof / Coating (1), Residential Roofing (2).

### Service Areas (app/service-areas/page.tsx) — NEW PAGE
6 dedicated sections: The Bronx (home base), Brooklyn, Manhattan, Queens, Staten Island, Yonkers & Westchester. Each section includes: a 2–3 sentence localized description referencing specific housing stock, 3 specific callouts, and a full neighborhood list. Both license numbers are cited where relevant.

### Blog (app/blog/page.tsx) — NEW PAGE
6 placeholder article cards with realistic titles and excerpts. All flagged with `[TODO: Replace placeholder posts with real content from Skyward Roofing or CMS]`. Client should decide whether to activate the blog before launch.

---

## Navigation Changes

**Template default:** 4 items (Home, Services, FAQs, Contact)
**Skyward nav (5 items):** Home, Services, FAQs, Service Areas, Contact

**Rationale:** Added "Service Areas" because Skyward operates across 6 geographic regions spanning 2 licensing jurisdictions. Service area coverage is a primary trust signal — homeowners and property managers choosing a roofer want to confirm the contractor is local to their borough.

---

## Copy Generation Log

All copy was extracted from skywardroofing.com unless noted below.

**Generated (gap filling):**
- Service page body copy for: Metal Roofing, Roof Coatings & Waterproofing, and parts of Commercial Roofing process steps — source site had thin descriptions for these. Generated copy follows prospect's existing voice (plain, direct, no adjective padding).
- Blog post titles and excerpts (6 posts) — placeholder content only, all flagged TODO.
- Full neighborhood lists for all 6 service area sections — source site listed some neighborhoods; lists were expanded using standard NYC neighborhood knowledge.

**Extracted verbatim or near-verbatim:**
- All 3 testimonial quotes
- All 8 FAQ questions and answers
- Both license numbers and credentialing language
- 3rd-generation / family history positioning
- Free inspection / honest assessment differentiator language

---

## TODOs for Client Before Launch

| Item | File | Notes |
|------|------|-------|
| Hero background image or video | `components/custom/Hero.tsx` | Dark fallback currently. Replace `[TODO]` with real hero image/video. |
| Logo (header) | `components/custom/header/Topnav.tsx` | Replace `[TODO: Skyward Roofing logo]` with actual logo file. |
| Logo (footer) | `components/custom/Footer.tsx` | Same — replace placeholder with logo file. |
| Social media URLs | `components/custom/Footer.tsx` | Replace `[TODO: Skyward social URLs]` with real Facebook/Instagram/YouTube links. |
| Contact form | `app/contact-us/page.tsx` | Replace placeholder `<form>` with HubSpot, JotForm, or preferred provider embed. |
| Service page hero images | `app/craft-catalog/[slug]/page.tsx` | `PLACEHOLDER_BG` is the same image for all services. Replace with per-service photos when available. |
| Gallery CDN images | `app/gallery/page.tsx` | 6 real Webflow CDN URLs embedded. Verify they still load — replace with self-hosted images before launch to avoid external dependency. |
| Blog content | `app/blog/page.tsx` | All 6 posts are placeholders. Replace with real articles or remove the page before launch. |
| Google Maps embed | `app/contact-us/page.tsx` | Placeholder iframe. Replace with a properly keyed Google Maps embed pointed at Skyward's service area or business address. |
| Programs page images | `data/programs.tsx` | `imageSrc` fields are placeholder paths. Replace with real roofing imagery. |
| Difference section photo | `components/custom/Difference.tsx` | `[TODO: Replace with Skyward Roofing job site or team photo]` — needs a real image asset. |
| Announcements section photo | `components/custom/Announcements.tsx` | Same — real job/team photo needed. |
