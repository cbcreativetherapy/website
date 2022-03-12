import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { HiChevronDown, HiMenu } from 'react-icons/hi';

const NavStyles = styled.nav`
  padding: 1vh 0 0 0;

  .visible-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    flex: 1 2 70%;
    font-family: RalewayBold;
    font-weight: 700;
    text-transform: capitalize;
    padding-bottom: 0.2rem;
    margin-right: 1rem;
    @media (max-width: 890px) {
      max-width: 370px;
      min-width: auto;
    }
    @media (max-width: 790px) {
      margin-right: 4.1rem;
    }
    @media (max-width: 410px) {
      font-size: 3.5rem;
    }
    a {
      position: relative;
    }

    a:after {
      content: '';
      height: 29px;
      width: 0;
      background-color: var(--accent-coral);
      position: absolute;
      border-radius: 2px;
      left: 3px;
      bottom: 8px;
      z-index: -10;
      transition: width 0.5s;
    }
    a:hover:after {
      width: 99.5%;
      transition: width 0.5s;
    }

    span {
      font-size: 3rem;
      font-family: RalewayReg;
      @media (max-width: 410px) {
        font-size: 2rem;
      }
    }
  }

  .nav {
    flex: 1 0 360px;
    align-self: flex-end;
    padding-bottom: 1rem;
    margin-left: 1rem;
  }
  .nav-container {
    display: flex;
    align-items: flex-end;
    position: relative;
    z-index: 10;

    .about,
    .blog {
      position: relative;
      background-color: none;
      transition: background-color 0.3s;

      &:hover .dropdown-links,
      &:focus-within .dropdown-links {
        visibility: visible;
        opacity: 1;
        transition: visibility 0.3s, opacity 0.3s;
      }
      &:hover .heading,
      &:focus-within .heading {
        background-color: var(--light-green);
        transition: background-color 0.3s;
      }

      .heading {
        padding: 1rem;
        position: relative;
        z-index: 20;
        display: flex;
        transition: background-color 0.3s;
      }
    }

    .blog {
      margin-left: 8rem;
    }

    .dropdown-links {
      position: absolute;
      width: 160px;
      top: 33px;
      background-color: var(--light-green);
      padding: 0.1rem 0.5rem;
      visibility: hidden;
      opacity: 0;
      transition: background-color 0.3s, visibility 0.3s, opacity 0.3s;

      a {
        display: inline-block;
        width: 100%;
        padding: 0.5rem;
        margin: 5px 0;
        background-color: none;
        transition: background-color 0.3s;
        position: relative;
        z-index: 30;
        &:hover,
        &:focus {
          background-color: rgba(100, 200, 100, 0.5);
          transition: background-color 0.3s;
        }
      }
    }
  }

  .nav-banner {
    background-color: var(--grey-bg);
    font-size: 2.6rem;
    padding: 1rem 0;
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
    @media (max-width: 445px) {
      font-size: 2rem;
    }
  }

  /* Mobile popout menu styles */
  .hamburger {
    cursor: pointer;
    display: none;
    position: fixed;
    right: 10px;
    top: 10px;
    z-index: 30;
    font-size: 40px;
    color: var(--text-color);
    border-radius: 50%;
    background-color: none;
    transition: background-color 0.3s;

    &:hover,
    &:focus {
      background-color: var(--accent-coral);
      transition: background-color 0.3s;
    }
  }
  .chevron {
    cursor: pointer;
    display: none;
    position: absolute;
    right: 9px;
    top: 2px;
    font-size: 30px;
    z-index: 40;
    transition: background-color 0.3s;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s;
    }
  }
  @media (max-width: 780px) {
    .hamburger,
    .chevron {
      display: block;
    }
    .nav {
      position: fixed;
      right: 1000%;
      top: 5px;
      z-index: 20;
      &.hamburger-click {
        right: 5px;
      }
    }
    .nav-container {
      flex-direction: column;
      background-color: var(--pale-grey-bg);
      padding-top: 50px;
      padding-bottom: 5px;
      border-radius: 2px;
      border: 1px solid var(--accent-coral);
      text-align: right;

      .about,
      .blog {
        margin-left: 0;
        width: 210px;

        &:hover .dropdown-links,
        &:focus-within .dropdown-links {
          visibility: hidden;
          opacity: 0;
        }
        &:hover .dropdown-links.chevron-click,
        &:focus-within .dropdown-links.chevron-click {
          visibility: visible;
          opacity: 1;
        }

        &:hover .heading,
        &:focus-within .heading {
          background-color: var(--pale-grey-bg);
          transition: background-color 0.3s;
        }

        .heading {
          margin-right: 35px;
          padding: 0.5rem 5px 0.5rem 0;
          justify-content: flex-end;
          transition: background-color 0.3s;

          &:hover,
          &:focus {
            background-color: rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s;
          }
        }
      }

      .dropdown-links {
        background-color: var(--pale-grey-bg);
        visibility: hidden;
        opacity: 0;
        position: absolute;
        width: 100%;
        overflow: hidden;
        &.chevron-click {
          position: static;
          opacity: 1;
          visibility: visible;
        }

        a {
          background-color: none;
          position: relative;
          left: -60px;
          margin-left: 30px;
          transition: background-color 0.3s;
          &:hover,
          &:focus {
            background-color: rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s;
          }
        }
      }
    }
  }
`;

export default function Nav({ blogStatus }) {
  const [aboutChevronClicked, isAboutChevronClicked] = useState(false);
  const [blogChevronClicked, isBlogChevronClicked] = useState(false);
  const [hamburgerIconClicked, isHamburgerIconClicked] = useState(false);

  const aboutChevronClick = () => {
    isAboutChevronClicked(!aboutChevronClicked);
  };
  const blogChevronClick = () => {
    isBlogChevronClicked(!blogChevronClicked);
  };

  const hamburgerClicked = () => {
    isHamburgerIconClicked(!hamburgerIconClicked);
    isAboutChevronClicked(false);
    isBlogChevronClicked(false);
  };

  const handleRemoveFocus = () => {
    document.activeElement.blur();
  };

  return (
    <NavStyles>
      <div className="wrapper">
        <ul className="visible-nav">
          <li className="logo">
            <Link to="/">
              Cassandra Brennan <span>M.A, RPQ</span>
            </Link>
          </li>
          <HiMenu className="hamburger" onClick={hamburgerClicked} />
          <li
            className={`nav ${hamburgerIconClicked ? 'hamburger-click' : ''}`}
          >
            <ul className="nav-container">
              <li className="about">
                <HiChevronDown
                  className="chevron"
                  onClick={aboutChevronClick}
                />
                <Link
                  className="heading"
                  to="/about"
                  onClick={handleRemoveFocus}
                >
                  About
                </Link>
                <ul
                  className={`dropdown-links ${
                    aboutChevronClicked ? 'chevron-click' : ''
                  }`}
                >
                  <li>
                    <Link to="/our-services" onClick={handleRemoveFocus}>
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/resources" onClick={handleRemoveFocus}>
                      Helpful Resources
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={handleRemoveFocus}>
                      Get In Touch
                    </Link>
                  </li>
                </ul>
              </li>
              {blogStatus && (
                <li className="blog">
                  <Link
                    className="heading"
                    to="/blog"
                    onClick={handleRemoveFocus}
                  >
                    Blog
                  </Link>
                  <HiChevronDown
                    className="chevron"
                    onClick={blogChevronClick}
                  />
                  {/* <ul
                    className={`dropdown-links ${
                      blogChevronClicked ? 'chevron-click' : ''
                    }`}
                  >
                    <li>
                      <Link to="/response-art" onClick={handleRemoveFocus}>
                        Response Art Gallery
                      </Link>
                    </li>
                  </ul> */}
                </li>
              )}
              <li className="blog">
                <Link to="/response-art">Gallery</Link>
              </li>
            </ul>
          </li>
          {/* <li className="dropdown-hover about-heading">
            <p
              // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
              tabIndex="0"
              onMouseEnter={() => setIsAboutDropdownShown(true)}
              onMouseLeave={() => setIsAboutDropdownShown(false)}
              onFocus={() => setIsAboutDropdownShown(true)}
              onBlur={() => setIsAboutDropdownShown(false)}
              className={isAboutDropdownShown ? 'dropdown-visible' : ''}
            >
              About <HiChevronDown className="chevron" />
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
          </li> */}
          {/* <li className="dropdown-hover blog-heading">
            <p
              // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
              tabIndex="0"
              onMouseEnter={() => setIsBlogDropdownShown(true)}
              onMouseLeave={() => setIsBlogDropdownShown(false)}
              onFocus={() => setIsBlogDropdownShown(true)}
              onBlur={() => setIsBlogDropdownShown(false)}
              className={isBlogDropdownShown ? 'dropdown-visible' : ''}
            >
              Blog <HiChevronDown className="chevron" />
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
          </li> */}
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
