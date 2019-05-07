const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const indexPageTemplate = path.resolve('src/templates/indexPageTemplate.js')
    const teamTemplate = path.resolve('src/templates/teamTemplate.js')
    resolve(
      graphql(`
        {
          indexfi: allContentfulIndexPageTemplate(filter: {node_locale: { regex: "/fi-FI/" }}) {
            edges {
              node {
                slug
                node_locale
              }
            }
          }
          indexen: allContentfulIndexPageTemplate(filter: {node_locale: { regex: "/en-US/" }}) {
            edges {
              node {
                slug
                node_locale
              }
            }
          }
          otherfi: allContentfulPageTemplate(filter: {node_locale: { regex: "/fi-FI/" }}){
            edges {
              node {
                teamSlug
                node_locale
              }
            }
          }
          otheren: allContentfulPageTemplate(filter: {node_locale: { regex: "/en-US/" }}){
            edges {
              node {
                teamSlug
                node_locale
              }
            }
          }
        }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.indexen.edges.forEach((edge) => {
          createPage({
            path: '/en/',
            component: indexPageTemplate,
            context: {
              slug: edge.node.slug,
              node_locale: edge.node.node_locale
            }
          })
        })
        result.data.indexfi.edges.forEach((edge) => {
          createPage({
            path: '/fi/',
            component: indexPageTemplate,
            context: {
              slug: edge.node.slug,
              node_locale: edge.node.node_locale
            }
          })
        })
        result.data.otheren.edges.forEach((edge) => {
          createPage({
            path: `/en/${edge.node.teamSlug}/`,
            component: teamTemplate,
            context: {
              slug: edge.node.teamSlug,
              node_locale: edge.node.node_locale
            },
          })
        })
        result.data.otherfi.edges.forEach((edge) => {
          createPage({
            path: `/fi/${edge.node.teamSlug}/`,
            component: teamTemplate,
            context: {
              slug: edge.node.teamSlug,
              node_locale: edge.node.node_locale
            },
          })
        })
        return
      })
    )
  })
}