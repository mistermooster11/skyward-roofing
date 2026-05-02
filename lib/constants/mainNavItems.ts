export type MainNavItem = {
  label: string;
  href?: string | null;
  external?: boolean;
};

export const mainNavItems: MainNavItem[] = [
  { label: "Home",          href: "/"              },
  { label: "Services",      href: "/craft-catalog" },
  { label: "FAQs",          href: "/general-faqs"  },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact",       href: "/contact-us"    },
];
