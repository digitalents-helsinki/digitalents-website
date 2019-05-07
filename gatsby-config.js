const config = require('./config/env')
const { BLOCKS, INLINES } = require('@contentful/rich-text-types')

module.exports = {
  siteMetadata: {
    title: `Digitalents Helsinki`,
    description: `No description needed.`,
    author: `@digitalentsHKI`
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || config.get('contentful.spaceId'),
        accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || config.get('contentful.accessToken')
      }
    },
    {
      resolve: `@contentful/gatsby-transformer-contentful-richtext`,
      options: {
        renderOptions: {
          renderNode: {
          }
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ]
}
