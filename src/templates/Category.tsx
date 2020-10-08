import React from 'react';
import { graphql } from 'gatsby';

import { SEO, PostsList } from '../components';
import { Layout } from '../containers';

interface Props {
  data: {
    allMdx: {
      edges: any[];
    };
    allCategoriesJson: {
      nodes: {
        description: string;
      }[];
    };
  };
}

const Category: React.FC<Props> = ({
  data: {
    allMdx: { edges },
    allCategoriesJson: { nodes },
  },
}) => {
  const { category } = edges[0].node.frontmatter;
  const description = nodes[0] && nodes[0].description;

  // TODO ADD Image
  return (
    <Layout SEOComponent={<SEO title={category} description={description} />}>
      <h1 style={{ textAlign: 'center' }}>Category - {category}</h1>
      <hr className="section-heading-divider" />
      <PostsList edges={edges} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query categoriesQuery($category: String) {
    allCategoriesJson(filter: { name: { eq: $category } }) {
      nodes {
        description
      }
    }
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date
            category
            excerpt
          }
        }
      }
    }
  }
`;

export default Category;
