
import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout/layout'
import doors from '../../images/Job_page_png.png'
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
        <div class="parallax-wrapper">
        </div>
        <div className='jobs_container'>    
          <img className="OhjaamoLogo" src={ohjaamo} alt="" />
          <p>Mediatiimiläisiltä odotamme vähintään toisen asteen koulutusta alalta. ICT- ja ohjelmistokehitystiimeihimme palkkaamme myös itseoppineita taitureita.</p>
          <p>Hae meille töihin Helsingin kaupungin nuorten työllisyyspalvelut / Ohjaamon kautta. Meillä on jatkuvasti paikkoja avoinna.</p>
          <a href="https://ohjaamo.hel.fi/">    
            <button>Ohjaamo <img className="arrow" src={rightArrow} alt="" /></button>
          </a>
          <div className="addressContainer">
            <p>Address: Fredrikinkatu 48, 00101 Helsinki</p>
            <p>Open: 12.00PM - 17:00PM</p>
            <p>Phone: 040 7046818</p>             
          </div>
           <div className="mapContainer">
            <a class="mappi" href="https://www.openstreetmap.org/?mlat=60.16512&amp;mlon=24.92169#map=17/60.16512/24.92169">
              <iframe class="mappi"                       
                          frameborder="0" 
                          scrolling="yes" 
                          marginheight="0" 
                          marginwidth="0" 
                          src="https://www.openstreetmap.org/export/embed.html?bbox=24.914610385894775%2C60.16286895186937%2C24.92877244949341%2C60.16737390200942&amp;layer=mapnik&amp;marker=60.16512150414045%2C24.921691417694092" >
              </iframe>       
            </a>            
          </div>
        </div>
      </StyleWrapper>
    </Layout>
  )
}

const StyleWrapper = styled.div`

.parallax-wrapper {
  width: 100vw;
  height: 40vh;
  padding-top: 0vh;
  box-sizing: border-box;
  background-image: url(${doors});
  background-attachment: fixed;
  overflow: hidden;
  position: relative;
  display: block;
  object-fit: cover;
  align-items: center;
  text-align: center; 
}


  .OhjaamoLogo {
    margin-top: 10vh;
  }

  .jobs_container {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: left;
    padding:4rem 0;
    p {
      text-align: center;
      max-width: 80vw;
      font-size: 24px;
      font-weight: 400;
      padding-top: 1rem;
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
        font-size: 1.3rem;
        font-style: bold;
        font-weight: 700;
      }
  }
  .mapContainer{
    margin-top: 3rem;
    margin-bottom: 3rem;
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1000px) {
      height: 80vh;
      width: 80vw;      
      justify-content: center;
      align-items: center;
      margin:auto;      
    }
      .mappi {
        width: 100%;
        height: 60vh;
        border: 1px solid black;
        
        }
  }
}
`

export default JobsPage
