import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import PortableText from '@sanity/block-content-to-react';

import HeroHeader from '../components/HeroHeader';
import SEO from '../components/SEO';
import CtaBanner from '../components/CtaBanner';

const ResourcesStyles = styled.div`
  .resources-section {
    margin: 0 auto;
    padding: 6rem 10rem;
    &:nth-of-type(even) {
      background-color: var(--pale-grey-bg);
    }
    h2 {
      font-size: 2.8rem;
    }
    p,
    li {
      font-size: 1.6rem;
      line-height: 1.4;
      margin-top: 1rem;
      width: 80%;
    }
    li {
      list-style: disc;
      margin-left: 25px;
    }
    @media (max-width: 680px) {
      &:nth-of-type(odd) {
        margin-top: 1rem;
      }
    }
    @media (max-width: 630px) {
      padding: 4rem;
      p {
        width: 100%;
      }
    }
    @media (max-width: 425px) {
      padding: 4rem 2rem;
      h2 {
        font-size: 2.4rem;
      }
      p,
      li {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function Resources({ data }) {
  const { resources } = data;
  return (
    <>
      <SEO
        title={resources.metaContent.title}
        description={resources.metaContent.description[0].children[0].text}
        image={resources.metaContent.image.imageFile.asset.fluid.src}
      />
      <ResourcesStyles>
        <HeroHeader
          h1Heading={resources.h1Heading}
          heroParagraph={resources.heroParagraph}
          imageSrc={resources.heroImage.imageFile.asset.fluid.src}
        />
        {resources.sectionsArray.map((section) => (
          <section className="resources-section">
            <div className="wrapper">
              <h2>{section.heading}</h2>
              <PortableText blocks={section._rawParagraph} />
            </div>
          </section>
        ))}
        <CtaBanner
          bannerHeading={resources.ctaBannerReference.heading}
          bannerText={resources.ctaBannerReference.subHeading}
        />
      </ResourcesStyles>
    </>
  );
}

export const query = graphql`
  query {
    resources: sanityResources {
      metaContent {
        title
        description {
          children {
            text
          }
        }
        image {
          imageAltText
          imageFile {
            asset {
              fluid(maxWidth: 1200) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
      h1Heading
      heroParagraph
      heroImage {
        imageAltText
        imageFile {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      sectionsArray {
        heading
        _rawParagraph
      }
      ctaBannerReference {
        heading
        subHeading
      }
    }
  }
`;
