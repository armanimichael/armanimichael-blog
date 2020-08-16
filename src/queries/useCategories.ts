import { graphql, useStaticQuery } from 'gatsby';

export const useCategories = (): {
  background: string;
  color: string;
  description: string;
  icon: string;
  name: string;
}[] => {
  const {
    allCategoriesJson: { nodes },
  } = useStaticQuery(graphql`
    query CategoriesQuery {
      allCategoriesJson {
        nodes {
          background
          color
          description
          icon
          name
        }
      }
    }
  `);

  return nodes;
};
