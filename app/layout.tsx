import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@/styles/homepage.css";
import "@/styles/contact.css";
import "@/styles/channel.css";
import "@/styles/faq.css";
import "@/styles/craft-catalog.css";
import "@/styles/programs.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});

const SITE_URL = "https://skywardroofing.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Skyward Roofing — NYC Roofing Contractors",
    template: "%s | Skyward Roofing",
  },
  description:
    "Licensed roofing contractors serving all five NYC boroughs and Westchester. Residential & commercial roofing, flat roofs, repairs, and free inspections. Call (917) 979-8704.",
  keywords: [
    "roofing contractor NYC",
    "roof repair New York",
    "flat roofing NYC",
    "residential roofing Brooklyn",
    "commercial roofing NYC",
    "asphalt shingle roofing",
    "roof replacement NYC",
    "chimney repair New York",
    "gutter services NYC",
    "free roof inspection",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Skyward Roofing",
    title: "Skyward Roofing — NYC Roofing Contractors",
    description:
      "Licensed roofing contractors serving all five NYC boroughs and Westchester. Residential & commercial roofing, flat roofs, repairs, and free inspections.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Skyward Roofing — NYC Roofing Contractors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyward Roofing — NYC Roofing Contractors",
    description:
      "Licensed roofing contractors serving all five NYC boroughs. Free inspections. Call (917) 979-8704.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Skyward Roofing",
  url: SITE_URL,
  telephone: "+19179798704",
  description:
    "Licensed roofing contractors serving all five NYC boroughs and the surrounding metro area. Specializing in residential and commercial roofing, flat roofs, repairs, replacements, and free inspections.",
  areaServed: [
    { "@type": "City", name: "New York City" },
    { "@type": "Borough", name: "Brooklyn" },
    { "@type": "Borough", name: "Queens" },
    { "@type": "Borough", name: "The Bronx" },
    { "@type": "Borough", name: "Manhattan" },
    { "@type": "Borough", name: "Staten Island" },
    { "@type": "City", name: "Yonkers" },
  ],
  serviceType: [
    "Residential Roofing",
    "Commercial Roofing",
    "Flat Roofing",
    "Roof Repair",
    "Roof Replacement",
    "Roof Inspection",
    "Chimney Services",
    "Gutter Services",
  ],
  priceRange: "$$",
  paymentAccepted: "Cash, Check, Credit Card",
  sameAs: [
    "https://www.facebook.com/skywardroofing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
