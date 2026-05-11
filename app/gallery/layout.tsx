import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Gallery — Skyward Roofing",
  description:
    "Browse Skyward Roofing's completed projects across NYC — residential replacements, flat roof systems, commercial builds, chimney repairs, and more.",
  alternates: {
    canonical: "https://skywardroofing.com/gallery",
  },
  openGraph: {
    title: "Project Gallery — Skyward Roofing",
    description:
      "Browse completed roofing projects across NYC — residential, commercial, flat roofs, and more.",
    url: "https://skywardroofing.com/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
