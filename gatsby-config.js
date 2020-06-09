module.exports = {
  siteMetadata: {
    title: `Mail Masker`,
    description: `A privacy-focused email service that helps limit spam and other unwanted email.`,
    author: `Dewpoint Solutions, Inc`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`300`, `400`, `600`, `700`],
          },
        ],
      },
    },

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
        name: `Mail Masker`,
        short_name: `Mail Masker`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#82899A`,
        display: `minimal-ui`,
        icon: `src/images/favicon512.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
