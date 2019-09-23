import React from 'react'
import styled from 'styled-components'
import satakolkyt from '../../images/satakolkyt.png'

const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <div className="portfolio-heading">
        <h2>Portfolio</h2>
      </div>
      
        <div class="portfolio-container">
          <div class="ilmaa">
          
          </div>
          <h3 className="portfolio-text">Inspiroidu töistämme.</h3>
        </div>
        <div className="portfolio-cards">
        <div className="portfolio-card satakolkyt">
          <h4 className="card-heading"></h4>
          <p className="card-text"></p>
        </div>
        <div className="portfolio-card">
          <h4 className="card-heading">Projektin nimi</h4>
          <p className="card-text">Leipätekstiä projektista, siitä kuinka huikeeta sitä oli toteuttaa palapala</p>
        </div>
        <div className="portfolio-card">
          <h4 className="card-heading">Projektin nimi</h4>
          <p className="card-text">Leipätekstiä projektista, siitä kuinka huikeeta sitä oli toteuttaa palapala</p>
        </div>
      </div>
    </PortfolioWrapper>
  )
}

const PortfolioWrapper = styled.div`
  .portfolio-heading {
    background: #000000;
    margin-bottom: 0rem;
    width: 22rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 35vw;
    margin-top: 4rem;
    position: relative;
    z-index: 1;
    @media screen and (max-width: 1200px) {
      justify-content: center;
      align-items: center;
      margin: auto;
      margin-top: 3rem;
      margin-bottom: 0rem;
      width: 15rem;
      height: 8rem;
      padding: 0px;
    }
   

    h2 {
      font-family: futura-pt-bold;
      font-size: 2rem;
      line-height: 150%;
      color: white;
    }
  }

  h3 {
    font-family: futura-pt-bold;
    font-size: 32px;
    line-height: 43px;
  }

  .ilmaa{
    height:5rem;
  }

  .portfolio-text {
    padding-left:35vw;
    position: relative;
    font-size: 26px;
    width: 80%;
    @media screen and (max-width: 1200px) {
      padding-left: 1rem;
      margin: auto;
    }
  }



  .portfolio-cards {
    display: flex;
    justify-content: space-around;
    margin:auto;
    margin-top: -10rem;
    background: white;
    padding-top: 15%;
    padding-bottom: 15%;


    .portfolio-text {
      padding-left: 30vw;
      margin-top: 5rem;
      position: relative;
      font-size: 2rem;
      width: 80%;
      @media screen and (max-width: 1200px) {
        margin:auto;
        justify-content: center;
        align-items: center;
        margin-top: -2rem 0vh;
        margin-bottom: 8rem;
        width: 80vw;
      }
    }

      

    .portfolio-card {
      width: 400px;
      height: 500px;
      background: gray;
      @media screen and (max-width: 1200px) {
        justify-content: center;
        align-items: center;
        margin-top: 8rem;
        width: 80vw;      
      } 

      .card-heading {
        padding: 25px;
        color: white;
        font-family: futura-pt-bold;
        font-size: 20px;
        line-height: 27px;
      }

      .card-text {
        padding-left: 25px;
        font-family: asap;
        font-size: 14px;
        line-weight: 130%;
      }
    }
  }

  .satakolkyt {
    background-image: url("${satakolkyt}") !important;
    background-size: cover !important;

    .card-heading {
    }
  }

  @media screen and (max-width: 1200px) {
    .portfolio-cards {
      flex-direction: column;
      align-items: center;
    }
  }


`

export default Portfolio