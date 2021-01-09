import React from 'react';
import { graphql } from 'gatsby';

import { PostsList, PageButtons, CategoriesList } from '../components';
import { Layout } from '../containers';

interface Props {
  location: {
    pathname: string;
  };
  data: {
    allMdx: {
      edges: any[];
      totalCount: number;
    };
  };
}

const MAX_PAGE_POSTS = 10;

const BlogFeed: React.FC<Props> = ({
  location: { pathname },
  data: {
    allMdx: { edges, totalCount },
  },
}) => {
  const pageNumber: number = +pathname.replace(/[^\d+$]/g, '');

  return (
    <Layout>
      <h1 style={{ textAlign: 'center' }}>Blog - Page {pageNumber}</h1>
      <hr className="section-heading-divider" />
      <div className="feed">
        <div className="posts">
          <PostsList edges={edges} />
        </div>
        <CategoriesList />
      </div>
      <PageButtons
        previous={pageNumber < Math.ceil(totalCount / MAX_PAGE_POSTS) - 1}
        latest={pathname !== '/'}
        pageNumber={pageNumber}
        totalPages={totalCount}
      />
    </Layout>
  );
};

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
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
      totalCount
    }
  }
`;

export default BlogFeed;
