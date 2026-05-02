import type { ReactNode } from "react";

export type NavItem = { href: string; label: string };

export type ProgramItem = {
  title: string;
  content: ReactNode;
  learnMoreHref: string;
};

export type PartnerItem = {
  href: string;
  imgSrc: string;
  alt: string;
};

export type ProgramsPageData = {
  navItems: NavItem[];
  hero: {
    bgImage: string;
    title: string;
    description: ReactNode;
    breadcrumbParentLabel: string;
    breadcrumbParentHref: string;
  };
  overview: {
    content: ReactNode;
    quickLinks: { label: string; href: string; icon: string }[];
  };
  programs: ProgramItem[];
  partners: PartnerItem[];
};

export const programsData: ProgramsPageData = {
  navItems: [
    { href: "#flex-module-3", label: "Service Details" },
    { href: "#flex-module-4", label: "Service Areas"   },
  ],

  hero: {
    bgImage: "/images/IMG_9750-1024x683.jpg",
    // [TODO: Replace hero bgImage with a Skyward Roofing job photo]
    title: "Our Roofing Services",
    description: (
      <p>
        Skyward Roofing handles all types of roofing for residential,
        commercial, and industrial properties across all five NYC boroughs,
        Yonkers, and surrounding areas — from a single shingle repair to a
        full system replacement.
      </p>
    ),
    breadcrumbParentLabel: "Services",
    breadcrumbParentHref: "/craft-catalog/",
  },

  overview: {
    content: (
      <>
        <p>
          Every job starts with a free inspection by an experienced estimator
          who has worked on hundreds of roofs. We assess the full system,
          document everything with photos, and give you a detailed written
          estimate with all your options — no pressure, no obligation.
        </p>
        <p>
          We are fully licensed, bonded, and insured in New York. Our crews
          are trained on every roofing system we install, and we don&rsquo;t
          take shortcuts. Minimum 20-year material warranty available on all
          qualifying installations. Call{" "}
          <a href="tel:9179798704">(917) 979-8704</a> to schedule your free
          inspection.
        </p>
      </>
    ),
    quickLinks: [
      { label: "View All Services", href: "/craft-catalog/", icon: "icon-books" },
    ],
  },

  programs: [
    {
      title: "Residential Roofing",
      content: (
        <p>
          Whether you have a single-family home, brownstone, or multi-family
          building, we provide competitive pricing and long-lasting roofs. Our
          roofers handle everything from a small leak investigation to a
          complete tear-off and new installation — and you always deal
          directly with a member of our team. Free estimates, every time.
        </p>
      ),
      learnMoreHref: "/craft-catalog/residential-roofing",
    },
    {
      title: "Commercial & Industrial Roofing",
      content: (
        <p>
          Our commercial crew is trained on all commercial roof systems and
          complies with NYC local codes and guidelines. We work on both flat
          and sloped commercial roofs, from retail and office buildings to
          warehouses and industrial facilities. We bring budget-conscious
          solutions and minimal operational disruption to every commercial
          project.
        </p>
      ),
      learnMoreHref: "/craft-catalog/commercial-roofing",
    },
    {
      title: "Flat Roofing — TPO, EPDM & SPF",
      content: (
        <p>
          We install and repair all flat roof systems — TPO single-ply
          membranes (heat-welded seams), EPDM rubber roofing
          (adhesive-secured), SPF spray polyurethane foam (monolithic barrier
          with UV top coat), and built-up roofing. We help you choose the
          right system for your building type, performance needs, and budget.
        </p>
      ),
      learnMoreHref: "/craft-catalog/flat-roofing",
    },
    {
      title: "Asphalt Shingle Roofing",
      content: (
        <p>
          The most common residential roofing material in New York — and one
          we install properly, every time. That means quality underlayment, new
          flashings, new drip edge, and the manufacturer-specified nail count
          per shingle. No shortcuts. Minimum 20-year material warranty
          available. Free estimates on repairs and replacements.
        </p>
      ),
      learnMoreHref: "/craft-catalog/asphalt-shingle-roofing",
    },
    {
      title: "Roof Inspections & Free Estimates",
      content: (
        <p>
          Our free roof inspections are thorough — performed by senior team
          members who know exactly where roofs fail. We check roofing
          material condition, flashings, gutters, decking, interior water
          stains, and signs of pest intrusion. You get a full written report
          with photos and a detailed estimate covering all your options.
        </p>
      ),
      learnMoreHref: "/craft-catalog/roof-inspections",
    },
    {
      title: "Chimney Services",
      content: (
        <p>
          Chimneys are one of the most common sources of roof leaks. Failed
          flashing, deteriorating mortar, cracked crowns, and spalling brick
          all allow water into the roof system. We handle chimney repair,
          reconstruction, and full removal throughout all five NYC boroughs.
          If a chimney is removed, we properly patch the roof opening.
        </p>
      ),
      learnMoreHref: "/craft-catalog/chimney-services",
    },
    {
      title: "Gutter Services",
      content: (
        <p>
          Properly functioning gutters protect your foundation, siding, and
          landscaping from water damage. We install and repair gutters and
          downspouts, inspect for proper sizing and drainage pitch, and make
          sure everything flows correctly before we leave. Gutter work can
          often be combined with a roof replacement to save you a separate
          service visit.
        </p>
      ),
      learnMoreHref: "/craft-catalog/gutter-services",
    },
    {
      title: "Roof Coatings & Waterproofing",
      content: (
        <p>
          Elastomeric and reflective coatings extend roof life, reduce energy
          costs, and seal minor cracks and penetrations before they become
          major leaks. We apply coatings to metal, TPO, EPDM, and built-up
          roofs using the highest quality materials — with careful prep and
          even coverage on every surface. Basement waterproofing coatings also
          available.
        </p>
      ),
      learnMoreHref: "/craft-catalog/roof-coatings",
    },
  ],

  // No external partners for trade clients
  partners: [],
};
