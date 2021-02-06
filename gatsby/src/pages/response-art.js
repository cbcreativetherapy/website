import React from 'react';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/SEO';
import usePagination from '../utils/usePagination';
import GridPagination from '../components/GridPagination';
import ArtGalleryHero from '../components/ArtGalleryHero';
import CtaBanner from '../components/CtaBanner';

const GalleryPageStyles = styled.div`
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
    gap: 4rem;
    margin: 4rem auto;
    justify-content: center;
  }
  .art-link {
    height: 350px;
    position: relative;
    &:hover .art-name,
    &:focus .art-name {
      box-shadow: -10px 0px 0px var(--light-green);
      opacity: 1;
      transition: opacity 0.4s, box-shadow 0.4s;
    }
  }
  .art-name {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    opacity: 0;
    box-shadow: 0px 0px 0px var(--light-green);
    transition: opacity 0.4s, box-shadow 0.4s;
    h2 {
      font-size: 4rem;
      font-family: MontserratSemiBold;
    }
  }
  .gatsby-image-wrapper {
    height: 100%;
    picture img {
      object-position: top center !important;
    }
  }
`;

export default function ResponseArt({ data }) {
  const { allArt, galleryPage } = data;
  const art = allArt.nodes;

  const [next, previous, currentItems, currentPage, maxPage] = usePagination(
    art,
    9
  );

  return (
    <>
      <SEO
        title={galleryPage.metaContent.title}
        description={galleryPage.metaContent.description[0].children[0].text}
        image={galleryPage.metaContent.image.imageFile.asset.fluid.src}
      />
      <GalleryPageStyles>
        <div className="wrapper">
          <ArtGalleryHero
            pageTitle={galleryPage.pageTitle}
            pageDescription={galleryPage.pageDescription[0].children[0].text}
            disclaimer={galleryPage.disclaimer}
          />
          <section className="gallery-grid">
            {currentItems().map((item) => (
              <Link to={item.slug.current} className="art-link">
                <div className="art-name">
                  <h2>{item.name}</h2>
                </div>
                <Img
                  fluid={item.image.imageFile.asset.fluid}
                  alt={item.image.imageAltText}
                />
              </Link>
            ))}
          </section>
          <GridPagination
            currentPage={currentPage}
            next={next}
            previous={previous}
            maxPage={maxPage}
          />
        </div>
      </GalleryPageStyles>
      <CtaBanner
        bannerHeading={galleryPage.ctaBannerReference.heading}
        bannerText={galleryPage.ctaBannerReference.subHeading}
      />
    </>
  );
}

export const query = graphql`
  query {
    allArt: allSanityResponseArt(sort: { fields: sessionDate, order: DESC }) {
      nodes {
        name
        sessionDate(formatString: "YYYY")
        slug {
          current
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
    }
    galleryPage: sanityGeneralGalleryPage {
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
