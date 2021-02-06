const path = require('path');
const { DateTime } = require('luxon');

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
      path: `post/${post.slug.current}`,
      component: BlogPostTemplate,
      context: {
        slug: post.slug.current,
      },
    });
  });
}

async function turnResponseArtIntoPages({ graphql, actions }) {
  const ResponseArtTemplate = path.resolve('./src/templates/ResponseArt.js');

  const { data } = await graphql(`
    query {
      responseArt: allSanityResponseArt {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);

  data.responseArt.nodes.forEach((post) => {
    actions.createPage({
      path: `response-art/${post.slug.current}`,
      component: ResponseArtTemplate,
      context: {
        slug: post.slug.current,
      },
    });
  });
}

async function turnCategoriesIntoPages({ graphql, actions }) {
  const BlogCategoryTemplate = path.resolve('./src/pages/blog.js');

  const { data } = await graphql(`
    query {
      categories: allSanityBlogCategory {
        nodes {
          categoryName
          slug {
            current
          }
        }
      }
    }
  `);

  data.categories.nodes.forEach((post) => {
    actions.createPage({
      path: `blog/${post.slug.current}`,
      component: BlogCategoryTemplate,
      context: {
        categoryName: post.categoryName,
        slug: post.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  await Promise.all([
    turnBlogPostsIntoPages(params),
    turnResponseArtIntoPages(params),
    turnCategoriesIntoPages(params),
  ]);
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  actions.createTypes([
    schema.buildObjectType({
      name: 'SanityBlogPost',
      interfaces: ['Node'],
      fields: {
        isPastOrToday: {
          type: 'Boolean!',
          resolve: (post) =>
            DateTime.fromISO(post.publishDate) <= DateTime.local(),
        },
      },
    }),
  ]);
};
