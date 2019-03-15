import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import BGImg from 'gatsby-background-image'
import styled from 'styled-components'

class teamTemplate extends React.Component {
  render() {
    const { teamTitle, teamSlogan, teamDescription, teamImage, teamMaskImage } = this.props.data.contentfulTeamTemplate
    console.log(this.props)
    return (
      <Layout>
        <h1>{teamTitle}</h1>
        <h2>{teamSlogan}</h2>
        <ImageWrapper>
          <BGImg fluid={teamImage.fluid} className="team-background-image">
            <img src={teamMaskImage.file.url} alt="" className="team-front-image" />
          </BGImg>
        </ImageWrapper>
        <p>{teamDescription.teamDescription}</p>
      </Layout>
    )
  }
}

const ImageWrapper = styled.div`
  width: 100%
  height: 100%

  .team-background-image {
    width: 100%;
    height: 100%;

    .team-front-image {
      width: 100%;
      height: 100%;
    }
  }
`

export const pageQuery = graphql`
  query teamTemplateQuery($slug: String!){
    contentfulTeamTemplate(teamSlug: {eq: $slug}) {
      teamTitle
      teamSlogan
      teamDescription {
        teamDescription
      }
      teamImage {
        fluid(maxWidth: 350) {
          ...GatsbyContentfulFluid
        }
      }
      teamMaskImage {
        file {
          url
        }
      }
    }
  }
`

export default teamTemplate