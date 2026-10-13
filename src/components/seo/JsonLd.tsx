import React from 'react';
import { SITE, absoluteUrl } from '@/lib/site';

/** Renders schema.org structured data. */
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script tag
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}

/** The business itself — rendered once, site-wide. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': absoluteUrl('/#organization'),
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: absoluteUrl('/images/DestmaPlastics.jpeg'),
    image: absoluteUrl('/opengraph-image.png'),
    description: SITE.description,
    slogan: SITE.tagline,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    areaServed: { '@type': 'Country', name: 'Nigeria' },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: SITE.hours.days,
        opens: SITE.hours.opens,
        closes: SITE.hours.closes,
      },
    ],
    contactPoint: [
      { '@type': 'ContactPoint', telephone: SITE.phone, contactType: 'sales', areaServed: 'NG', availableLanguage: ['English'] },
      { '@type': 'ContactPoint', telephone: SITE.whatsapp, contactType: 'customer service', areaServed: 'NG', availableLanguage: ['English'] },
    ],
    alternateName: 'Destma Global',
    sameAs: [SITE.social.instagram.url, SITE.social.tiktok.url],
    knowsAbout: ['Injection moulding', 'PET preform injection', 'PET bottle blowing', 'HDPE blow moulding', 'Pharmaceutical packaging', 'Caps and closures', 'Food packaging', 'OEM / ODM / private-label plastic manufacturing'],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': absoluteUrl('/#website'),
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': absoluteUrl('/#organization') },
    inLanguage: 'en-NG',
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
