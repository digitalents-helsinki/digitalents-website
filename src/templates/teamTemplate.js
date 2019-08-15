import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout/layout'

const teamTemplate = (props) => {
  const { teamTitle, showPageTitle, teamSlogan, teamDescription, teamImage, imagePosition, link, portfolioEnabled, portfolioBG } = props.data.contentfulPageTemplate

  const language = props.pageContext.node_locale === 'en-US' ? 'en' : 'fi'
  const pagePrefix = props.pageContext.node_locale === 'en-US' ? '/en/' : '/fi/'

  return (
    <Layout language={language} pagePrefix={pagePrefix}>
      <StyleWrapper image={teamImage.file.url}>
        <div className="container">
          <h1>{teamTitle}</h1>
          <div className="description" dangerouslySetInnerHTML={{__html: teamDescription.childMarkdownRemark.html}} />
        </div>
      </StyleWrapper>
    </Layout>
  )
}

const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${props => props.image});
  background-size: cover;
  height: 100vh;
  text-align: center;

  .container {
    margin-top: 350px;
    padding-top: 200px;
    background: white;
    height: calc(100vh - 200px);
    width: 100vw;

    h1 {
      font-size: 64px;
      font-family: futura-pt-bold;
    }

    .description {
      width: 60vw;
      margin: auto;
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
        file {
          url
        }
      }
      teamMaskImage {
        file {
          url
        }
      }
      imagePosition
      link
      portfolioEnabled
      portfolioBG {
        fluid(maxWidth: 350) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default teamTemplate