import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import BGImg from 'gatsby-background-image'
import styled from 'styled-components'

const teamTemplate = (props) => {
  const { teamTitle, showPageTitle, teamSlogan, teamDescription, teamImage, teamMaskImage, imagePosition, link } = props.data.contentfulPageTemplate

  const language = props.pageContext.node_locale === 'en-US' ? 'en' : 'fi'
  const pagePrefix = props.pageContext.node_locale === 'en-US' ? '/en/' : '/fi/'

  return (
    <Layout language={language} pagePrefix={pagePrefix}>
      <HeroWrapper>
        <FlexWrapper position={imagePosition}>
          <div className="titleText">
            {showPageTitle ? <h1>{teamTitle}</h1> : null}
            <h2>{teamSlogan}</h2>
          </div>
          <div className="imageWrapper">
            <BGImg fluid={teamImage.fluid} className="team-background-image">
              <img src={teamMaskImage.file.url} alt="" className="team-front-image" />
            </BGImg>
          </div>
        </FlexWrapper>
        <div className="description" dangerouslySetInnerHTML={{__html: teamDescription.childMarkdownRemark.html}} />
        <div className="link">
          <a href={link}>{link}</a>
        </div>
      </HeroWrapper>
    </Layout>
  )
}

const HeroWrapper = styled.div`
  .description {
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;

    @media screen and (min-width: 400px) {
      padding-left: 5rem;
      padding-right: 5rem;
    }
  }

  .link {
    text-align: center;
  }
`

const FlexWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${props => props.position ? "flex-start" : "flex-end"};
  width: 100vw;

  .titleText {
    text-align: center;
    padding-left: 1rem;
    padding-top: 100px;
    flex-basis: 50%;
    position: absolute;
    z-index: 5;
    max-width: 500px;
    left: ${props => props.position ? "50%" : "0"};


    @media screen and (min-width: 1000px) {
      position: static;
    }

    h1 {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 2rem;
    }

    h2 {
      padding-top: 2rem;
      font-weight: 400;
      font-size: 1rem;
    }
  }

  .imageWrapper {
    width: 50%;

    @media screen and (min-width: 1000px) {
      width: 50%;
    }

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
`

export const pageQuery = graphql`
  query teamTemplateQuery($slug: String! $node_locale: String!){
    contentfulPageTemplate(teamSlug: {eq: $slug} node_locale: {eq: $node_locale}) {
      teamTitle
      showPageTitle
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
      imagePosition
      link
    }
  }
`

export default teamTemplate