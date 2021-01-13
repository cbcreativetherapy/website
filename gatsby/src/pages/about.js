import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PortableText from '@sanity/block-content-to-react';

import HeroHeader from '../components/HeroHeader';
import CtaBanner from '../components/CtaBanner';

const AboutStyles = styled.div`
  .about-section {
    padding: 4rem 0;
    width: 75%;
    margin: 0 auto;
    @media (max-width: 600px) {
      width: 90%;
    }

    h2 {
      font-size: 2.8rem;
    }

    p,
    li {
      font-size: 1.6rem;
      line-height: 1.4;
      margin-top: 1rem;
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

export default function About({ data: { aboutPage } }) {
  return (
    <AboutStyles>
      <HeroHeader
        h1Heading={aboutPage.h1Heading}
        imageSrc={aboutPage.heroImage.imageFile.asset.fluid.src}
        heroParagraph={aboutPage.heroParagraph}
      />
      <div className="wrapper">
        {aboutPage.sectionsArray.map((section) => (
          <section
            key={section._key}
            className={`about-section section${sectionNumberCycle()}`}
          >
            <h2>{section.heading}</h2>
            <PortableText blocks={section._rawParagraph} />
          </section>
        ))}
      </div>
      <CtaBanner bannerHeading={aboutPage.ctaBannerReference.heading} />
    </AboutStyles>
  );
}

export const query = graphql`
  query {
    aboutPage: sanityAbout {
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
