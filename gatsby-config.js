module.exports = {
  pathPrefix: "/Rashtr-Patravaha",
  siteMetadata: {
    title: `Rastr-Patravaha`,
    description: `Rastr-Patravaha`,
    author: `@nawap`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rashtr-patravaha`,
        short_name: `rashtr-patravaha`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, 
      },
    },
    `gatsby-plugin-netlify-cms`
  ],
}
