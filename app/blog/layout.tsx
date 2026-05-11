import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roofing Tips & Resources — Skyward Roofing Blog",
  description:
    "Expert roofing advice from the Skyward team — how to spot damage, when to repair vs. replace, flat roof maintenance, NYC-specific insights, and more.",
  alternates: {
    canonical: "https://skywardroofing.com/blog",
  },
  openGraph: {
    title: "Roofing Tips & Resources — Skyward Roofing Blog",
    description:
      "Expert roofing advice from the Skyward team — NYC-specific tips, repair vs. replace guides, and more.",
    url: "https://skywardroofing.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
