import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby';

class PersonsAlt extends React.Component {
  render () {
    return (
      <PersonsWrapper>
        {this.props.persons.edges.map((person) => {
          return (
            <PersonWrapper>
              <h2>{person.node.name}</h2>
              <p>{person.node.title}</p>
              <p>{person.node.email}</p>
              <p>{person.node.phoneNumber}</p>
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
        allContentfulPerson(
          filter: {node_locale: {regex: "/en-US/"}}
        ) {
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
    render={(data) => (
      <PersonsAlt persons={data.allContentfulPerson} />
    )}
  />
)

const PersonsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: #f4f4f4;
`

const PersonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
`

export default Persons