export interface FAQItem {
  question: string
  answer: string
}

export function faqPageJsonLd(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }
}

export function organizationJsonLd({ name, url, logo }: { name: string; url: string; logo: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
  }
}

export function localBusinessJsonLd({
  name,
  url,
  image,
  telephone,
  email,
  address,
  areaServed,
}: {
  name: string
  url: string
  image: string
  telephone: string
  email: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  areaServed: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name,
    url,
    image,
    telephone,
    email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
    areaServed,
  }
}
