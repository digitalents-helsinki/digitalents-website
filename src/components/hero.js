import React, { Fragment } from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import BGImg from 'gatsby-background-image'
import arrowIcon from '../images/angledown.svg'

class Hero extends React.Component {
  render () {
    return (
      <Fragment>
        {this.props.heros.edges.map((hero) => {
          return (
            <Fragment>
              <HeroWrapper>
                <LeftImage>
                  <BGImg fluid={hero.node.heroLeftBackgroundImage.fluid} className="leftImage">
                    <img src={hero.node.heroLeftImage.file.url} alt="" className="leftTopImage" />
                  </BGImg>
                </LeftImage>
                <TextWrapper>
                  {hero.node.heroText.map((text) => {
                    return <h1>{text}</h1>
                  })}
                  <p>{hero.node.heroLowerText}</p>
                </TextWrapper>
                <RightImage>
                  <BGImg fluid={hero.node.heroRightBackgroundImage.fluid} className="rightImage">
                    <img src={hero.node.heroRightImage.file.url} alt="" className="rightTopImage" />
                  </BGImg>
                </RightImage>
              </HeroWrapper>
              <TextContent>
                <img src={arrowIcon} alt="" />
                  <div dangerouslySetInnerHTML={{__html: hero.node.textContent.childMarkdownRemark.html}} />
              </TextContent>
            </Fragment>
          )
        })}
      </Fragment>
    )
  }
}

const HeroQuery = () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        allContentfulHero(
          filter: {node_locale: {regex: "/en-US/"}}
        ) {
          edges {
            node {
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
              heroText
              heroLowerText
              textContent { 
                childMarkdownRemark {
                  html
                } 
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <Hero heros={data.allContentfulHero} />
    )}
  />
)

const HeroWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const LeftImage = styled.div`
  height: 100%;
  width: 100%;

  .leftImage {
    width: 100%;

    .leftTopImage {
    }
  }
`

const RightImage = styled.div`
  height: 100%;
  width: 100%;

  .rightImage {
    width: 100%;

    .rightTopImage {
    }
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 5;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  p {
    max-width: 400px;
    text-align: center;
  }
`

const TextContent = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding-top: 1rem;

  p {
    max-width: 800px;
    padding-bottom: 1rem;
  }
`
export default HeroQuery