import React from 'react'
import styled from 'styled-components'

class SomeContent extends React.Component {
  render () {
    return (
      <SomeWrapper>
        <div className="sometext">
          <p>{this.props.data.someText}</p>
        </div>
        <ContentWrapper>
          <div className="podcasts">
            <h3>Podcastit</h3>
            {this.props.data.podcasts.map(podcast => {
              return <p>{podcast}</p>
            })}
          </div>
          <div className="learning-material">
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
  background-color: #353535;
  padding-top: 30px;
  text-align: center;

  .sometext {
    padding-bottom: 15px;
    color: white;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-flow: row nowrap;
  padding-bottom: 50px;

  .podcasts {
    flex-basis: 50%;
    text-align: right;
    padding-right: 5px;
    border-right: solid 2px #8F8F8F;

    h3 {
      text-transform: uppercase;
      color: #8F8F8F;
      padding-bottom: 5px;
    }

    p {
      color: white;
      text-decoration: underline;
    }
  }

  .learning-material {
    flex-basis: 50%;
    text-align: left;
    padding-left: 5px;

    h3 {
      text-transform: uppercase;
      color: #8F8F8F;
      padding-bottom: 5px;
    }

    p {
      color: white;
      text-decoration: underline;
    }
  }
`

export default SomeContent