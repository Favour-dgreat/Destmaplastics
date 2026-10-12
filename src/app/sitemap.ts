import type { MetadataRoute } from 'next';
import { PRODUCTS } from '@/data/plasticsData';
import { SITE, absoluteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), lastModified: SITE.updated, changeFrequency: 'weekly', priority: 1 },
    { url: absoluteUrl('/products'), lastModified: SITE.updated, changeFrequency: 'weekly', priority: 0.9 },
    { url: absoluteUrl('/company'), lastModified: SITE.updated, changeFrequency: 'monthly', priority: 0.7 },
    { url: absoluteUrl('/contact'), lastModified: SITE.updated, changeFrequency: 'monthly', priority: 0.8 },
  ];

  const products: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: absoluteUrl(`/products/${p.id}`),
    lastModified: SITE.updated,
    changeFrequency: 'monthly',
    priority: 0.8,
    images: [p.image, ...(p.secondaryImages ?? [])].map((src) => absoluteUrl(encodeURI(src))),
  }));

  return [...pages, ...products];
}
