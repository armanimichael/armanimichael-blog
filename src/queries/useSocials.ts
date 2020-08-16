import { graphql, useStaticQuery } from 'gatsby';

export const useSocials = (): { id: string; link: string; image: string }[] => {
  const {
    allSocialsJson: { nodes },
  } = useStaticQuery(graphql`
    query SocialsQuery {
      allSocialsJson {
        nodes {
          id
          link
          image
        }
      }
    }
  `);

  return nodes;
};
