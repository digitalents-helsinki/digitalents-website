import React, {Component, Fragment} from "react"
import { Player, ControlBar } from "video-react"
import "video-react/dist/video-react.css"

export default class Video extends Component {
  constructor(props, context) {
    super(props, context)
    this.play = this.play.bind(this)
    this.state = {
      playing: false
    }
  }

  componentDidMount() {
    this.player.subscribeToStateChange(this.handleStateChange.bind(this))
  }

  handleStateChange(state) {
    this.setState({
      player: state
    })
  }

  play() {
    if (this.state.playing) {
      this.player.pause()
    } else {
      this.player.play()
    }
  }

  render() {
    return (
      <Fragment>
        <Player
          autoPlay
          loop
          muted
          ref={player => {this.player = player}}
        >
          <source src="http://videos.ctfassets.net/j3k0lvclv8r6/2NkTD7B2rd8IJJTsWbyA5d/41f0df3079f9cccf9dd9a7431aebe273/19_07_24_TRAILER_WEBSITE.mp4" />
        <ControlBar disabled />
        </Player>
      </Fragment>
    )
  }
}

/*
export default () => (
  <StaticQuery 
    query={graphql`
      query {
        contentfulAsset(contentful_id: {eq: "7Cp7UlcG1TnTr1BNc2M5Sv"}) {
          file {
            url
          }
        }
      }
    `}
    render={data => (
      <Video data={data} />
    )}
  />
)
*/