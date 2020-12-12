import { graphql, useStaticQuery } from 'gatsby';

export const useCategories = (): {
  id: string;
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
          id
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
