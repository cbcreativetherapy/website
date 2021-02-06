import React from 'react';
import styled from 'styled-components';

const CtaBannerStyles = styled.section`
  padding: 6.5rem 0;
  background-color: var(--grey-bg);

  h3 {
    font-size: 3.5rem;
    text-align: center;
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
