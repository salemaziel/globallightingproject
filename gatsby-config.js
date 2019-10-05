module.exports = {
  siteMetadata: {
    title: `Global Lighting Project | Empowering The World`,
    description: `Non-profit organization on a mission to aid developing communities with solar-powered LED lights`,
    author: `@salem`,
    social: {
	twitter: 'salem_amb760',
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-theme-blog-core`,
      // Default options are commented out
      options: {
         basePath: `/`, // Root url for all blog posts
         contentPath: `content/posts`, // Location of blog posts
         assetPath: `content/assets`, // Location of assets
         mdx: true, // Configure gatsby-plugin-mdx
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
  ],
}
