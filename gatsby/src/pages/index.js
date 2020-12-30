import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import HeroHeader from '../components/HeroHeader';
import CtaBanner from '../components/CtaBanner';

const HomePageStyles = styled.div`
  .introduction {
    min-height: 50vh;

    h2 {
      font-size: 4rem;
    }
  }
`;

export default function HomePage({ data: { homePage } }) {
  console.log(homePage);
  return (
    <HomePageStyles>
      <HeroHeader
        h1Heading={homePage.h1Heading}
        imageSrc={homePage.heroImage.imageFile.asset.fluid.src}
      />
      <div className="wrapper">
        <section className="introduction">
          <h2>{homePage.introHeading}</h2>
          <p>{homePage.introParagraph}</p>
        </section>
        <section className="sitePreview">
          {homePage.sitePreviewBlock.map((block) => (
            <div className="blockContainer" key={block._key}>
              <h3>{block.heading}</h3>
              {/* <p>{block.paragraph}</p> */}
            </div>
          ))}
        </section>
      </div>
      <CtaBanner bannerHeading={homePage.ctaBannerReference.heading} />
    </HomePageStyles>
  );
}

export const query = graphql`
  query {
    homePage: sanityIndex {
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
      introHeading
      introParagraph
      sitePreviewBlock {
        _key
        heading
        paragraph {
          children {
            text
            _type
            _key
            marks
          }
        }
      }
      ctaBannerReference {
        heading
      }
    }
  }
`;
