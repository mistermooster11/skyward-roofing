export type NavDropdown = {
  title: string;
  titleHref: string;
  description: string;
  items?: Array<{ label: string; href: string; external?: boolean }>;
  links: Array<{ label: string; href: string; external?: boolean }>;
  quickLinks?: Array<{ label: string; href: string; external?: boolean; icon: string }>;
};

export type MainNavItem = {
  label: string;
  href?: string | null;
  external?: boolean;
  dropdown?: NavDropdown | null;
};

export const mainNavItems: MainNavItem[] = [
  { label: "Home",     href: "/"              },
  { label: "Services", href: "/craft-catalog" },
  { label: "FAQs",     href: "/general-faqs"  },
  { label: "Contact",  href: "/contact-us"    },
];
