import React from 'react'
import styled from 'styled-components'
import rightArrow from '../../images/right-arrow.svg'
import TopImg from '../../images/annie-spratt-qckxruozjrg-unsplash.jpg'

const TeamsAlt = () => {
  return (
    <TeamsWrapper>
      <img src={TopImg} alt="" className="top-img" />
      <div className="teams-heading">
        <h2>Digitalents tiimimme</h2>
      </div>
      <div className="teams">
        <div className="team">
          <h4>Digitalents</h4>
          <div><h3>Media</h3><img className="arrow" src={rightArrow} alt="" /></div>
          <p>Digitalents Media tuottaa monipuolista digitaalista mediaa, 2D- ja 3D-animointia sekä sosiaalisen median sisältöjä.
</p>
        </div>
        <div className="team">
          <h4>Digitalents</h4>
          <div><h3>SoftDev</h3><img className="arrow" src={rightArrow} alt="" /></div>
          <p>Digitalents ohjelmistotiimi kehittää ohjelmistoja sekä sivustoja moderneilla alustoilla ja välineillä.
</p>
        </div>
        <div className="team">
          <h4>Digitalents</h4>
          <div><h3>ICT</h3><img className="arrow" src={rightArrow} alt="" /></div>
          <p>Digitalents ICT toteuttaa ylläpito-, asennus- ja tukipalveluita sekä sisäisiä tuotantopalveluita.</p>
        </div>
      </div>
    </TeamsWrapper>
  )
}

const TeamsWrapper = styled.div`
  .top-img {
    height: 40vh;
    width: 100vw;
    overflow: hidden;
    z-index: -1;
    position: relative;
    display: block;
    object-fit: cover;
  }

  .teams-heading {
    margin-top: -10vh;
    width: 555px;
    height: 170px;
    background: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15vw;

    h2 {
      color: #FFFFFF;
      font-size: 32px;
      font-weight: 700;
      font-family: futura-pt-bold;
      font-size: 32px;
      line-height: 43px;
    }
  }

  .teams {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    margin-top: 10vh;
    }
  }

  .team {
    display: flex;
    flex-flow: column nowrap;

    div {
      display: flex;
      flex-flow: row nowrap;
      align-content: center;

      img {
        height: 15px;
        padding-top: 6px;
        margin-right: 6rem;
        padding-left: 1rem;
      }
    }

    h4 {
      font-size: 14px;
      margin-bottom: 0.3rem;
    }

    h3 {
      font-size: 29px;
      margin-bottom: 2rem;
      font-family: futura-pt-bold;
      font-weight: bold;
    }

    p {
      font-size: 18px;
      width: 14rem;
    }
  }

  .arrow {
    animation: floating-hor-arrow 1.6s infinite ease-in-out 0s;

    @keyframes floating-hor-arrow {
      0% {
        transform: translateX(0);
      }
      65% {
        transform: translateX(11px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .teams-heading {
      width: 200px;
      height: 100px;
      margin: 0;
    }
    .teams {
      flex-flow column nowrap;
    }
  }

  @media screen and (min-width: 1200px) {
    height: 100vh;
  }
`

export default TeamsAlt