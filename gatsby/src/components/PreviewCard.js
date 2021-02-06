import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PreviewCardStyles = styled.div`
  background-color: var(--accent-coral);
  @supports not (grid-template-rows: subgrid) {
    grid-template-rows: 300px auto auto auto;
    @media (max-width: 420px) {
      grid-template-rows: 150px auto auto auto;
    }
  }
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 4;
  grid-gap: 1rem;
  border-radius: 2px;
  box-shadow: 0px 0px 0px white;
  transition: box-shadow 0.4s;
  &:hover,
  &:focus-within {
    box-shadow: 7px 7px 5px var(--grey-bg);
    transition: box-shadow 0.4s;

    .post-title::after {
      width: 95%;
      transition: width 0.4s;
    }
  }

  .picture-link {
    display: inherit;
  }
  .post-title {
    width: 100%;
    margin-bottom: -1.5rem;
    font-size: 2.5rem;
    padding: 0 2rem;
    align-self: center;
    display: inherit;
    position: relative;
    z-index: 10;
    text-decoration: underline solid transparent;
    transition: text-decoration 0.4s;
    &::after {
      content: '';
      height: 100%;
      width: 0;
      background-color: var(--main-bg);
      opacity: 0.4;
      position: absolute;
      top: 0;
      left: 10px;
      z-index: -1;
      border-radius: 4px;
      transition: width 0.4s;
    }
    &:hover,
    &:focus {
      text-decoration: underline solid var(--text-color);
      transition: text-decoration 0.4s;
    }
  }
  .post-date,
  .author {
    font-size: 1.4rem;
    padding: 0 2rem 1.5rem;
  }
  .post-date {
    padding-bottom: 0;
    align-self: end;
    @media (max-width: 600px) {
      margin-top: 1rem;
    }
  }
  .author {
    text-decoration: underline solid transparent;
    transition: text-decoration 0.4s;
    &:hover,
    &:focus {
      text-decoration: underline solid var(--text-color);
      transition: text-decoration 0.4s;
    }
  }
`;

export default function PreviewCard({ post }) {
  return (
    <PreviewCardStyles>
      <Link to={`/post/${post.slug.current}`} className="picture-link">
        <Img
          fluid={post.heroImage.imageFile.asset.fluid}
          alt={post.heroImage.imageAltText}
        />
      </Link>
      <Link to={`/post/${post.slug.current}`} className="post-title">
        <h2>{post.postTitle}</h2>
      </Link>
      <p className="post-date">{post.publishDate}</p>
      {post.author ? (
        <a
          className="author"
          href={post.authorLink}
          target="_blank"
          rel="noreferrer"
        >{`Written by ${post.author}`}</a>
      ) : (
        <Link to="/about" className="author">
          Written by Cassandra Brennan
        </Link>
      )}
    </PreviewCardStyles>
  );
}
