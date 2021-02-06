import React from 'react';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import { HiArrowLeft } from 'react-icons/hi';
import styled from 'styled-components';
import SEO from '../components/SEO';
import CtaBanner from '../components/CtaBanner';
import ArtGalleryHero from '../components/ArtGalleryHero';

const ResponseArtStyles = styled.div`
  .gatsby-image-wrapper {
    max-width: 400px;
    margin: 4rem auto 1rem;
    border-left: 10px solid var(--light-green);
    border-bottom: 10px solid var(--light-green);
  }
  .back-link {
    font-size: 2rem;
    display: inline-block;
    margin-top: 2rem;
    padding-bottom: 3px;
    color: var(--dark-green);
    border-bottom: 1px solid var(--main-bg);
    transition: border-bottom 0.4s;

    &:hover,
    &:focus {
      border-bottom: 1px solid var(--dark-green);
      transition: border-bottom 0.4s;
    }

    .back-arrow {
      position: relative;
      top: 3px;
      margin-right: 1rem;
    }
  }

  .text-container {
    text-align: center;
    margin-bottom: 6rem;

    h2 {
      font-size: 3.5rem;
      font-family: MontserratSemiBold;
      margin-bottom: 2.5rem;
    }
    p {
      font-size: 1.8rem;
    }
    .date {
      margin-bottom: 1rem;
    }
  }
`;

export default function ResponseArt({ data }) {
  const { art, galleryPage } = data;
  return (
    <>
      <SEO
        title={art.name}
        description={art.description}
        image={art.image.imageFile.asset.fluid.src}
      />
      <ResponseArtStyles>
        <div className="wrapper">
          <div className="back-to">
            <Link to="/response-art" className="back-link">
              <HiArrowLeft className="back-arrow" />
              Back to Gallery
            </Link>
          </div>
          <ArtGalleryHero
            pageTitle={galleryPage.pageTitle}
            pageDescription={galleryPage.pageDescription[0].children[0].text}
            disclaimer={galleryPage.disclaimer}
          />
          <Img
            fluid={art.image.imageFile.asset.fluid}
            alt={art.image.imageAltText}
          />
          <div className="text-container">
            <h2>{art.name}</h2>
            <p className="date">Date: {art.sessionDate}</p>
            <p className="description">{art.description}</p>
          </div>
        </div>
        <CtaBanner
          bannerHeading={galleryPage.ctaBannerReference.heading}
          bannerText={galleryPage.ctaBannerReference.subHeading}
        />
      </ResponseArtStyles>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    art: sanityResponseArt(slug: { current: { eq: $slug } }) {
      name
      sessionDate(formatString: "YYYY")
      description
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
    galleryPage: sanityGeneralGalleryPage {
      pageTitle
      pageDescription {
        children {
          text
        }
      }
      disclaimer
      ctaBannerReference {
        heading
        subHeading
      }
    }
  }
`;
