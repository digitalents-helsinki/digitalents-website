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
          
        </div>
      </div>
    </ServicesWrapper>
  )
}

const ServicesWrapper = styled.div`
 


.services-heading { 
  width: 350px;
  height: 150px;
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-top: 10rem;
  margin-left: 65vw;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 1200px) {
    margin-left: 25vw;
  }
    h2 {
      font-family: futura-pt-bold;
      font-size: 32px;
      line-height: 150%;
      color: white;
    }
  }




  .services-content {
    height: 32rem;
    margin-top: -2rem;
    display: flex;
    justify-content: space-around;
    background: white;
    position: relative;
    z-index: -1;
    
    
    @media screen and (max-width: 1200px) {
      justify-content: center;
      align-items: center;
      width: 100vw;   
      height: 20rem;  
    } 

      .services-image {
        width: 50vw;
        height: 32rem;
        margin-left: -14vw
        margin: 2rem;
        padding: 0rem;   
        @media screen and (max-width: 1200px) {
          display:none;
        }
      }
      
      .services-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 18rem;
        p {
          font-family: Asap;
          font-size: 18px;
          line-height: 150%;
          margin-top: 3rem;
        }
  
        h3 {
          font-family: futura-pt-bold;
          font-size: 32px;
          line-height: 43px;
          font-weigth: 700;
          margin-bottom: 3rem;
          margin-top: 1rem;       
        }

      }
    @media screen and (max-width: 1200px) {
      justify-content: center;
      align-items: center;
      margin-top: 3rem;
      width: 80vw;
      padding: 20px;
    }
   
      }
    }
  }
}

  
`

export default Services