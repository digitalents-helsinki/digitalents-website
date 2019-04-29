import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'
import mediaImg from '../images/Media_kuva.png'
import ictImg from '../images/ICT_kuva.png'
import softdevImg from '../images/Softdev_kuva.png'

const Teams = props => {
  return (
    <TeamsWrapper>
      <h3>{props.data.teamsTitle}</h3>
      <div className="teams">
        {props.data.teamsText.map(text => {
          return <h4>{text}</h4>
        })}
      </div>
      <div className="images">
        <Link to={`${props.pagePrefix}/media`}><img src={mediaImg} alt="" /></Link>
        <Link to={`${props.pagePrefix}/softdev`}><img src={softdevImg} alt="" /></Link>
        <Link to={`${props.pagePrefix}/ict`}><img src={ictImg} alt="" /></Link>
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
    font-size: 30px;
  }

  .teams {
    display: flex;
    flex-flow: row wrap;
    padding-top: 4rem;
    font-size: 30px;

    h4 {
      text-transform: uppercase;
      font-weight: 700;
      flex-basis: 50%;

      @media screen and (max-width: 1000px) {
        font-size: 20px;
      }
    }

    h4:nth-child(1) {
      transform: translate(150px, 43px);
    }

    h4:nth-child(2) {
      transform: translate(-160px, 43px);
    }

    h4:nth-child(3) {
      flex-basis: 100%;
      transform: translateY(16rem);
    }

    @media screen and (max-width: 1000px) {
      h4:nth-child(1) {
        transform: translate(-2rem, 0.5rem);
      }

      h4:nth-child(2) {
        transform: translate(1rem, 0.5rem);
      }

      h4:nth-child(3) {
        transform: translateY(15rem);
      }
    }

    @media screen and (max-width: 500px) {
      h4:nth-child(1) {
        transform: translate(-2rem, 0.5rem);
      }

      h4:nth-child(2) {
        transform: translate(1rem, 0.5rem);
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
      display: inline-block;
    }

    a:nth-child(1) img {
      transform: rotate(45deg) translate(25px, -30px);
    }

    a:nth-child(2) img {
      transform: rotate(45deg) translate(75px, 75px);
    }

    a:nth-child(3) img {
      transform: rotate(45deg) translate(-30px, 25px);
    }

    @media screen and (max-width: 500px) {
      img {
        width: 75px;
        height: 75px;
      }

      a:nth-child(1) img {
        transform: rotate(45deg) translate(25px, -3px);
      }

      a:nth-child(2) img {
        transform: rotate(45deg) translate(50px, 50px);
      }

      a:nth-child(3) img {
        transform: rotate(45deg) translate(-3px, 25px);
      }
    }
  }
`

const TeamsQuery = props => (
  <StaticQuery
    query={graphql`
      query teamsQuery {
        media: contentfulPageTemplate(teamSlug: { eq: "media" }) {
          teamImage {
            file {
              url
            }
          }
        }
        ict: contentfulPageTemplate(teamSlug: { eq: "ict" }) {
          teamImage {
            file {
              url
            }
          }
        }
        softdev: contentfulPageTemplate(teamSlug: { eq: "softdev" }) {
          teamImage {
            file {
              url
            }
          }
        }
      }
    `}
    render={data => (
      <Teams
        media={data.media}
        ict={data.ict}
        softdev={data.softdev}
        data={props.data}
        pagePrefix={props.pagePrefix}
      />
    )}
  />
)

export default TeamsQuery
