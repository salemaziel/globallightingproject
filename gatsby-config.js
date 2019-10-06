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
        name: `Global Lighting Project | Empowering The World`,
        short_name: `Global Lighting Project`,
        description: `Non-profit organization on a mission to aid developing communities with solar-powered LED lights`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#f0af00`,
        display: `standalone`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-theme-blog-core`,
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
