export type NavDropdownLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavDropdown = {
  title: string;
  titleHref: string;
  links: NavDropdownLink[];
  quickLinks?: NavDropdownLink[];
};

export type MainNavItem = {
  label: string;
  href?: string | null;
  external?: boolean;
  dropdown?: NavDropdown;
};

export const mainNavItems: MainNavItem[] = [
  { label: "Home",          href: "/"              },
  { label: "Services",      href: "/craft-catalog" },
  { label: "FAQs",          href: "/general-faqs"  },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact",       href: "/contact-us"    },
];
