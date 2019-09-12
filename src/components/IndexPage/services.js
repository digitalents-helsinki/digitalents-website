import React from 'react'
import styled from 'styled-components'
import Img from '../../images/annie-spratt-qckxruozjrg-unsplash.jpg'
import rightArrow from '../../images/right-arrow.svg'

const Services = () => {
  return (
    <ServicesWrapper>
      <div className="services-heading">
        <h2>Palvelumme</h2>
      </div>
      <div className="services-content">
      <img src={Img} alt="" className="services-image" />
        <div className="services-text">
          <p>Onko sinulla Idea?</p>
          <h3>Suunnitellaan seuraava projektisi!</h3>
          <button>Lue lisää palveluistamme <img src={rightArrow} alt="" className="arrow" /></button>
        </div>
      </div>
    </ServicesWrapper>
  )
}

const ServicesWrapper = styled.div`
 

    .services-heading {
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
      font-family: futura-pt-bold;
      font-size: 32px;
      line-height: 150%;
      color: white;
    }
  }

  .services-content {
    margin-top: 3rem;
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: white;
    z-index: -5;
    
    
    .services-image {
      width: 50vw;
      margin-left: -14vw
      margin: 2rem;
      padding: 2rem;
      @media screen and (max-width: 1200px) {
        display:none;
    }
  
    .services-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 18rem;
      
      @media screen and (max-width: 1200px) {
        justify-content: center;
        align-items: center;
        margin-top: 3rem;
        width: 80vw;
        padding:20px;
      }

      p {
        font-family: Asap;
        font-size: 18px;
        line-height: 150%;
        margin-top:3rem;
      }

      h3 {
        font-family: futura-pt-bold;
        font-size: 32px;
        line-height: 43px;
        font-weigth: 700;
        margin-bottom: 3rem;
        margin-top: 1rem;       
      }

      button {
        background: #ffffff;
        border: 1px solid #000000;
        width: 320px;
        height: 3rem;
        padding: 1rem;
        font-size: 18px;
        line-height: 24px;
        font-weight: 700;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom:3rem;
        margin-top:3rem;

       
        
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
    margin-bottom:3rem;
    

    .services-content {
      .services-text {
        height: 30vh;
        
      }
    }
  }
`

export default Services