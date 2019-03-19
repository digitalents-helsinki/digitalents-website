import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import BGImg from 'gatsby-background-image'
import styled from 'styled-components'

class jobsTemplate extends React.Component {
  render() {
    const { teamSlogan, teamDescription, teamImage, teamMaskImage, linkki } = this.props.data.contentfulJobsTemplate
    return (
      <Layout>
        <h2>{teamSlogan}</h2>
        <ImageWrapper>
          <BGImg fluid={teamImage.fluid} className="team-background-image">
            <img src={teamMaskImage.file.url} alt="" className="team-front-image" />
          </BGImg>
        </ImageWrapper>
        <p>{teamDescription.teamDescription}</p>
        <a href={linkki}>Ohjaamo</a>
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
  query jobsTemplateQuery($slug: String!){
    contentfulJobsTemplate(teamSlug: {eq: $slug}) {
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
      linkki
    }
  }
`

export default jobsTemplate