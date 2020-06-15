module.exports = {
  siteMetadata: {
    title: `Jonas-Nielsen-portfolio`,
    description: `Jonas Nielsen - Front-End-Developer portfolio 2020`,
    author: `@JonasWn`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
  ],
}
