import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { PageButtons, PostsList, CategoriesList } from '../components';
import { Layout } from '../containers';

interface Props extends PageProps {
  data: {
    allMdx: { edges: string[]; totalCount: number };
  };
}

const IndexPage: React.FC<Props> = ({
  data: {
    allMdx: { edges, totalCount },
  },
}) => (
  <Layout>
    <div className="feed">
      <div className="posts">
        <PostsList edges={edges} />
      </div>
      <CategoriesList />
    </div>
    <PageButtons
      previous={totalCount > 10}
      latest={false}
      pageNumber={0}
      totalPages={totalCount}
    />
  </Layout>
);

export default IndexPage;

export const postsListQuery = graphql`
  {
    allMdx(sort: { order: DESC, fields: frontmatter___date }, limit: 10) {
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
