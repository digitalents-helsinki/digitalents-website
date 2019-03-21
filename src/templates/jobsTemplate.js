import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import BGImg from 'gatsby-background-image'
import styled from 'styled-components'

const jobsTemplate = (props) => {
  const { teamSlogan, teamDescription, teamImage, teamMaskImage, linkki } = props.data.contentfulJobsTemplate
  
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
          <a href={linkki}>Ohjaamo</a>
        </div>
      </HeroWrapper>
    </Layout>
  )
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
      position: absolute;
      z-index: 5;

      h2 {
        padding-top: 2rem;
        font-weight: 400;
        font-size: 1rem;
      }
    }

    .imageWrapper {
      width: 100%;

      @media screen and (max-width: 400px) {
        min-width: 400px;
      }
    
      .team-background-image {
    
        .team-front-image {
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