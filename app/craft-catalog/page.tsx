import CraftCatalogHero from "@/components/custom/craft-catalog/CraftCatalogHero";
import CraftCatalogClient from "@/components/custom/craft-catalog/CraftCatalogClient";

export const metadata = {
  title: "Our Services – Skyward Roofing",
  description:
    "Skyward Roofing offers residential and commercial roofing services across all five boroughs and the NYC metro area. From asphalt shingles to flat roofing systems — free inspections, written estimates, no pressure.",
};

export default function CraftCatalogPage() {
  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <CraftCatalogHero />
      <CraftCatalogClient />
    </main>
  );
}
