import React from 'react';
import styled from 'styled-components';

const ArtGalleryHeroStyles = styled.section`
  .background-color {
    background-color: var(--grey-bg);
    max-width: 650px;
    padding: 2rem;
    margin: 2rem 0 0.5rem;
    margin-top: calc(2rem - 3px);
    @media (max-width: 600px) {
      padding: 1rem 2rem;
    }

    h1 {
      margin-top: 0;
      font-size: 4.5rem;
    }
    p {
      font-size: 1.7rem;
    }
    @media (max-width: 600px) {
      h1 {
        font-size: 3.3rem;
      }
      p {
        font-size: 1.3rem;
      }
    }
  }
  .disclaimer {
    margin-left: 2rem;
    padding-right: 2rem;
    @media (max-width: 600px) {
      text-align: left;
      padding-right: 2rem;
      max-width: 100%;
    }
  }
`;

export default function ArtGalleryHero({
  pageTitle,
  pageDescription,
  disclaimer,
}) {
  return (
    <ArtGalleryHeroStyles>
      <div className="background-color">
        <h1>{pageTitle}</h1>
        <p>{pageDescription}</p>
      </div>
      <p className="disclaimer">{disclaimer}</p>
    </ArtGalleryHeroStyles>
  );
}
