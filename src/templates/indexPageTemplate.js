import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

import Hero from '../components/hero'
import Persons from '../components/persons'
import Sponsors from '../components/sponsors'

import Teams from '../components/teams'
import SomeContent from '../components/somecontent'
import Location from '../components/location'

class indexPageTemplate extends React.Component {
  render () {
    const { hero, someContent, personBlocks, location, sponsorBlocks } = this.props.data.contentfulPageTemplate
    return (
      <Layout>
        <Hero data={hero} />
        <Teams />
        <SomeContent data={someContent} />
        <Persons data={personBlocks} />
        <Location data={location} />
        <Sponsors data={sponsorBlocks} />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query indexPageQuery($slug: String!){
    contentfulPageTemplate(slug: {eq: $slug}) {
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
      someContent {
        someText
        podcasts
        learningLinks
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