import React from 'react';
import styled from 'styled-components';

const CtaBannerStyles = styled.section`
  height: 25vh;
  background-color: var(--grey-bg);
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h3 {
    font-size: 3.5rem;
  }
`;

export default function CtaBanner({ bannerHeading, bannerText }) {
  return (
    <CtaBannerStyles>
      <div className="wrapper">
        <h3>{bannerHeading}</h3>
        {bannerText && <p>{bannerText}</p>}
      </div>
    </CtaBannerStyles>
  );
}
