import React from 'react'
import styled from 'styled-components'

const Sponsors = (props) => {
  return (
    <SponsorsWrapper>
      {props.data.map((sponsor, key) => {
        return (
          <SponsorWrapper>
            <img src={sponsor.sponsorImage.file.url + "?fit=scale"} alt={sponsor.sponsorName} className="sponsorImage" />
          </SponsorWrapper>
        )
      })}
    </SponsorsWrapper>
  )
}

const SponsorsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  padding-bottom: 50px;

  @media screen and (max-width: 400px) {
    flex-flow: column wrap;
    align-items: center;
  }
`

const SponsorWrapper = styled.div`
  padding-top: 5px;  
  padding-bottom: 5px;
  .sponsorImage {
    height: 100px;
    width: 150px;
  }
`

export default Sponsors