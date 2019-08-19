import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout/layout'
import portrait from '../../images/portfolioimages/portrait.png'
import urban from '../../images/portfolioimages/urban.png'
import architecture from '../../images/portfolioimages/architecture.png'
import drone from '../../images/portfolioimages/drone.png'

const PortfolioPage = () => {
  return (
    <Layout>
      <StyleWrapper>
      <div className="portfolioContainer">
          <div className="portfolioContainer_Quote">
            <p>Inspiroidu töistämme. Jokainen tekemämme tilaustyö on tarkoin toteutettu asiakkaan toiveiden mukaisesti.</p>
          </div>
          <div className="portfolioContainer_Text">
              <h1>Photography</h1>
          </div>
          <div class="portfolioContainer_Portfolio">
              <div className="PortfolioBox_Portrait">
              <h2>Portrait</h2>
              </div>
              <div className="PortfolioBox_Urban">
              <h2>Urban</h2>
              </div>
              <div className="PortfolioBox_Architecture">
              <h2>Architecture</h2>
              </div>
              <div className="PortfolioBox_Drone">
              <h2>Drone</h2>
              </div>
          </div>
          <div className="portfolioContainer_Text">
              <h1>Projects</h1>
          </div>
          <div className="portfolioContainer_Portfolio">
              <div className="PortfolioBox_Portrait">
              <h2>Portrait</h2>
              </div>
              <div className="PortfolioBox_Urban">
              <h2>Urban</h2>
              </div>
          </div>
          <div className="portfolioContainer_Text">
              <h1>Podcast</h1>
          </div>
          <div className="portfolioContainer_Portfolio">
              <div className="PortfolioBox_Portrait">
              <h2>Portrait</h2>
              </div>
              <div className="PortfolioBox_Urban">
              <h2>Urban</h2>
              </div>
              <div className="PortfolioBox_Architecture">
              <h2>Architecture</h2>
              </div>
              <div className="PortfolioBox_Drone">
              <h2>Drone</h2>
              </div>
          </div>
          <div className='portfolioContainer_LikePlan'>
            <p className='portfolioContainer_LikePlan_Like'>LIKE WHAT YOU SEE?</p>
            <p className='portfolioContainer_LikePlan_Plan'>Let’s plan your project</p>
          </div>
      </div>
      </StyleWrapper>
    </Layout>
  )
}

const StyleWrapper = styled.div`
 .portfolioContainer{
    width: 100%;
    height: auto;
    margin-bottom: 5%;

    .portfolioContainer_LikePlan{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 80%;
      margin: auto;
      padding: 15vh 0;
      .portfolioContainer_LikePlan_Like{
        font-family: Asap;
        font-size: 16px;
        line-height: 150%;

      }
      .portfolioContainer_LikePlan_Plan{
        text-align: center;
        font-size: 40px;
        font-weight: 700;
        padding-top: 1.5rem;
      }
    }

    .portfolioContainer_Text {
    }

    .portfolioContainer_Quote{
    display: flex;
    width: 80%;
    margin: auto;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 30vh 0;

    p {
      text-align: center;
      font-size: 40px;
      font-weight: 400;
      padding-top: 3rem;
      width: 45%;

      @media screen and (max-width: 1000px) {
        padding-top: 1rem;
      }
    }
}
    h1{
      font-size: 2.3rem;
      font-weight: bold;
      font-family: futura-pt-bold;
      width: 30%;
      margin: 30px 0 30px 10%;
      padding: 2vh 0;

      @media screen and (max-width: 1000px) {
        font-size: 2rem;
      }
    }
    .portfolioContainer_Portfolio{
      display: flex;
      margin: auto;
      justify-content: flex-start;
      margin-top: 30px;
      width: 80%;
      @media screen and (max-width: 1000px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }


      h2{
        color: white;
        font-size: 32px;
        font-weight: 700;
        font-family: futura-pt-bold;
        font-size: 32px;
        line-height: 43px;
      }
    .PortfolioBox_Portrait, .PortfolioBox_Urban, .PortfolioBox_Architecture, .PortfolioBox_Drone{
      display: flex;
      border: 1px solid black;
      width: 200px;
      height: 200px;
      justify-content: center;
      align-items: center;
      background-size: cover;
      margin-right: 10px;
      @media screen and (max-width: 1000px) {
        margin: 10px 0;
      }

    }
    .PortfolioBox_Portrait{
      background-image: url(${portrait});
    }
    .PortfolioBox_Urban{
      background-image: url(${urban});
    }
    .PortfolioBox_Architecture{
      background-image: url(${architecture});
    }
    .PortfolioBox_Drone{
      background-image: url(${drone});
    }
}

`


export default PortfolioPage
