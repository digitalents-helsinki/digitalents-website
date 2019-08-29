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
      <div className="Container_Img">
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
        <div className="BottomText">
          <p className='BottomText_First'>kuten mitä näet?</p>
          <p className='BottomText_Second'>Suunnitellaan projekti</p>

        </div>
      </div>
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
          padding-top: 1rem;
          text-align: justify;
        }
      }
  }
        .Container_Img{
          display: flex;
  	      flex-direction: row;
  	      flex-wrap: wrap;
          width: 65%;
          margin: 0 auto;
          @media screen and (max-width: 1000px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: auto;
          }
          .Container_Img_Images{
            border: 1px solid yellow;
            margin: .5rem .5rem .5rem auto;
            height: 20rem;
            width: 20rem;
            background-size: cover;
            background-image: url(${PortfolioSliderPhoto});
            @media screen and (max-width: 1000px) {
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin: .3rem auto .3rem auto;
            }
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
