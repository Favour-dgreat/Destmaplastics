// Single source of truth for business details used in metadata, structured data and the sitemap.
export const SITE = {
  name: 'Destma Plastic',
  legalName: 'Destma Plastic Limited',
  url: 'https://destmaplastics.com',
  tagline: 'Quality • Strength • Value',
  description:
    'Destma Plastic is a Lagos plastic manufacturer with 53 machines making PET preforms, PET bottles, pharmaceutical bottles, caps and closures, lunch boxes, drinking bottles, stools and crates — about 1.55 million pieces a day, with OEM, ODM and private-label production.',
  email: 'support@destmaplastics.com',
  social: {
    instagram: { handle: '@destmaglobal', url: 'https://www.instagram.com/destmaglobal' },
    tiktok: { handle: '@destma_global', url: 'https://www.tiktok.com/@destma_global' },
  },
  whatsapp: '+2348147235913',
  phone: '+2348162965729',
  address: {
    street: '4 Nick-Chuks Street, beside NNPC Filling Station, opposite The Synagogue, Ikotun-Egbe Road',
    locality: 'Ikotun',
    region: 'Lagos',
    country: 'NG',
  },
  hours: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '08:00', closes: '18:00' },
  // Bump when page content changes meaningfully; used as the sitemap's lastModified.
  updated: '2026-10-13',
} as const;

export const absoluteUrl = (path = '/') => new URL(path, SITE.url).toString();

/**
 * Per-page metadata with a canonical URL and matching Open Graph / Twitter tags.
 * (Next merges openGraph shallowly, so every page must pass the full set.)
 */
export function pageMetadata({ title, description, path, keywords }: { title: string; description: string; path: string; keywords?: string[] }) {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: 'website' as const,
      locale: 'en_NG',
      siteName: SITE.name,
      url: path,
      title: `${title} | ${SITE.name}`,
      description,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: `${title} | ${SITE.name}`,
      description,
    },
  };
}
