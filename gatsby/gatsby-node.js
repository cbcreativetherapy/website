import path from 'path';

async function turnBlogPostsIntoPages({ graphql, actions }) {
  const BlogPostTemplate = path.resolve('./src/templates/BlogPost.js');

  const { data } = await graphql(`
    query {
      blogPosts: allSanityBlogPost {
        nodes {
          postTitle
          slug {
            current
          }
        }
      }
    }
  `);

  data.blogPosts.nodes.forEach((post) => {
    actions.createPage({
      path: `blog/${post.slug.current}`,
      component: BlogPostTemplate,
      context: {
        slug: post.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  await turnBlogPostsIntoPages(params);
}
