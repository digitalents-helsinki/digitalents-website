import React from 'react'
import styled from 'styled-components'
import StripedIMG from '../images/podcast_henkilot_bg_Kulmat_ylhäällä_ja_alhaalla.svg'

const SomeContent = props => {
  return (
    <SomeWrapper>
      <div className="sometext">
        <p>{props.data.someText}</p>
      </div>
      <ContentWrapper>
        <div className="podcasts">
          <h3>Podcastit</h3>
          {props.data.podcasts.map(podcast => {
            return <p>{podcast}</p>
          })}
        </div>
        <div className="learning-material">
          <h3>Oppimateriaali</h3>
          {props.data.learningLinks.map(link => {
            return <p>{link}</p>
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
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 45px;

  @media screen and (min-width: 1000px) {
  }

  .sometext {
    padding-top: 100px;
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

  @media screen and (min-width: 1000px) {
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

    p {
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

    p {
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
