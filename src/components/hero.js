import React, { Fragment } from 'react'
import styled from 'styled-components'
import angleIcon from '../images/angledown.svg'
import angleBlack from '../images/angledown-black.svg'
import Video from '../components/video'

export default class Hero extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      textVisible: true
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      textVisible: !state.textVisible
    }))
  }

  render() {
    return (
      <Fragment>
        <HeroWrapper>
          <Video playMovie={this.handleClick}
          />
          <div className="video-overlay"></div>
          <TextWrapper>
            <div className={this.state.textVisible ? 'title-texts fadeIn' : 'title-texts fadeOut'}>
              {this.props.data.heroText.map(text => {
                return <h1 className="heroh1">{text}</h1>
              })}
            </div>
            <p className={this.state.textVisible ? 'embed fadeIn' : 'embed fadeOut'}>{this.props.data.heroLowerText}</p>
          </TextWrapper>
          <a href="#text"><img className="angleIcon" src={angleIcon} alt="" /></a>
        </HeroWrapper>
        <TextContent id="text">
          <div 
            dangerouslySetInnerHTML={{
              __html: this.props.data.textContent.childMarkdownRemark.html
            }}
          />
          <a href="#teams"><img className="angleIcon" src={angleBlack} alt="" /></a>
        </TextContent>
      </Fragment>
    )
  }
}

const HeroWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 1000px) {
    flex-basis: 100%;
  }

  .video-overlay {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    background-color: rgba(40, 50, 70, 0.6);
  }

  .transition-appear {
    opacity: 0.01;
  }

  .transition-appear.transition-appear-active {
    opacity: 1;
    transition: opacity .5s ease-in;
  }

  .angleIcon {
    position: absolute;
    z-index: 100;
    width: 30px;
    top: 92vh;
    left: calc(50vw - 15px);
    animation: floating-arrow 1.6s infinite ease-in-out 0s;

    @keyframes floating-arrow {
      0% {
        transform: translateY(0);
      }
      65% {
        transform: translateY(11px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }

  

  .playButton {
    position: absolute;
    z-index: 10;
    left: 47vw;
    top: 75vh;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 5;
  color: white;

  .fadeOut {
    opacity: 0;
    transition: opacity 0.5s;
  }
  
  .fadeIn {
    opacity: 1;
    transition: opacity 0.5s;
  }

  @media screen and (max-width: 1000px) {
    padding-bottom: 0;
    justify-content: flex-end;
    max-width: 300px;
    height: 50%;
  }

  .title-texts {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 70vw;

    h1 {
      font-size: 3.5rem;
      font-weight: bold;
      text-transform: uppercase;
      font-family: futura-pt-bold;
  
      @media screen and (max-width: 1000px) {
        font-size: 2rem;
      }
    }
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
`

const TextContent = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 3rem;
  height: 100vh;

  @media screen and (min-width: 1000px) {
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

  .angleIcon {
    position: absolute;
    z-index: 100;
    width: 30px;
    top: 192vh;
    left: calc(50vw - 15px);
    animation: floating-arrow 1.6s infinite ease-in-out 0s;

    @keyframes floating-arrow {
      0% {
        transform: translateY(0);
      }
      65% {
        transform: translateY(11px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`
