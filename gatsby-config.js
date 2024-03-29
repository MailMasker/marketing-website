module.exports = {
  siteMetadata: {
    title: `Mail Masker`,
    description: `Mail Masker is a privacy-focused email service that allows people to create “burner” email addresses which forward to your inbox until you disable them. It’s a great way to keep marketers at a distance by limiting unwanted email, and makes you harder to track.`,
    author: `Dewpoint Solutions, Inc`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `Poppins\:300,400,600,700`, // you can also specify font weights and styles
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
    {
      resolve: "gatsby-plugin-ackee-tracker",
      options: {
        domainId: process.env.ACKEE_DOMAIN_ID,
        server: "https://mail-masker-analytics.netlify.app",
        ignoreLocalhost: true,
        detailed: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
