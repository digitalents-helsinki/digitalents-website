const path = require(`path`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const teamTemplate = path.resolve('src/templates/teamTemplate.js')
    resolve(
      graphql(`
        {
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
        if (result.errors) {{
          reject(result.errors)
        }}
        result.data.allContentfulTeamTemplate.edges.forEach((edge) => {
          createPage({
            path: edge.node.teamSlug,
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