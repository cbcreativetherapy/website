import React from 'react';
import styled from 'styled-components';

const HamburgerStyles = styled.svg`
  fill: var(--text-color);
  cursor: pointer;
  border-radius: 50%;
  background-color: none;
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    background-color: var(--accent-coral);
    transition: background-color 0.3s;
  }
`;

export default function Hexagon() {
  return (
    <HamburgerStyles
      width="40"
      height="40"
      viewBox="-17 0 135 70"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      tabIndex="0"
      className="hamburger"
    >
      <rect width="100" height="15" rx="8" />
      <rect y="30" width="100" height="15" rx="8" />
      <rect y="60" width="100" height="15" rx="8" />
    </HamburgerStyles>
  );
}
