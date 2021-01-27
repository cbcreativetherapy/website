import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PortableText from '@sanity/block-content-to-react';

import HeroHeader from '../components/HeroHeader';
import CtaBanner from '../components/CtaBanner';
import SEO from '../components/SEO';

const OurServicesStyles = styled.div`
  .services-section {
    padding: 6rem 10rem;
    margin: 0 auto;
    &:nth-of-type(2n) {
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
    @media (max-width: 630px) {
      padding: 4rem;
      p {
        width: 100%;
      }
    }
    @media (max-width: 425px) {
      padding: 4rem 2rem;
    }
  }
  .section1 {
    margin-top: 4rem;
    @media (max-width: 680px) {
      margin-top: 1rem;
    }
  }
  .section3 {
    margin-bottom: 4rem;
    @media (max-width: 680px) {
      margin-bottom: 1rem;
    }
    li {
      list-style: disc;
      margin-left: 25px;
    }
  }
`;

const sectionNumberCycle = ((max) => {
  let count = 0;
  // eslint-disable-next-line no-plusplus
  return () => (count++ % max) + 1;
})(3);

export default function About({ data: { ourServicesPage } }) {
  console.log(ourServicesPage);
  return (
    <>
      <SEO
        title={ourServicesPage.metaContent.title}
        description={ourServicesPage.metaContent.description[0].children.text}
        image={ourServicesPage.metaContent.image.imageFile.asset.fluid.src}
      />
      <OurServicesStyles>
        <HeroHeader
          h1Heading={ourServicesPage.h1Heading}
          imageSrc={ourServicesPage.heroImage.imageFile.asset.fluid.src}
          heroParagraph={ourServicesPage.heroParagraph}
        />
        {ourServicesPage.sectionsArray.map((section) => (
          <section
            key={section._key}
            className={`services-section section${sectionNumberCycle()}`}
          >
            <div className="wrapper">
              <h2>{section.heading}</h2>
              <PortableText blocks={section._rawParagraph} />
            </div>
          </section>
        ))}
        <CtaBanner bannerHeading={ourServicesPage.ctaBannerReference.heading} />
      </OurServicesStyles>
    </>
  );
}

export const query = graphql`
  query {
    ourServicesPage: sanityOurServices {
      metaContent {
        title
        description {
          children {
            text
          }
        }
        image {
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
      heroImage {
        imageFile {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
        imageAltText
      }
      heroParagraph
      sectionsArray {
        _key
        heading
        _rawParagraph
      }
      ctaBannerReference {
        heading
      }
    }
  }
`;
