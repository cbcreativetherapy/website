import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import DetailedLogo from '../assets/images/logo-detailed.svg';

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
    width: 200px;
    position: relative;
    left: -10px;
  }
  .latest-blog {
    width: calc(60% - 75px);
    flex-shrink: 2;
    @media (max-width: 560px) {
      width: 200px;
    }
    @media (max-width: 400px) {
      width: 100%;
      margin-top: 1.8rem;
      p {
        width: 200px;
      }
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
      color: var(--dark-green);
      transition: color 0.2s;

      &:hover,
      &:focus {
        color: var(--mid-green);
        transition: color 0.2s;

        & .social-icon {
          color: var(--mid-green);
          transition: color 0.2s;
        }
      }
    }

    .social-icon {
      font-size: 1.6rem;
      color: var(--dark-green);
      position: absolute;
      left: -20px;
      top: -1px;
      transition: color 0.2s;
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
`;

export default function Footer({ blogStatus }) {
  const allBlogPosts = useStaticQuery(graphql`
    query {
      allSanityBlogPost {
        nodes {
          postTitle
          slug {
            current
          }
        }
      }
    }
  `);
  const latestBlog = allBlogPosts.allSanityBlogPost.nodes.map((node) => node);
  const blogSlug = `/post/${latestBlog[0].slug.current}`;
  return (
    <FooterStyles className="wrapper">
      <div className="logo">
        <img src={DetailedLogo} alt="Logo for CB Creative Therapy" />
      </div>
      {blogStatus && (
        <div className="latest-blog">
          <p>
            See our latest blog post -{' '}
            <Link className="link-blue" to={blogSlug}>
              {latestBlog[0].postTitle}
            </Link>
          </p>
        </div>
      )}
      <div className="social-media">
        <h4>Let's connect!</h4>
        <ul>
          <li>
            <div>
              <a
                href="https://www.instagram.com/createwithcassandra/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram
                  className="social-icon"
                  aria-label="Instagram icon"
                />
                createwithcassandra
              </a>
            </div>
          </li>
          <li>
            <div>
              <a
                href="mailto:cbcreativetherapy@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <HiOutlineMail
                  className="social-icon"
                  aria-label="Email icon"
                />
                Shoot me an email
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p>
          Designed by:{' '}
          <Link className="link" to="/about">
            Cassandra Brennan
          </Link>
        </p>
        <p>&copy; CB Therapy {new Date().getFullYear()}</p>
        <p>
          Developed by:{' '}
          <a
            className="link link-blue"
            target="_blank"
            rel="noreferrer"
            href="https://codeturkie.io"
          >
            Philip Turkiewicz
          </a>
        </p>
      </div>
    </FooterStyles>
  );
}
