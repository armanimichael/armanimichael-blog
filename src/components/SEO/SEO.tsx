import React from 'react';
import Helmet from 'react-helmet';

import { useSiteMetadata } from '../../queries/useSiteMetadata';

interface Props {
  description?: string;
  title?: string;
  image?: string;
  keywords?: string;
  lang?: string;
  meta?: [];
  googleSiteVerification?: string;
}

const SEO: React.FC<Props> = ({
  description,
  lang = 'en',
  meta = [],
  title,
  keywords,
  image,
  googleSiteVerification,
}) => {
  const siteMetadata = useSiteMetadata();
  const metaDescription: string = description || siteMetadata.description;
  const socialImage =
    siteMetadata.siteUrl + (image ? '/' + image : '/social_image.jpg');

  return (
    <Helmet
      defer={false}
      htmlAttributes={{
        lang,
      }}
      title={
        title
          ? title.charAt(0).toUpperCase() + title.substring(1)
          : siteMetadata.title
      }
      meta={[
        // ! SEO
        {
          name: 'google-site-verification',
          content: googleSiteVerification,
        },
        {
          name: `viewport`,
          content: `width=device-width, initial-scale=1.0, maximum-scale=5.0`,
        },
        {
          name: `keywords`,
          content: keywords || '',
        },
        {
          name: `description`,
          content: metaDescription,
        },
        // ! SOCIALS
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: 'og:image',
          content: socialImage,
        },
        {
          property: 'og:site_name',
          content: siteMetadata.sitename,
        },
        // ! TWITTER
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: 'twitter:image',
          content: socialImage,
        },
      ].concat(meta)}
    />
  );
};

export default SEO;
