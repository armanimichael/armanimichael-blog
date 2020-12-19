import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link, graphql } from 'gatsby';
import { SEO, Button } from '../components';
import { Layout } from '../containers';

interface Props {
  data: {
    mdx: any;
  };
}

const shortcodes = { Link };
const Post: React.FC<Props> = ({ data: { mdx } }) => (
  <Layout
    allowPadding={false}
    SEOComponent={
      <SEO
        title={
          mdx.frontmatter.crawlerTitle
            ? mdx.frontmatter.crawlerTitle
            : mdx.frontmatter.title
        }
        description={mdx.frontmatter.description || mdx.frontmatter.excerpt}
        keywords={mdx.frontmatter.keywords}
        image={mdx.frontmatter.category.toLowerCase() + '.jpg'}
      />
    }
  >
    <div className="blog-wrapper">
      <MDXProvider components={shortcodes}>
        <h1>{mdx.frontmatter.title}</h1>
        <p>{mdx.frontmatter.excerpt}</p>
        <hr />
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <hr />
        <div className="centered">
          <Button title="Homepage">Homepage</Button>
        </div>
      </MDXProvider>
    </div>
  </Layout>
);

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      slug
      frontmatter {
        title
        description
        keywords
        excerpt
        crawlerTitle
        category
      }
    }
  }
`;

export default Post;
