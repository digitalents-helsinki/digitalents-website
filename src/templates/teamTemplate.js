import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import BGImg from 'gatsby-background-image'
import styled from 'styled-components'

const teamTemplate = (props) => {
  const { teamTitle, showPageTitle, teamSlogan, teamDescription, teamImage, teamMaskImage, imagePosition, link, portfolioEnabled, portfolioBG } = props.data.contentfulPageTemplate

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
        <div className="wrapper">
          <div className="description" dangerouslySetInnerHTML={{__html: teamDescription.childMarkdownRemark.html}} />
        </div>
        <div className="link">
          <a href={link}>{link}</a>
        </div>
      </HeroWrapper>
      {portfolioEnabled ?
        <PortfolioWrapper>
          <BGImg fluid={portfolioBG.fluid}>
            <div className="flex-div">
              <div className="left">
                <Diamond />
                <a href="https://vimeo.com/294134648"><Diamond /></a>
                <Diamond />
              </div>
              <div className="middle">
                <Diamond />
                <a href="https://www.youtube.com/watch?v=iZOI_A7uYoI"><Diamond /></a>
                <Diamond />
                <a href="https://www.youtube.com/watch?v=tkWuwdB2K3k"><Diamond /></a>
                <Diamond />
              </div>
              <div className="right">
                <Diamond />
                <a href="https://www.youtube.com/watch?v=eMIrofxQtKo"><Diamond /></a>
                <Diamond />
              </div>
            </div>
          </BGImg>
        </PortfolioWrapper>
      : null}
    </Layout>
  )
}

const HeroWrapper = styled.div`
  .wrapper {
    display: flex;
    justify-content: center;

    .description {
      padding-top: 3rem;
      padding-left: 2rem;
      padding-right: 2rem;
      padding-bottom: 3rem;
      max-width: 800px;

      p {
        font-size: 20px;
        padding-top: 1rem;
      
        @media screen and (min-width: 2000px) {
          font-size: 30px;
          padding-top: 2rem;
        }
      }

      @media screen and (min-width: 400px) {
        padding-left: 5rem;
        padding-right: 5rem;
      }

      @media screen and (min-width: 2000px) {
        max-width: 1200px;
        padding-top: 10rem;
        padding-bottom: 10rem;
      }
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
  heigth: 100vh;

  .titleText {
    padding-left: 3rem;
    padding-top: 5rem;
    flex-basis: 50%;
    position: absolute;
    z-index: 5;
    max-width: 700px;
    left: ${props => props.position ? "50%" : "0"};

    h1 {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 3rem;
      font-family: futura-pt-bold;
    }

    h2 {
      padding-top: 2rem;
      font-weight: 400;
      font-size: 1.25rem;
    }

    @media screen and (min-width: 1000px) {
      padding-top: 10rem;
    }

    @media screen and (min-width: 2000px) {
      max-width: 1400px;

      h1 {
        font-size: 6rem;
      }

      h2 {
        padding-top: 4rem;
        font-size: 2rem;
      }
    }
  }

  .imageWrapper {
    width: 65%;
  
    .team-background-image {
      width: 100%;
  
      .team-front-image {
        box-shadow: 0 0 50px white;
      }
    }
  }
}
`

const PortfolioWrapper = styled.div`
  .flex-div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding-top: 5%;
    padding-bottom: 5%;
    height: 100vh;

    .left {
      padding-right: 250px;
      a:nth-child(2) div {
        transform: translateX(150px) rotate(45deg);
        background-color: red;
      }
    }

    .middle {
      display: flex;
      a:nth-child(2) div {
        transform: translateY(150px) rotate(45deg);
        background-color: red;
      }

      a:nth-child(4) div {
        transform: translateY(-150px) rotate(45deg);
        background-color: red;
      }
    }

    .right {
      padding-left: 250px;

      a:nth-child(2) div {
        transform: translateX(-150px) rotate(45deg);
        background-color: red;
      }
    }

    @media screen and (max-width: 1000px) {
      flex-flow: column nowrap;

      .left {
        display: flex;
        padding-right: 0;
        padding-bottom: 15%;

        a:nth-child(2) div {
          transform: translateY(75px) rotate(45deg);
        }
      }

      .middle {
        display: flex;
        flex-flow: column nowrap;

        a:nth-child(2) div {
          transform: translateX(-75px) rotate(45deg);
        }

        a:nth-child(4) div {
          transform: translateX(75px) rotate(45deg);
        }
      }

      .right {
        display: flex;
        padding-left: 0;
        padding-top: 15%;

        a:nth-child(2) div {
          transform: translateY(-75px) rotate(45deg);
        }
      }
    }

    @media screen and (min-width: 2000px) {
      .left {
        padding-right: 350px;

        a:nth-child(2) div {
          transform: translateX(210px) rotate(45deg);
        }
      }

      .middle {
        a:nth-child(2) div {
          transform: translateY(180px) rotate(45deg);
        }
    
        a:nth-child(4) div {
          transform: translateY(-170px) rotate(45deg);
        }
      }

      .right {
        padding-left: 300px;

        a:nth-child(2) div {
          transform: translateX(-175px) rotate(45deg);
        }
      }
    }
  }
`

const Diamond = styled.div`
  width: 150px;
  height: 150px;
  background-color: black;
  transform: rotate(45deg);

  @media screen and (max-width: 1000px) {
    width: 75px;
    height: 75px;
  }

  @media screen and (min-width: 2000px) {
    width: 200px;
    height: 200px;
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