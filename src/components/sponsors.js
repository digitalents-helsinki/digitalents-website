import React from 'react'
import styled from 'styled-components'

const SponsorData = {
  sponsors: [
    {
      title: 'GamesFactory'
    },
    {
      title: 'Digia'
    },
    {
      title: 'Reaktor'
    },
    {
      title: 'Futurice'
    },
    {
      title: 'Chilicorn Foundation'
    }
  ]
}

const Sponsors = () => {
  const sponsorItems = SponsorData.sponsors.map((n, index) => (
    <div>
      <h3>{n.title}</h3>
    </div>
  ))

  return (
    <SponsorWrapper>
      {sponsorItems}
    </SponsorWrapper>
  )
}

const SponsorWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export default Sponsors