
type AccordionStep = { label: string; body: string };

export const accordionItems = [
  {
    id: "accordion-0",
    title: "Residential Roofing",
    image: "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/just-finished-roof-skyward-roofing-ny-orig.jpg",
    description:
      "From single-family homes to multi-family buildings across all five boroughs, we handle full roof replacements, storm damage repairs, and everything in between — done right the first time.",
    learnHref: "/craft-catalog/residential-roofing",
    steps: [
      { label: "Free Inspection", body: "A senior estimator inspects your entire roof system — shingles, underlayment, flashings, gutters, and any interior signs of moisture. Everything is documented with photos." },
      { label: "Written Estimate", body: "We present all your options — repair vs. replacement, material choices, and cost ranges — so you can make an informed decision on your timeline and budget. No pressure." },
      { label: "Professional Install", body: "Our trained crews install with quality underlayment, correct fastener counts, and proper flashings. No shortcuts, no day laborers." },
      { label: "Final Walkthrough", body: "We walk you through the completed work, confirm all penetrations are sealed, and clean the work area before we leave." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-1",
    title: "Flat Roofing — TPO, EPDM & SPF",
    image: "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/flat-roofing-service-skyward-roofing-nyc-orig.jpg",
    description:
      "Flat roofs require specialized systems and skilled installation. We work with TPO, EPDM, and spray polyurethane foam on both residential and commercial properties throughout NYC.",
    learnHref: "/craft-catalog/flat-roofing",
    steps: [
      { label: "Assess the System", body: "We inspect the existing membrane, drainage points, and flashings to determine whether repair or full replacement is the right call." },
      { label: "Material Recommendation", body: "We recommend the right membrane system for your building type, roof load, and budget — TPO for most commercial roofs, EPDM for flexibility, SPF for seamless coverage." },
      { label: "Install & Seal", body: "All seams are heat-welded or adhered per manufacturer spec. Flashings are properly integrated at every penetration, parapet, and drain." },
      { label: "Drainage Confirmation", body: "We verify all drains are clear and the roof pitches correctly to prevent ponding before job close-out." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-2",
    title: "Roof Inspections & Free Estimates",
    image: "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/editor/new-york-skyline-skyward-roofing-bronx-ny.jpg",
    description:
      "Whether you're buying a property, dealing with an insurance claim, or just noticed something off, we provide thorough roof inspections and honest, no-pressure estimates across the NYC metro area.",
    learnHref: "/craft-catalog/roof-inspections",
    steps: [
      { label: "Schedule", body: "Call or contact us online. We schedule around you and confirm before we arrive — no waiting around." },
      { label: "Full Roof Inspection", body: "We assess every component: shingles or membrane, flashings, gutters, chimney, skylights, and any visible signs of moisture damage inside." },
      { label: "Photo Documentation", body: "Every issue we find is photographed and noted. You get a clear picture of what's wrong and where." },
      { label: "Honest Recommendation", body: "We tell you exactly what needs to be done and what can wait. If nothing needs immediate attention, we'll tell you that too." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-3",
    title: "Chimney Services",
    image: "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/bobbranton-image2-orig-highqualitymaterialsservice_orig.jpeg",
    description:
      "Chimney flashing failures are one of the most common sources of roof leaks in NYC homes. We repair and re-flash chimneys correctly so the fix lasts — not just until the next heavy rain.",
    learnHref: "/craft-catalog/chimney-services",
    steps: [
      { label: "Diagnose the Source", body: "We inspect the chimney flashing, crown, cap, and mortar joints to pinpoint exactly where the water is entering." },
      { label: "Quote Upfront", body: "You get a clear, written price before any work begins — no surprise charges when the scaffolding comes down." },
      { label: "Repair & Re-Flash", body: "We remove failed flashing, clean the masonry, and install new step and counter flashing using proper lap and sealant techniques built to last." },
      { label: "Water Test", body: "We run a water test before leaving to confirm the repair is fully sealed. If it's not right, we fix it before we go." },
    ] as AccordionStep[],
  },
];
