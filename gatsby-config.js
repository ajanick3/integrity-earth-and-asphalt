module.exports = {
  siteMetadata: {
    title: "Integrity Earth and Asphalt",
    author: "Integrity Earth and Asphalt",
    description: "Integrity Earth and Asphalt"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Integrity Earth and Asphalt',
        short_name: 'integrity-earth-and-asphalt',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
