import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Skyward Roofing — Free Roof Inspection",
  description:
    "Get in touch with Skyward Roofing. Request a free roof inspection, ask about a repair or replacement, or call us directly at (917) 979-8704. Serving all five NYC boroughs.",
  alternates: {
    canonical: "https://skywardroofing.com/contact-us",
  },
  openGraph: {
    title: "Contact Skyward Roofing — Free Roof Inspection",
    description:
      "Request a free roof inspection or call (917) 979-8704. Serving all five NYC boroughs.",
    url: "https://skywardroofing.com/contact-us",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
