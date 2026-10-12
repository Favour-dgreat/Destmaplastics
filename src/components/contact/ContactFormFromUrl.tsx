'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import ContactForm from './ContactForm';

/** Pre-selects the product passed as ?product= (e.g. from a product page's "Request a quote"). */
export default function ContactFormFromUrl() {
  const product = useSearchParams().get('product');
  return <ContactForm key={product ?? ''} initialProduct={product} />;
}
