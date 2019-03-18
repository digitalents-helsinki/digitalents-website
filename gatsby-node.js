const path = require(`path`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const indexPageTemplate = path.resolve('src/templates/indexPageTemplate.js')
    const teamTemplate = path.resolve('src/templates/teamTemplate.js')
    resolve(
      graphql(`
        {
          allContentfulPageTemplate{
            edges {
              node {
                slug
              }
            }
          }
          allContentfulTeamTemplate{
            edges {
              node {
                teamSlug
              }
            }
          }
        }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulPageTemplate.edges.forEach((edge) => {
          createPage({
            path: '/',
            component: indexPageTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        result.data.allContentfulTeamTemplate.edges.forEach((edge) => {
          createPage({
            path: `teams/${edge.node.teamSlug}`,
            component: teamTemplate,
            context: {
              slug: edge.node.teamSlug,
            },
          })
        })
        return
      })
    )
  })
}