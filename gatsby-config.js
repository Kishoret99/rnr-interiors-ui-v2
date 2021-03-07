module.exports = {
  siteMetadata: {
    title: `Gatsby Tailwind CSS + Styled-Components + Storybook Starter`,
    description: `A bare-bones Tailwind CSS + Styled-Components + Storybook starter to kickoff your project.`,
    author: `@dennisvash`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-resolve-src',
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        printRejected: true,
        purgeOnly: [`src/styles/globals.css`],
        // develop: true, // Enable while using `gatsby develop`
      },
    },
  ],
};
