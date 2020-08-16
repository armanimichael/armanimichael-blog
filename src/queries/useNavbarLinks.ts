import { graphql, useStaticQuery } from 'gatsby';

export const useNavbarlinks = (): {
  id: string;
  name: string;
  path: string;
}[] => {
  const {
    allNavbarLinksJson: { nodes },
  } = useStaticQuery(graphql`
    query NavbarLinksQuery {
      allNavbarLinksJson {
        nodes {
          id
          name
          path
        }
      }
    }
  `);

  return nodes;
};
