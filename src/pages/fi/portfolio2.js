import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout/layout'
import MainPhoto from '../../images/MainPhoto.png'
import ArrowRight from '../../images/ArrowRight.png'
import ArrowLeft from '../../images/ArrowLeft.png'


const Portfolio2 = () => {
  return (
    <Layout>
      <StyleWrapper>
      <div className="Container">
        <p>Thinking in 3d 2018</p>
        <div className="Container_Client">
        <p>Client: The English School</p>
        <p>Date: 2018</p>
        <p>Team: Media</p>
        </div>
        <img className="Photo" src={MainPhoto} alt="" />
      </div>

        <div className="BottomText">
          <p className='BottomText_First'>kuten mitä näet?</p>
          <p className='BottomText_Second'>Suunnitellaan projekti</p>
          <div className="BottomText_Buttons">
            <button><img className="arrow" src={ArrowLeft} alt="" /></button>
            <button><img className="arrow" src={ArrowRight} alt="" /></button>

          </div>
        </div>
      </StyleWrapper>
    </Layout>
  )
}

const StyleWrapper = styled.div`
      height: auto;
      justify-content: center;
      .Container {
      display: flex;
      width: 80%;
      margin: auto;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding: 25vh 0;
      @media screen and (max-width: 1000px) {
        padding: 15vh 0;
      }
      p {
        text-align: center;
        font-size: 40px;
        font-weight: 700;
        padding-top: 2.5rem;
        width: 45%;
        @media screen and (max-width: 1000px) {
          padding-top: 1rem;
          text-align: center;
        }
      }
      .Container_Client{
        margin-top: 5rem;
        margin-bottom 10rem;
        display: flex;
        width: 50%;
        @media screen and (max-width: 1000px) {
          justify-content: center;
          flex-direction: column;
          align-items: center;
          margin-top: 3rem;
        }
      p {
        font-size: 22px;
        font-weight: bold;
        @media screen and (max-width: 1000px) {
          margin-top: 3rem;
        }
      }
    }
  }
        .Photo{
          margin: 5rem auto;
          width: 80%;
          background-size: cover;
          background-image: url(${MainPhoto});
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
        .BottomText_Buttons{
          margin: 5rem auto 1rem auto;
          display: flex;
          width: 25%;
          justify-content: space-between;          
          button {
            border: none;
            background: transparent;
            width: 40px;
            height: 62px;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
        }


      }
`

export default Portfolio2
