import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout/layout'
import PortfolioSliderPhoto from '../../images/PortfolioSliderPhoto.png'

const PortfolioSlider = () => {
  return (
    <Layout>
      <StyleWrapper>
      <div className="Container">
        <p>Inspiroidu töistämme. Jokainen tekemämme tilaustyö on tarkoin toteutettu asiakkaan toiveiden mukaisesti.</p>
      </div>

      
      <div className="Container_Imgallery">
        <div className="Container_Img_Images">
        </div>
        <div className="Container_Img_Images">
        </div>
        <div className="Container_Img_Images">
        </div>
        <div className="Container_Img_Images">
        </div>
        <div className="Container_Img_Images">
        </div>
        <div className="Container_Img_Images">
        </div>
        <div className="Container_Img_Images">
        </div>
        <div className="Container_Img_Images">
        </div>
        <div className="Container_Img_Images">
        </div>
      </div>
      
       
      <a href="/fi/contact">
        <div className="BottomText">
          <p className='BottomText_First'> Onko sinulla Idea?</p>
          <p className='BottomText_Second'>Suunnitellaan projekti</p>
        </div>
      </a>
      
      </StyleWrapper>
    </Layout>
  )
}

const StyleWrapper = styled.div`
    height: auto;
    .Container{
      display: flex;
      width: 80%;
      margin: auto;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding: 25vh 0;
      p {
        text-align: center;
        font-size: 40px;
        font-weight: 400;
        width: 45%;
        @media screen and (max-width: 1000px) {
          width: 55%;
          padding-top: 1rem;
          text-align: center;
          margin: auto;          
          text-align: center;
          font-size: 1.5rem;
          font-weight: 400;
          width: 85%;
        }
      }
    }

    .btn {
      font-size: 2rem;
      align-self: center;
      justify-content: center;
      border: none;
      outline: none;
      padding: 1rem 4rem;
      background-color: white;
      
    }
        .Container_Imgallery{
          display: flex;         
  	      flex-direction: row;
  	      flex-wrap: wrap;
          width: 70vw;
          justify-content: center;
          margin: 0 auto;
          overflow: hidden;
          @media screen and (max-width: 1400px) {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin: auto;
            width: 90vw;
          }
          @media screen and (max-width: 1000px) {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin: auto;
            width: 100vw;
          }
          .Container_Img_Images{
            border: 0px solid white; 
            margin: 10px;         
            height: 40vh;
            width: 18vw;
            background-size: cover;
            object-fit: cover;
	          transition: transform 200ms ease-out;
            background-image: url(${PortfolioSliderPhoto});
            box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
            
            @media screen and (max-width: 1000px) {
              height: 20vh;
              width: 30vw;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              
            }
          }

          .Container_Img_Images:hover {
            transform: scale(1.05);
          }
        }
        .BottomText{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 80%;
          margin: auto;
          padding: 15vh 0;
        }
        .BottomText_First{
          font-family: Asap;
          font-size: 16px;
          line-height: 150%;
        }
        .BottomText_Second{
          text-align: center;
          font-size: 40px;
          font-weight: 700;
          padding-top: 1.5rem;
        }
      }
`

export default PortfolioSlider
