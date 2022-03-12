import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import PortableText from '@sanity/block-content-to-react';
import SEO from '../components/SEO';
import CtaBanner from '../components/CtaBanner';

const AboutPageStyles = styled.div`
  /* *{border: 1px solid red;} */
  .clearfix {
    margin-top: 6rem;
    position: relative;
    @media (max-width: 525px) {
      padding-top: 4rem;
    }
  }
  h1 {
    font-size: 4.5rem;
    display: inline-block;
    background-color: var(--grey-bg);
    padding: 1rem 2rem;
    margin-top: 0;
    @media (max-width: 910px) {
      width: 300px;
    }
    @media (max-width: 670px) {
      width: 225px;
      font-size: 3.5rem;
    }
    @media (max-width: 525px) {
      width: 100%;
      position: absolute;
      top: 0;
      text-align: center;
    }
    @media (max-width: 385px) {
      font-size: 2.5rem;
    }
  }
  .gatsby-image-wrapper {
    width: 45%;
    float: right;
    margin-left: 4rem;
    margin-bottom: 4rem;
    box-shadow: -15px 15px 0px var(--accent-coral);
    @media (max-width: 525px) {
      width: 90%;
      float: none;
      margin: 4rem auto;
    }
  }
  .clearfix p {
    font-size: 2rem;
    line-height: 1.4;
    padding: 0 2rem;
    p:first-of-type {
      margin-bottom: 2rem;
    }
    @media (max-width: 400px) {
      font-size: 1.6rem;
    }
  }
  .affiliations {
    margin: 6rem 0;
    padding: 0 2rem;
    h2 {
      font-size: 3.5rem;
      @media (max-width: 400px) {
        font-size: 2.5rem;
      }
    }
    li {
      font-size: 1.8rem;
      list-style: disc;
      margin: 1.5rem 0 1.5rem 2.5rem;
      @media (max-width: 400px) {
        font-size: 1.5rem;
      }
    }
  }
`;

export default function About({ data }) {
  const { aboutPage } = data;
  return (
    <>
      <SEO
        title={aboutPage.metaContent.title}
        description={aboutPage.metaContent.description[0].children[0].text}
        image={aboutPage.metaContent.image.imageFile.asset.fluid.src}
      />
      <AboutPageStyles>
        <div className="wrapper">
          <div className="clearfix">
            <Img
              fluid={aboutPage.headshot.imageFile.asset.fluid}
              alt={aboutPage.headshot.imageAltText}
            />
            <h1>{aboutPage.h1Heading}</h1>
            <PortableText
              blocks={aboutPage._rawAboutParagraph}
              className="about-paragraph"
            />
          </div>
          <section className="affiliations">
            <h2>{aboutPage.professionalAffiliations.heading}</h2>
            <PortableText
              blocks={aboutPage.professionalAffiliations._rawParagraph}
            />
          </section>
        </div>
        <CtaBanner
          bannerHeading={aboutPage.ctaBannerReference.heading}
          bannerText={aboutPage.ctaBannerReference.subHeading}
        />
      </AboutPageStyles>
    </>
  );
}

export const query = graphql`
  query {
    aboutPage: sanityAbout {
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
      headshot {
        imageFile {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
        imageAltText
      }
      _rawAboutParagraph
      professionalAffiliations {
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
