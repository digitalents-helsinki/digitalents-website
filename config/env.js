const convict = require('convict')

// configs
const { spaceId, accessToken } = require('../.contentful.json')

const config = convict({
  contentful: {
    spaceId: {
      doc: 'The Space ID',
      format: String,
      env: 'CONTENTFUL_SPACE_ID',
      default: spaceId
    },
    accessToken: {
      doc: 'The Access Token',
      format: String,
      env: 'CONTENTFUL_DELIVERY_TOKEN',
      default: accessToken
    }
  }
})

module.exports = config
