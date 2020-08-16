const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query PostsSlugsQuery {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
              slug
            }
          }
        }
        distinct(field: frontmatter___category)
      }
    }
  `);
  // ! ERRORS
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // * Create blog post pages.
  const posts = result.data.allMdx.edges;
  const categories = result.data.allMdx.distinct;

  const postsPerPage = 10;
  const numPages = Math.ceil(posts.length / postsPerPage);

  for (let i = 0; i < numPages; i++) {
    if (i) {
      createPage({
        path: `/page/${i}`,
        component: path.resolve('./src/templates/BlogFeed.tsx'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
        },
      });
    }
  }

  // Generate Posts
  posts.forEach(({ node }) => {
    createPage({
      path:
        node.frontmatter.slug.indexOf('/') !== 0
          ? `/${node.frontmatter.slug}`
          : node.frontmatter.slug,
      component: path.resolve(`./src/templates/Post.tsx`),
      context: { id: node.id },
    });
  });

  // Generate Categories
  categories.forEach(node => {
    createPage({
      path: '/category/' + node.toLowerCase().replace(/ /g, '-').trim(),
      component: path.resolve('./src/templates/Category.tsx'),
      context: {
        category: node,
      },
    });
  });
};
