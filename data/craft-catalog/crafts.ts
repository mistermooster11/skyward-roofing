export type CraftItem = {
  slug:        string;
  title:       string;
  categories:  string[];
  disciplines: string[];
  hasAssessment:   boolean;
  hasTranslation:  boolean;
};

export const crafts: CraftItem[] = [
  {
    slug: "residential-roofing",
    title: "Residential Roofing",
    categories: ["Residential"],
    disciplines: ["Repairs", "Replacements"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "commercial-roofing",
    title: "Commercial & Industrial Roofing",
    categories: ["Commercial"],
    disciplines: ["Flat Roofs", "Repairs", "Replacements"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "flat-roofing",
    title: "Flat Roofing — TPO, EPDM & SPF",
    categories: ["Residential", "Commercial"],
    disciplines: ["Flat Roofs"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "asphalt-shingle-roofing",
    title: "Asphalt Shingle Roofing",
    categories: ["Residential"],
    disciplines: ["Pitched Roofs", "Repairs", "Replacements"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "metal-roofing",
    title: "Metal Roofing",
    categories: ["Residential", "Commercial"],
    disciplines: ["Pitched Roofs", "Flat Roofs"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "slate-roofing",
    title: "Slate Roofing",
    categories: ["Residential"],
    disciplines: ["Pitched Roofs", "Repairs", "Replacements"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "roof-inspections",
    title: "Roof Inspections & Free Estimates",
    categories: ["Residential", "Commercial"],
    disciplines: ["Inspections", "Maintenance"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "chimney-services",
    title: "Chimney Services",
    categories: ["Residential", "Commercial"],
    disciplines: ["Repairs"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "gutter-services",
    title: "Gutter Services",
    categories: ["Residential", "Commercial"],
    disciplines: ["Repairs", "Maintenance"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "roof-coatings",
    title: "Roof Coatings & Waterproofing",
    categories: ["Residential", "Commercial"],
    disciplines: ["Flat Roofs", "Maintenance"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "waterproofing-basements",
    title: "Waterproofing Basements",
    categories: ["Residential", "Commercial"],
    disciplines: ["Repairs", "Maintenance"],
    hasAssessment: false,
    hasTranslation: false,
  },
];

export const CATEGORIES = [
  "All Categories",
  "Residential",
  "Commercial",
] as const;

export const DISCIPLINES = [
  "All Disciplines",
  "Flat Roofs",
  "Pitched Roofs",
  "Repairs",
  "Replacements",
  "Inspections",
  "Maintenance",
] as const;
