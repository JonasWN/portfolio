module.exports = {
  siteMetadata: {
    title: `Jonas-Nielsen-portfolio`,
    description: `Jonas Nielsen - Front-End-Developer portfolio 2020`,
    author: `@JonasWn`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
  ],
}
