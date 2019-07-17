import React from 'react'
import styled from 'styled-components'
import StripedIMG from '../images/some-bg.svg'

const SomeContent = props => {
  return (
    <SomeWrapper>
      <div className="sometext">
        <p>{props.data.someText}</p>
      </div>
      <ContentWrapper>
        <div className="podcasts">
          <h3>{props.language === 'fi' ? 'Podcastit' : 'Podcasts'}</h3>
          {props.data.podcastLinks.map(link => {
            return <a href={link.linkURL}>{link.linkText}</a>
          })}
        </div>
        <div className="learning-material">
          <h3>{props.language === 'fi' ? 'Oppimateriaali' : 'Learning material'}</h3>
          {props.data.learningLinks.map(link => {
            return <a href={link.linkURL}>{link.linkText}</a>
          })}
        </div>
      </ContentWrapper>
    </SomeWrapper>
  )
}

const SomeWrapper = styled.div`
  background-color: #353535;
  background-image: url(${StripedIMG});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 45px;

  @media screen and (min-width: 1000px) {
  }

  .sometext {
    padding-top: 40%;
    padding-bottom: 3rem;
    color: white;
    max-width: 800px;

    p {
      font-family: futura-pt, sans-serif;
      font-style: normal;
      font-size: 20px;
      font-weight: 400;
  
    }

    @media screen and (min-width: 1000px) {
      padding-top: 20%;
      padding-right: 10rem;
      padding-left: 10rem;
      font-size: 16px;
    }
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-flow: row nowrap;
  padding-bottom: 100px;
  width: 400px;

  @media screen and (min-width: 1000px) {
    width: 800px;
  }

  .podcasts {
    flex-basis: 50%;
    text-align: right;
    padding-right: 5px;
    border-right: solid 2px #8f8f8f;

    h3 {
      text-transform: uppercase;
      color: #8f8f8f;
      padding-bottom: 5px;
      font-size: 20px;
      font-weight: 400;
    }

    a {
      color: white;
      text-decoration: underline;
      font-size: 20px;

      @media screen and (max-width: 1000px) {
        font-size: 17px;
      }
    }
  }

  .learning-material {
    flex-basis: 50%;
    text-align: left;
    padding-left: 5px;

    h3 {
      text-transform: uppercase;
      color: #8f8f8f;
      padding-bottom: 5px;
      font-size: 20px;
      font-weight: 400;
    }

    a {
      color: white;
      text-decoration: underline;
      font-size: 20px;

      @media screen and (max-width: 1000px) {
        font-size: 17px;
      }
    }
  }
`

export default SomeContent
