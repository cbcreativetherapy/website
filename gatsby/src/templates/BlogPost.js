import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import PortableText from '@sanity/block-content-to-react';
import { HiArrowLeft } from 'react-icons/hi';

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
      margin: 0 8rem;
      @media (max-width: 927px) {
        margin: 0 4rem;
      }
      @media (max-width: 605px) {
        margin: 1rem 0;
      }
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      @media (max-width: 835px) {
        margin-top: 1rem;
      }
      @media (max-width: 605px) {
        margin-top: 0;
      }
      .tag {
        margin-right: 0.5rem;
      }
      .tag-link {
        color: var(--accent-blue);
        padding: 0.5rem;
        margin: 0 1rem 0 0;
        text-decoration: underline solid transparent;
        transition: text-decoration 0.4s;
        &:hover,
        &:focus {
          text-decoration: underline solid var(--accent-blue);
          transition: text-decoration 0.4s;
        }
      }
    }
  }
  .back-link {
    font-size: 2rem;
    display: inline-block;
    padding-bottom: 3px;
    color: var(--dark-green);
    border-bottom: 1px solid var(--pale-grey-bg);
    transition: border-bottom 0.4s;
    position: relative;
    top: -15px;
    left: 5%;

    &:hover,
    &:focus {
      border-bottom: 1px solid var(--dark-green);
      transition: border-bottom 0.4s;
    }

    .back-arrow {
      position: relative;
      top: 3px;
      margin-right: 1rem;
    }
  }
  .blog-post {
    position: relative;
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

export default function BlogPost({ data }) {
  const { post } = data;
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
            {post.author ? (
              <p className="author">
                Written by{' '}
                <Link to={post.authorLink} className="link">
                  {post.author}
                </Link>
              </p>
            ) : (
              <p className="author">
                Written by{' '}
                <Link to="/about" className="link">
                  Cassandra Brennan
                </Link>
              </p>
            )}
            <ul className="tags">
              <li className="tag">Tags:</li>
              {post.category.map((tag) => (
                <li key={tag._key}>
                  <Link className="tag-link" to={`/blog/${tag.slug.current}`}>
                    {tag.categoryName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="blog-post">
          <div className="back-to">
            <Link to="/response-art" className="back-link">
              <HiArrowLeft className="back-arrow" />
              Back to Blog
            </Link>
          </div>
          <div className="wrapper">
            <PortableText
              blocks={post._rawPost}
              serializers={serializers}
              projectId={process.env.GATSBY_SANITY_PROJECT_ID}
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
      category {
        _key
        categoryName
        slug {
          current
        }
      }
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
