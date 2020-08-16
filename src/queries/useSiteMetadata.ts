import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = (): {
  title: string;
  description: string;
  author: string;
  sitename: string;
  siteUrl: string;
} => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          description
          author
          sitename
          siteUrl
        }
      }
    }
  `);

  return siteMetadata;
};
