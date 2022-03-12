import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Nav from './Nav';
import Footer from './Footer';

import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import SetupStyles from '../styles/Setup';

const SkipLinkStyles = styled.a`
  background-color: rgba(228, 224, 225, 0.8);
  padding: 1rem 3rem;
  font-size: 1.5rem;
  line-height: 1.8rem;
  text-align: center;
  position: absolute;
  top: -100%;
  left: 50%;
  z-index: 100;
  transform: translateX(-50%);
  transition: top 0.4s;
  &:focus {
    top: 0;
    transition: top 0.4s;
  }
`;

export default function Layout({ children }) {
  const blogStatusQuery = useStaticQuery(graphql`
    query {
      sanityGeneralBlogPage {
        blogIsPublic
      }
    }
  `);

  const blogIsLive = blogStatusQuery.sanityGeneralBlogPage.blogIsPublic;

  return (
    <div>
      <SetupStyles />
      <GlobalStyles />
      <Typography />
      <SkipLinkStyles href="#main" tabIndex={0}>
        Skip to main content
      </SkipLinkStyles>
      <Nav blogStatus={blogIsLive} />
      <main role="main" id="main">
        {children}
      </main>
      <Footer blogStatus={blogIsLive} />
    </div>
  );
}
