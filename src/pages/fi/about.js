import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout/layout'
import books from '../../images/books.png'
import rightArrow from '../../images/right-arrow.svg'
import media from '../../images/Media_kuva.png'
import ict from '../../images/ICT_kuva.png'
import dev from '../../images/Softdev_kuva.png'

 
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


  <img src={books}  className="top-img" />

  <div class="ilmaa"></div>

      <div className="text">
        <h1>Meistä</h1>
        <p>Digitalents Helsingin keskiössä on ajatus jatkuvasta oppimisesta. Tarjoamme ympäristön, jossa ennakkoluuloton kokeileminen ei ole vain sallittua, vaan myös kannustettavaa. Nuoret osaajat, hyvät resurssit ja laajat verkostot kohtaavat meillä, luoden otollisen alustan innovaatioille.</p>
      </div>

  <div class="viiva_yla"></div>

  <div class="TextContainer">
      <p class="TextContainer_Text">Taustalla on malli San Franciscon alueen kultakaudesta, jolloin Stanfordin ja Berkeleyn yliopistojen sekä autotalliyritysten kokeilut loivat digitaalisen alan suurimman kehityksen. Yritysten kuten Googlen, Applen ja Intelin perusteet luotiin tuolloin. Tänäkin päivänä voidaan luoda uutta yhdistämällä erilaisia ihmisiä, kokeilukulttuuria ja yhteisöllisyyttä.</p>
      <p class="TextContainer_Text">Maailmamme on jatkuvassa liikkeessä. Tulevaisuudessa tämä tulee korostumaan entisestään, teknologian kiihtyvän kehityksen tuodessa mukanaan uusien tilaisuuksien lisäksi yhä enemmän ennennäkemättömiä haasteita. Me pystymme reagoimaan näihin haasteisiin nopeasti, sillä yhteisömme on suunniteltu alusta alkaen ketteräksi.</p>
      <p class="TextContainer_Text">Sen lisäksi, että teemme asiakastöitä erilaisille yrityksille ja yhteistyökumppaneille, tarjoamme työntekijöillemme mahdollisuuden kehittää taitojaan myös henkilökohtaisten projektien kautta. Meillä nuoret oppivat ideoimaan ja kehittämään taitojaan oma-aloitteisesti. Tämä avaa uusia ovia sekä työelämässä että sen ulkopuolella.</p>
      <p class="TextContainer_Text">Mielestämme onnistuneen työn tärkein elementti on luottamus asiakkaan ja meidän välillä. Tämä on mahdollista, sillä toimintamme perustuu avoimuuteen ja rehellisyyteen. Yhteisymmärrys on meille kaikki kaikessa.</p>
  </div>

  <div class="viiva_ala"></div>

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

  <div className="ilmaa">
    <p>kuten mitä näet?</p>
    <h1>Suunnitellaan projekti</h1>
    <div class="ilmaa">
      <button>Lue palveluistamme <img className="arrow" src={rightArrow} alt="" /></button>
    </div>
  </div>
 
      </StyleWrapper>
    </Layout>
  )
}
 
const StyleWrapper = styled.div`

@media screen and (max-width: 992px) {
  body {
    background-color: blue;
    color: white;
  }
}

/* On screens that are 600px wide or less, the background color is olive */

.top-img {
  height: 40vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  display: block;
  object-fit: cover;
  
}

.ilmaa {
  padding: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;

  p {
    font-family: Asap;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.03em;
  }

  h1 {
    font-size: 64px;
    line-height: 150%;
    font-family: futura-pt-bold;
    font-weight: 700;
    margin-top: 20px;

    @media screen and (max-width: 600px) {
      
        font-size: 32px;
        line-height: 150%;
        font-family: futura-pt-bold;
        font-weight: 700;
        margin-top: 20px;
      
    }
  }
}

.viiva_yla {
  margin-top: 10vh;
  margin-bottom: 10vh;
  margin-left: 48%;
  width: 80px;
  border: 0.5px solid black;
}

.viiva_ala {
  margin-top: 5px;
  margin-bottom: 15vh;
  margin-left: 48%;
  width: 80px;
  border: 0.5px solid black;
}

.text {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  height: 40vh;

  h1 {
    font-size: 64px;
    line-height: 150%;
    font-family: futura-pt-bold;
    font-weight: 700;
    margin-top: 20px;
  }
  

  h2 {
    font-size: 32px;
    line-height: 150%;
    font-family: futura-pt-bold;
    font-weight: 700;
  }

  p {
    max-width: 1200px;
    font-family: Asap;
    font-weight: bold;
    font-size: 24px;
    line-height: 150%;
    padding: 50px;
  }
}


  .TextContainer{
    display: flex;
    flex-wrap: wrap;
    width: 90vw;
    margin: auto;
    margin-top: 0;
    align-items: center;
    justify-content: center;

    .TextContainer_Text{
      margin-top: 20px;
      margin-bottom 20px;
      margin-left: 70px;
      margin-right: 70px;
      height: 300px;
      width: 500px;
      font-family: Asap;
      font-style: normal;
      font-weight: 500;
      font-size: 21px;
      line-height: 150%;

      @media screen and (max-width: 600px) {
        height: auto;
      }
    }
  }

  .ImagesContainer{
    display: flex;
    justify-content: center;
    flex: wrap;
     
    flex-direction: row;
    align-items: center;


    @media screen and (max-width: 600px) {
      flex-direction: column;
    }

    .ImagesContainer_Media, .ImagesContainer_ICT, .ImagesContainer_SoftDev{
      border-radius: 4px;
      font-style: normal;
      font-weight: bold;
      max-width: 217px;
      min-width: 217px;
      font-size: 29px;
      line-height: 34px;
      height: 230px;
      color: #ffffff;
      display: flex;
      padding: 0vw;
      justify-content: center;
      align-items: center;
      align-text: center;
      background-size: cover;
      margin-right: 5vw;
      margin-left: 5vw;
      flex-shrink: 1;
    }
    
    
  }

  .ImagesContainer_Media {
    background-image: url(${media});
    flex-shrink: 2;
  }

  .ImagesContainer_ICT {
    background-image: url(${ict});
    flex-shrink: 2;
  }
  .ImagesContainer_SoftDev {
    background-image: url(${dev});
    flex-shrink: 2;
  }

      button {
        align-items: center;
        border: 1px solid black;
        background: #ffffff;
        margin-top:0px;
        width: 250px;
        height: 54px;
        font-size: 18px;
        line-height: 24px;
        font-weight: 700;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 15px;

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
    }
  }
   
`
 
export default AboutPage
