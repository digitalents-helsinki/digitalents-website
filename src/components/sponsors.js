import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Sponsors = props => {
  return (
    <SponsorsWrapper>
      {props.data.map((sponsor, key) => {
        return (
          <SponsorWrapper>
            <a href={sponsor.urlLink}>
              <img
                src={sponsor.sponsorImage.file.url + '?fit=scale'}
                alt={sponsor.sponsorName}
                className="sponsorImage"
              />
            </a>
          </SponsorWrapper>
        )
      })}
    </SponsorsWrapper>
  )
}

const SponsorsWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  padding-top: 50px;
  padding-bottom: 100px;
  padding-left: 7rem;
  padding-right: 7rem;


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
