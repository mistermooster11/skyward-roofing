"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useWowAnimation } from "@/hooks/useWowAnimation";

/* ── Service Area Data ───────────────────────────────────────── */

const serviceAreas = [
  {
    region: "The Bronx",
    description:
      "The Bronx is our home base. We handle all roof types found in the borough — from older residential homes and attached row houses to large commercial and industrial buildings. Most Bronx jobs are available with prompt scheduling.",
    neighborhoods:
      "Riverdale • Fieldston • Spuyten Duyvil • Kingsbridge • Fordham • Belmont • Tremont • Mott Haven • Hunts Point • Pelham Bay • Co-op City • Throggs Neck • City Island • Morris Park • and more",
  },
  {
    region: "Brooklyn",
    description:
      "Brooklyn has some of the most varied roofing in New York — brownstone slate and flat roofs in Park Slope, asphalt shingle homes in Bay Ridge, and large flat commercial roofs throughout the industrial areas. Our team has worked on all of it.",
    neighborhoods:
      "Bay Ridge • Sunset Park • Park Slope • Flatbush • Brownsville • East New York • Crown Heights • Bed-Stuy • Williamsburg • Greenpoint • Sheepshead Bay • Canarsie • Dyker Heights • Bensonhurst • and more",
  },
  {
    region: "Manhattan",
    description:
      "Manhattan roofing ranges from historic brownstones and prewar co-ops in the Upper West Side to flat commercial rooftops downtown. We work throughout the entire borough with full licensing for NYC work.",
    neighborhoods:
      "Washington Heights • Inwood • Harlem • East Harlem • Upper West Side • Upper East Side • Midtown • Chelsea • Hell's Kitchen • Lower East Side • Financial District • Battery Park • and more",
  },
  {
    region: "Queens",
    description:
      "Queens covers every housing type — single-family homes in Bayside and Whitestone, mixed-use commercial corridors in Flushing, and large apartment complexes in Astoria and LIC. We serve all of it.",
    neighborhoods:
      "Astoria • LIC • Flushing • Bayside • Whitestone • Forest Hills • Jamaica • Howard Beach • Ozone Park • Ridgewood • Middle Village • Jackson Heights • Elmhurst • Far Rockaway • and more",
  },
  {
    region: "Staten Island",
    description:
      "Staten Island has a high concentration of single-family homes with pitched roofs — asphalt shingle, slate, and tile are all common. We serve the full island and offer free inspections throughout.",
    neighborhoods:
      "St. George • New Brighton • Stapleton • Tottenville • Great Kills • Annadale • New Dorp • Eltingville • Huguenot • Richmond • Mariners Harbor • Port Richmond • and more",
  },
  {
    region: "Yonkers & Westchester",
    description:
      "We are licensed in Westchester County (WC-36220-H23) and serve Yonkers and surrounding communities for all residential and commercial roofing needs.",
    neighborhoods:
      "Yonkers • Eastchester • Mount Vernon • New Rochelle • Bronxville • Tuckahoe • Pelham • Pelham Manor • and surrounding areas",
  },
];

/* ── Stacked area section ────────────────────────────────────── */

function AreaSection({
  area,
  index,
}: {
  area: (typeof serviceAreas)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div
      ref={ref}
      className={`content-block flex-module fadeInUpS wow${vis}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="inner inner--slim-1172">
        <h3 className="h4 ia-margin-1">{area.region}</h3>
        <p className="p2 ia-dark" style={{ marginBottom: "0.75rem" }}>
          {area.description}
        </p>
        <p className="p3 ia-medium">{area.neighborhoods}</p>
      </div>
    </div>
  );
}

/* ── Styled submit button ────────────────────────────────────── */

function SubmitBtn() {
  const btnRef = useWowAnimation<HTMLButtonElement>("contact-submit-btn", true);
  return (
    <button
      ref={btnRef}
      type="submit"
      className="ia-btn wow"
      style={{ cursor: "pointer", fontFamily: "inherit" }}
    >
      <em className="ia-b ia-b-1" />
      <em className="ia-b ia-b-2" />
      <em className="ia-b ia-b-3" />
      <em className="ia-b ia-b-4" />
      <span>Send Message</span>
    </button>
  );
}

/* ── Page ────────────────────────────────────────────────────── */

export default function ContactPage() {
  const heroRef  = useRef<HTMLDivElement>(null);
  const formRef  = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);
  const mapRef   = useRef<HTMLDivElement>(null);

  const heroInView  = useInView(heroRef,  { once: true, margin: "0px 0px -60px 0px" });
  const formInView  = useInView(formRef,  { once: true, margin: "0px 0px -60px 0px" });
  const areasInView = useInView(areasRef, { once: true, margin: "0px 0px -60px 0px" });
  const mapInView   = useInView(mapRef,   { once: true, margin: "0px 0px -60px 0px" });

  const heroVis  = heroInView  ? " is-visible" : "";
  const formVis  = formInView  ? " is-visible" : "";
  const areasVis = areasInView ? " is-visible" : "";
  const mapVis   = mapInView   ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className={`hero-org flex-module fadeIn wow${heroVis}`}>
        <div className="hero-org__top ia-bg-dark">
          <div className="inner inner--slim-1172">
            <div className={`breadcrumbs ia-sky fadeInUpS wow${heroVis}`}>
              <a href="/">Home</a>
              <em>&gt;</em>
              <span className="post post-page current-item">Contact Us</span>
            </div>
            <h1
              className={`ia-white ia-margin-0 fadeInUpS wow${heroVis}`}
              style={{ animationDelay: "0.1s" }}
            >
              Get a Free Estimate
            </h1>
          </div>
        </div>

        <div ref={heroRef} className="hero-org__bottom flex-module">
          <div className="inner inner--slim-1172 cleared">

            {/* Left */}
            <div className={`hero-org__left fadeInUpS wow${heroVis}`}>
              <div className="sub-heading">Reach Us</div>
              <div className="content-entry" style={{ animationDelay: "0.1s" }}>
                <p>
                  Call <strong>(917) 979-8704</strong> — a member of our team
                  answers directly. Free roof inspections and estimates are
                  available across all five NYC boroughs, Yonkers, and
                  surrounding areas. Or fill out the form below and
                  we&apos;ll get back to you quickly.
                </p>
              </div>
            </div>

            {/* Right: quick contact links */}
            <div className="hero-org__right">
              <div
                className={`sub-heading fadeInUpS wow${heroVis}`}
                style={{ animationDelay: "0.1s" }}
              >
                Contact Options
              </div>
              <ul className="quick-links" role="list">
                <li
                  className={`fadeInUpS wow${heroVis}`}
                  style={{ animationDelay: "0.1s" }}
                >
                  <a className="ia-link ia-link--arrow" href="tel:9179798704">
                    <i className="icon-link" />
                    <span>Call (917) 979-8704</span>
                  </a>
                </li>
                <li
                  className={`fadeInUpS wow${heroVis}`}
                  style={{ animationDelay: "0.2s" }}
                >
                  <a className="ia-link ia-link--arrow" href="/general-faqs">
                    <i className="icon-link" />
                    <span>View FAQs</span>
                  </a>
                </li>
                <li
                  className={`fadeInUpS wow${heroVis}`}
                  style={{ animationDelay: "0.3s" }}
                >
                  <a className="ia-link ia-link--arrow" href="/service-areas">
                    <i className="icon-link" />
                    <span>Full Service Area</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── Contact Form ─────────────────────────────────────────── */}
      <div ref={formRef} className={`content-block-flex flex-module fadeIn wow${formVis}`}>
        <div className="inner inner--slim-1172">
          <div className="content-block-head wide">
            <h2
              id="getstarted"
              className={`h3 fadeInUpS wow${formVis}`}
              style={{ animationDelay: "0.1s" }}
            >
              Schedule a Free Inspection or Ask a Question
            </h2>
            <p
              className={`p2 fadeInUpS wow${formVis}`}
              style={{ animationDelay: "0.15s" }}
            >
              Fill out the form below or call us directly at{" "}
              <strong>(917) 979-8704</strong>. We respond quickly — usually
              the same day.
            </p>
          </div>

          <div className="content-block-in wide">
            <div className="content-block-text content-entry p2 full-width">
              {/*
                TODO: Replace this form with Skyward Roofing's preferred form
                solution (HubSpot, Gravity Forms, JotForm, etc.).
              */}
              <form
                action="#"
                method="POST"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                  maxWidth: "680px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="name" className="p3 ia-medium">Name *</label>
                  <input
                    id="name" name="name" type="text" required
                    placeholder="Your full name"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="phone" className="p3 ia-medium">Phone *</label>
                  <input
                    id="phone" name="phone" type="tel" required
                    placeholder="(555) 000-0000"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="email" className="p3 ia-medium">Email</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="you@example.com"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="service" className="p3 ia-medium">Service Needed</label>
                  <select
                    id="service" name="service"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem", background: "white" }}
                  >
                    <option value="">Select a service…</option>
                    <option>Residential Roofing</option>
                    <option>Commercial / Industrial Roofing</option>
                    <option>Flat Roof (TPO / EPDM / SPF)</option>
                    <option>Asphalt Shingle Roof</option>
                    <option>Metal Roofing</option>
                    <option>Slate Roofing</option>
                    <option>Roof Inspection / Free Estimate</option>
                    <option>Chimney Services</option>
                    <option>Gutter Services</option>
                    <option>Roof Coatings / Waterproofing</option>
                    <option>Not Sure / Other</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", gridColumn: "1 / -1" }}>
                  <label htmlFor="message" className="p3 ia-medium">Message</label>
                  <textarea
                    id="message" name="message" rows={4}
                    placeholder="Describe your roofing issue or what you need — address, type of roof, any visible damage?"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem", resize: "vertical" }}
                  />
                </div>

                <div style={{ gridColumn: "1 / -1" }}>
                  <SubmitBtn />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ── Service Areas ─────────────────────────────────────────── */}
      <div ref={areasRef} className={`flex-module fadeIn wow${areasVis}`}>
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 fadeInUpS wow${areasVis}`}
            style={{ animationDelay: "0.1s" }}
          >
            Service Areas
          </h2>
          <div
            className={`content-entry fadeInUpS wow${areasVis}`}
            style={{ animationDelay: "0.2s", marginBottom: "3rem" }}
          >
            <p>
              We cover all five NYC boroughs, Yonkers, and surrounding areas.
              If you&apos;re not sure whether we serve your neighborhood, call
              us — we almost certainly do.
            </p>
          </div>
        </div>

        {serviceAreas.map((area, i) => (
          <AreaSection key={area.region} area={area} index={i} />
        ))}
      </div>

      {/* ── Google Map ───────────────────────────────────────────── */}
      <div ref={mapRef} className={`flex-module fadeIn wow${mapVis}`}>
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 ia-margin-2 fadeInUpS wow${mapVis}`}
            style={{ animationDelay: "0.1s" }}
          >
            Our Service Area
          </h2>
          <div className={`fadeInUpS wow${mapVis}`} style={{ animationDelay: "0.2s" }}>
            {/* [TODO: Replace with a Google Maps embed centered on the Bronx / NYC area] */}
            <iframe
              title="Skyward Roofing Service Area — New York City"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d96396.19836817!2d-73.9442!3d40.7282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
              width="100%"
              height="480"
              style={{ border: 0, display: "block", borderRadius: "4px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

    </main>
  );
}
