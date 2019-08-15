import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/layout'
import Hero from '../components/IndexPage/hero'
import Sponsors from '../components/IndexPage/sponsors'
import Teams from '../components/IndexPage/teams'
import Portfolio from '../components/IndexPage/portfolio'
import Services from '../components/IndexPage/services'
import Jobs from '../components/IndexPage/jobs'

const indexPageTemplate = (props) => {
  const { hero, teams, sponsorBlocks } = props.data.contentfulIndexPageTemplate

  const language = props.pageContext.node_locale === 'en-US' ? 'en' : 'fi'
  const pagePrefix = props.pageContext.node_locale === 'en-US' ? '/en/' : '/fi/'

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <Layout language={language} pagePrefix={pagePrefix}>
      <Hero data={hero} />
      <Teams pagePrefix={pagePrefix} data={teams} />
      <Portfolio />
      <Services />
      <Jobs />
      <Sponsors data={sponsorBlocks} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query indexPageQuery($slug: String! $node_locale: String!){
    contentfulIndexPageTemplate(slug: {eq: $slug} node_locale: {eq: $node_locale}) {
      hero {
        heroText
        heroLowerText
        heroLeftBackgroundImage {
          fluid(maxWidth: 350) {
            ...GatsbyContentfulFluid
          }
        }
        heroLeftImage {
          file {
            url
          }
        }
        heroRightBackgroundImage {
          fluid(maxWidth: 350) {
            ...GatsbyContentfulFluid
          }
        }
        heroRightImage {
          file {
            url
          }
        }
        textContent {
          childMarkdownRemark {
            html
          }
        }
      }
      teams {
        teamsTitle
        teamsText
      }
      someContent {
        someText
        podcastLinks {
          linkText
          linkURL
        }
        learningLinks {
          linkText
          linkURL
        }
      }
      personBlocks {
        name
        title
        email
        phoneNumber
      }
      location {
        address
        postAddress
        coordinates {
          lat
          lon
        }
      }
      sponsorBlocks {
        sponsorName
        sponsorImage {
          file {
            url
          }
        }
        urlLink
      }
    }
  }
`

export default indexPageTemplate