import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PreviewCard from './PreviewCard';

const BlogCategoryPageStyles = styled.div`
  h1 {
    background-color: var(--grey-bg);
    display: inline-block;
    padding: 2rem 3rem;
    border-radius: 2px;
    font-family: MontserratSemiBold;
    font-size: 3rem;
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
      a {
        font-size: 1.6rem;
        padding: 1rem;
      }
      .guide-text {
        width: 100%;
        text-align: right;
        margin-right: 1rem;
        font-size: 2rem;
      }
      .category-link {
        text-decoration: underline solid transparent;
        transition: text-decoration 0.4s;
        &:hover {
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
  }
`;

export default function BlogCategoryPage({
  blogPosts,
  categories,
  activeCategory,
}) {
  return (
    <BlogCategoryPageStyles>
      <section className="category-heading">
        <div className="wrapper">
          <h1>Blog & Updates</h1>
          <div className="categories">
            <p className="guide-text">Sort posts by category:</p>
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
          {blogPosts.map((post) => (
            <PreviewCard post={post} />
          ))}
        </section>
      </div>
    </BlogCategoryPageStyles>
  );
}
