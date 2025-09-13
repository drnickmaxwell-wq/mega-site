// Home page server component orchestrating the main sections
import React from 'react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import WaveBackgroundLayout from '@/components/layout/WaveBackgroundLayout'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Features from '@/components/sections/Features'
import HomeFAQ from '@/components/sections/HomeFAQ'
import ActionDock from '@/components/ui/ActionDock'
import SEOHead from '@/components/seo/SEOHead'
import { organizationJsonLd, localBusinessJsonLd } from '@/lib/seo/jsonld'
import { seoConfig } from '@/lib/seo/config'

export const metadata = {
  title: 'Luxury Coastal Dentistry | St Mary’s House Dental Care',
  description:
    'Transforming smiles with same-day dentistry, guided implants, and compassionate care on the coast of Shoreham-by-Sea.',
}

export default async function HomePage() {
  // Build structured data for Organization and LocalBusiness
  const jsonLd = [
    organizationJsonLd({
      name: "St Mary’s House Dental Care",
      url: seoConfig.siteUrl,
      logo: `${seoConfig.siteUrl}/logo.png`,
    }),
    localBusinessJsonLd({
      name: "St Mary’s House Dental Care",
      description:
        'Premium dental practice providing cutting-edge treatments and personalised care.',
      telephone: '01273 453109',
      email: 'info@smhdental.co.uk',
      address: {
        streetAddress: 'St Mary’s Road',
        addressLocality: 'Shoreham-by-Sea',
        postalCode: 'BN43 5ZA',
        addressRegion: 'West Sussex',
        addressCountry: 'GB',
      },
      areaServed: ['Shoreham-by-Sea', 'BN43'],
      openingHoursSpecification: [
        { dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '17:00' },
        { dayOfWeek: ['Saturday'], opens: '09:00', closes: '13:00' },
      ],
      image: [`${seoConfig.siteUrl}/og/home.jpg`],
    }),
  ]

  return (
    <>
      <SEOHead
        title={metadata.title}
        description={metadata.description}
        canonical={`${seoConfig.siteUrl}/`}
        ogImage="/og/home.jpg"
        jsonLd={jsonLd}
      />
      <WaveBackgroundLayout intensity="medium">
        <Navigation />
        <Hero />
        <Stats />
        <Features />
        <HomeFAQ />
        <Footer />
        <ActionDock />
      </WaveBackgroundLayout>
    </>
  )
}
