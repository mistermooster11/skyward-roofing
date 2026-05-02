"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/* ── Service Area Data ──────────────────────────────────────── */

const areas = [
  {
    slug: "bronx",
    region: "The Bronx",
    headline: "Roofing Contractor in the Bronx, NY",
    description:
      "The Bronx is home base for Skyward Roofing. We've been working in this borough for decades, and our crews know its building stock inside and out — from attached row houses and pre-war multi-families in Fordham and Tremont to larger commercial and industrial roofs near the waterfront. Whether you need a shingle replacement, a flat roof repair, or a full commercial re-roof, we're the closest qualified crew you can call.",
    callouts: [
      "Residential and commercial roofing across all Bronx neighborhoods",
      "Free inspections — in-person estimates, not phone quotes",
      "Licensed in NYC (DCA: 2100010) and Westchester (WC-36220-H23)",
    ],
    neighborhoods:
      "Riverdale • Fieldston • Spuyten Duyvil • Kingsbridge • Fordham • Belmont • Tremont • Mott Haven • Hunts Point • Longwood • Morrisania • Concourse • Highbridge • University Heights • Pelham Bay • Co-op City • Throggs Neck • City Island • Parkchester • Van Nest • Morris Park • and more",
  },
  {
    slug: "brooklyn",
    region: "Brooklyn",
    headline: "Roofing Contractor in Brooklyn, NY",
    description:
      "Brooklyn's roofing landscape is one of the most varied in New York — brownstones with original slate and modified bitumen flat roofs in Park Slope, asphalt shingle colonials in Bay Ridge, commercial flat roofs throughout the industrial corridors of Sunset Park, and everything in between. Our team has worked on all of it and knows what each neighborhood demands.",
    callouts: [
      "Brownstone and row house specialists — flat and pitched",
      "Shingle, slate, TPO, EPDM, and SPF systems installed and repaired",
      "Free inspections throughout all Brooklyn neighborhoods",
    ],
    neighborhoods:
      "Bay Ridge • Dyker Heights • Bensonhurst • Sunset Park • Park Slope • Gowanus • Red Hook • Carroll Gardens • Cobble Hill • Brooklyn Heights • DUMBO • Downtown Brooklyn • Fort Greene • Clinton Hill • Bed-Stuy • Crown Heights • Flatbush • Ditmas Park • Kensington • Borough Park • Boro Park • Brownsville • East New York • Canarsie • Sheepshead Bay • Gravesend • Coney Island • Brighton Beach • and more",
  },
  {
    slug: "manhattan",
    region: "Manhattan",
    headline: "Roofing Contractor in Manhattan, NY",
    description:
      "Manhattan roofing ranges from historic brownstones and co-op buildings on the Upper West Side to large flat commercial rooftops in Midtown and FiDi. We hold the necessary NYC licenses to work throughout the borough and have completed projects from Inwood to Battery Park. Personal service, honest estimates — you always talk directly with our team.",
    callouts: [
      "Full NYC DCA license — qualified for all Manhattan roofing projects",
      "Residential brownstones, co-ops, and commercial buildings",
      "Free inspections and written estimates across the borough",
    ],
    neighborhoods:
      "Inwood • Washington Heights • Hamilton Heights • Harlem • East Harlem • Morningside Heights • Upper West Side • Upper East Side • Yorkville • Lenox Hill • Carnegie Hill • Midtown • Hell's Kitchen • Chelsea • Gramercy • Murray Hill • East Village • West Village • SoHo • TriBeCa • Financial District • Battery Park • and more",
  },
  {
    slug: "queens",
    region: "Queens",
    headline: "Roofing Contractor in Queens, NY",
    description:
      "Queens is the largest borough by area and covers every type of housing — single-family homes in Bayside and Whitestone with pitched asphalt shingle roofs, dense apartment buildings in Astoria and LIC, and commercial corridors throughout Flushing and Jamaica. Our team handles the full range of Queens roofing needs with the same free inspection, written estimate, and quality installation process.",
    callouts: [
      "Single-family homes to large apartment and commercial buildings",
      "All roof types: shingle, slate, flat membranes, metal",
      "Free inspections throughout all of Queens",
    ],
    neighborhoods:
      "Astoria • Long Island City • Flushing • Bayside • Whitestone • College Point • Elmhurst • Jackson Heights • Woodside • Sunnyside • Forest Hills • Rego Park • Kew Gardens • Richmond Hill • Jamaica • Howard Beach • Ozone Park • Ridgewood • Middle Village • Maspeth • Fresh Meadows • Hollis • Springfield Gardens • Far Rockaway • and more",
  },
  {
    slug: "staten-island",
    region: "Staten Island",
    headline: "Roofing Contractor in Staten Island, NY",
    description:
      "Staten Island has one of the highest concentrations of single-family homes in New York City, with pitched roofs across the borough — asphalt shingles, slate, and tile are all common depending on the neighborhood and era of construction. We offer full residential and commercial roofing services throughout Staten Island with the same free inspection and no-obligation estimate process.",
    callouts: [
      "Residential specialists for Staten Island's single-family home market",
      "Asphalt shingle, slate, and tile roofing — repairs and replacements",
      "Free inspections across all Staten Island neighborhoods",
    ],
    neighborhoods:
      "St. George • New Brighton • Stapleton • Tompkinsville • Clifton • Rosebank • Port Richmond • Mariners Harbor • Howland Hook • Westerleigh • Castleton Corners • New Springville • Willowbrook • Eltingville • Great Kills • Annadale • Huguenot • Tottenville • Richmond • New Dorp • Oakwood • and more",
  },
  {
    slug: "yonkers",
    region: "Yonkers & Westchester",
    headline: "Roofing Contractor in Yonkers & Westchester County",
    description:
      "Skyward Roofing holds a Westchester County contractor license (WC-36220-H23) and serves Yonkers and the surrounding Westchester area for all residential and commercial roofing needs. Whether you have a single-family home in Yonkers or a commercial property in Eastchester, we bring the same expertise and personal service we provide throughout New York City.",
    callouts: [
      "Licensed in Westchester County — WC-36220-H23",
      "Residential and commercial roofing, all types",
      "Free inspections and written estimates throughout the area",
    ],
    neighborhoods:
      "Yonkers • Eastchester • Tuckahoe • Bronxville • Mount Vernon • New Rochelle • Pelham • Pelham Manor • Larchmont • Mamaroneck • and surrounding Westchester communities",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

function AreaSection({ area, reversed }: { area: typeof areas[number]; reversed: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div
      ref={ref}
      id={area.slug}
      className={`content-block-flex flex-module fadeIn wow${vis}`}
      style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
    >
      <div className="inner inner--slim-1172">
        <div className="content-block-head wide">
          <h2 className={`h3 fadeInUpS wow${vis}`} style={{ animationDelay: "0.1s" }}>
            {area.headline}
          </h2>
        </div>
        <div className="content-block-in wide">
          <div className="content-block-text content-entry p2 full-width">
            <p>{area.description}</p>
            <ul>
              {area.callouts.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p>
              <strong>Neighborhoods served:</strong> {area.neighborhoods}
            </p>
            <p>
              Not sure if we cover your street?{" "}
              <a href="tel:9179798704" className="ia-link">Call (917) 979-8704</a>{" "}
              — we almost certainly do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function ServiceAreasPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
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
              <span className="post post-page current-item">Service Areas</span>
            </div>
            <h1 className={`ia-white ia-margin-0 fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
              Serving All of New York City
            </h1>
          </div>
        </div>

        <div className="hero-org__bottom flex-module">
          <div className="inner inner--slim-1172 cleared">
            <div className={`hero-org__left wow${heroVis}`}>
              <div className={`sub-heading fadeInUpS wow${heroVis}`}>Coverage Area</div>
              <div className={`content-entry fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                <p>
                  Skyward Roofing serves all five NYC boroughs, Yonkers, and
                  surrounding Westchester communities. We are licensed in New
                  York City (DCA: 2100010-DCA) and Westchester County
                  (WC-36220-H23). Free inspections and estimates throughout our
                  entire service area — no obligation.
                </p>
              </div>
            </div>

            <div className="hero-org__right">
              <div className={`sub-heading fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                Jump to Area
              </div>
              <ul className="quick-links" role="list">
                {areas.map((area, i) => (
                  <li key={area.slug} className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                    <a className="ia-link ia-link--arrow" href={`#${area.slug}`}>
                      <i className="icon-link" />
                      <span>{area.region}</span>
                    </a>
                  </li>
                ))}
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.8s" }}>
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

      {/* ── Area Sections ── */}
      {areas.map((area, i) => (
        <AreaSection key={area.slug} area={area} reversed={i % 2 !== 0} />
      ))}

      {/* ── CTA ── */}
      <div
        ref={ctaRef}
        className={`front-donation ia-bg-sky flex-module wow fadeInUpS${ctaInView ? " is-visible" : ""}`}
      >
        <div className="inner inner--slim-1172">
          <div className={`sub-heading wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.1s" }}>
            Not Sure If We Cover You?
          </div>
          <h2 className={`h2 wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            Just Call — We Almost Certainly Do
          </h2>
          <div className={`front-donation__in wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            <div className="content-entry">
              <p>
                Our coverage is wide and our scheduling is fast. Call{" "}
                <strong>(917) 979-8704</strong> and we&apos;ll confirm in
                seconds and get you on the schedule for a free inspection.
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
