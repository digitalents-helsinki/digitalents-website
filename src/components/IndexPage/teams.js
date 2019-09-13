import React from 'react'
import styled from 'styled-components'
import rightArrow from '../../images/right-arrow.svg'


const TeamsAlt = () => {
  return (
    <TeamsWrapper>
     
      <div className="teams-heading">
        <h2>Digitalents tiimimme</h2>
      </div>

      <div className="teams">
        <div className="team">
          <button>Digitalents Media<img src={rightArrow} alt="" className="arrow" /></button>         
          <p>Digitalents Media tuottaa monipuolista digitaalista mediaa, 2D- ja 3D-animointia sekä sosiaalisen median sisältöjä.</p>
        </div>

        <div className="team">          
          <button>Digitalents SoftDev<img src={rightArrow} alt="" className="arrow" /></button>         
          <p>Digitalents ohjelmistotiimi kehittää ohjelmistoja sekä sivustoja moderneilla alustoilla ja välineillä.</p>
        </div>

        <div className="team">
          <button>Digitalents ICT<img src={rightArrow} alt="" className="arrow" /></button>         
          <p>Digitalents ICT toteuttaa ylläpito-, asennus- ja tukipalveluita sekä sisäisiä tuotantopalveluita.</p>
        </div>
      </div>
    </TeamsWrapper>
  )
}

const TeamsWrapper = styled.div`
  .top-img {
    display: hidden;
    height: 30vh;
    width: 100vw;
    overflow: hidden;
    z-index: -1;
    position: relative;
    display: block;
    object-fit: cover;
    
  }

  .teams-heading {
    margin-top: 15vh;
    width: 26rem;
    height: 170px;
    background: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15vw;
    position: relative;
    z-index: 1;
    @media screen and (max-width: 1200px) {
      justify-content: center;
      align-items: center;
      margin-top: 12rem;
      width: 18rem;
      margin-left: 5vw;
    }

    h2 {
      color: #FFFFFF;
      font-weight: 700;
      font-family: futura-pt-bold;
      font-size: 28px;
      line-height: 43px;
    }
    
  } 

    
  }

  .teams {
    height: 20rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    margin-top: -1rem;
    background: white;
    padding: 6rem 0;
    @media screen and (max-width: 1200px) {
      height:auto;
      justify-content: left;
      align-items: left;
      margin-top: -2rem;
      width: 100vw;
      flex-flow: column nowrap;
    }
    
  }

  .team {
    display: flex;
    flex-flow: column nowrap;
    width: 20rem;
    height: 12rem;
      @media screen and (max-width: 1200px) {
        justify-content: left;
        align-items: left;
        margin-left:1rem;
        margin-top: 0rem;
        margin-bottom: 2rem;
        width: 80vw;     
      }

    

    button {
      background: #ffffff;
      border: 0px solid #000000;
      height: 3rem;     
      font-size: 32px;
      line-height: 24px;
      font-weight: 700;
      display: flex;
      justify-content: left;
      align-items:left;
      margin-bottom:3rem;
      margin-top:3rem;
      @media screen and (max-width: 600px) {
        font-size: 24px;
        line-height: 24px;
        font-weight: 700;
      }
      p {
        font-size: 32px;
        
      }

    div {
      display: flex;
      flex-flow: row nowrap;
      align-content: left;
      }

      img {
        height: 15px;
        padding-left: 1rem;
      }
    }


    h3 {
      font-size: 32px;
      margin: 2rem;
      font-family: futura-pt-bold;
      font-weight: bold;
      
    }

    p {
      width: 25vw;
      margin-top:-50px;
      padding: 6px;
      font-size: 22px;
      position: relative;
      align-content: center;
      @media screen and (max-width: 1200px) {
        font-size: 20px;
        line-height: 24px;
      }
      
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
      width: 80vw;
      height: 8rem;     
      padding: 20px;
      justify-content: center;
      align-items: center;
    }
    .teams {
      flex-flow column nowrap;
    }
  }

  @media screen and (min-width: 1200px) {
    height: 100vh;
    justify-content: center;
        align-items: center;
  }
`

export default TeamsAlt