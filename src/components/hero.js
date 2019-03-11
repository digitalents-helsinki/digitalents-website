import React from 'react'
import styled from 'styled-components'

import RightImageBG from '../images/Etusivu_tausta_Oikea.png'
import LeftImageBG from '../images/Etusivu_tausta_Vasen.png'
import LeftMaskImage from '../images/etusivu_vasen_maski.svg'
import RightMaskImage from '../images/etusivu_oikea_maski.svg'

const heroData = {
  titleItems: [
    {
      title: 'Uniikki'
    },
    {
      title: 'Inspiroiva'
    },
    {
      title: 'Innovatiivinen'
    }
  ],
  titleSlogan: 'Digitalents Helsinki on nuorten moderni ja luova yhteisö, jossa opitaan tekemällä koodaamista, pelien kehittämistä ja uutta mediaa.'
}

const Hero = () => {
  const titleItems = heroData.titleItems.map((n, index) => (
    <h1>{n.title}</h1>
  ))

  return (
    <HeroWrapper>
      <LeftImage>
        <img src={LeftMaskImage} alt="" />
      </LeftImage>
      <TextWrapper>
        {titleItems}
        <p>{heroData.titleSlogan}</p>
      </TextWrapper>
      <RightImage>
        <img src={RightMaskImage} alt="" />
      </RightImage>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
`

const LeftImage = styled.div`
  background-image: url(${LeftImageBG});
  background-size: cover;
  flex: 1;
`

const RightImage = styled.div`
  background-image: url(${RightImageBG});
  background-size: cover;
  flex: 1;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default Hero