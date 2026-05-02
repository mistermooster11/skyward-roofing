"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/* ── Blog Posts — placeholder until CMS is wired up ────────── */
// [TODO: Replace placeholder posts with real content from Skyward Roofing or CMS]

const posts = [
  {
    id: "replace-or-repair-roof",
    title: "Repair or Replace? How to Make the Right Call for Your NYC Roof",
    excerpt:
      "Age, material condition, cost of repair vs. replacement — we break down the honest framework our estimators use to give homeowners a straight answer. No upselling.",
    category: "Homeowner Guide",
    date: "May 2026",
    href: "/blog/replace-or-repair-roof",
  },
  {
    id: "cheapest-roofer-mistake",
    title: "Why Hiring the Cheapest Roofer Is the Most Expensive Mistake You Can Make",
    excerpt:
      "A roof is a system, not just shingles. The underlayment, flashings, drip edge, and nail count all matter. Here's what to look for in an estimate before signing anything.",
    category: "Buyer's Guide",
    date: "April 2026",
    href: "/blog/cheapest-roofer-mistake",
  },
  {
    id: "flat-roof-tpo-epdm-spf",
    title: "TPO vs. EPDM vs. SPF: Which Flat Roof System Is Right for Your Building?",
    excerpt:
      "Three common flat roof membranes, three different installation methods, three different long-term performance profiles. Plain-language breakdown from the Skyward Roofing team.",
    category: "How It Works",
    date: "March 2026",
    href: "/blog/flat-roof-tpo-epdm-spf",
  },
  {
    id: "nyc-roofing-winter",
    title: "Can You Replace a Roof in Winter in New York City?",
    excerpt:
      "The short answer: yes, with the right materials and conditions. The longer answer covers what temperature limits actually apply and which roofing types handle cold better.",
    category: "NYC Roofing",
    date: "February 2026",
    href: "/blog/nyc-roofing-winter",
  },
  {
    id: "signs-roof-needs-replacement",
    title: "5 Signs Your Roof Needs Replacing (Not Just Patching)",
    excerpt:
      "Missing granules, curling shingles, recurring leaks, age — there are clear signals that repair money is wasted and replacement is the right investment.",
    category: "Homeowner Guide",
    date: "January 2026",
    href: "/blog/signs-roof-needs-replacement",
  },
  {
    id: "chimney-roof-leaks",
    title: "Why Your Chimney Is Probably the Source of Your Roof Leak",
    excerpt:
      "Flashing failure around chimneys is one of the most common — and most overlooked — sources of roof leaks. Here's what to look for and when to call us.",
    category: "NYC Roofing",
    date: "December 2025",
    href: "/blog/chimney-roof-leaks",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

function PostCard({ post, delay }: { post: typeof posts[number]; delay: string }) {
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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
          <span
            className="p3 ia-medium"
            style={{
              padding: "0.3rem 1rem",
              background: "var(--ia-sky, #a1c5d3)",
              borderRadius: "4px",
              fontSize: "1.2rem",
            }}
          >
            {post.category}
          </span>
          <span className="p3 ia-dark" style={{ fontSize: "1.2rem", opacity: 0.6 }}>{post.date}</span>
        </div>
        <h3 className="h6 ia-margin-1">
          {/* [TODO: Enable when blog CMS is wired up] */}
          {post.title}
        </h3>
        <p className="p3 ia-regular ia-dark" style={{ marginBottom: "1.2rem" }}>
          {post.excerpt}
        </p>
        <a className="ia-link ia-link--arrow" href={post.href}>
          <i className="icon-link" />
          <span>Read More</span>
        </a>
        {/* [TODO: Wire each href to real blog post pages] */}
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function BlogPage() {
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
              <span className="post post-page current-item">Blog</span>
            </div>
            <h1 className={`ia-white ia-margin-0 fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
              NYC Roofing Tips &amp; Guides
            </h1>
          </div>
        </div>

        <div className="hero-org__bottom flex-module">
          <div className="inner inner--slim-1172 cleared">
            <div className={`hero-org__left wow${heroVis}`}>
              <div className={`sub-heading fadeInUpS wow${heroVis}`}>From the Skyward Roofing Team</div>
              <div className={`content-entry fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                <p>
                  Practical roofing advice from a family-owned NYC roofing
                  company with 50+ years of combined experience. No fluff —
                  just the honest information homeowners and property managers
                  need to make smart decisions about their roofs.
                </p>
              </div>
            </div>

            <div className="hero-org__right">
              <div className={`sub-heading fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                Quick Links
              </div>
              <ul className="quick-links" role="list">
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                  <a className="ia-link ia-link--arrow" href="/craft-catalog">
                    <i className="icon-link" />
                    <span>Our Services</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.2s" }}>
                  <a className="ia-link ia-link--arrow" href="/general-faqs">
                    <i className="icon-link" />
                    <span>FAQs</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.3s" }}>
                  <a className="ia-link ia-link--arrow" href="tel:9179798704">
                    <i className="icon-link" />
                    <span>Call (917) 979-8704</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Post Grid ── */}
      <div
        ref={gridRef}
        className={`user-grid-small fadeIn wow${gridInView ? " is-visible" : ""} flex-module`}
      >
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 fadeInUpS wow${gridInView ? " is-visible" : ""}`}
            style={{ animationDelay: "0.1s" }}
          >
            Latest Articles
          </h2>
          {/* [TODO: Replace placeholder posts with real content from Skyward Roofing or CMS] */}
          <div className="user-grid-list user-grid-list--small">
            {posts.map((post, i) => (
              <PostCard key={post.id} post={post} delay={`${(i % 3) * 0.1}s`} />
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
            Have a Roofing Question?
          </div>
          <h2 className={`h2 wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            Talk to Someone Who Knows Roofs
          </h2>
          <div className={`front-donation__in wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            <div className="content-entry">
              <p>
                Call <strong>(917) 979-8704</strong> and you&apos;ll talk
                directly to a member of our team — not a call center. Free
                inspections and estimates available across all five NYC
                boroughs, Yonkers, and surrounding areas.
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
