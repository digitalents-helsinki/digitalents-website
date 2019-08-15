import React from 'react'
import styled from 'styled-components'
import satakolkyt from '../../images/satakolkyt.png'

const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <div className="portfolio-heading">
        <h2>Töitämme</h2>
      </div>
      <h3 className="portfolio-text">Inspiroidu töistämme.</h3>
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
    width: 304px;
    height: 104px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 4rem;

    h2 {
      font-family: futura-pt-bold;
      font-size: 32px;
      line-height: 150%;
      color: white;
    }
  }

  h3 {
    font-family: futura-pt-bold;
    font-size: 32px;
    line-height: 43px;
  }

  .portfolio-text {
    margin: 40px 0 40px 6rem;
    width: 60%;
  }

  .portfolio-cards {
    display: flex;
    justify-content: space-between;
    margin: 0 10vh;

    .portfolio-card {
      width: 400px;
      height: 600px;
      background: gray;

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

  @media screen and (min-width: 1200px) {
    height: 100vh;
  }
`

export default Portfolio