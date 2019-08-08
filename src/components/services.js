import React from 'react'
import styled from 'styled-components'
import Img from '../images/annie-spratt-qckxruozjrg-unsplash.jpg'
import rightArrow from '../images/right-arrow.svg'

const Services = () => {
  return (
    <ServicesWrapper>
      <div className="services-heading">
        <h2>Palvelumme</h2>
      </div>
      <div className="services-content">
      <img src={Img} alt="" className="services-image" />
        <div className="services-text">
          <h3>Lets plan your next project</h3>
          <p>Digitalents Helsingin keskiössä on ajatus jatkuvasta oppimisesta. Tarjoamme ympäristön, jossa ennakkoluuloton kokeileminen ei ole vain sallittua, vaan myös kannustettavaa. Nuoret osaajat, hyvät resurssit ja laajat verkostot kohtaavat meillä, luoden otollisen alustan innovaatioille.</p>
          <button>Lue lisää palveluistamme <img src={rightArrow} alt="" className="arrow" /></button>
        </div>
      </div>
    </ServicesWrapper>
  )
}

const ServicesWrapper = styled.div`
  .services-heading {
    background: #000000;
    width: 304px;
    height: 104px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    left: 50%;
    top: 5%;

    h2 {
      font-family: futura-pt-bold;
      font-size: 32px;
      line-height: 150%;
      color: white;
    }
  }

  .services-content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    .services-image {
      height: 600px;
    }
  
    .services-text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 25%;

      h3 {
        font-family: futura-pt-bold;
        font-size: 32px;
        line-height: 43px;
        font-weigth: 700;
      }

      button {
        background: #ffffff;
        border: 0px solid #000000;
        width: 260px;
        height: 50px;
        font-size: 18px;
        line-height: 24px;
        font-weight: 700;
        display: flex;
        justify-content: space-around;
        align-items: center;
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
    .services-heading {
      position: static;
    }

    .services-content {
      flex-direction: column;
    }
  }

  @media screen and (min-width: 1200px) {
    height: 100vh;

    .services-content {
      .services-text {
        height: 30vh;
      }
    }
  }
`

export default Services