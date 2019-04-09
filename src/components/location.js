import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Location = (props) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    handleWindowSizeChange()
    window.addEventListener('resize', handleWindowSizeChange)
  })

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth-15)
  }
  
  const map = `<iframe width=${width} height="350" width="100" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=24.920006990432743%2C60.16458506908792%2C24.923367798328403%2C60.16577135278478&amp;layer=mapnik&amp;marker=60.16517821628964%2C24.92168739438057"></iframe>`
  const html = {__html: map}

  return (
    <LocationWrapper>
      <p>{props.data.address}</p>
      <p>{props.data.postAddress}</p>
      <div className="map" dangerouslySetInnerHTML={html}></div>
    </LocationWrapper>
  )
}

const LocationWrapper = styled.div`
  text-align: center;
  padding-top: 50px;

  p {
    text-transform: uppercase;
    font-family: futura-pt-bold, sans-serif;
    font-weight: 700;
    padding-bottom: 25px;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .map {
    padding-top: 25px;
    padding-bottom: 50px;
  }
`

export default Location