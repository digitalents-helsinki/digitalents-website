const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const indexPageTemplate = path.resolve('src/templates/indexPageTemplate.js')
    const teamTemplate = path.resolve('src/templates/teamTemplate.js')
    const jobsTemplate = path.resolve('src/templates/jobsTemplate.js')
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
          allContentfulJobsTemplate{
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
        result.data.allContentfulJobsTemplate.edges.forEach((edge) => {
          createPage({
            path: edge.node.teamSlug,
            component: jobsTemplate,
            context: {
              slug: edge.node.teamSlug
            }
          })
        })
        return
      })
    )
  })
}