"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import SecondaryButton from "@/components/custom/buttons/SecondaryButton";

interface FaqItem {
  title: string;
  content: React.ReactNode;
  link?: { label: string; href: string };
}

const faqItems: FaqItem[] = [
  {
    title: "How do I know if I need a roof replacement or if a repair will do?",
    content: (
      <p>
        If your roof is over 15 years old and shingles look rough — visible
        cracking, breaking, or balding where ceramic granules are missing —
        or if your flat roof&apos;s membrane has significant UV damage and
        compromised seals, or you&apos;re experiencing several leaks, chances
        are the roofing needs to be replaced. We recommend a free inspection
        so we can assess whether a repair could give you a few more years, or
        if it&apos;s smarter economically to replace it. We never suggest a
        replacement when a repair will do — and we&apos;ll never suggest a
        repair if the entire roof is actually about to fail.
      </p>
    ),
  },
  {
    title: "Do you offer free estimates?",
    content: (
      <p>
        Yes — 100% free estimates, always. We send an experienced estimator
        to your property to conduct a thorough assessment and provide an
        accurate written estimate. We take into account the age of the roof,
        your budget, and what will be most cost-effective in the long run.
        Call us at{" "}
        <a href="tel:9179798704" className="ia-link">(917) 979-8704</a>{" "}
        or fill out the contact form to schedule.
      </p>
    ),
  },
  {
    title: "How long does a roof replacement take?",
    content: (
      <p>
        Re-roofing moves quickly with an experienced contractor and
        well-trained crew — typically 1–3 days for the average 2-story home.
        Variables that affect timing include weather, whether there is a
        second old roofing layer to be removed, difficult access, and roof
        complexity. We&apos;ll give you a realistic timeline estimate before
        the job starts.
      </p>
    ),
  },
  {
    title: "Can roofing be done in winter?",
    content: (
      <p>
        The ideal install temperature for asphalt shingles is above 40
        degrees. Cold-weather-friendly roofing materials like cedar shingles
        and metal can be installed with little or no heat-sensitive adhesive.
        We work year-round in NYC and will advise you on timing based on the
        material you&apos;re using.
      </p>
    ),
  },
  {
    title: "Why shouldn't I just hire the cheapest contractor?",
    content: (
      <p>
        A roof is a system — not just shingles. It includes waterproofing
        underlayment (ice shield), water-resistant felt, ventilation, flashings,
        and drip edge. Even the best shingles will fail early if any component
        is poorly installed. You can easily verify material quality, but
        it&apos;s harder to verify installation quality — until the roof fails
        years later, when the contractor may be long gone. Our estimates
        always cover quality underlayment, new flashings, new drip edge, and
        the proper nail count per shingle.
      </p>
    ),
  },
  {
    title: "Will I need to redo the gutters at the same time as the roof?",
    content: (
      <p>
        If the gutters and downspouts are in good shape, we can work around
        them without causing any damage. If the gutters need repairs, we can
        handle that as well. We&apos;ll let you know during the inspection if
        anything needs attention.
      </p>
    ),
  },
  {
    title: "Are you licensed and insured in New York?",
    content: (
      <p>
        Yes. We are licensed, bonded, and insured in the state of New York.
        Our NYC license number is 2100010-DCA and our Westchester County
        license number is WC-36220-H23. Being licensed requires passing tests
        and proving formal training or experience. Being bonded means funds
        are secured in case of a dispute. Being insured means if a worker is
        injured on your property, they apply to our company for
        compensation — not your homeowner&apos;s insurance.
      </p>
    ),
  },
  {
    title: "What areas do you serve?",
    content: (
      <>
        <p>
          We serve all five New York City boroughs plus Yonkers and
          surrounding areas:
        </p>
        <p>
          <strong>Bronx</strong> — all neighborhoods including Riverdale,
          Pelham Bay, Fordham, Mott Haven, and more.
        </p>
        <p>
          <strong>Brooklyn</strong> — all neighborhoods including Bay Ridge,
          Flatbush, Brownsville, Park Slope, Sheepshead Bay, and more.
        </p>
        <p>
          <strong>Manhattan</strong> — all neighborhoods from Inwood to
          Battery Park.
        </p>
        <p>
          <strong>Queens</strong> — all neighborhoods including Astoria,
          Flushing, Jamaica, Bayside, Forest Hills, and more.
        </p>
        <p>
          <strong>Staten Island</strong> — all neighborhoods.
        </p>
        <p>
          <strong>Yonkers &amp; surrounding Westchester</strong> — and parts
          of New Jersey including Hoboken and Jersey City.
        </p>
      </>
    ),
    link: { label: "See Full Service Area", href: "/service-areas" },
  },
];

export default function GeneralFaqsPage() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const donationRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
  const accordionInView = useInView(accordionRef, { once: true, margin: "0px 0px -60px 0px" });
  const donationInView = useInView(donationRef, { once: true, margin: "0px 0px -60px 0px" });

  const toggle = (idx: number) =>
    setOpenIndex((prev) => (prev === idx ? -1 : idx));

  return (
    <main>
      <div id="content">

        {/* ── Hero ── */}
        <div
          ref={heroRef}
          className={`hero-org flex-module wow fadeIn${heroInView ? " is-visible" : ""}`}
        >
          <div className="hero-org__top ia-bg-dark">
            <div className="inner inner--slim-1172">
              <div className={`breadcrumbs ia-sky wow fadeInUpS${heroInView ? " is-visible" : ""}`}>
                <span><a href="/" className="home ia-link">Home</a></span>{" "}
                <em>&gt;</em>{" "}
                <span className="post post-page current-item">FAQs</span>
              </div>
              <h1
                className={`ia-white ia-margin-0 wow fadeInUpS${heroInView ? " is-visible" : ""}`}
                style={{ animationDelay: "0.1s" }}
              >
                Frequently Asked Questions
              </h1>
            </div>
          </div>
        </div>

        {/* ── Accordion ── */}
        <div className="accordion-module flex-module">
          <div className="inner inner--slim-1172">
            <div
              ref={accordionRef}
              className={`accordion-wrap-flex wow fadeInUpS${accordionInView ? " is-visible" : ""}`}
              style={{ animationDelay: "0.3s" }}
            >
              {faqItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div className="accordion-item-flex" key={idx}>
                    <a
                      className={`accordion-title-flex h4${isOpen ? " current" : ""}`}
                      href="#"
                      onClick={(e) => { e.preventDefault(); toggle(idx); }}
                      aria-expanded={isOpen}
                    >
                      {item.title}
                      <i className="icon-arr-down" aria-hidden="true" />
                    </a>
                    <div className={`accordion-info-flex${isOpen ? " open" : ""}`}>
                      <div className="content-entry">{item.content}</div>
                      {item.link && (
                        <a href={item.link.href} className="ia-link ia-link--arrow">
                          <i className="icon-arrow-right" aria-hidden="true" />
                          <span>{item.link.label}</span>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          ref={donationRef}
          className={`front-donation ia-bg-sky flex-module wow fadeInUpS${donationInView ? " is-visible" : ""}`}
        >
          <div className="inner inner--slim-1172">
            <div className={`sub-heading wow fadeInUpS${donationInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
              Still have questions?
            </div>
            <h2 className={`h2 wow fadeInUpS${donationInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
              We&apos;re Here to Help
            </h2>
            <div className={`front-donation__in wow fadeInUpS${donationInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
              <div className="content-entry">
                <p>
                  Call us at <strong>(917) 979-8704</strong> — a member of
                  our team picks up and can answer any question, schedule a
                  free inspection, or give you an honest assessment over the
                  phone.
                </p>
              </div>
              <div className="front-donation__btn-wrap">
                <div className="front-donation__btn">
                  <SecondaryButton
                    label="Call (917) 979-8704"
                    href="tel:9179798704"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
