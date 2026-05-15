import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const socialLinks = [
  {
    label: 'Facebook',
    // [TODO: Replace with Skyward Roofing's actual Facebook page URL]
    href: 'https://www.facebook.com/skywardroofing',
    external: true,
    filled: false,
  },
  {
    label: 'Schedule Service',
    href: '/contact-us',
    external: false,
    filled: false,
  },
  {
    label: 'Call Us',
    href: 'tel:9179798704',
    external: false,
    filled: true,
  },
];

interface SocialLinksProps {
  /** 'row' = horizontal (Topnav desktop), 'column' = vertical (MobileNav) */
  layout?: 'row' | 'column';
  onClick?: () => void;
}

export default function SocialLinks({ layout = 'row', onClick }: SocialLinksProps) {
  return (
    <ul
      className={[
        'list-none p-0 m-0 text-[0]',
        layout === 'row' ? 'flex items-center' : 'flex flex-col',
      ].join(' ')}
    >
      {socialLinks.map((s, i) => (
        <li
          key={s.label}
          className={[
            'inline-block font-medium',
            layout === 'row' && i !== 0 ? 'ml-[1.5rem]' : '',
            layout === 'column' && i !== 0 ? 'mt-[1.2rem]' : '',
          ].join(' ')}
        >
          <Link
            href={s.href}
            target={s.external ? '_blank' : '_self'}
            rel={s.external ? 'noopener noreferrer' : undefined}
            onClick={onClick}
            className={[
              'text-4xl! md:text-xl! inline-flex items-center gap-2',
              'text-[1.4rem] leading-[1.4] no-underline whitespace-nowrap',
              'px-[1.2rem] py-[1rem] border rounded-[2px]',
              'transition-[background,color,border-color] duration-350',
              layout === 'row'
                ? s.filled
                  ? 'bg-brand-navy text-white border-brand-navy hover:bg-white hover:text-brand-navy hover:border-brand-navy'
                  : 'bg-transparent text-brand-navy border-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy'
                : s.filled
                  ? 'bg-white text-brand-navy border-white hover:bg-brand-sky hover:text-white hover:border-brand-sky'
                  : 'bg-transparent text-white border-white hover:bg-brand-sky hover:text-white hover:border-brand-sky',
            ].join(' ')}
          >
            {s.label}
            <ExternalLink size={11} strokeWidth={2} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
