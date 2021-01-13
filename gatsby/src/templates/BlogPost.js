import React from 'react';
import { graphql } from 'gatsby';

export default function BlogPost({ data: { post } }) {
  console.log(post);
  return <p>This is a blog post</p>;
}

export const query = graphql`
  query($slug: String!) {
    post: sanityBlogPost(slug: { current: { eq: $slug } }) {
      postTitle
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
    }
  }
`;
