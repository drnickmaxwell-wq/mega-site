/*
 * JSON-LD schema helpers for SEO
 */

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Build FAQPage schema from a list of questions and answers.
 */
export function faqPageJsonLd(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/**
 * Build Organization schema.
 */
export function organizationJsonLd(params: {
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
}) {
  const { name, url, logo, sameAs } = params;
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    ...(logo ? { logo } : {}),
    ...(sameAs ? { sameAs } : {}),
  };
}

/**
 * Build LocalBusiness schema for a Dentist.
 */
export function localBusinessJsonLd(params: {
  name: string;
  url: string;
  telephone: string;
  email?: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  areaServed?: string;
  image?: string;
}) {
  const { name, url, telephone, email, address, areaServed, image } = params;
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': url,
    name,
    url,
    ...(image ? { image } : {}),
    telephone,
    ...(email ? { email } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
    ...(areaServed ? { areaServed } : {}),
  };
}

/**
 * Build a Service schema.
 */
export function serviceJsonLd(params: {
  name: string;
  description: string;
  provider: { name: string; url: string };
  areaServed?: string;
  offers?: {
    price: number;
    priceCurrency: string;
    availability?: string;
  };
}) {
  const { name, description, provider, areaServed, offers } = params;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Dentist',
      name: provider.name,
      url: provider.url,
    },
    ...(areaServed ? { areaServed } : {}),
    ...(offers
      ? {
          offers: {
            '@type': 'Offer',
            price: offers.price,
            priceCurrency: offers.priceCurrency,
            ...(offers.availability ? { availability: offers.availability } : {}),
          },
        }
      : {}),
  };
}

/**
 * Build an ImageObject schema.
 */
export function imageObjectJsonLd(params: {
  url: string;
  width?: number;
  height?: number;
  caption?: string;
}) {
  const { url, width, height, caption } = params;
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: url,
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
    ...(caption ? { caption } : {}),
  };
}
