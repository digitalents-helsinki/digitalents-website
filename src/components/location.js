import React from 'react'
import styled from 'styled-components'

const locationData = [
  {
    address: 'Lapinlahdenkatu 16, 00180 Helsinki'
  },
  {
    address: 'PL 18402, 00099 Helsingin kaupunki'
  }
]

const Location = () => {
  const addressItems = locationData.map((n, index) => <h3>{n.address}</h3>)

  const map = `<iframe width="1000" height="500" width="100" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=24.920006990432743%2C60.16458506908792%2C24.923367798328403%2C60.16577135278478&amp;layer=mapnik&amp;marker=60.16517821628964%2C24.92168739438057"></iframe>`
  const html = { __html: map }
  return (
    <LocationWrapper>
      <p>{addressItems}</p>

      <div dangerouslySetInnerHTML={html} />
    </LocationWrapper>
  )
}

const LocationWrapper = styled.div`
  text-align: center
  font-weight: bold;
  margin: 2rem 0;
  p {
    margin: 0 0.5rem 2rem 0.5rem;
    text-transform: uppercase;
    text-align: center;

    
  }
`

export default Location
