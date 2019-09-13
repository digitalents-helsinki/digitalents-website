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
          <h3>Digitalents media</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quasi veniam, magni asperiores autem, porro cupiditate laborum deserunt incidunt neque non sit nam rerum quo, deleniti assumenda natus reiciendis accusamus.</p>
          
          <h3>Digitalents ICT</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quasi veniam, magni asperiores autem, porro cupiditate laborum deserunt incidunt neque non sit nam rerum quo, deleniti assumenda natus reiciendis accusamus.</p>
          
          <h3>Digitalents SoftDev</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quasi veniam, magni asperiores autem, porro cupiditate laborum deserunt incidunt neque non sit nam rerum quo, deleniti assumenda natus reiciendis accusamus.</p>
          
          <div class="prompt">
            <p>Onko sinulla Idea?</p>
            <h3 className="prompt">Suunnitellaan seuraava projektisi!</h3>
          </div>
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
    margin: auto;
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
    z-index: 0;

      @media screen and (max-width: 1200px) {
        justify-content: center;
        align-items: center;
        margin-top: -1rem;
        height: auto;
        width: 100vw;
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
        width: 80vw;

        p {
          font-family: Asap;
          font-size: 18px;
          line-height: 150%;
          margin-top: 1rem;
        }

        .prompt {
          align-content: center;
          justify-content: center;
          margin-top: 0.5rem;
          padding-bottom: 1rem;
          p {
            padding-top: 2rem;
          }

        }
  
        h3 {
          font-family: futura-pt-bold;
          font-size: 28px;
          line-height: 43px;
          font-weigth: 700;
          margin-bottom: 1rem;
          margin-top: 2rem;       
        }
      }      
    }
  }
}

  
`

export default Services