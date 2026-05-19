import type { ChannelPageData } from "@/components/custom/channel/types";

const skywardRoofing: ChannelPageData = {
  slug: "skyward-roofing",

  navItems: [
    { href: "#channel",           label: "About Us"          },
    { href: "#helpful_resources", label: "Quick Links"       },
    { href: "#crafts",            label: "Our Services"      },
    { href: "#testimonials",      label: "Testimonials"      },
    { href: "#flex_feature",      label: "Free Inspection"   },
    { href: "#get_in_touch",      label: "Get in Touch"      },
  ],

  hero: {
    title:           "NYC Roofing Specialists",
    breadcrumbLabel: "About Us",
    imageBg:
      "url(https://www.skywardroofing.com/uploads/1/1/6/0/116005231/editor/new-york-skyline-skyward-roofing-bronx-ny.jpg) no-repeat center center / cover, #101d2b",
    description: (
      <p>
        Skyward Roofing is a third-generation, family-owned roofing company
        serving the Bronx, Brooklyn, Manhattan, Queens, Staten Island, and
        Yonkers. With over 50 combined years of experience, we install,
        repair, and replace all types of roofs — and you always talk directly
        with a member of our team.
      </p>
    ),
  },

  learnMore: {
    title: "Built on Three Generations of Roofing",
    content: (
      <>
        <p>
          Skyward Roofing was started by our grandfather. Our father learned
          the trade from him, and we learned from both of them. Every job we
          do carries the weight of that family reputation — which means every
          job is done with quality materials, properly installed, at a fair
          price.
        </p>

        <h5>Locally Owned &amp; Operated</h5>
        <p>
          We&rsquo;re a locally owned and operated roofing company in NYC.
          When you call us, you talk directly with a member of our team —
          not a call center, not a dispatcher. We take pride in personal
          service and we take every project seriously, whether it&rsquo;s a
          small repair or a full roof replacement.
        </p>

        <h5>Licensed, Bonded &amp; Fully Insured</h5>
        <p>
          We are licensed, bonded, and insured in the state of New York.
          Being licensed means we&rsquo;ve passed state safety and
          construction law tests. Being bonded means funds are secured in
          case of a project dispute. Being insured means if a worker is
          injured on the job, they apply to us — not your insurance. Our NYC
          license number is 2100010-DCA.
        </p>

        <h5>Honest Assessments — Every Time</h5>
        <p>
          We don&rsquo;t suggest roof replacements when a repair will do,
          and we won&rsquo;t suggest a repair if the entire roof is actually
          about to fail. We walk through all the options with you so you can
          make the best decision for your budget. Our estimates are
          performed by senior team members who have worked on hundreds of
          roofs and know exactly where to look for problems.
        </p>

        <h5>Over 50 Years of Combined Experience</h5>
        <p>
          After more than two decades of actual field work — and over 50
          combined years as a family — we have the keen eye and
          resourcefulness to find leaks quickly and select the most
          effective repair. We work on all roof types: flat, pitched,
          shingle, metal, slate, tile, and more.
        </p>
      </>
    ),
  },

  resources: {
    title: "Quick Links",
    resources: [
      { title: "Call Us — (917) 979-8704",         href: "tel:9179798704",    icon: "icon-message" },
      { title: "Contact Us Online",                 href: "/contact-us",       icon: "icon-mail"    },
      { title: "Our Services",                      href: "/craft-catalog",    icon: "icon-link"    },
      { title: "Service Areas",                     href: "/service-areas",    icon: "icon-info"    },
      { title: "Frequently Asked Questions",        href: "/general-faqs",     icon: "icon-link"    },
    ],
  },

  crafts: {
    description: (
      <p>
        We handle all types of roofing for residential, commercial, and
        industrial properties across all five NYC boroughs and Yonkers. From
        a single missing shingle to a full roof replacement — we bring the
        right crew and the right materials every time.
      </p>
    ),
    craftLinks: [
      { label: "Residential Roofing",       href: "/craft-catalog/residential-roofing"      },
      { label: "Commercial Roofing",        href: "/craft-catalog/commercial-roofing"        },
      { label: "Flat Roofing",              href: "/craft-catalog/flat-roofing"              },
      { label: "Asphalt Shingle Roofing",   href: "/craft-catalog/asphalt-shingle-roofing"  },
      { label: "Roof Inspections",          href: "/craft-catalog/roof-inspections"          },
      { label: "Chimney Services",          href: "/craft-catalog/chimney-services"          },
    ],
  },

  testimonials: {
    videos: [],
    quote: {
      text:
        "Our experience with Skyward Roofing was flawless. Bob explained everything we needed, knocked out the project in no time and inspected his crew's work throughout the process. The price was fantastic as well. We have referred them to several other business owners and will continue to do so.",
      name:     "Brice & Jamie King",
      position: "NYC Property Owners",
    },
  },

  flexFeature: {
    imageSrc: "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/img-4442-1.jpeg",
    title:       "Free Roof Inspection — No Obligation",
    body: (
      <p>
        Not sure if you need a repair or a full replacement? We&rsquo;ll
        send an experienced estimator to your property for a thorough,
        free inspection. We document everything, explain all your options,
        and give you a written estimate — no pressure, no obligation. Call{" "}
        <strong>(917) 979-8704</strong> to schedule.
      </p>
    ),
    buttonLabel: "Call Now",
    buttonHref:  "tel:9179798704",
  },

  getInTouch: {
    body: (
      <p>
        Ready to schedule an inspection or get a free estimate? Call us at{" "}
        <strong>(917) 979-8704</strong> or use our online contact form and a
        member of our team will get back to you quickly.
      </p>
    ),
    buttonLabel: "Contact Us",
    buttonHref:  "/contact-us",
  },
};

export default skywardRoofing;
