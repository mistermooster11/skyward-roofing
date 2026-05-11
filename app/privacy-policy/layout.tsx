import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Skyward Roofing",
  description: "Privacy policy for Skyward Roofing.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://skywardroofing.com/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
