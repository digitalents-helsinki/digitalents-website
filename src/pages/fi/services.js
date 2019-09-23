import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout/layout'
import accounts from '../../images/accounts-blur.png'
import ict from '../../images/ICT-asiantuntijapalvelut.png'
import stack from '../../images/Full-Stack.png'
import digi from '../../images/Media-palvelutlogo.png'
import rightArrow from '../../images/right-arrow.svg'

const ServicesPage = () => {
  return (
    <Layout>
      <StyleWrapper>       
        <div class="parallax-wrapper">
          <div class="parallax-header">
            <h1>Digitalents palvelut</h1>
          </div>
        </div>
          <div className="text">
            <p>Toteutamme monipuolisesti digitaalisia tuotantoja, ohjelmistokehitystä sekä IT-alan palveluita. Ota meihin rohkeasti yhteyttä niin suunnitellaan seuraava projektisi!</p>
          </div>
          <div className="ImagesContainer">
            <div className="ImagesContainer_ICT">
            <h2>ICT-asiantuntijapalvelut</h2></div>
            <div className="ImagesContainer_STACK">
            <h2>Full Stack -ohjelmistokehitys</h2></div>
            <div className="ImagesContainer_DIGI">
            <h2>Digitaalisen median palvelut</h2></div>
          </div>
          <div className="ContactContainer">
            <h1>Ota Yhteyttä</h1>
            <p>Ota rohkeasti yhteyttä milloin tahansa, olipa sinulla kysyttävää tai sanot hei</p>
            <form className="ContactContainer_Form" method="post">
              <input type="text" placeholder="Nimesi" />
              <input type="text" placeholder="Sähköpostisi" />
              <textarea rows="8"  placeholder="Viesti"></textarea>
            </form>
            <button>Send <img className="arrow" src={rightArrow} alt="" /></button>
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
  background-image: url(${accounts});
  background-attachment: fixed;
  overflow: hidden;
  position: relative;
  display: block;
  object-fit: cover;
  align-items: center;
  text-align: center; 
}

.parallax-header {
  margin-top: 18vh;
  h1 {
    margin-top: 18vh;
    font-size: 64px;
    -webkit-text-stroke-width: 0px; 
    -webkit-text-stroke-color: black; 
    line-height: 150%;
    font-family: futura-pt-bold;
    font-weight: 700;
    margin-top: 20px;
    color: white;
  }
}

.top-img {
  height: 40vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  display: block;
  object-fit: cover;
}

.text {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  height: auto;
  padding-top: 10vh;
  padding-bottom: 5vh;

  h2 {
    font-size: 32px;
    line-height: 150%;
    font-family: futura-pt-bold;
    font-weight: 700;
    padding: 15vh;
  }

  p {
    max-width: 900px;
    font-family: Asap;
    font-size: 24px;
    line-height: 150%;
  }

  @media screen and (max-width: 600px) {
    height: 100vh;
    justify-content: center;
    padding: 0 1rem;

    p {
      margin: 3rem 0;
    }
  }
}
.ImagesContainer {
  display: flex;
  margin: auto;
  height: 40vh;
  width: 70%;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    margin-top: 5rem;
    flex-direction: column;
    align-items: center;
  }

  .ImagesContainer_ICT {
    background-image: url(${ict});
  }
  .ImagesContainer_STACK {
    background-image: url(${stack});
  }
  .ImagesContainer_DIGI {
    background-image: url(${digi});
  }
    .ImagesContainer_ICT, .ImagesContainer_STACK, .ImagesContainer_DIGI {
      display: flex;
      width: 320px;
      height: 250px;
      background-size: contain;
      background-repeat: no-repeat;
      justify-content: center;
      margin-right: 40px;
      @media screen and (max-width: 1000px) {
        margin: 10px 0;
        padding-bottom: 30px;
      }
      h2 {
        text-align: center;
        margin: auto;
        padding-top: 15rem;
        font-size: 20px;
        line-height: 150%;
        font-family: futura-pt-bold;
        @media screen and (max-width: 1000px) {
          margin: .1rem 0;
        }
      }
    }
  }
  .ContactContainer {
    display: flex;
    flex-direction: column;
    width: 60vw;
    justify-content: center;
    align-items: center;
    margin: 10vh auto;
    @media screen and (max-width: 1000px) {
      margin-top: 22rem;
    }

    textarea {
      width: 99%;
      font-size: 20px;
      margin-top: 25px;
      border: 2px solid;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 3rem;
      width: 60%;
      
      input {
        width: 100%;
        height: 3rem;
        border: none;
        border-bottom: 2px solid;
        margin-top: .8rem;
        font-size: 20px;

        
        
        &::placeholder {
          color: black;
          font-size: 20px;
          font-family: futura-pt-bold;
        }
      }
    }
    h1 {
      font-size: 27px;
      line-height: 150%;
      font-family: futura-pt-bold;
      font-weight: 700;
      text-decoration: underline;
    }
    p {
      text-align: center;
      padding-top: 2rem;
      margin-top: 1rem;
      font-size: 1rem;
    }
    button {
      border: 1px solid black;
      background: #ffffff;
      margin-top:70px;
      width: 200px;
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

`

export default ServicesPage
