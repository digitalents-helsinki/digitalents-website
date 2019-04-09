import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

const Teams = (props) => {
  return (
    <TeamsWrapper>
      <h3>{props.data.teamsTitle}</h3>
      <div className="teams">
      {props.data.teamsText.map(text => {
        return (
            <h4>{text}</h4>
        )
      })}
      </div>
      <div className="images">
        <img src={props.media.teamImage.file.url} alt="" />
        <img src={props.softdev.teamImage.file.url} alt="" />
        <img src={props.ict.teamImage.file.url} alt="" />
      </div>
    </TeamsWrapper>
  )
}

const TeamsWrapper = styled.div`
  text-align: center;
  padding-bottom: 8rem;
  font-family: futura-pt-bold, sans-serif;

  h3 {
    text-transform: uppercase;
    font-weight: 700;
    padding-bottom: 25px;
  }

  .teams {
    display: flex;
    flex-flow: row wrap;
    padding-top: 4rem;

    h4 {
      text-transform: uppercase;
      font-weight: 700;
      flex-basis: 50%;
    }

    h4:nth-child(1) {
      transform: translate(-4rem, 1.5rem);
    }

    h4:nth-child(2) {
      transform: translate(4rem, 1.5rem);
    }

    h4:nth-child(3) {
      flex-basis: 100%;
      transform: translateY(16rem);
    }

    @media screen and (max-width: 500px) {
      h4:nth-child(1) {
        transform: translate(-4rem, -0.5rem);
      }

      h4:nth-child(2) {
        transform: translate(4rem, -0.5rem);
      }

      h4:nth-child(3) {
        transform: translateY(6.5rem);
      }
    }

  }

  .images {
    position: relative;
    top: -4rem;

    img {
      transform: rotate(45deg);
      width: 150px;
      height: 150px;
      object-fit: none;
      object-position: top;

    }

    img:nth-child(2) {
      transform: rotate(45deg) translate(100px, 100px);
    }

    @media screen and (max-width: 500px) {

      img {
        width: 75px;
        height: 75px;
      }

      img:nth-child(2) {
        transform: rotate(45deg) translate(50px, 50px);
      }
    }

  }
`

const TeamsQuery = (props) => (
  <StaticQuery
    query={graphql`
      query teamsQuery {
        media: contentfulPageTemplate(teamSlug: {eq: "media"}) {
          teamImage {
            file {
              url
            }
          }
        }
        ict: contentfulPageTemplate(teamSlug: {eq: "ict"}) {
          teamImage {
            file {
              url
            }
          }
        }
        softdev: contentfulPageTemplate(teamSlug: {eq: "softdev"}) {
          teamImage {
            file {
              url
            }
          }
        }
      }
    `}
    render={data => <Teams media={data.media} ict={data.ict} softdev={data.softdev} data={props.data} /> }
  />
)

export default TeamsQuery