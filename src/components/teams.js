import React from 'react'
import styled from 'styled-components'

const teamsData = {
  title: 'Digitalents tiimit'
}

const Teams = () => {
  return (
    <TeamsWrapper>
      <h3>{teamsData.title}</h3>
    </TeamsWrapper>
  )
}

const TeamsWrapper = styled.div`
  text-align: center;
`

export default Teams