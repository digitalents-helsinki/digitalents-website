import React from 'react'
import styled from 'styled-components'

const someData = {
  paragraph: 'Digitalents Helsinki on mukana teknologian, innovaatioiden ja luovan alan kehitysprojekteissa. Haluamme jakaa opittuja ja tuotettuja asioita esimerkiksi rauhanteknologiasta, robotiikasta ja tekoälystä podcastien ja oppimateriaalien kautta.',
  subtitles: [
    {
      title: 'Podcastit'
    },
    {
      title: 'Oppimateriaali'
    }
  ]
}

const SomeContent = () => {
  const resourceItems = someData.subtitles.map((n, index) => (
    <div>
      <h3>{n.title}</h3>
    </div>
  ))

  return (
    <SomeWrapper>
      <div>
        <p>{someData.paragraph}</p>
      </div>
      <ContentWrapper>
        {resourceItems}
      </ContentWrapper>
    </SomeWrapper>
  )
}

const SomeWrapper = styled.div`
  background-color: #8f8f8f
`

const ContentWrapper = styled.div`
  display: flex;
`

export default SomeContent