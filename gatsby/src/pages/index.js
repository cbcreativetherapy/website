import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PortableText from '@sanity/block-content-to-react';

import HeroHeader from '../components/HeroHeader';
import CtaBanner from '../components/CtaBanner';
import Hexagon from '../components/svg/Hexagon';
import SEO from '../components/SEO';

const HomePageStyles = styled.div`
  .introduction {
    padding: 11rem 0;
    width: 80%;
    margin: 0 auto;
    @media (max-width: 680px) {
      width: 100%;
      padding: 8rem 0;
    }

    h2 {
      font-size: 4rem;
    }
    p {
      margin-top: 1rem;
      font-size: 1.6rem;
      line-height: 1.6;
      width: 80%;
      @media (max-width: 680px) {
        width: 100%;
      }
    }
  }
  .site-preview {
    background: var(--pale-grey-bg);
    padding: 9rem 0;
    @media (max-width: 680px) {
      padding: 4rem 0 5rem;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    .block-container {
      width: calc((100% / 3) - 4rem);
      margin: 2rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      &:hover polygon {
        fill: var(--light-green);
        transition: fill 0.6s;
      }

      h3 {
        font-size: 2.8rem;
        width: 80%;
      }

      p {
        margin-top: 1rem;
        font-size: 1.6rem;
        line-height: 1.3;
      }

      a {
        color: var(--accent-coral);
        border-bottom: 1px solid var(--pale-grey-bg);
        transition: border-bottom 0.3s;
        &:hover {
          border-bottom: 1px solid var(--accent-coral);
          transition: border-bottom 0.3s;
        }
      }

      svg {
        width: 20%;
        height: auto;
        position: relative;
        left: -17px;
        polygon {
          fill: var(--pale-grey-bg);
          stroke: var(--light-green);
          transition: fill 0.6s;
        }
      }
      @media (max-width: 980px) {
        width: calc((100% / 2) - 4rem);
      }
      @media (max-width: 680px) {
        width: 100%;
        svg {
          width: 13%;
        }
        @media (max-width: 460px) {
          svg {
            width: 18%;
          }
        }
      }
    }
  }
`;

export default function HomePage({ data: { homePage } }) {
  return (
    <>
      <SEO
        title={homePage.metaContent.title}
        description={homePage.metaContent.description[0].children[0].text}
        image={homePage.metaContent.image.imageFile.asset.fluid.src}
      />
      <HomePageStyles>
        <HeroHeader
          h1Heading={homePage.h1Heading}
          imageSrc={homePage.heroImage.imageFile.asset.fluid.src}
        />
        <div className="wrapper">
          <section className="introduction">
            <h2>{homePage.introSection.heading}</h2>
            <PortableText blocks={homePage.introSection._rawParagraph} />
          </section>
        </div>
        <section className="site-preview">
          <div className="wrapper">
            {homePage.sitePreviewBlock.map((block) => (
              <div className="block-container" key={block._key}>
                <Hexagon />
                <h3>{block.heading}</h3>
                <PortableText blocks={block._rawParagraph} />
              </div>
            ))}
          </div>
        </section>
        <CtaBanner bannerHeading={homePage.ctaBannerReference.heading} />
      </HomePageStyles>
    </>
  );
}

export const query = graphql`
  query {
    homePage: sanityIndex {
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
      introSection {
        heading
        _rawParagraph
      }
      sitePreviewBlock {
        _rawParagraph
        _key
        heading
      }
      ctaBannerReference {
        heading
      }
    }
  }
`;
