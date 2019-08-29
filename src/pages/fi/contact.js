import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout/layout'
import rightArrow from '../../images/right-arrow.svg'

const ContactPage = () => {
  return (
    <Layout>
      <StyleWrapper>
      <div className="ContactContainer">
        <h1>Ota Yhteyttä</h1>
        <p>Ota rohkeasti yhteyttä milloin tahansa, olipa sinulla kysyttävää tai sanot hei</p>
        <form className="ContactContainer_Form" method="post">
          <input type="text" placeholder="Nimesi" />
          <input type="text" placeholder="Sähköpostisi" />
          <input type="text" placeholder="Viesti" />
        </form>
        <button>Send <img className="arrow" src={rightArrow} alt="" /></button>
      </div>
      <div className="Team">
        <div className="Member">
        <h1>Vesa Jaakola</h1>
        <p>Head of Digitalents Helsinki</p>
        <p>vesa.jaakola@hel.fi</p>
        <p>040 717 9121</p>
        </div>
        <div className="Member">
        <h1>Karoliina Leisti</h1>
        <p>Head of Digitalents Media</p>
        <p>karoliina.leisti@digitalentshelsinki.fi</p>
        <p>040 522 4296</p>
        </div>
        <div className="Member">
        <h1>Tarja Kurvinen</h1>
        <p>Project Coordinator</p>
        <p>tarja.kurvinen@hel.fi</p>
        <p>040 669 2530</p>
        </div>
        <div className="Member">
        <h1>Seppo Rouhiainen</h1>
        <p>Head of Digitalents ICT</p>
        <p>seppo.rouhiainen@digitalentshelsinki.fi</p>
        <p>040 487 1644</p>
        </div>
        <div className="Member">
        <h1>Veikko Hiiri</h1>
        <p>Project Coordinator</p>
        <p>veikko.hiiri@hel.fi</p>
        <p>040 489 6016</p>
        </div>
      </div>
      <div className="addressContainer">
        <p>LAPINLAHDENKATU 16, 00180 HELSINKI</p>
        <p>PL18402, 00099 HELSIGIN KAUPUNKI</p>
      </div>
      <div className="mapContainer">
        <iframe scrolling="no" src="https://www.openstreetmap.org/export/embed.html?bbox=24.92110133171082%2C60.16673876279075%2C24.935263395309452%2C60.17165409991959&amp;layer=mapnik"></iframe>
        </div>


      </StyleWrapper>
    </Layout>
  )
}

const StyleWrapper = styled.div`
  .ContactContainer{
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  height: 80vh;
  margin: auto;
  width: 61%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
  }
  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
    width: 60%;
  input{
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
  h1{
    font-size: 27px;
    line-height: 150%;
    font-family: futura-pt-bold;
    font-weight: 700;
    text-decoration: underline;
  }
  p{
    text-align: center;
    padding-top: 2rem;
    margin-top: 25px;
    font-size: 25px;
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
  .Team{
    display: flex;
    width:80%;
    margin: auto;
    @media screen and (max-width: 1000px) {
      margin-top: .5rem;
      flex-direction: column;
      align-items: center;
    }
    .Member{
      width: 22rem;
      height: 10rem;
      margin: auto 1rem;
      @media screen and (max-width: 1000px){
        width: 11rem;
      }
      h1{
        color: black;
        font-size: 20px;
        font-family: futura-pt-bold;
        margin-bottom: 2rem;
      }
      p{
        margin: .5rem auto;
      }
    }
  }
  .addressContainer {
    margin-top: 5rem;
    display:flex;
    width:100%;
    flow-direction:row;
    justify-content:center;
    @media screen and (max-width: 1000px) {
      margin-top: 2rem;
      flex-direction: column;
      align-items: center;
    }
      p{
        margin-right: 52px;
        font-size: 20px;
        font-style: bold;
        font-weight: 700;
        @media screen and (max-width: 1000px) {
          margin-bottom: 1rem;
        }
      }
  }
  .mapContainer{
    margin-top: 50px;
    margin-bottom: 5px;
    display: flex;
    width: 100%;
    heght: 800px;
    justify-content: center;
    align-items: center;
      iframe{
        width: 100%;
        height: 600px;
        border: 1px solid black;
        pointer-events: none;
        }
    }
`

export default ContactPage
