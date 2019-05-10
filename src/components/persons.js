import React from 'react'
import styled from 'styled-components'
import stripedIMG from '../images/podcast_henkilot_bg_ilman_yläkulmaa.svg'

const Persons = props => {
  return (
    <Wrapper>
      <PersonsWrapper>
        {props.data.map(person => {
          return (
            <PersonWrapper id="persons">
              <div className="point-wrapper">
                <div className="salmiak-point" />
              </div>
              <div className="text-wrapper">
                <h2 className="person-name">{person.name}</h2>
                <p className="person-title">{person.title}</p>
                <p className="person-contact-email">
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                </p>
                <p className="person-contact-phone">{person.phoneNumber}</p>
              </div>
            </PersonWrapper>
          )
        })}
      </PersonsWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #f4f4f4;
  background-image: url(${stripedIMG});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-top: 5rem;
  padding-bottom: 5rem;
`

const PersonsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 2rem 0;
  margin-left: 5%;

  @media screen and (min-width: 1024px) {
    margin-left: 20%;
  }

  > *:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`

const PersonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 50%;
  max-width: 50%;

  @media screen and (max-width: 800px) {
    flex-basis: 100%;
    max-width: 100%;
  }

  .point-wrapper {
    width: 50x;
    display: flex;
    justify-content: center;
    .salmiak-point {
      margin-top: 1.4rem;
      margin-right: 15px;
      transform-origin: center;
      background-color: #1f1f1f;
      width: 35px;
      height: 35px;
      transform: rotate(45deg);
      border-radius: 3px;

      @media screen and (max-width: 600px) {
        margin-left: 15px;
      }
    }
  }

  .text-wrapper {
    flex: 1;

    .person-name {
      font-family: futura-pt-bold;
      font-size: 39px;
      font-weight: 700;
      line-height: 1;

      @media screen and (max-width: 1000px) {
        font-size: 17px;
      }
    }
    .person-title {
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      font-size: 26px;

      @media screen and (max-width: 1000px) {
        font-size: 17px;
      }
    }
    .person-contact-email,
    .person-contact-phone {
      line-height: 1.5;
      font-size: 26px;

      @media screen and (max-width: 1000px) {
        font-size: 17px;
      }
    }
  }
`

export default Persons
