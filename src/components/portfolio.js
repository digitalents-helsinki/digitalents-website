import React from 'react'
import styled from 'styled-components'

const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <div className="portfolio-heading">
        <h2>Töitämme</h2>
      </div>
      <p className="portfolio-text">Inspiroidu töistämme. Jokainen tekemämme tilaustyö on tarkoin toteutettu asiakkaan toiveiden mukaisesti. Inspiroidu töistämme. Jokainen tekemämme tilaustyö on tarkoin toteutettu asiakkaan toiveiden mukaisesti. Inspiroidu töistämme. Jokainen tekemämme tilaustyö on tarkoin toteutettu asiakkaan toiveiden mukaisesti.</p>
      <div className="portfolio-cards">
        <div className="portfolio-card">
          <h4 className="card-heading">Projektin nimi</h4>
          <p className="card-text">Leipätekstiä projektista, siitä kuinka huikeeta sitä oli toteuttaa palapala</p>
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

    h2 {
      font-family: futura-pt-bold;
      font-size: 32px;
      line-height: 150%;
      color: white;
    }
  }

  .portfolio-text {
    margin: 40px 0;
    width: 60%;
  }

  .portfolio-cards {
    display: flex;
    justify-content: space-between;

    .portfolio-card {
      width: 400px;
      height: 500px;
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