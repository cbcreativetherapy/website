import React from 'react';
import styled from 'styled-components';

const HeroHeaderStyles = styled.header`
  height: 80vh;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;

  .container {
    transform: translateY(17rem);
    background: var(--grey-bg);
    display: inline-block;
    padding: 2rem 4rem;
    max-width: 600px;
  }

  h1 {
    margin: 0;
    font-size: 5rem;
  }
  p {
    font-size: 1.8rem;
    padding-left: 5px;
    margin-top: 1rem;
    line-height: 1.4;
  }
  @media (max-width: 568px) {
    .container {
      max-width: 400px;
      padding: 1rem 2rem;
    }
    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 360px) {
    .container {
      max-width: 240px;
    }
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;

export default function HeroHeader({ h1Heading, heroParagraph, imageSrc }) {
  return (
    <HeroHeaderStyles image={imageSrc}>
      <div className="container">
        <h1>{h1Heading}</h1>
        {heroParagraph && <p>{heroParagraph}</p>}
      </div>
    </HeroHeaderStyles>
  );
}
