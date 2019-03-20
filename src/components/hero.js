import React, { Fragment } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import BGImg from 'gatsby-background-image'
import arrowIcon from '../images/angledown.svg'

class Hero extends React.Component {
  render () {
    return (
      <Fragment>
        <HeroWrapper>
          <LeftImage>
            <BGImg fluid={this.props.data.heroLeftBackgroundImage.fluid} className="leftImage">
              <img src={this.props.data.heroLeftImage.file.url} alt="" className="leftTopImage" />
            </BGImg>
          </LeftImage>
          <TextWrapper>
            {this.props.data.heroText.map((text) => {
              return <h1>{text}</h1>
            })}
            <p>{this.props.data.heroLowerText}</p>
            <img src={arrowIcon} alt="" />
          </TextWrapper>
          <RightImage>
            <BGImg fluid={this.props.data.heroRightBackgroundImage.fluid} className="rightImage">
              <img src={this.props.data.heroRightImage.file.url} alt="" className="rightTopImage" />
            </BGImg>
          </RightImage>
        </HeroWrapper>
        <TextContent>
          <div dangerouslySetInnerHTML={{__html: this.props.data.textContent.childMarkdownRemark.html}} />
        </TextContent>
      </Fragment>
    )
  }
}


const HeroWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width:1000px) {
    flex-basis: 100%;
  }
`

const LeftImage = styled.div`
  height: 100%;
  width: 100%;

  .leftImage {
    width: 100%;

    .leftTopImage {
    }
  }

  @media (max-width:1000px) {
    display: none;
  }
`

const RightImage = styled.div`
  height: 100%;
  width: 100%;

  .rightImage {
    width: 100%;

    .rightTopImage {
      box-shadow: 0 0 0 3px white, inset 0 0 0 3px white;
    }
  }

  @media (max-width:1000px) {
    display: flex;
    flex-flow: row nowrap;
    flex-basis: 100%;
    justify-content: flex-end;

    .rightImage {
      width: 50%;
      height: 100vh;

      .rightTopImage {
        height: 100vh;
      }
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

  @media (max-width:1000px) {
    flex-basis: 50%;
    justify-content: flex-start;
    padding-top: 250px;
    max-width: 300px;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  p {
    padding-top: 20px;
    max-width: 400px;
    text-align: center;
  }

  img {
    padding-top: 100px;
  }
`

const TextContent = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding-top: 1rem;

  div {
    p {
      padding-bottom: 1rem;
    }
  }
`
export default Hero