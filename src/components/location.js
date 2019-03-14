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

class Location extends React.Component {
  state = {
    width: 0
  }

  componentDidMount() {
    this.handleWindowSizeChange()
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }
  
  render() {
    const map = `<iframe width=${this.state.width} height="500" width="100" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=24.920006990432743%2C60.16458506908792%2C24.923367798328403%2C60.16577135278478&amp;layer=mapnik&amp;marker=60.16517821628964%2C24.92168739438057"></iframe>`
    const html = {__html: map}

    return (
      <LocationWrapper>
        <div dangerouslySetInnerHTML={html}></div>
      </LocationWrapper>
    )
  }
}

const LocationWrapper = styled.div`
  text-align: center;
`

export default Location