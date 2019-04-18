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
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    flex-basis: 100%;
  }

  .spacer {
    @media screen and (min-width: 1000px) {
      width: 145vw;
    }
  }

  .heroh1 {
    font-size: 3.8rem;
    line-height: 1.2;

    @media screen and (max-width: 1000px) {
      font-size: 1.5rem;
    }
  }
  .embed {
    padding-top: 4rem;
    font-size: 24px;
    font-weight: 500;
    margin-top: 22px;
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
    flex-basis: 100%;
    justify-content: flex-end;

    .rightImage {
      width: 50%;
      height: 100%;

      .rightTopImage {
        height: 100%;
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
  padding-top: 25rem;

  @media (max-width: 1000px) {
    flex-basis: 50%;
    justify-content: flex-start;
    padding-top: 250px;
    max-width: 300px;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    font-family: futura-pt-bold;
  }

  p {
    padding-top: 20px;
    max-width: 800px;
    text-align: center;
  }

  img {
    padding-top: 4rem;
    width: 50px;
  }
`

const TextContent = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding-top: 10rem;
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
