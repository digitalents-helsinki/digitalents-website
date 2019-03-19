import React from 'react'
import styled from 'styled-components'

class Teams extends React.Component {
  render() {
    return (
      <TeamsWrapper>
        <h3>{this.props.data.teamsTitle}</h3>
        {this.props.data.teamsText.map(text => {
          return <h4>{text}</h4>
        })}
      </TeamsWrapper>
    )
  }
}

const TeamsWrapper = styled.div`
  text-align: center;
`

export default Teams