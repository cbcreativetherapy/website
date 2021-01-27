import React from 'react';
import styled from 'styled-components';

const HeroHeaderStyles = styled.header`
  height: 80vh;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;

  .wrapper {
    height: 100%;
  }

  .container,
  .center-container {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    /* text-align: center; */
  }

  .center-container {
    justify-content: center;
    text-align: center;
  }

  .text-container {
    background: var(--grey-bg);
    padding: 2rem 4rem;
    max-width: 600px;
  }

  h1 {
    margin: 0;
    font-size: 7rem;
  }
  p {
    font-size: 1.8rem;
    padding-left: 5px;
    margin-top: 1.5rem;
    line-height: 1.4;
    width: 100%;
  }
  @media (max-width: 568px) {
    .container {
      padding: 1rem 2rem;
    }
    .text-container {
      padding: 1rem;
    }
    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 360px) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;

export default function HeroHeader({
  h1Heading,
  heroParagraph,
  imageSrc,
  centerHeading = false,
}) {
  return (
    <HeroHeaderStyles image={imageSrc}>
      <div className="wrapper">
        <div className={centerHeading ? 'center-container' : 'container'}>
          <div className="text-container">
            <h1>{h1Heading}</h1>
            {heroParagraph && <p>{heroParagraph}</p>}
          </div>
        </div>
      </div>
    </HeroHeaderStyles>
  );
}
