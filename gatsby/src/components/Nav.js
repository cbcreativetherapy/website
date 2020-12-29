import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  padding: 2.5vh 0;

  .visible-nav {
    margin-bottom: 3.5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .dropdown-hover:nth-of-type(2) {
      margin-right: 20px;
    }
  }

  li,
  .dropdown-hover,
  .nav-banner {
    font-size: 2rem;
    font-family: QuicksandLite;
    text-transform: uppercase;
  }

  .logo {
    min-width: 450px;
    font-size: 5rem;
    flex-basis: 70%;
    flex: 1 1 70%;
    font-family: RalewayBold;
    font-weight: 700;
    text-transform: capitalize;

    span {
      font-size: 3rem;
      font-family: RalewayReg;
    }
  }

  .dropdown-hover {
    cursor: default;
    flex: 1 0 200px;
    position: relative;

    p {
      padding: 1rem 2rem;
      display: inline-block;
      transition: background 0.3s;
    }
  }

  p.dropdown-visible {
    background: var(--light-green);
    transition: background 0.3s;
  }
  ul.dropdown-visible {
    visibility: visible;
    opacity: 1;
    transition: visibility 0s, opacity 0.3s;
  }

  .dropdown {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.3s, opacity 0.3s;
    position: absolute;
    right: 0;
    left: 0;
    padding: 0.6rem;
    max-width: 200px;
    background: var(--light-green);

    li {
      text-transform: capitalize;

      a {
        padding: 1rem;
        width: 100%;
        display: inline-block;
        transition: background 0.3s;
        &:hover,
        &:focus {
          background: rgba(100, 200, 100, 0.5);
          transition: background 0.3s;
        }
      }
    }
  }

  .nav-banner {
    background-color: var(--grey-bg);
    font-size: 3.6rem;
    min-height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      width: 100%;
      text-align: center;
      border-bottom: 1px solid var(--grey-bg);
      transition: border-bottom 0.3s;

      span {
        border-bottom: 1px solid var(--grey-bg);
        transition: border-bottom 0.3s;
      }
      &:hover span,
      &:focus span {
        border-bottom: 1px solid var(--text-color);
        transition: border-bottom 0.3s;
      }
    }
  }
`;

export default function Nav() {
  const [isAboutDropdownShown, setIsAboutDropdownShown] = useState(false);
  const [isBlogDropdownShown, setIsBlogDropdownShown] = useState(false);

  return (
    <NavStyles>
      <div className="wrapper">
        <ul className="visible-nav">
          <li className="logo">
            <Link to="/">
              Cassandra Brennan <span>M.A, RPQ</span>
            </Link>
          </li>
          <li className="dropdown-hover">
            <p
              // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
              tabIndex="0"
              onMouseEnter={() => setIsAboutDropdownShown(true)}
              onMouseLeave={() => setIsAboutDropdownShown(false)}
              onFocus={() => setIsAboutDropdownShown(true)}
              onBlur={() => setIsAboutDropdownShown(false)}
              className={isAboutDropdownShown ? 'dropdown-visible' : ''}
            >
              About
            </p>
            <ul
              onMouseEnter={() => setIsAboutDropdownShown(true)}
              onMouseLeave={() => setIsAboutDropdownShown(false)}
              onFocus={() => setIsAboutDropdownShown(true)}
              onBlur={() => setIsAboutDropdownShown(false)}
              className={`dropdown about ${
                isAboutDropdownShown ? 'dropdown-visible' : ''
              }`}
            >
              <li>
                <Link to="/about">About CB Therapy</Link>
              </li>
              <li>
                <Link to="/our-services">Our Services</Link>
              </li>
              <li>
                <Link to="/resources">Helpful Resources</Link>
              </li>
              <li>
                <Link to="/contact">Get in Touch</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown-hover">
            <p
              // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
              tabIndex="0"
              onMouseEnter={() => setIsBlogDropdownShown(true)}
              onMouseLeave={() => setIsBlogDropdownShown(false)}
              onFocus={() => setIsBlogDropdownShown(true)}
              onBlur={() => setIsBlogDropdownShown(false)}
              className={isBlogDropdownShown ? 'dropdown-visible' : ''}
            >
              Blog
            </p>
            <ul
              onMouseEnter={() => setIsBlogDropdownShown(true)}
              onMouseLeave={() => setIsBlogDropdownShown(false)}
              onFocus={() => setIsBlogDropdownShown(true)}
              onBlur={() => setIsBlogDropdownShown(false)}
              className={`dropdown blog ${
                isBlogDropdownShown ? 'dropdown-visible' : ''
              }`}
            >
              <li>
                <Link to="/blog">Our Posts</Link>
              </li>
              <li>
                <Link to="/response-art">Response Art Gallery</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="nav-banner">
        <Link to="/contact">
          <span>Accepting Online Clients</span>
        </Link>
      </div>
    </NavStyles>
  );
}
