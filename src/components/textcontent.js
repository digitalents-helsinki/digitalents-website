import React from 'react'
import styled from 'styled-components'

const textData = {
  paragraphs: [
    {
      paragraph: 'Digitalents Helsinki on ajatus jatkuvasta oppimisesta. Tarjoamme ympäristön, jossa ennakkoluuloton kokeileminen ei ole vain sallittua, vaan myös kannustettavaa. Nuoret osaajat, hyvät resurssit ja laajat verkostot kohtaavat meillä, luoden otollisen alustan innovaatioille.'
    },
    {
      paragraph: 'Taustalla on malli San Fransiscon alueen kultakaudesta, jolloin Stanfordin ja Berkeleyn yliopistojen sekä autotalliyritysten kokeilut loivat digitaalisen alan suurimman kehityksen. Yritysten kuten Googlen, Applen ja Intelin perusteet luotiin tuolloin. Tänäkin päivänä voidaan luoda uutta yhdistämällä erilaisia ihmisiä, kokeilukulttuuria ja yhteisöllisyyttä.'
    },
    {
      paragraph: 'Maailmamme on jatkuvassa liikkeessä. Tulevaisuudessa tämä tulee korostumaan entisestään, teknologian kiihtyvän kehityksen tuodessa mukanaan uusien tilaisuuksien lisäksi yhä enemmän ennennäkemättömiä haasteita. Me pystymme reagoimaan näihin haasteisiin nopeasti, sillä yhteisömme on suunniteltu alusta alkaen joustavaksi.'
    },
    {
      paragraph: 'Uskomme että onnistuneen työn tärkein elementti on luottamus asiakkaan ja meidän välillä. Tämä on mahdollista, sillä toimintamme perustuu ehdottomaan avoimuuteen ja rehellisyyteen. Yhteisymmärrys on meille kaikki kaikessa.'
    }
  ]
}

const TextContent = () => {
  const textItems = textData.paragraphs.map((n, index) => (
    <p>{n.paragraph}</p>
  ))

  return (
    <ContentWrapper>
      {textItems}
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div`
  text-align: center;
`

export default TextContent