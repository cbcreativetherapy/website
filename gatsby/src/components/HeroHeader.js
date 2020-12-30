import React from 'react';
import styled from 'styled-components';

const HeroHeaderStyles = styled.header`
  height: 80vh;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;

  .container {
    transform: translateY(11rem);
    background: var(--grey-bg);
    display: inline-block;
    padding: 2rem 4rem;
  }

  h1 {
    margin: 0;
    font-size: 5rem;
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
