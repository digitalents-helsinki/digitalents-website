import React from 'react'
import styled from 'styled-components'

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
`

const PersonsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 2rem 0;

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
  .point-wrapper {
    width: 40px;
    display: flex;
    justify-content: center;
    .salmiak-point {
      margin-top: 1.4rem;
      margin-right: 5px;
      transform-origin: center;
      background-color: #1f1f1f;
      width: 17px;
      height: 17px;
      transform: rotate(45deg);
    }
  }

  .text-wrapper {
    flex: 1;

    .person-name {
      font-size: 39px;
      font-weight: 700;
      line-height: 1.8;

      @media screen and (max-width: 1000px) {
        font-size: 17px;
      }
    }
    .person-title {
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
