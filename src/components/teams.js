import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'
import mediaImg from '../images/Media_kuva.png'
import ictImg from '../images/ICT_kuva.png'
import softdevImg from '../images/Softdev_kuva.png'

/*
      <div className="teams">
        {props.data.teamsText.map(text => {
          return <h4>{text}</h4>
        })}
      </div>
*/

const Teams = props => {
  return (
    <TeamsWrapper>
      <h3>{props.data.teamsTitle}</h3>
      <div className="images">
        <h3>MEDIA</h3>
        <Link to={`${props.pagePrefix}media`}><img src={mediaImg} alt="" /></Link>
        <h3>SOFTDEV</h3>
        <Link to={`${props.pagePrefix}softdev`}><img src={softdevImg} alt="" /></Link>
        <h3>ICT</h3>
        <Link to={`${props.pagePrefix}ict`}><img src={ictImg} alt="" /></Link>
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

  .images {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;

    img {
      width: 150px;
      height: 150px;
      object-fit: none;
      display: inline-block;
    }

    a:nth-of-type(1) img {
      transform: translate(75px, 0px) rotate(45deg);
    }

    h3:nth-of-type(1) {
      transform: translate(25px, 10px);
    }

    a:nth-of-type(2) img {
      transform: translate(-75px, 120px) rotate(45deg);
    }

    h3:nth-of-type(2) {
      transform: translate(55px, 260px);
    }

    a:nth-of-type(3) img {
      transform: translate(-135px, 0px) rotate(45deg);
    }

    h3:nth-of-type(3) {
      transform: translate(110px, 10px);
    }

    @media screen and (max-width: 750px) {
      padding-left: 25px;

      img {
        width: 75px;
        height: 75px;
      }

      a:nth-of-type(1) img {
        transform: translate(40px, 0px) rotate(45deg);
      }

      h3:nth-of-type(1) {
        transform: translate(0px, 10px);
      }

      a:nth-of-type(2) img {
        transform: translate(-100px, 60px) rotate(45deg);
      }

      h3:nth-of-type(2) {
        transform: translate(0px, 150px);
      }

      a:nth-of-type(3) img {
        transform: translate(-155px, 0px) rotate(45deg);
      }

      h3:nth-of-type(3) {
        transform: translate(0px, 10px);
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
