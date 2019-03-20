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
        <HeroWrapper>
          <div className="flexWrapper">
            <div className="titleText">
              <h2>{teamSlogan}</h2>
            </div>
            <div className="imageWrapper">
              <BGImg fluid={teamImage.fluid} className="team-background-image">
                <img src={teamMaskImage.file.url} alt="" className="team-front-image" />
              </BGImg>
            </div>
          </div>
          <div className="description" dangerouslySetInnerHTML={{__html: teamDescription.childMarkdownRemark.html}} />
          <div className="link">
            <a href="https://ohjaamo.hel.fi">Ohjaamo</a>
          </div>
        </HeroWrapper>
      </Layout>
    )
  }
}

const HeroWrapper = styled.div`
  .flexWrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    width: 100%;

    .titleText {
      padding-left: 1rem;
      padding-top: 100px;
      flex-basis: 50%;

      h2 {
        padding-top: 2rem;
        font-weight: 400;
        font-size: 1rem;
      }
    }

    .imageWrapper {
      width: 100%;
    
      .team-background-image {
        width: 100%;
    
        .team-front-image {
          width: 100%;
          box-shadow: 0 0 0 3px white, inset 0 0 0 3px white;
        }
      }
    }
  }

  .description {
    padding-top: 1rem;
    padding-left: 5rem;
    padding-right: 5rem;
    padding-bottom: 1rem;

    p {
      padding-top: 1rem;
    }
  }

  .link {
    text-align: center;
    padding-bottom: 2rem;
  }
`

export const pageQuery = graphql`
  query jobsTemplateQuery($slug: String!){
    contentfulJobsTemplate(teamSlug: {eq: $slug}) {
      teamTitle
      teamSlogan
      teamDescription {
        childMarkdownRemark {
          html
        }
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