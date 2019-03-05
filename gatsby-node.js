const path = require('path')

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('./src/templates/blog-post.js')

    resolve(
      graphql(`
        {
          allContentfulBlogPost {
            edges {
              node {
                title
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.error(result.errors)
          reject(result.errors)
        }

        result.data.allContentfulBlogPost.edges.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}`,
            component: blogPostTemplate,
            context: {
              slug: post.node.slug
            }
          })
        })
      })
    )
  })
}
