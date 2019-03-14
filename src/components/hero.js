import React, { Fragment } from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import BGImg from 'gatsby-background-image'

class HeroAlt extends React.Component {
  render () {
    return (
      <Fragment>
        {this.props.heros.edges.map((hero) => {
          return (
            <Fragment>
              <HeroWrapper>
                <LeftImage>
                  <BGImg fluid={hero.node.heroLeftBackgroundImage.fluid}>
                    <Img fluid={hero.node.heroLeftImage.fluid} />
                  </BGImg>
                </LeftImage>
                <TextWrapper>
                  {hero.node.heroText.map((text) => {
                    return <h1>{text}</h1>
                  })}
                  <p>{hero.node.heroLowerText}</p>
                </TextWrapper>
                <RightImage>
                  <Img fluid={hero.node.heroRightBackgroundImage.fluid} />
                </RightImage>
              </HeroWrapper>
              <TextContent>
                  <p>{hero.node.textContent.textContent}</p>
              </TextContent>
            </Fragment>
          )
        })}
      </Fragment>
    )
  }
}

const Hero = () => (
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
                fluid(maxWidth: 350) {
                  ...GatsbyContentfulFluid
                }
              }
              heroRightBackgroundImage {
                fluid(maxWidth: 350) {
                  ...GatsbyContentfulFluid
                }
              }
              heroRightImage {
                fluid(maxWidth: 350) {
                  ...GatsbyContentfulFluid
                }
              }
              heroText
              heroLowerText
              textContent { textContent }
            }
          }
        }
      }
    `}
    render={(data) => (
      <HeroAlt heros={data.allContentfulHero} />
    )}
  />
)

const HeroWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
`

const LeftImage = styled.div`
  height: 100%;
  width: 100%;
`

const RightImage = styled.div`
  height: 100%;
  width: 100%;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
  }

`

const TextContent = styled.div`
  text-align: center;
`
export default Hero