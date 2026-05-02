import NumberStatsItem from "./NumberStatsItem";
import VapeImage from "./VapeImage";

const stats = [
  {
    stat: "50+",
    label: "Combined Years of Family Roofing Experience in NYC",
    linkText: "About Us",
    href: "/explore/skyward-roofing",
  },
  {
    stat: "20-yr",
    label: "Material Warranty Available on Qualifying Installations",
    linkText: "Our Services",
    href: "/craft-catalog",
  },
  {
    stat: "100%",
    label: "Free Inspections — No Obligation, Every Time",
    linkText: "Schedule Now",
    href: "/contact-us",
  },
];

export default function Difference() {
  return (
    <div className="front-difference py-20 md:py-48 border-none">
      <div className="inner inner--slim-1172 flex flex-col gap-0 md:gap-10">

        {/* Columns 1 */}
        <div className="flex flex-col-reverse md:flex-row gap-10 items-start">

          {/* Left: heading + first stat */}
          <div className="flex-1">
            <div className="sub-heading">Why Skyward Roofing</div>
            <h2 className="h1 mb-[3rem]">
              Third-Generation Roofers Who Stand Behind Every Job
            </h2>
            <div className="hidden md:flex flex-wrap gap-[3rem] py-[2rem]">
              <NumberStatsItem item={stats[0]} />
            </div>
          </div>

          {/* Right: photo */}
          <div className="w-full md:w-[54%] shrink-0 relative z-20">
            <div className="front-difference__image">
              {/* [TODO: Replace with a Skyward Roofing crew or completed job photo] */}
              <VapeImage src="/images/IMG_9750-1024x683.jpg" />
            </div>
          </div>

        </div>

        {/* Columns 2: remaining stats */}
        <div className={[
          "flex flex-col justify-center gap-6",
          "md:flex-row md:items-center"
        ].join(" ")}>
          <div className="block md:hidden">
            <NumberStatsItem item={stats[0]} />
          </div>
          {stats.slice(1).map((item) => (
            <NumberStatsItem key={item.stat} item={item} />
          ))}
        </div>

      </div>
    </div>
  );
}
