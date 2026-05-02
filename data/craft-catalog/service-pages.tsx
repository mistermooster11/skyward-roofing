import type { ReactNode } from "react";

export type ServiceNavItem = { href: string; label: string };

export type ServicePageData = {
  title: string;
  /** Fallback background color while TODO image is pending */
  bgColor: string;
  navItems: ServiceNavItem[];
  /** Short intro paragraph shown in CraftOverview left column */
  overviewContent: ReactNode;
  /** Quick links shown in CraftOverview right column */
  overviewQuickLinks: { label: string; href: string }[];
  /** Middle content sections rendered between overview and related services */
  sections: { id: string; heading: string; content: ReactNode }[];
  /** "Related Services" links at page bottom */
  relatedServices: { label: string; href: string }[];
};

export const servicePages: Record<string, ServicePageData> = {

  /* ─── RESIDENTIAL ROOFING ─────────────────────────────────────────────── */
  "residential-roofing": {
    title: "Residential Roofing",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Skyward Roofing offers residential roofing services for all kinds of
          homes in New York City. Whether you have a single-family home,
          brownstone, or multi-family building, we offer competitive pricing
          and long-lasting, great-looking roofs.
        </p>
        <p>
          Our roofers handle everything from a small leak to a complete
          tear-off and replace — and you always deal directly with a member of
          our team. No call centers, no middlemen.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (917) 979-8704", href: "tel:9179798704" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need a Roofer?",
        content: (
          <>
            <p>
              If your roof is over 15 years old and shingles look rough —
              visible cracking, breakage, or balding where ceramic granules are
              missing — it may be time for a replacement. Repeated leaks,
              water stains on ceilings, sagging sections, or damage after a
              storm are all signs worth a free inspection.
            </p>
            <p>
              We don&rsquo;t suggest replacements when a repair will do. After
              a thorough assessment, we&rsquo;ll tell you honestly whether a
              targeted repair can extend the roof&rsquo;s life or whether
              replacement is the smarter long-term investment.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "Our Process",
        content: (
          <>
            <p>
              <strong>Step 1 — Free Inspection.</strong> An experienced
              estimator comes to your property and conducts a thorough
              assessment — checking roofing material condition, flashing,
              gutters, interior water stains, and more. We document everything
              with photos.
            </p>
            <p>
              <strong>Step 2 — Written Estimate.</strong> We provide a detailed
              written estimate covering materials and labor. We explain all
              options and discuss what&rsquo;s most cost-effective for your
              situation and budget.
            </p>
            <p>
              <strong>Step 3 — Professional Installation.</strong> All employees
              go through rigorous company training in how to correctly install
              every roofing system we service. We don&rsquo;t take shortcuts —
              even if it saves time, it makes the roof fail faster.
            </p>
            <p>
              <strong>Step 4 — Final Walkthrough.</strong> We inspect the
              completed work with you, confirm everything meets our standards,
              and leave your property clean. Minimum 20-year material warranty
              available.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Asphalt Shingle Roofing",   href: "/craft-catalog/asphalt-shingle-roofing" },
      { label: "Flat Roofing",              href: "/craft-catalog/flat-roofing"             },
      { label: "Roof Inspections",          href: "/craft-catalog/roof-inspections"         },
      { label: "Chimney Services",          href: "/craft-catalog/chimney-services"         },
    ],
  },

  /* ─── COMMERCIAL ROOFING ──────────────────────────────────────────────── */
  "commercial-roofing": {
    title: "Commercial & Industrial Roofing",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Our commercial roofers are familiar with and comply with local codes
          and guidelines for commercial roofs in New York City. We install
          roofs the way they should be — using quality, tried-and-tested
          materials and installation techniques to withstand all kinds of
          weather.
        </p>
        <p>
          We work on both flat and sloped commercial roofs, from retail
          buildings and office spaces to warehouses and industrial facilities.
          Our team is fully equipped to handle large-scale projects and
          budget-conscious solutions for property managers and business
          owners across NYC.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (917) 979-8704", href: "tel:9179798704" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Commercial Roof Service?",
        content: (
          <>
            <p>
              Ponding water on a flat roof, visible membrane deterioration, UV
              damage to EPDM or TPO, recurring leaks at flashing or penetrations,
              and aging systems approaching the end of their design life are all
              reasons to schedule an inspection. After a major storm, inspection
              is always prudent to catch damage before it becomes a serious
              interior water problem.
            </p>
            <p>
              Industrial roofs like warehouses and factories have unique
              requirements and often benefit from specialized coating or
              membrane systems. We assess your building and recommend what
              will perform best long-term at the best cost.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "Our Process",
        content: (
          <>
            <p>
              <strong>Step 1 — Site Assessment.</strong> We evaluate the
              existing roof system, identify all problem areas, and document
              everything. We discuss what repair or replacement options make
              sense given the building&rsquo;s age, use, and budget.
            </p>
            <p>
              <strong>Step 2 — Detailed Written Estimate.</strong> Our
              estimates cover all materials, labor, and any related work such
              as flashings or drains. No surprise line items.
            </p>
            <p>
              <strong>Step 3 — Scheduled Installation.</strong> We work on
              your schedule to minimize disruption to business operations.
              Our crew is trained on all commercial roof systems.
            </p>
            <p>
              <strong>Step 4 — Inspection &amp; Sign-Off.</strong> We walk
              the completed work with you, document the installation, and
              provide warranty information on all materials.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Flat Roofing",          href: "/craft-catalog/flat-roofing"      },
      { label: "Roof Coatings",         href: "/craft-catalog/roof-coatings"     },
      { label: "Roof Inspections",      href: "/craft-catalog/roof-inspections"  },
      { label: "Gutter Services",       href: "/craft-catalog/gutter-services"   },
    ],
  },

  /* ─── FLAT ROOFING ────────────────────────────────────────────────────── */
  "flat-roofing": {
    title: "Flat Roofing — TPO, EPDM & SPF",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          There are many flat roofing systems available, and the right one
          depends on your building type, budget, and performance needs. We
          can discuss the various options — TPO, EPDM, SPF spray foam, built-up
          roofing — and help you understand which will be the best fit.
        </p>
        <p>
          Skyward Roofing works on both residential flat roofs and commercial
          flat roofs throughout all five NYC boroughs and Yonkers. Whether you
          have a membrane roof, built-up roof, or another system, we can
          inspect, repair, or replace it.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (917) 979-8704", href: "tel:9179798704" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Flat Roof Service?",
        content: (
          <>
            <p>
              Flat roofs require different maintenance than pitched roofs.
              Ponding water, blistering or bubbling membranes, cracks or splits
              in the membrane, failed seams, and compromised flashings around
              skylights, HVAC units, or parapet walls are all signs of trouble.
              If your flat roof is over 15–20 years old, an inspection is
              worth scheduling even without visible symptoms.
            </p>
            <p>
              SPF (spray polyurethane foam) roofs are a strong option for
              existing roofs — the foam is sprayed directly over the existing
              surface, creating a monolithic barrier with excellent insulation
              value. SPF roofs are also renewable — a new layer can be applied
              to update the warranty without full tear-off.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "Our Process",
        content: (
          <>
            <p>
              <strong>Step 1 — Inspection &amp; System Assessment.</strong>{" "}
              We examine the existing membrane system, flashings, drains, and
              penetrations. For buildings considering SPF, we assess whether
              the existing substrate is a good candidate.
            </p>
            <p>
              <strong>Step 2 — Written Estimate with Options.</strong> We
              present repair vs. replacement options with honest guidance on
              which makes financial sense given your roof&rsquo;s condition
              and remaining life.
            </p>
            <p>
              <strong>Step 3 — Installation.</strong> Our crews are trained on
              all flat roof systems. TPO seams are heat-welded; EPDM is secured
              with adhesives; SPF is sprayed and top-coated to protect against
              UV degradation.
            </p>
            <p>
              <strong>Step 4 — Final Inspection.</strong> We inspect the
              completed system and confirm all seams, flashings, and
              penetrations are properly sealed before signing off.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Commercial Roofing",    href: "/craft-catalog/commercial-roofing" },
      { label: "Roof Coatings",         href: "/craft-catalog/roof-coatings"      },
      { label: "Roof Inspections",      href: "/craft-catalog/roof-inspections"   },
      { label: "Residential Roofing",   href: "/craft-catalog/residential-roofing"},
    ],
  },

  /* ─── ASPHALT SHINGLE ROOFING ─────────────────────────────────────────── */
  "asphalt-shingle-roofing": {
    title: "Asphalt Shingle Roofing",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Asphalt shingles are the most common residential roofing material in
          New York, and for good reason — they&rsquo;re durable, cost-effective,
          and available in a wide range of styles and colors. Skyward Roofing
          installs them correctly, with proper underlayment, new flashings, new
          drip edge, and the manufacturer-specified number of nails per shingle.
        </p>
        <p>
          Whether you need a few missing shingles replaced or a full tear-off
          and new installation, we provide free estimates and honest guidance
          on what makes sense for your roof.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (917) 979-8704", href: "tel:9179798704" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Shingle Roof Service?",
        content: (
          <>
            <p>
              If you see shingles in your yard after a storm, notice broken or
              curling shingles on the roof, or find ceramic granules washing out
              of the downspouts in heavy rains, it&rsquo;s time for a free
              inspection. These are signs that the shingles are reaching end of
              life or have been damaged — and waiting makes water infiltration
              more likely.
            </p>
            <p>
              The ideal install temperature for asphalt shingles is above 40
              degrees, but roof work can continue through much of winter in NYC
              with proper materials. Call us anytime to discuss timing.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "Our Process",
        content: (
          <>
            <p>
              <strong>Step 1 — Free Inspection &amp; Estimate.</strong> We
              assess the roof condition, check decking for damage, inspect
              flashings, and give you a detailed written estimate.
            </p>
            <p>
              <strong>Step 2 — Material Selection.</strong> We discuss shingle
              grade and style options — standard 3-tab, architectural, and
              premium designer shingles — and explain what warranty comes with
              each. Minimum 20-year material warranty available.
            </p>
            <p>
              <strong>Step 3 — Full Installation.</strong> We cover ice shield
              waterproofing underlayment, water-resistant felt, new flashings,
              new drip edge, and proper nail count per shingle. No shortcuts.
            </p>
            <p>
              <strong>Step 4 — Cleanup &amp; Final Inspection.</strong> All
              debris is removed. We inspect every section of the completed
              roof with you before signing off.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Residential Roofing",   href: "/craft-catalog/residential-roofing"  },
      { label: "Roof Inspections",      href: "/craft-catalog/roof-inspections"      },
      { label: "Chimney Services",      href: "/craft-catalog/chimney-services"      },
      { label: "Gutter Services",       href: "/craft-catalog/gutter-services"       },
    ],
  },

  /* ─── METAL ROOFING ───────────────────────────────────────────────────── */
  "metal-roofing": {
    title: "Metal Roofing",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Metal roofing is an excellent option for both low-slope and pitched
          roofs, for residential, commercial, and industrial applications. It
          comes in many color and style options, holds up well to New York
          weather, and — when installed correctly — can last 40–70 years.
        </p>
        <p>
          Not all roofers are qualified to work on metal roofs. Skyward
          Roofing has the skills, training, and equipment to correctly install
          and maintain metal roofing systems. Ask us about metal roofing for
          your property.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (917) 979-8704", href: "tel:9179798704" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Is Metal Roofing Right for Your Property?",
        content: (
          <>
            <p>
              Metal roofing is a strong long-term investment for property
              owners looking for durability, energy efficiency, and low
              maintenance. It reflects solar heat, reduces cooling costs, is
              fire-resistant, and holds up to high winds and heavy snow loads.
              It&rsquo;s also increasingly popular for homeowners who want a
              roof they can pass down to their children.
            </p>
            <p>
              For commercial and industrial buildings, metal is often the most
              cost-effective long-run option. We&rsquo;ll help you weigh
              upfront cost against expected service life to find the right
              solution for your situation.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "Our Process",
        content: (
          <>
            <p>
              <strong>Step 1 — Consultation &amp; Estimate.</strong> We assess
              your property, discuss style and panel profile options, and
              provide a written estimate covering all materials and labor.
            </p>
            <p>
              <strong>Step 2 — Material Selection.</strong> We walk you through
              panel styles (standing seam, exposed fastener, corrugated), gauge
              options, and finish coatings — and explain what will perform best
              for your specific roof type.
            </p>
            <p>
              <strong>Step 3 — Professional Installation.</strong> Metal roof
              installation requires specialized tools and training that most
              general roofing crews don&rsquo;t have. Our team is qualified and
              equipped for the job.
            </p>
            <p>
              <strong>Step 4 — Final Inspection.</strong> Every fastener,
              seam, and flashing is inspected before we consider the job
              complete.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Residential Roofing",  href: "/craft-catalog/residential-roofing" },
      { label: "Commercial Roofing",   href: "/craft-catalog/commercial-roofing"  },
      { label: "Roof Coatings",        href: "/craft-catalog/roof-coatings"       },
      { label: "Roof Inspections",     href: "/craft-catalog/roof-inspections"    },
    ],
  },

  /* ─── SLATE ROOFING ───────────────────────────────────────────────────── */
  "slate-roofing": {
    title: "Slate Roofing",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Slate is a natural roofing material that is fire-resistant, holds up
          exceptionally well to freeze-thaw cycles, and looks elegant for
          decades. Many historical buildings in New York have ornate slate roof
          designs — and more homeowners are choosing new slate installations so
          they can hand the roof down to the next generation.
        </p>
        <p>
          Skyward Roofing&rsquo;s crew is qualified and experienced in slate
          roof work, having provided repairs and full re-roofs for slate roofs
          across New York City.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (917) 979-8704", href: "tel:9179798704" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Does Slate Roofing Need Service?",
        content: (
          <>
            <p>
              Slate roofs are among the longest-lasting roofing systems
              available — a properly installed slate roof can last 100 years or
              more. But individual slates can crack, slip, or break over time,
              and the flashings and underlayment beneath them do have a finite
              lifespan. If you see broken or missing slates, water staining on
              ceilings, or deteriorating flashings, it&rsquo;s time for an
              inspection.
            </p>
            <p>
              Repair is almost always possible before full replacement becomes
              necessary. We&rsquo;ll assess the overall condition of the
              system and tell you honestly what the roof needs.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "Our Process",
        content: (
          <>
            <p>
              <strong>Step 1 — Detailed Inspection.</strong> We carefully
              inspect the slate field, ridgelines, valleys, and all flashings.
              Slate repair requires working around intact slates without
              causing additional breakage — our crew is trained to do this
              safely.
            </p>
            <p>
              <strong>Step 2 — Honest Assessment.</strong> We tell you
              exactly what the roof needs — replacement of specific broken
              slates, repointing of ridges, flashing replacement, or full
              re-roofing — and give you a clear written estimate.
            </p>
            <p>
              <strong>Step 3 — Careful Installation.</strong> Slate work
              requires the right tools, the right fasteners, and the right
              technique. We source matching slate where possible and install
              to manufacturer standards.
            </p>
            <p>
              <strong>Step 4 — Final Walkthrough.</strong> We inspect with
              you and document the completed work before closing out the job.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Residential Roofing",      href: "/craft-catalog/residential-roofing"     },
      { label: "Asphalt Shingle Roofing",  href: "/craft-catalog/asphalt-shingle-roofing" },
      { label: "Roof Inspections",         href: "/craft-catalog/roof-inspections"         },
      { label: "Chimney Services",         href: "/craft-catalog/chimney-services"         },
    ],
  },

  /* ─── ROOF INSPECTIONS ────────────────────────────────────────────────── */
  "roof-inspections": {
    title: "Roof Inspections & Free Estimates",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Skyward Roofing offers thorough roof inspections for any reason —
          post-storm damage assessment, periodic maintenance, insurance
          purposes, or due diligence before buying or selling a property. Our
          inspections are performed by senior team members who have worked on
          hundreds of roofs and know exactly where to look.
        </p>
        <p>
          Every inspection includes a detailed report on what we find, with
          photos, and a written estimate covering all repair or replacement
          options. We explore every avenue with you so you can make an
          informed decision. Free inspections, no obligation whatsoever.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (917) 979-8704", href: "tel:9179798704" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Should You Schedule a Roof Inspection?",
        content: (
          <>
            <p>
              We recommend scheduling an inspection after any significant storm,
              if you notice water staining on ceilings or walls, if your roof
              is approaching 15–20 years old, if you&rsquo;re buying or selling
              a property, or if another contractor has recommended repairs and
              you want an independent assessment.
            </p>
            <p>
              An annual or biannual inspection is also worthwhile for commercial
              properties and flat roofs, where minor issues can escalate quickly
              if left unaddressed. Catching a small flashing problem early is far
              less expensive than repairing the water damage it causes.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "What We Check",
        content: (
          <>
            <p>
              Our comprehensive inspections cover: debris and fungal growth;
              gutter and drain condition; roofing material condition (shingles,
              membrane, slate); flashing integrity around chimneys, vents, and
              pipe penetrations; interior ceiling and attic for water spots or
              moisture damage; underside of roof deck for mold or deterioration;
              and signs of pest intrusion (squirrels, birds, etc.).
            </p>
            <p>
              After the inspection we provide a full written report and
              estimate, and walk you through every finding. You&rsquo;ll have
              everything you need to make the right decision — with no pressure
              from us.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Residential Roofing",   href: "/craft-catalog/residential-roofing"  },
      { label: "Commercial Roofing",    href: "/craft-catalog/commercial-roofing"   },
      { label: "Flat Roofing",          href: "/craft-catalog/flat-roofing"         },
      { label: "Roof Coatings",         href: "/craft-catalog/roof-coatings"        },
    ],
  },

  /* ─── CHIMNEY SERVICES ────────────────────────────────────────────────── */
  "chimney-services": {
    title: "Chimney Services",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Chimneys are a common source of roof leaks — improperly installed
          flashing, deteriorating mortar, cracked crowns, and spalling brick
          all allow water to enter the roof system. Skyward Roofing offers
          chimney repair, reconstruction, and removal across all five NYC
          boroughs.
        </p>
        <p>
          We make sure your chimney looks great and is leak-free. If you want
          a chimney removed, we patch the hole properly so your roof is not
          compromised. Call us for a quote on any chimney work that needs
          attention.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (917) 979-8704", href: "tel:9179798704" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Chimney Service?",
        content: (
          <>
            <p>
              If you notice water staining on the ceiling or walls near the
              chimney, visible mortar gaps or crumbling around the chimney
              base, spalling brick on the chimney stack, or a cracked chimney
              crown, these are signs of active or imminent water intrusion.
              Chimney flashing — the metal where the chimney meets the
              roof — is one of the most common points of failure on any roof,
              and can often be repaired without touching the chimney itself.
            </p>
            <p>
              Don&rsquo;t ignore a chimney leak. Water infiltration at the
              chimney can damage interior framing, insulation, and drywall
              before it ever shows on the ceiling.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "Our Process",
        content: (
          <>
            <p>
              <strong>Step 1 — Inspection.</strong> We assess the chimney
              stack, crown, flashing, and surrounding roof surface for
              deterioration and signs of water infiltration.
            </p>
            <p>
              <strong>Step 2 — Written Estimate.</strong> We itemize exactly
              what needs to be done — flashing replacement, tuckpointing,
              crown repair, brick rebuilding, or full removal — and give you
              a clear price.
            </p>
            <p>
              <strong>Step 3 — Repair or Reconstruction.</strong> Our crew
              works carefully to restore the chimney and its surrounding
              roof surface to a watertight, structurally sound condition.
            </p>
            <p>
              <strong>Step 4 — Final Inspection.</strong> We confirm everything
              is properly sealed and document the completed work before
              finishing the job.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Residential Roofing",     href: "/craft-catalog/residential-roofing"    },
      { label: "Asphalt Shingle Roofing", href: "/craft-catalog/asphalt-shingle-roofing"},
      { label: "Roof Inspections",        href: "/craft-catalog/roof-inspections"       },
      { label: "Gutter Services",         href: "/craft-catalog/gutter-services"        },
    ],
  },

  /* ─── GUTTER SERVICES ─────────────────────────────────────────────────── */
  "gutter-services": {
    title: "Gutter Services",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          When heavy rains come, gutters are the first line of defense —
          redirecting water away from your roof edge, foundation, and siding.
          Without functioning gutters, rainwater can pool around your
          foundation, cause basement leaks, erode landscaping, and splash
          dirt against the building.
        </p>
        <p>
          Skyward Roofing installs and repairs gutters and downspouts, and
          inspects them to make sure they are properly sized, clog-free, and
          functioning correctly for your building.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (917) 979-8704", href: "tel:9179798704" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Gutter Service?",
        content: (
          <>
            <p>
              If water is overflowing from your gutters during rain (even
              without visible clogs), the gutters may be undersized or have
              improper pitch. Sagging sections, visible rust, separated
              joints, and downspouts that dump water too close to the
              foundation are all worth addressing.
            </p>
            <p>
              Gutters in good shape can usually be worked around during a
              roof replacement without damage. Should the gutters need some
              repairs, we can take care of both at the same time — saving you
              a separate visit.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "Our Process",
        content: (
          <>
            <p>
              <strong>Step 1 — Assessment.</strong> We inspect existing
              gutters and downspouts for condition, sizing, and drainage
              angle. We identify any sections that need repair or replacement.
            </p>
            <p>
              <strong>Step 2 — Written Estimate.</strong> We provide an
              itemized estimate for repair or new installation, and explain
              what will work best for your building.
            </p>
            <p>
              <strong>Step 3 — Installation or Repair.</strong> We install
              or repair gutters and downspouts to proper pitch, with secure
              hangers and correctly routed downspouts away from the
              foundation.
            </p>
            <p>
              <strong>Step 4 — Test &amp; Inspection.</strong> We test the
              drainage with water and confirm everything is functioning before
              we leave.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Residential Roofing",   href: "/craft-catalog/residential-roofing"  },
      { label: "Roof Inspections",      href: "/craft-catalog/roof-inspections"     },
      { label: "Chimney Services",      href: "/craft-catalog/chimney-services"     },
      { label: "Roof Coatings",         href: "/craft-catalog/roof-coatings"        },
    ],
  },

  /* ─── ROOF COATINGS & WATERPROOFING ──────────────────────────────────── */
  "roof-coatings": {
    title: "Roof Coatings & Waterproofing",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Roofs of many types can benefit from coating or painting. Metal roofs
          may need touch-ups to prevent corrosion and rust. TPO roofs benefit
          from coatings that keep them flexible and UV resistant. EPDM and
          built-up roofs can be coated with reflective coatings that improve
          insulation value. Elastomeric coatings seal fastener penetrations,
          stop leaks around flashing, and extend the life of your roof.
        </p>
        <p>
          We also offer basement waterproofing services — interior and exterior
          coatings are an important tool in reducing moisture and water
          infiltration in basements throughout New York.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (917) 979-8704", href: "tel:9179798704" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Is Roof Coating the Right Call?",
        content: (
          <>
            <p>
              Roof coating is a smart option when a roof system is aging but
              not yet at the end of its life. A quality elastomeric or
              reflective coating can add years of service, reduce energy costs
              by reflecting UV radiation, and seal minor cracks and
              penetrations before they become significant leaks.
            </p>
            <p>
              Coating is also frequently used on commercial flat roofs as part
              of a maintenance program — extending the life of a membrane
              system without the cost and disruption of a full replacement. It
              is not a substitute for replacing a roof that has failed, but for
              the right candidate it delivers excellent value.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "Our Process",
        content: (
          <>
            <p>
              <strong>Step 1 — Roof Assessment.</strong> We inspect the
              surface to confirm it&rsquo;s a good candidate for coating.
              A roof with significant structural issues or failed membrane
              needs repair or replacement first.
            </p>
            <p>
              <strong>Step 2 — Surface Preparation.</strong> Proper prep is
              critical — we clean the surface, address any failed seams or
              fasteners, and prime where needed before applying the coating.
            </p>
            <p>
              <strong>Step 3 — Coating Application.</strong> We carefully
              apply coating to prevent overspray and ensure even, complete
              coverage across every surface. We use the highest quality
              materials specified for your roof type.
            </p>
            <p>
              <strong>Step 4 — Inspection &amp; Documentation.</strong> We
              inspect the completed application for coverage and provide
              documentation for your maintenance records.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Flat Roofing",              href: "/craft-catalog/flat-roofing"             },
      { label: "Commercial Roofing",        href: "/craft-catalog/commercial-roofing"       },
      { label: "Roof Inspections",          href: "/craft-catalog/roof-inspections"         },
      { label: "Waterproofing Basements",   href: "/craft-catalog/waterproofing-basements"  },
    ],
  },

  /* ─── WATERPROOFING BASEMENTS ─────────────────────────────────────────── */
  "waterproofing-basements": {
    title: "Waterproofing Basements",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Basement water infiltration is one of the most common — and most
          damaging — problems homeowners in New York City face. Whether you
          have visible seepage through block or poured concrete walls, efflorescence
          (white mineral deposits), dampness after rain, or a chronic musty odor,
          Skyward Roofing provides interior and exterior basement waterproofing
          solutions that address the root cause.
        </p>
        <p>
          We apply coatings and sealants rated for below-grade applications that
          stop moisture migration from the outside in. Call us at{" "}
          <a href="tel:9179798704">(917) 979-8704</a> for a free inspection and
          written estimate.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (917) 979-8704", href: "tel:9179798704" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Signs Your Basement Needs Waterproofing",
        content: (
          <>
            <p>
              Water in a basement rarely announces itself dramatically. More often
              it shows up as damp walls after heavy rain, a persistent musty smell,
              white chalky deposits on concrete or block, rust stains around
              floor drains, or paint that peels and bubbles on below-grade walls.
              Left unaddressed, basement moisture leads to mold growth, damaged
              framing, deteriorated insulation, and reduced property value.
            </p>
            <p>
              If your basement has experienced any of these symptoms — even
              intermittently — a waterproofing assessment is worthwhile. Many
              moisture problems can be stopped with the right coating system
              before they require expensive structural repair.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "Our Process",
        content: (
          <>
            <p>
              <strong>Step 1 — Free Inspection.</strong> We assess the basement
              walls, floor, and any visible cracks or joint failures to determine
              the source and extent of moisture intrusion.
            </p>
            <p>
              <strong>Step 2 — Written Estimate.</strong> We provide a clear,
              itemized estimate before any work begins. No surprises.
            </p>
            <p>
              <strong>Step 3 — Surface Preparation.</strong> We clean the
              affected surfaces, address any active cracks with hydraulic cement
              or appropriate filler, and prepare the substrate for proper
              waterproofing adhesion.
            </p>
            <p>
              <strong>Step 4 — Waterproofing Application.</strong> We apply
              a professional-grade waterproofing membrane or coating rated for
              below-grade use, ensuring complete coverage across walls and
              floor-wall joints where infiltration most commonly occurs.
            </p>
            <p>
              <strong>Step 5 — Final Inspection.</strong> We walk you through
              the completed work and provide guidance on any drainage or grading
              improvements that would complement the waterproofing.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Roof Coatings & Waterproofing", href: "/craft-catalog/roof-coatings"          },
      { label: "Residential Roofing",           href: "/craft-catalog/residential-roofing"    },
      { label: "Roof Inspections",              href: "/craft-catalog/roof-inspections"       },
      { label: "Gutter Services",               href: "/craft-catalog/gutter-services"        },
    ],
  },
};
