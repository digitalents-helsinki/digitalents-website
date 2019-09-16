import React, { Fragment } from 'react'
import styled from 'styled-components'
import angleIcon from '../../images/angledown.svg'
import rightArrow from '../../images/right-arrow.svg'
import Video from './video'
import Cat from '../../images/funny-cat.png'

export default class Hero extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      textVisible: true,
      hover: false
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleHover = this.handleHover.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      textVisible: !state.textVisible
    }))
  }

  handleHover() {
    this.setState(state => ({
      hover: !state.hover
    }))
  }

  render() {
    return (
      <Fragment>
        <HeroWrapper onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
          <div className="video-overlay"></div>
          <Video />
          <TextWrapper>
            <div className={this.state.textVisible ? 'title-texts fadeIn' : 'title-texts fadeOut'}>
              {this.props.data.heroText.map(text => {
                return <h1 className="heroh1">{text}</h1>
              })}
            </div>
            <p className={this.state.textVisible ? 'embed fadeIn' : 'embed fadeOut'}>{this.props.data.heroLowerText}</p>
          </TextWrapper>
          <a href="#text"><img className="angleIcon" src={angleIcon} alt="" /></a>
          <img className={this.state.hover ? 'cat' : 'noCat'} src={Cat} alt="" />
        </HeroWrapper>
        <TextContent id="text">
          <h2>Meistä</h2>
          <p>Digitalents Helsingin keskiössä on ajatus jatkuvasta oppimisesta. Tarjoamme ympäristön, jossa ennakkoluuloton kokeileminen ei ole vain sallittua, vaan myös kannustettavaa. Nuoret osaajat, hyvät resurssit ja laajat verkostot kohtaavat meillä, luoden otollisen alustan innovaatioille.</p>
          <button>Lue lisää meistä <img className="arrow" src={rightArrow} alt="" /></button>
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

  .noCat {
    position: absolute;
    bottom: 200vh;
  }

  .cat {
    position: absolute;
    animation: cat-anim 2.5s linear;
    animation-iteration-count: infinite;
  }

  .cat-transparent {
    animation: cat-trans 2.5s linear;
    animation-iteration-count: infinite;
  }

  @keyframes cat-anim {
    100%,0%{
      bottom: -80vh;
    }
    50%{
      bottom: -5vh;
    }
  }

  @keyframes: cat-trans {
    100%,0%{
      opacity: 0;
    }
    50%{
      opacity: 1;
    }
  }

  @keyframes rainbow-bg{
		100%,0%{
			background-color: rgba(255,0,0,0.6);
		}
		8%{
			background-color: rgba(255,127,0,0.6);
		}
		16%{
			background-color: rgba(255,255,0,0.6);
		}
		25%{
			background-color: rgba(127,255,0,0.6);
		}
		33%{
			background-color: rgba(0,255,0,0.6);
		}
		41%{
			background-color: rgba(0,255,127,0.6);
		}
		50%{
			background-color: rgba(0,255,255,0.6);
		}
		58%{
			background-color: rgba(0,127,255,0.6);
		}
		66%{
			background-color: rgba(0,0,255,0.6);
		}
		75%{
			background-color: rgba(127,0,255,0.6);
		}
		83%{
			background-color: rgba(255,0,255,0.6);
		}
		91%{
			background-color: rgba(255,0,127,0.6);
		}
  }

  @keyframes bigsmall {
    0%,100%{
      font-size: 4rem;
    }
    50%{
      font-size: 2rem;
    }
  }

  .rainbow{
      animation: rainbow 2.5s linear;
      animation-iteration-count: infinite;
  }

  .video-react {
    position: fixed;
    z-index: -10;
  }

  .video-overlay {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
		animation: rainbow-bg 2.5s linear;
		animation-iteration-count: infinite;
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

    @media screen and (max-width: 1024px) {
      width: 80vw;
    }

    h1 {
      animation: bigsmall 2s linear;
      animation-iteration-count: infinite;
      font-weight: bold;
      text-transform: uppercase;
      font-family: futura-pt-bold;
      margin-right: 1rem;

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

  @media screen and (max-width: 1200px) {
    .title-texts {
      flex-direction: column;
      text-align: center;
    }
  }
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  height: 50vh;
  padding-top: 10vh;
  padding-bottom: 10vh;
  background: white;

  h2 {
    font-size: 32px;
    line-height: 150%;
    font-family: futura-pt-bold;
    font-weight: 700;
  }

  p {
    max-width: 900px;
    font-family: Asap;
    font-size: 16px;
    line-height: 150%;
  }

  button {
    background: #ffffff;
    border: 0px solid #000000;
    width: 200px;
    height: 50px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .arrow {
    animation: floating-hor-arrow 1.6s infinite ease-in-out 0s;

    @keyframes floating-hor-arrow {
      0% {
        transform: translateX(0);
      }
      65% {
        transform: translateX(11px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }

  @media screen and (max-width: 600px) {
    height: 100vh;
    justify-content: center;
    padding: 0 1rem;
    
    p {
      margin: 3rem 0;
    }
  }
`
