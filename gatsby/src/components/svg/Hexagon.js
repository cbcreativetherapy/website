import React from 'react';
import styled from 'styled-components';

const HexagonStyles = styled.svg`
  fill: none;
  stroke: var(--text-color);
  stroke-width: 5px;
`;

export default function Hexagon() {
  return (
    <HexagonStyles
      width="400px"
      height="400px"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <polygon points="148,183.138438763306 52,183.138438763306 4,100 52,16.8615612366939 148,16.8615612366939 196,100" />
    </HexagonStyles>
  );
}
