module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `5t78d498o5f0`,
        accessToken: `781855a7603482584dc0cae7a90771a4ff7ae75c1c2b7e690613ba2e914561db`
      }
    },
    'gatsby-transformer-remark'
  ]
};
