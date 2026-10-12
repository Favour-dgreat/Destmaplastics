'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import ProductsExplorer from './ProductsExplorer';
import { isCategory } from './categories';

/** Reads ?category= from the URL. Re-keying resets the explorer when the header links to another category. */
export default function ProductsExplorerFromUrl() {
  const fromUrl = useSearchParams().get('category');
  const category = isCategory(fromUrl) ? fromUrl : 'all';
  return <ProductsExplorer key={category} initialCategory={category} />;
}
