module.exports = {
  siteMetadata: {
    title: 'Reactor',
    description: 'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
    keywords: 'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '9mff43mocd14',
        accessToken: 'yZlfCCftcaQN-DtAmPBZ9T9TGnGx0EUmvkPEMUTtKU8'
      }
    }
  ],
}
