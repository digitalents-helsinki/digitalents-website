
import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout/layout'
import rightArrow from '../../images/right-arrow.svg'
import ohjaamo from '../../images/ohjaamo.png'

/*
<iframe width="600" height="450" frameborder="0" style="border:0"
src="https://www.google.com/maps/embed/v1/place?q=redrikinkatu%2048%2C%2000101%20Helsinki&key=..." allowfullscreen></iframe>
*/

const JobsPage = () => {
  return (
    <Layout>
      <StyleWrapper>
      <div className='jobs_container'>
        <img className="OhjaamoLogo" src={ohjaamo} alt="" />
        <p>Mediatiimiläisiltä odotamme vähintään toisen asteen koulutusta alalta. ICT- ja ohjelmistokehitystiimeihimme palkkaamme myös itseoppineita taitureita.</p>
        <p>Hae meille töihin Helsingin kaupungin nuorten työllisyyspalvelut / Ohjaamon kautta. Meillä on jatkuvasti paikkoja avoinna.</p>
        

            <div className="addressContainer">
              <p>Address: Fredrikinkatu 48, 00101 Helsinki</p>
              <p>Phone: 040 7046818</p>
              <p>Open: 12.00PM - 17:00PM</p>
            </div>
            <button>Ohjaamo <img className="arrow" src={rightArrow} alt="" /></button>
              <div className="mapContainer">

                <iframe class="mappi" scrolling="no" src="https://www.openstreetmap.org/export/embed.html?bbox=24.92110133171082%2C60.16673876279075%2C24.935263395309452%2C60.17165409991959&amp;layer=mapnik"></iframe>
                </div>
       </div>
      </StyleWrapper>
    </Layout>
  )
}

const StyleWrapper = styled.div`
  .OhjaamoLogo {
    margin-top: 150px;
  }

  .jobs_container {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: left;
    p {
      text-align: left;
      max-width: 800px;
      font-size: 24px;
      font-weight: 400;
      padding-top: 4rem;
      padding:1rem;
    }
  }

  img {
    height: 250px;
  }

  button {
    border: 1px solid black;
    background: #ffffff;
    margin:4rem;
    width: 250px;
    height: 50px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .arrow{
      height: 15px;
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
  }
}
  .addressContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top:4rem;
      p {
        font-size: 22px;
        font-style: bold;
        font-weight: 700;
      }
  }
  .mapContainer{
    margin-top: 1rem;
    margin-bottom: 5px;
    display: flex;
    width: 100%;
    height: 800px;
    justify-content: center;
    align-items: center;
      .mappi {
        width: 100%;
        height: 600px;
        border: 1px solid black;
        pointer-events: none;
        }
  }
}
`

export default JobsPage
