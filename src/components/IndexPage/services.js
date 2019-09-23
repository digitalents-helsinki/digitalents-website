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
         
          <div class="prompt">
            <a href="/fi/contact">
              <p className="services-first">Onko sinulla Idea?</p>
              <h3 className="services-second">Suunnitellaan seuraava projektisi!</h3>
            </a>
          </div>
        </div>
      </div>
    </ServicesWrapper>
  )
}

const ServicesWrapper = styled.div`

 
.services-heading { 
  width: 22rem;
  height: 10rem;
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center; 
  margin-top: 14rem;
  margin-left: 60vw;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 1200px) {
    margin:auto;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: -2rem;
    width: 15rem;
    height: 6rem;
    padding: 0px;
  }

    h2 {
      font-family: futura-pt-bold;
      font-size: 2rem;
      line-height: 150%;
      color: white;
    }
  }

  .services-content {
    height: auto;
    margin-top: -2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: white;
    position: relative;
    z-index: 0;

      @media screen and (max-width: 1200px) {
        justify-content: center;
        align-items: center;
        margin-top: -1rem;
        height: auto;
        width: 100vw;
        padding-top:4rem;
        padding-bottom:4rem;

      }

      .services-image {
        align-items: center;
        justify-content: center;
        width: 50vw;
        height: 34rem;
        margin-left: -14vw
        margin: 2rem;
        padding: 0rem;   
        object-fit: cover;
        @media screen and (max-width: 1200px) {
          display:none;
        }
      }

      
      
      .services-text {
        
        justify-content: center;
        justify-items: center;
        width: 80vw;
      }
      .services-first {
        text-align: center;
        font-family: Asap;
        font-size: 1rem;
        line-height: 150%;
        font-family: Asap;
        font-size: 1rem;
        line-height: 150%;
        margin-top: 1rem;
        color:black;
      }
      .services-second {
        text-align: center;
        font-size: 2rem;
        font-weight: 700;
        padding-top: 1.5rem;
        justify-items: center;
        justify-content: center;
        font-family: futura-pt-bold;
        font-size: 1.4rem;         
        font-weigth: 700;
        margin: auto;
        margin-bottom: 1rem;
        margin-top: 2rem;  
        color:black;        
      }
      
    }

    .services-content{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: inline;
      width: 100vw;
      margin: auto;      
      height: auto;
      margin-top: -2rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: white;
      position: relative;
      z-index: 0;

      @media screen and (max-width: 1200px) {
        justify-content: center;
        align-items: center;
        margin-top: -1rem;
        height: auto;
        width: 100vw;
        padding-top:4rem;
        padding-bottom:4rem;

      }
    
    }      
  }
}

  
`

export default Services