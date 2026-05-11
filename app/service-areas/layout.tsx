import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas — Skyward Roofing",
  description:
    "Skyward Roofing serves all five NYC boroughs and the surrounding metro area, including Brooklyn, Queens, The Bronx, Manhattan, Staten Island, and Westchester. Free inspections available.",
  alternates: {
    canonical: "https://skywardroofing.com/service-areas",
  },
  openGraph: {
    title: "Service Areas — Skyward Roofing",
    description:
      "Skyward Roofing serves all five NYC boroughs and the surrounding metro area. Free roof inspections available.",
    url: "https://skywardroofing.com/service-areas",
  },
};

export default function ServiceAreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
