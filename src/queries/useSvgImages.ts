import { graphql, useStaticQuery } from 'gatsby';

export const useSvgImages = (): {
  id: string;
  publicURL: string;
  name: string;
}[] => {
  const {
    allFile: { nodes },
  } = useStaticQuery(graphql`
    query SvgImagesQuery {
      allFile(
        filter: { extension: { eq: "svg" }, relativePath: { regex: "/icons/" } }
      ) {
        nodes {
          id
          publicURL
          name
        }
      }
    }
  `);

  return nodes;
};
