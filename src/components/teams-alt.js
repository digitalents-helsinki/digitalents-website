import React from 'react'
import styled from 'styled-components'
import rightArrow from '../images/right-arrow.svg'

const TeamsAlt = () => {
  return (
    <TeamsWrapper id="teams">
      <div className="teams-heading">
        <h2>Digitalents Tiimit</h2>
        <p>Digitalents Helsinki on ajatus jatkuvasta oppimisesta. Tarjoamme ympäristön, jossa ennakkoluuloton kokeileminen ei ole vain
 sallittua, vaan myös kannustettavaa. Nuoret osaajat, hyvät resurssit ja laajat verkostot kohtaavat meillä, luoden otollisen alustan innovaatioille.</p>
      </div>
      <div className="teams-wrapper">
        <div className="team">
          <h4>Digitalents</h4>
          <div><h3>Media</h3><img className="arrow" src={rightArrow} alt="" /></div>
          <p>Digitalents Helsinki mahdollistaa
nuorille innostavan</p>
        </div>
        <div className="team">
          <h4>Digitalents</h4>
          <div><h3>SoftDev</h3><img className="arrow" src={rightArrow} alt="" /></div>
          <p>Digitalents Helsinki mahdollistaa
nuorille innostavan</p>
        </div>
        <div className="team">
          <h4>Digitalents</h4>
          <div><h3>ICT</h3><img className="arrow" src={rightArrow} alt="" /></div>
          <p>Digitalents Helsinki mahdollistaa
nuorille innostavan</p>
        </div>
      </div>
    </TeamsWrapper>
  )
}

const TeamsWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  width: 60vw;
  margin-left: 10vw;

  .teams-heading {
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: 6rem;

    h2 {
      text-transform: uppercase;
      font-size: 32px;
      font-weight: bold;
      font-family: futura-pt-bold;
      margin-bottom: 2rem;
    }

    p {
      font-size: 18px;
      width: 28rem;
    }
  }

  .teams-wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  .team {
    display: flex;
    flex-flow: column nowrap;

    div {
      display: flex;
      flex-flow: row nowrap;
      align-content: center;
      justify-content: space-between;

      img {
        height: 15px;
        padding-top: 0.5rem;
        margin-right: 6rem;
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
`

export default TeamsAlt