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
          fi: allContentfulPageTemplate(filter: {node_locale: { regex: "/fi-FI/" }}) {
            edges {
              node {
                slug
                node_locale
              }
            }
          }
          en: allContentfulPageTemplate(filter: {node_locale: { regex: "/en-US/" }}) {
            edges {
              node {
                slug
                node_locale
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
        result.data.en.edges.forEach((edge) => {
          createPage({
            path: '/en/',
            component: indexPageTemplate,
            context: {
              slug: edge.node.slug,
              node_locale: edge.node.node_locale
            }
          })
        })
        result.data.fi.edges.forEach((edge) => {
          createPage({
            path: '/fi/',
            component: indexPageTemplate,
            context: {
              slug: edge.node.slug,
              node_locale: edge.node.node_locale
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