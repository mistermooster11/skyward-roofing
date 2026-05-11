import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Skyward Roofing",
  description:
    "Answers to the most common roofing questions from NYC homeowners and property owners. Repairs, replacements, flat roofs, inspections, and more.",
  alternates: {
    canonical: "https://skywardroofing.com/general-faqs",
  },
  openGraph: {
    title: "Frequently Asked Questions — Skyward Roofing",
    description:
      "Answers to the most common roofing questions from NYC homeowners and property owners.",
    url: "https://skywardroofing.com/general-faqs",
  },
};

export default function GeneralFaqsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
