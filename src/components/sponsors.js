import React from 'react'
import styled from 'styled-components'
import { StaticQuery } from 'gatsby';
import Img from 'gatsby-image'

class Sponsors extends React.Component {
  render() {
    return (
      <SponsorsWrapper>
        {this.props.data.edges.map(sponsor => {
          return (
            <SponsorWrapper>
              <Img fixed={sponsor.node.sponsorImage.fixed} alt={sponsor.node.sponsorName} className="sponsorImage" />
            </SponsorWrapper>
          )
        })}
      </SponsorsWrapper>
    )
  }
}

const SponsorsQuery = () => (
  <StaticQuery
    query={graphql`
      query SponsorsQuery {
        allContentfulSponsor(filter: { node_locale: { regex: "/en-US/" } }) {
          edges {
            node {
              sponsorName
              sponsorImage {
                fixed(width: 150, height: 150) {
                  ...GatsbyContentfulFixed
                }
              }
              urlLink
            }
          }
        }
      }
    `}
    render={data => <Sponsors data={data.allContentfulSponsor} />}
  />
)

const SponsorsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const SponsorWrapper = styled.div`
  .sponsorImage {
    height: 150px;
    width: 150px;
  }
`

export default SponsorsQuery