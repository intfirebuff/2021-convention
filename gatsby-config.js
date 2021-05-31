module.exports = {
  siteMetadata: {
    title: "2021 IFBA Convention",
    author: "Int'l Fire Buff Associates",
    description: "Join us in Ottawa-Gatineau for the IFBA 2021 Annual Convention",
    url: "https://convention.ifba.org",
    twitterUsername: "@intfirebuff"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: '2021 IFBA Convention',
        short_name: 'IFBA 2021',
        description: "Join us in Ottawa-Gatineau for the IFBA 2021 Annual Convention",
        lang: 'en',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/crest.png'
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-198120027-1"
      },
    },
  ],
}
