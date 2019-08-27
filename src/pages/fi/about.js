import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout/layout'
import books from '../../images/books.png'

const AboutPage = () => {
  return (
    <Layout>
      <StyleWrapper>
        <img src={books} alt="" className="top-img" />
        <div className="text">
          <h2>Meistä</h2>
          <p>Digitalents Helsingin keskiössä on ajatus jatkuvasta oppimisesta. Tarjoamme ympäristön, jossa ennakkoluuloton kokeileminen ei ole vain sallittua, vaan myös kannustettavaa. Nuoret osaajat, hyvät resurssit ja laajat verkostot kohtaavat meillä, luoden otollisen alustan innovaatioille.</p>
        </div>
        <div class="TextContainer">
          <p class="TextContainer_Text">Taustalla on malli San Franciscon alueen kultakaudesta, jolloin Stanfordin ja Berkeleyn yliopistojen sekä autotalliyritysten kokeilut loivat digitaalisen alan suurimman kehityksen. Yritysten kuten Googlen, Applen ja Intelin perusteet luotiin tuolloin. Tänäkin päivänä voidaan luoda uutta yhdistämällä erilaisia ihmisiä, kokeilukulttuuria ja yhteisöllisyyttä.</p>
          <p class="TextContainer_Text">Maailmamme on jatkuvassa liikkeessä. Tulevaisuudessa tämä tulee korostumaan entisestään, teknologian kiihtyvän kehityksen tuodessa mukanaan uusien tilaisuuksien lisäksi yhä enemmän ennennäkemättömiä haasteita. Me pystymme reagoimaan näihin haasteisiin nopeasti, sillä yhteisömme on suunniteltu alusta alkaen ketteräksi.</p>
          <p class="TextContainer_Text">Sen lisäksi, että teemme asiakastöitä erilaisille yrityksille ja yhteistyökumppaneille, tarjoamme työntekijöillemme mahdollisuuden kehittää taitojaan myös henkilökohtaisten projektien kautta. Meillä nuoret oppivat ideoimaan ja kehittämään taitojaan oma-aloitteisesti. Tämä avaa uusia ovia sekä työelämässä että sen ulkopuolella.</p>
          <p class="TextContainer_Text">Mielestämme onnistuneen työn tärkein elementti on luottamus asiakkaan ja meidän välillä. Tämä on mahdollista, sillä toimintamme perustuu avoimuuteen ja rehellisyyteen. Yhteisymmärrys on meille kaikki kaikessa.</p>
        </div>
        <div className="ImagesContainer">
          <div className="ImagesContainer_Media">
            <h2>Media</h2>
          </div>
          <div className="ImagesContainer_ICT">
            <h2>ICT</h2>
          </div>
          <div className="ImagesContainer_SoftDev">
            <h2>SoftDev</h2>
          </div>
        </div>


      </StyleWrapper>
    </Layout>
  )
}

const StyleWrapper = styled.div`
  .top-img {
    height: 40vh;
    width: 100vw;
    overflow: hidden;
    position: relative;
    display: block;
    object-fit: cover;
}
    .text{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: space-around;
      height: 50vh;
      padding-top: 10vh;
      padding-bottom: 10vh;

      h2 {
        font-size: 32px;
        line-height: 150%;
        font-family: futura-pt-bold;
        font-weight: 700;
      }

      p {
        max-width: 900px;
        font-family: Asap;
        font-size: 16px;
        line-height: 150%;
      }

      button {
        background: #ffffff;
        border: 0px solid #000000;
        width: 200px;
        height: 50px;
        font-size: 18px;
        line-height: 24px;
        font-weight: 700;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      .arrow {
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

      @media screen and (max-width: 600px) {
        height: 100vh;
        justify-content: center;
        padding: 0 1rem;

        p {
          margin: 3rem 0;
        }
      }
    }
    .TextContainer{
      display: flex;
      flex-wrap: wrap;
      height: 500px;
      width: 40%;
      margin: auto;
      justify-content: space-between;

      .TextContainer_Text{
        height: 300px;
        width: 200px;

        }
    }
    .ImagesContainer{
      display: flex;
      margin: auto;
      height: auto;
      width: 40%;
      flex-direction: row;
      align-items: center;
      justify-content: center;  
      .ImagesContainer_Media, .ImagesContainer_ICT, .ImagesContainer_SoftDev{
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
    }
`

export default AboutPage
