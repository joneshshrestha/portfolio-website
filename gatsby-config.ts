import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  pathPrefix: `/portfolio-website-gh-pages`,
  siteMetadata: {
    title: `Jonesh Shrestha - AI/ML Engineer`,
    description: `Personal portfolio and blog of Jonesh Shrestha, an AI/ML Engineer specializing in machine learning, deep learning, and data science.`,
    author: `Jonesh Shrestha`,
    siteUrl: `https://joneshshrestha.com`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content/blog/`,
      },
      __key: 'blog',
    },
    // Google Analytics
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-GC9TQT4XE7'],
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    // RSS Feed
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }: any) => {
              return allMdx.nodes.map((node: any) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ 'content:encoded': node.html }],
                });
              });
            },
            query: `
              {
                allMdx(
                  sort: { frontmatter: { date: DESC } }
                  filter: { fields: { slug: { regex: "/^\\\\/blog\\\\//" } } }
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                      author
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Jonesh Shrestha - AI/ML Blog RSS Feed',
            match: '^/blog/',
          },
        ],
      },
    },
  ],
};

export default config;
