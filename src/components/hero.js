import React, { Fragment } from 'react'
import styled from 'styled-components'
import BGImg from 'gatsby-background-image'
import angleIcon from '../images/angledown.svg'

const Hero = props => {
  return (
    <Fragment>
      <HeroWrapper>
        <LeftImage>
          <BGImg
            fluid={props.data.heroLeftBackgroundImage.fluid}
            className="leftImage"
          >
            <img
              src={props.data.heroLeftImage.file.url}
              alt=""
              className="leftTopImage"
            />
          </BGImg>
        </LeftImage>
        <div className="spacer" />
        <TextWrapper>
          {props.data.heroText.map(text => {
            return <h1 className="heroh1">{text}</h1>
          })}
          <p className="embed">{props.data.heroLowerText}</p>
          <img src={angleIcon} alt="" />
        </TextWrapper>
        <RightImage>
          <BGImg
            fluid={props.data.heroRightBackgroundImage.fluid}
            className="rightImage"
          >
            <img
              src={props.data.heroRightImage.file.url}
              alt=""
              className="rightTopImage"
            />
          </BGImg>
        </RightImage>
      </HeroWrapper>
      <TextContent>
        <div
          dangerouslySetInnerHTML={{
            __html: props.data.textContent.childMarkdownRemark.html
          }}
        />
      </TextContent>
    </Fragment>
  )
}

const HeroWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 1000px) {
    align-items: flex-start;
  }

  .spacer {
    @media screen and (min-width: 1000px) {
      width: 145vw;
    }
  }
`

const LeftImage = styled.div`
  height: 100%;
  width: 100%;

  .leftImage {
    width: 100%;

    .leftTopImage {
      box-shadow: 0 0 0 3px white, inset 0 0 0 3px white;
    }
  }

  @media (max-width: 1000px) {
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

  @media (max-width: 1000px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    height: 650px;

    .rightImage {
      width: 75%;

      .rightTopImage {
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
  padding-top: 35rem;
  padding-bottom: 10rem;
  height: 100vh;

  @media (max-width: 1000px) {
    padding-bottom: 0;
    align-self: flex-end;
    max-width: 300px;
    height: 50%;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    font-family: futura-pt-bold;
  }

  p {
    max-width: 800px;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    padding-top: 4rem;

    @media screen and (max-width: 1000px) {
      padding-top: 1rem;
    }
  }

  img {
    padding-top: 1rem;
    width: 50px;

    @media (min-width: 1000px) {
      padding-top: 10rem;
    }
  }
`

const TextContent = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 3rem;

  @media screen and (min-width: 1000px) {
    padding-top: 2rem;
    padding-left: 10rem;
    padding-right: 10rem;
  }

  div {
    p {
      padding-bottom: 1.5rem;
      text-align: center;
      max-width: 1100px;
      margin: 0 auto;
      font-size: 20px;
      font-weight: 400;
    }
  }
`
export default Hero
