import React from 'react'
import styled from 'styled-components'

class Teams extends React.Component {
  render() {
    return (
      <TeamsWrapper>
        <h3>{this.props.data.teamsTitle}</h3>
        <div className="teams">
        {this.props.data.teamsText.map(text => {
          return <h4>{text}</h4>
        })}
        </div>
      </TeamsWrapper>
    )
  }
}

const TeamsWrapper = styled.div`
  text-align: center;
  padding-bottom: 50px;

  h3 {
    text-transform: uppercase;
    font-weight: 700;
    padding-bottom: 25px;
  }

  .teams {
    display: flex;
    flex-flow: row wrap;

    h4 {
      text-transform: uppercase;
      font-weight: 700;
      flex-basis: 50%;
    }

    h4:last-child {
      flex-basis: 100%;
      padding-top: 50px;
    }
  }
`

export default Teams