import { graphql, useStaticQuery } from 'gatsby';

export const useRandomPage = (): string => {
  const {
    allSitePage: { nodes, totalCount },
  } = useStaticQuery(graphql`
    query EveryPageQuery {
      allSitePage(
        filter: { path: { regex: "/^((?!404|page|category|^/$).)*$/" } }
      ) {
        totalCount
        nodes {
          path
        }
      }
    }
  `);

  const randomIndex = Math.floor(Math.random() * totalCount);
  return nodes[randomIndex] ? nodes[randomIndex].path : '/';
};
