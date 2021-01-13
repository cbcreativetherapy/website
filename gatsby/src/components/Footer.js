import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const FooterStyles = styled.footer`
  padding: 5vh 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 560px) {
    justify-content: flex-start;
  }

  h4 {
    font-size: 1.9rem;
  }

  p {
    font-size: 1.5rem;
  }

  .logo {
    width: 75px;
    margin-right: 1rem;
  }
  .latest-blog {
    width: calc(60% - 75px);
    flex-shrink: 2;
    @media (max-width: 560px) {
      width: calc(100% - 100px);
    }
    @media (max-width: 400px) {
      width: 100%;
      margin-top: 1.8rem;
    }
  }
  .social-media {
    width: 30%;
    text-align: right;
    @media (max-width: 560px) {
      margin-top: 1.5rem;
      width: 100%;
      text-align: left;
      a {
        margin-left: 20px;
      }
    }
    h4,
    li {
      margin: 1rem 0;
    }

    a {
      font-size: 1.1rem;
      position: relative;

      &:hover,
      &:focus {
        color: var(--accent-blue);
        transition: color 0.3s;

        & .social-icon {
          color: var(--accent-blue);
          transition: color 0.3s;
        }
      }
    }

    .social-icon {
      font-size: 1.6rem;
      color: var(--text-color);
      position: absolute;
      left: -20px;
      top: -1px;
    }
  }

  .copyright {
    width: 100%;
    margin: 3rem 0 1rem;
    display: flex;
    justify-content: space-between;
    p {
      font-size: 1rem;
    }
    @media (max-width: 560px) {
      flex-direction: column;
      p {
        margin: 0.3rem 0;
      }
    }
  }

  .placeholder-logo {
    width: 75px;
    height: 75px;
    background-color: var(--light-green);
  }
`;

export default function Footer() {
  return (
    <FooterStyles className="wrapper">
      <div className="logo">
        <div className="placeholder-logo" />
      </div>
      <div className="latest-blog">
        <p>
          See our latest blog post - Finals season: Coping with academic stress
        </p>
      </div>
      <div className="social-media">
        <h4>Let's connect!</h4>
        <ul>
          <li>
            <div>
              <a href="https://www.instagram.com/createwithcassandra/">
                <FaInstagram className="social-icon" />
                createwithcassandra
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="#">
                <HiOutlineMail className="social-icon" />
                Shoot me an email
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p>
          Designed by:{' '}
          <Link className="link" to="/">
            Cassandra Brennan
          </Link>
        </p>
        <p>&copy; CB Therapy {new Date().getFullYear()}</p>
        <p>
          Developed by:{' '}
          <a className="link link-blue" href="https://codeturkie.io">
            Philip Turkiewicz
          </a>
        </p>
      </div>
    </FooterStyles>
  );
}
