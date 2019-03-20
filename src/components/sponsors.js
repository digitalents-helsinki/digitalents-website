import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

class Sponsors extends React.Component {
  render() {
    return (
      <SponsorsWrapper>
        {this.props.data.map(sponsor => {
          return (
            <SponsorWrapper>
              <img src={sponsor.sponsorImage.file.url + "?fit=scale"} alt={sponsor.sponsorName} className="sponsorImage" />
            </SponsorWrapper>
          )
        })}
      </SponsorsWrapper>
    )
  }
}

const SponsorsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 50px;
`

const SponsorWrapper = styled.div`
  .sponsorImage {
    height: 100px;
    width: 150px;
  }
`

export default Sponsors