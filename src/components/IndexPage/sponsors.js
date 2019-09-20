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
  background: white;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 7rem;
  padding-right: 7rem;
  margin: auto;


  @media screen and (max-width: 800px) {
    flex-flow: column wrap;
    align-items: center;
    margin: auto;
    padding:0;
    padding: 2rem 0;
  }
    @media screen and (max-width: 1200px) {
      justify-content: center;
      align-items: center;
      margin: auto;
      margin-top: 3rem;
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
