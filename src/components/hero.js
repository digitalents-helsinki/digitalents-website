import React, { Fragment } from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

class HeroAlt extends React.Component {
  render () {
    return (
      <Fragment>
        {this.props.heros.edges.map((hero) => {
          return (
            <Fragment>
              <HeroWrapper>
                <LeftImage>
                  <img src={hero.node.heroLeftImage.file.url} alt="" />
                </LeftImage>
                <TextWrapper>
                  {hero.node.heroText.map((text) => {
                    return <h1>{text}</h1>
                  })}
                  <p>{hero.node.heroLowerText}</p>
                </TextWrapper>
                <RightImage>
                  <img src={hero.node.heroRightImage.file.url} alt="" />
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
              heroLeftImage {
                file {
                  url
                }
              }
              heroRightImage {
                file {
                  url
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
  img {
    width: 350px;
    height: 350px;
  }
`

const RightImage = styled.div`
  img {
    width: 350px;
    height: 350px;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TextContent = styled.div`
  text-align: center;
`
export default Hero