import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import PortableText from '@sanity/block-content-to-react';

import HeroHeader from '../components/HeroHeader';
import CtaBanner from '../components/CtaBanner';
import SEO from '../components/SEO';

const BlogPostStyles = styled.div`
  .author-block {
    padding: 3rem 0;
    font-size: 2rem;
    font-family: QuicksandReg;
    @media (max-width: 605px) {
      font-size: 1.8rem;
    }
    .wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      @media (max-width: 605px) {
        flex-direction: column;
        width: 90%;
      }
    }
    .author {
      margin-left: 8rem;
      @media (max-width: 605px) {
        margin-left: 0;
        margin-top: 1rem;
      }
    }
  }
  .blog-post {
    padding: 4rem 0;
    background-color: var(--pale-grey-bg);
    font-size: 1.5rem;
    .wrapper {
      width: 55%;
      @media (max-width: 860px) {
        width: 70%;
      }
      @media (max-width: 650px) {
        width: 90%;
      }
    }

    h2 {
      font-family: MontserratSemiBold;
      margin-bottom: 1.8rem;
    }
    h3 {
      font-family: MontserratSemiBold;
      margin: 1.5rem 0;
    }
    p {
      line-height: 1.4;
      margin-bottom: 3rem;
    }
    blockquote {
      background-color: rgba(255, 136, 130, 0.8);
      border-radius: 7px;
      font-size: 2rem;
      position: relative;
      padding: 3rem 5rem 2.5rem 6rem;
      width: 80%;
      display: flex;
      justify-content: center;
      margin: 0 auto 3.5rem;
      &:hover span::before {
        width: 100%;
        transition: width 0.7s;
        @media (max-width: 550px) {
          width: 0%;
        }
      }
      @media (max-width: 450px) {
        font-size: 1.7rem;
        padding-right: 3rem;
        padding-left: 3rem;
      }
      p {
        position: relative;
        z-index: 10;
        margin-bottom: 0;
        padding-right: 20px;
        &::before {
          content: '“';
          font-size: 5rem;
          font-family: serif;
          position: absolute;
          left: -37px;
          top: -20px;
        }
        &::after {
          content: '”';
          font-size: 5rem;
          font-family: serif;
          position: absolute;
          right: -20px;
          bottom: -37px;
        }
        @media (max-width: 450px) {
          padding-right: 0;
          &::before {
            top: -40px;
            left: -27px;
          }
          &::after {
            right: -24px;
            bottom: -56px;
          }
        }
      }
      span {
        z-index: 10;
        position: relative;
        &::before {
          content: '';
          display: inline-block;
          top: 0;
          bottom: 0;
          left: 0;
          width: 0%;
          background: var(--grey-bg);
          opacity: 0.5;
          border-radius: 4px;
          position: absolute;
          z-index: -1;
          transition: width 0.7s;
        }
      }
    }
    figure {
      max-width: 500px;
      margin: 1rem auto 4rem;
      border-left: 5px solid var(--accent-blue);
      @media (max-width: 695px) {
      }
      @media (max-width: 350px) {
        width: 100%;
      }
    }
  }
`;

export default function BlogPost({ data: { post } }) {
  const serializers = {
    types: {
      block: (props) => {
        const { style = 'normal' } = props.node;

        const customBlockquote = {
          blockquote: (
            <blockquote>
              <p>
                <span>{props.children}</span>
              </p>
            </blockquote>
          ),
        };
        return (
          customBlockquote[style] ||
          PortableText.defaultSerializers.types.block(props)
        );
      },
    },
  };
  return (
    <>
      <SEO
        title={post.postTitle}
        description={post.postDescription}
        image={post.heroImage.imageFile.asset.fluid.src}
      />
      <BlogPostStyles>
        <HeroHeader
          h1Heading={post.postTitle}
          imageSrc={post.heroImage.imageFile.asset.fluid.src}
          centerHeading
        />
        <section className="author-block">
          <div className="wrapper">
            <p className="date">{post.publishDate}</p>
            <p className="author">
              Written by{' '}
              <Link to="/about" className="link">
                Cassandra Brennan
              </Link>
            </p>
          </div>
        </section>
        <section className="blog-post">
          <div className="wrapper">
            <PortableText
              blocks={post._rawPost}
              serializers={serializers}
              projectId="7ehdot7l"
              dataset="production"
            />
          </div>
        </section>
        <CtaBanner bannerHeading={post.ctaBannerReference.heading} />
      </BlogPostStyles>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    post: sanityBlogPost(slug: { current: { eq: $slug } }) {
      postTitle
      postDescription
      postTagline
      publishDate(formatString: "MMMM D, YYYY")
      author
      authorLink
      heroImage {
        imageFile {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
        imageAltText
      }
      _rawPost(resolveReferences: { maxDepth: 5 })
      ctaBannerReference {
        heading
      }
    }
  }
`;
