module.exports = {
  siteMetadata: {
    title: 'Armani Michael',
    sitename: 'Armani Michael',
    siteUrl: 'https://blog.armanimichael.com',
    description:
      'Software Developer based in Italy. Read more about programming and Web Development on my Blog - I mostly write about React, but you can find other topics too.',
    author: '',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-176071860-1',
          anonymize: true,
        },
        environments: ['production', 'development'],
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/configs/`,
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'armani-michael-blog',
        short_name: 'mike-blog',
        start_url: '/',
        background_color: '#232946',
        theme_color: '#232946',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: false,
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 3000,
        production: false,
        disable: true,
      },
    },
    'gatsby-plugin-preact',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [
          { userAgent: '*', allow: '/' },
          { userAgent: '*', disallow: ['/privacy', '/privacy/'] },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        createLinkInHead: true,
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }
        `,
        serialize: ({ site, allSitePage }) => {
          const setPreferences = pathLink => {
            const configs = {
              '/': {
                priority: 1,
                changefreq: 'weekly',
              },
            };

            if (!configs[pathLink]) {
              return {
                priority: 0.7,
                changefreq: 'monthly',
              };
            }

            return configs[pathLink];
          };

          return allSitePage.edges.map(({ node: { path } }) => {
            return {
              url: site.siteMetadata.siteUrl + path,
              changefreq: setPreferences(path).changefreq,
              priority: setPreferences(path).priority,
            };
          });
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 950,
              quality: 100,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
            },
          },
          'gatsby-plugin-offline',
        ],
      },
    },
  ],
};
