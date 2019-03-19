import React from 'react'
import styled from 'styled-components'

class SomeContent extends React.Component {
  render () {
    return (
      <SomeWrapper>
        <div>
          <p>{this.props.data.someText}</p>
        </div>
        <ContentWrapper>
          <div>
            <h3>Podcastit</h3>
            {this.props.data.podcasts.map(podcast => {
              return <p>{podcast}</p>
            })}
          </div>
          <div>
            <h3>Oppimateriaali</h3>
            {this.props.data.learningLinks.map(link => {
              return <p>{link}</p>
            })}
          </div>
        </ContentWrapper>
      </SomeWrapper>
    )
  }
}

const SomeWrapper = styled.div`
  background-color: #8f8f8f
`

const ContentWrapper = styled.div`
  display: flex;
`

export default SomeContent