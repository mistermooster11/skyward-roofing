import { notFound } from "next/navigation";
import CraftHero       from "@/components/custom/craft-catalog/CraftHero";
import ChannelSidebar  from "@/components/custom/channel/ChannelSidebar";
import CraftOverview   from "@/components/custom/craft-catalog/CraftOverview";
import RelatedCrafts   from "@/components/custom/craft-catalog/RelatedCrafts";
import { servicePages } from "@/data/craft-catalog/service-pages";

/** Per-service hero background images from skywardroofing.com */
const SERVICE_HERO_IMAGES: Record<string, string> = {
  "residential-roofing":
    "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/just-finished-roof-skyward-roofing-ny-orig.jpg",
  "commercial-roofing":
    "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/commercial-flat-roof-install-skyward-roofing-nyc-orig.jpg",
  "flat-roofing":
    "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/flat-roofing-service-skyward-roofing-nyc-orig.jpg",
  "asphalt-shingle-roofing":
    "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/skyward-roofing-service-nyc-orig.jpg",
  "metal-roofing":
    "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/dji-fly-20250506-141730-527-1746555462466-photo.jpg",
  "slate-roofing":
    "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/img-4442-1.jpeg",
  "roof-inspections":
    "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/editor/new-york-skyline-skyward-roofing-bronx-ny.jpg",
  "chimney-services":
    "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/bobbranton-image2-orig-highqualitymaterialsservice_orig.jpeg",
  "gutter-services":
    "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/skyward-rooofing-service-example-nyc-orig_orig.jpg",
  "roof-coatings":
    "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/skywardroofingroofcoatings.png",
  "waterproofing-basements":
    "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/commercial-flat-roof-install-skyward-roofing-nyc-orig.jpg",
};
const FALLBACK_BG =
  "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/editor/new-york-skyline-skyward-roofing-bronx-ny.jpg";

/* Pre-render all known service slugs at build time */
export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = servicePages[slug];
  if (!data) return {};
  return {
    title: `${data.title} — Skyward Roofing`,
    description: `Professional ${data.title.toLowerCase()} services across New York City and Westchester. Licensed, insured, free inspections available. Call (917) 979-8704.`,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = servicePages[slug];
  if (!data) notFound();

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <CraftHero
        title={data.title}
        bgImage={SERVICE_HERO_IMAGES[slug] ?? FALLBACK_BG}
        breadcrumbs={[
          { label: "Services", href: "/craft-catalog" },
          { label: data.title },
        ]}
      />

      <div className="channel-wrap">
        <div className="inner">
          <ChannelSidebar navItems={data.navItems} />

          <div className="channel-container">

            {/* ── Overview ─────────────────────────────────────────────── */}
            <div id="overview">
              <CraftOverview
                overviewContent={data.overviewContent}
                quickLinks={data.overviewQuickLinks}
              />
            </div>

            {/* ── Middle sections ──────────────────────────────────────── */}
            {data.sections.map((section) => (
              <div key={section.id} id={section.id} className="section-page">
                <div className="content-block">
                  <div className="inner inner--slim-1172 cleared">
                    <h2 className="h3 fadeInUpS wow is-visible">
                      {section.heading}
                    </h2>
                    <div className="cleared">
                      <div className="content-entry p2 fadeInUpS wow is-visible">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* ── CTA banner ───────────────────────────────────────────── */}
            <div className="banner-craft ia-bg-sky fadeInUp wow is-visible">
              <div className="inner">
                <div className="content-entry p3">
                  <p>
                    <strong>Ready to get started?</strong>{" "}
                    Call{" "}
                    <a href="tel:9179798704">(917) 979-8704</a>{" "}
                    for a free inspection and written estimate, or{" "}
                    <a href="/contact-us">send us a message online</a>.
                    We assess your roof honestly — no pressure, no surprises.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Related Services ─────────────────────────────────────── */}
            <div id="related_services">
            <RelatedCrafts
              description={
                <p>
                  Skyward Roofing handles every type of roofing project across
                  all five NYC boroughs and Westchester County. Explore our
                  other services below.
                </p>
              }
              crafts={data.relatedServices}
            />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
