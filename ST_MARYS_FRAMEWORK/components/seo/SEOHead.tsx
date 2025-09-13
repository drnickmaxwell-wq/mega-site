import React from 'react';
import { seoConfig } from '@/lib/seo/config';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: any[];
}

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage,
  jsonLd = [],
}: SEOProps) {
  const pageTitle = title ? `${title} | ${seoConfig.siteName}` : `${seoConfig.defaultTitle}`;
  const pageDescription = description ?? seoConfig.defaultDescription;
  const canonicalUrl = canonical ?? seoConfig.siteUrl;
  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={seoConfig.keywords.join(', ')} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      {ogImage ? <meta name="twitter:image" content={ogImage} /> : null}
      <link rel="canonical" href={canonicalUrl} />
      {jsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
