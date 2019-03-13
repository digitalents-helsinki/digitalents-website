import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

class PersonsAlt extends React.Component {
  render() {
    return (
      <PersonsWrapper>
        {this.props.persons.edges.map(person => {
          return (
            <PersonWrapper>
              <div className="point-wrapper">
                <div className="salmiak-point" />
              </div>
              <div className="text-wrapper">
                <h2 className="person-name">{person.node.name}</h2>
                <p className="person-title">{person.node.title}</p>
                <p className="person-contact-email">
                  <a href={`mailto:${person.node.email}`}>
                    {person.node.email}
                  </a>
                </p>
                <p className="person-contact-phone">
                  {person.node.phoneNumber}
                </p>
              </div>
            </PersonWrapper>
          )
        })}
      </PersonsWrapper>
    )
  }
}

const Persons = () => (
  <StaticQuery
    query={graphql`
      query PersonQuery {
        allContentfulPerson(filter: { node_locale: { regex: "/en-US/" } }) {
          edges {
            node {
              name
              title
              email
              phoneNumber
            }
          }
        }
      }
    `}
    render={data => <PersonsAlt persons={data.allContentfulPerson} />}
  />
)

const PersonsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: #f4f4f4;
  padding: 2rem 0;
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
      margin-top: 0.5rem;
      transform-origin: center;
      background-color: black;
      width: 15px;
      height: 15px;
      transform: rotate(45deg);
    }
  }

  .text-wrapper {
    flex: 1;

    .person-name {
      font-size: 1.3rem;
      font-weight: bold;
      line-height: 1.8;
    }
    .person-title {
      margin-bottom: 1rem;
    }
    .person-contact-email,
    .person-contact-phone {
      line-height: 1.5;
    }
  }
`

export default Persons
