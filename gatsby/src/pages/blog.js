import React from 'react';
import { graphql } from 'gatsby';
import BlogCategoryPage from '../components/BlogCategoryPage';
import SEO from '../components/SEO';

export default function Blog({ data, pageContext }) {
  const { allPosts, allCategories } = data;
  return (
    <>
      <SEO title="Blog" description="See all blog posts by CB Therapy" />
      <BlogCategoryPage
        blogPosts={allPosts.nodes}
        categories={allCategories.nodes}
        activeCategory={pageContext}
      />
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
  }
`;
