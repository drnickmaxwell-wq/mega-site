export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: "St Mary\u2019s House Dental Care",
    url: process.env.NEXT_PUBLIC_SITE_URL || '',
  };
}

export function generateLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: "St Mary\u2019s House Dental Care",
    description: 'A private dental clinic offering cosmetic and restorative treatments.',
    url: process.env.NEXT_PUBLIC_SITE_URL || '',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'St Mary\u2019s House, Brighton Road',
      addressLocality: 'Shoreham-by-Sea',
      postalCode: 'BN43',
      addressCountry: 'GB',
    },
    telephone: '+44 1273 123456',
  };
}

export function generateServiceJsonLd({ name, description, slug }: { name: string; description: string; slug: string; }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    areaServed: 'Shoreham-by-Sea, BN43',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || ''}/treatments/${slug}`,
    provider: generateOrganizationJsonLd(),
  };
}

export function generateOfferJsonLd({ price, currency = 'GBP', validFrom }: { price: number; currency?: string; validFrom?: string; }) {
  return {
    '@type': 'Offer',
    price,
    priceCurrency: currency,
    availability: 'https://schema.org/InStock',
    validFrom,
  };
}

export function generateFAQPageJsonLd(faqs: { question: string; answer: string; }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

export function generateImageObjectJsonLd({ url, width, height }: { url: string; width: number; height: number; }) {
  return {
    '@type': 'ImageObject',
    contentUrl: url,
    width,
    height,
  };
}
