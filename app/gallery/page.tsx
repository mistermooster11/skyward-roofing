"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/* ── Gallery Data ────────────────────────────────────────────── */

const galleryItems = [
  {
    id: "gallery-1",
    label: "Asphalt Shingle Replacement — Bronx",
    beforeAlt: "Worn asphalt shingle roof with missing and curling shingles before replacement",
    afterAlt:  "New asphalt shingle roof installed by Skyward Roofing",
    // Real before/after from skywardroofing.com
    before: "https://uploads-ssl.webflow.com/uploads/1/1/6/0/116005231/before1_orig.jpg",
    after:  "https://uploads-ssl.webflow.com/uploads/1/1/6/0/116005231/after-1_orig.jpg",
    category: "Asphalt Shingles",
  },
  {
    id: "gallery-2",
    label: "Shingle Roof — Detail Around Penetrations",
    beforeAlt: "Worn shingles around roof protrusions before service",
    afterAlt:  "Pristine new shingles installed cleanly around penetrations",
    // Real before/after from skywardroofing.com
    before: "https://uploads-ssl.webflow.com/uploads/1/1/6/0/116005231/before2_orig.jpg",
    after:  "https://uploads-ssl.webflow.com/uploads/1/1/6/0/116005231/after2_orig.jpg",
    category: "Asphalt Shingles",
  },
  {
    id: "gallery-3",
    label: "Slate Roof — NYC Residence",
    beforeAlt: "Completed slate roof with two dormers and chimney by Skyward Roofing",
    afterAlt:  "Skyward Roofing completed slate roof project",
    // Real project photos from skywardroofing.com
    before: "https://uploads-ssl.webflow.com/uploads/1/1/6/0/116005231/img-4442-1.jpeg",
    after:  "https://uploads-ssl.webflow.com/uploads/1/1/6/0/116005231/img-4442-1.jpeg",
    category: "Slate Roofing",
  },
  {
    id: "gallery-4",
    label: "Flat Roof Coating — Commercial Property",
    beforeAlt: "Commercial flat roof before coating application",
    afterAlt:  "Commercial flat roof after Skyward Roofing coating",
    // Real project photos from skywardroofing.com
    before: "https://uploads-ssl.webflow.com/uploads/1/1/6/0/116005231/skywardroofingbrandedspfjob_orig.png",
    after:  "https://uploads-ssl.webflow.com/uploads/1/1/6/0/116005231/skywardroofingroofcoatings_orig.png",
    category: "Flat Roof / Coating",
  },
  {
    id: "gallery-5",
    label: "Residential Roof Replacement — NYC",
    beforeAlt: "Residential roof before replacement",
    afterAlt:  "New shingle roof installed by Skyward Roofing",
    // Real project photos from skywardroofing.com
    before: "https://uploads-ssl.webflow.com/uploads/1/1/6/0/116005231/skyward-roofing-service-nyc-orig.jpg",
    after:  "https://uploads-ssl.webflow.com/uploads/1/1/6/0/116005231/just-finished-roof-skyward-roofing-ny-orig.jpg",
    category: "Residential Roofing",
  },
  {
    id: "gallery-6",
    label: "Mansard Roof Re-Roofing — NYC Brownstone",
    beforeAlt: "Brownstone with mansard roof before re-roofing",
    afterAlt:  "Completed mansard re-roof by Skyward Roofing",
    // Real project photos from skywardroofing.com
    before: "https://uploads-ssl.webflow.com/uploads/1/1/6/0/116005231/bbranton-image4-orig.jpeg",
    after:  "https://uploads-ssl.webflow.com/uploads/1/1/6/0/116005231/bbranton-image5-orig.jpeg",
    category: "Residential Roofing",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

function GalleryCard({ item, delay }: { item: typeof galleryItems[number]; delay: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div
      ref={ref}
      className={`user-grid-item user-grid-item--three fadeInUpS wow${vis}`}
      style={{ animationDelay: delay }}
    >
      <div className="user-grid-item-info">
        <span
          className="p3 ia-medium"
          style={{
            display: "inline-block",
            marginBottom: "1rem",
            padding: "0.3rem 1rem",
            background: "var(--ia-sky, #a1c5d3)",
            borderRadius: "4px",
            fontSize: "1.2rem",
          }}
        >
          {item.category}
        </span>

        {/* Before / After image pair */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem", marginBottom: "1.2rem" }}>
          <div>
            <div
              style={{
                background: `url(${item.before}) no-repeat 50% 50% / cover`,
                backgroundColor: "#1a2a3a",
                height: "16rem",
                borderRadius: "4px",
              }}
              role="img"
              aria-label={item.beforeAlt}
            />
            <p className="p3 ia-dark" style={{ marginTop: "0.5rem", textAlign: "center", fontWeight: 600 }}>Before</p>
          </div>
          <div>
            <div
              style={{
                background: `url(${item.after}) no-repeat 50% 50% / cover`,
                backgroundColor: "#1a2a3a",
                height: "16rem",
                borderRadius: "4px",
              }}
              role="img"
              aria-label={item.afterAlt}
            />
            <p className="p3 ia-dark" style={{ marginTop: "0.5rem", textAlign: "center", fontWeight: 600 }}>After</p>
          </div>
        </div>

        <h3 className="h6 ia-margin-1">{item.label}</h3>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function GalleryPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "0px 0px -60px 0px" });
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "0px 0px -60px 0px" });

  const heroVis = heroInView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      {/* ── Hero ── */}
      <div ref={heroRef} className={`hero-org flex-module fadeIn wow${heroVis}`}>
        <div className="hero-org__top ia-bg-dark">
          <div className="inner inner--slim-1172">
            <div className={`breadcrumbs ia-sky fadeInUpS wow${heroVis}`}>
              <span><a href="/">Home</a></span>
              <em>&gt;</em>
              <span className="post post-page current-item">Gallery</span>
            </div>
            <h1 className={`ia-white ia-margin-0 fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
              Before &amp; After Gallery
            </h1>
          </div>
        </div>

        <div className="hero-org__bottom flex-module">
          <div className="inner inner--slim-1172 cleared">
            <div className={`hero-org__left wow${heroVis}`}>
              <div className={`sub-heading fadeInUpS wow${heroVis}`}>Real Results</div>
              <div className={`content-entry fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                <p>
                  A sample of completed projects by Skyward Roofing across New
                  York City — residential roofs, commercial flat roofs, slate,
                  shingles, mansard, and more. Every project is documented and
                  every result is backed by our workmanship.
                </p>
              </div>
            </div>

            <div className="hero-org__right">
              <div className={`sub-heading fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                Quick Links
              </div>
              <ul className="quick-links" role="list">
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                  <a className="ia-link ia-link--arrow" href="tel:9179798704">
                    <i className="icon-link" />
                    <span>Call (917) 979-8704</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.2s" }}>
                  <a className="ia-link ia-link--arrow" href="/craft-catalog">
                    <i className="icon-link" />
                    <span>Our Services</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.3s" }}>
                  <a className="ia-link ia-link--arrow" href="/contact-us">
                    <i className="icon-link" />
                    <span>Free Estimate</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Gallery Grid ── */}
      <div
        ref={gridRef}
        className={`user-grid-small fadeIn wow${gridInView ? " is-visible" : ""} flex-module`}
      >
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 fadeInUpS wow${gridInView ? " is-visible" : ""}`}
            style={{ animationDelay: "0.1s" }}
          >
            Recent Projects
          </h2>
          <div
            className={`content-entry fadeInUpS wow${gridInView ? " is-visible" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            <p>
              From asphalt shingle replacements in the Bronx to slate re-roofs
              and flat roof coatings across all five boroughs — every job is
              done right and documented from start to finish.
            </p>
          </div>
          <div className="user-grid-list user-grid-list--small">
            {galleryItems.map((item, i) => (
              <GalleryCard key={item.id} item={item} delay={`${(i % 3) * 0.1}s`} />
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div
        ref={ctaRef}
        className={`front-donation ia-bg-sky flex-module wow fadeInUpS${ctaInView ? " is-visible" : ""}`}
      >
        <div className="inner inner--slim-1172">
          <div className={`sub-heading wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.1s" }}>
            Ready to Get Started?
          </div>
          <h2 className={`h2 wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            Free Inspection — No Obligation
          </h2>
          <div className={`front-donation__in wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            <div className="content-entry">
              <p>
                Call <strong>(917) 979-8704</strong> and we&apos;ll schedule a
                free inspection and written estimate. No pressure, no
                obligation — just an honest assessment of your roof.
              </p>
            </div>
            <div className="front-donation__btn-wrap">
              <div className="front-donation__btn">
                <a className="btn btn--primary" href="tel:9179798704">
                  Call (917) 979-8704
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
