import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/SEO';
import PreviewCard from '../components/PreviewCard';
import usePagination from '../utils/usePagination';
import GridPagination from '../components/GridPagination';
import CtaBanner from '../components/CtaBanner';

const BlogStyles = styled.div`
  h1 {
    background-color: var(--grey-bg);
    display: inline-block;
    padding: 2rem 3rem;
    border-radius: 2px;
    font-size: 4.5rem;
    @media (max-width: 450px) {
      font-size: 4rem;
    }
    @media (max-width: 407px) {
      font-size: 3.4rem;
      padding: 1.5rem 1rem;
    }
  }
  .category-heading {
    margin: 2rem auto;
    .wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
    .categories {
      max-width: 500px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      @media (max-width: 975px) {
        max-width: 100%;
        justify-content: flex-start;
      }
      a {
        font-size: 1.6rem;
        padding: 1rem;
      }
      .guide-text {
        width: 100%;
        text-align: right;
        margin-right: 1rem;
        font-size: 2rem;
        @media (max-width: 975px) {
          text-align: left;
        }
        @media (max-width: 450px) {
          font-size: 1.6rem;
        }
      }
      .category-link {
        text-decoration: underline solid transparent;
        transition: text-decoration 0.4s;
        @media (max-width: 450px) {
          font-size: 1.4rem;
        }
        @media (max-width: 407px) {
          font-size: 1.3rem;
        }
        &:hover,
        &:focus {
          text-decoration: underline solid var(--text-color);
          transition: text-decoration 0.4s;
        }
        &[aria-current='page'] {
          position: relative;
          &::after {
            content: '';
            position: absolute;
            height: 70%;
            width: 100%;
            left: 0px;
            top: 6.5px;
            background-color: var(--accent-blue);
            z-index: -1;
            border-radius: 3px;
            opacity: 0.7;
          }
        }
      }
    }
  }
  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
    grid-auto-rows: 350px auto auto auto;
    gap: 4rem;
    @media (max-width: 420px) {
      grid-auto-rows: 150px auto auto auto;
    }
    margin-bottom: 4rem;
  }
`;

export default function Blog({ data }) {
  const { allPosts, allCategories, blogPage } = data;
  const blogPosts = allPosts.nodes;
  const categories = allCategories.nodes;

  const [next, previous, currentItems, currentPage, maxPage] = usePagination(
    blogPosts,
    9
  );

  return (
    <>
      <SEO
        title={blogPage.metaContent.title}
        description={blogPage.metaContent.description[0].children[0].text}
        image={blogPage.metaContent.image.imageFile.asset.fluid.src}
      />
      <BlogStyles>
        <section className="category-heading">
          <div className="wrapper">
            <h1>{blogPage.pageTitle}</h1>
            <div className="categories">
              <p className="guide-text">{blogPage.categoryHeading}</p>
              <Link to="/blog" className="category-link">
                All Posts
              </Link>
              {categories.map((category) => (
                <Link
                  to={`/blog/${category.slug.current}`}
                  className="category-link"
                  key={category._id}
                >
                  <span>{category.categoryName}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <div className="wrapper">
          <section className="posts-grid">
            {currentItems().map((post) => (
              <PreviewCard post={post} />
            ))}
          </section>
        </div>
        <GridPagination
          currentPage={currentPage}
          previous={previous}
          next={next}
          maxPage={maxPage}
        />
        <CtaBanner
          bannerHeading={blogPage.ctaBannerReference.heading}
          bannerText={blogPage.ctaBannerReference.subHeading}
        />
      </BlogStyles>
    </>
  );
}

export const query = graphql`
  query BlogQuery($categoryName: [String]) {
    allPosts: allSanityBlogPost(
      filter: {
        isPastOrToday: { eq: true }
        category: { elemMatch: { categoryName: { in: $categoryName } } }
      }
      sort: { fields: publishDate, order: DESC }
    ) {
      totalCount
      nodes {
        postTitle
        postTagline
        publishDate(formatString: "MMMM D, YYYY")
        author
        authorLink
        slug {
          current
        }
        heroImage {
          imageFile {
            asset {
              fluid(maxWidth: 600) {
                ...GatsbySanityImageFluid
              }
            }
          }
          imageAltText
        }
      }
    }
    allCategories: allSanityBlogCategory {
      nodes {
        _id
        categoryName
        slug {
          current
        }
      }
    }
    blogPage: sanityGeneralBlogPage {
      metaContent {
        title
        description {
          children {
            text
          }
        }
        image {
          imageFile {
            asset {
              fluid(maxWidth: 1200) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
      pageTitle
      categoryHeading
      ctaBannerReference {
        heading
        subHeading
      }
    }
  }
`;
