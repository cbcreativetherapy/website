import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

export default function SEO({ children, location, description, title, image }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
      <html lang="en" />
      <title>{title}</title>
      {/* Fav Icons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/cassandabrennan-white.svg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/cassandabrennan-white.svg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/cassandabrennan-white.svg"
      />
      <link rel="manifest" href="/site.webmanifest" />
      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />
      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twiter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={image || '/cassandabrennan-white.svg'}
      />
      <meta
        property="og:image"
        content={image || '/cassandabrennan-white.svg'}
      />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta property="og:description" content={description} key="ogdescr" />
      {children}
    </Helmet>
  );
}
