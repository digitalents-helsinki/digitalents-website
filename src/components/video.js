import React, {Component, Fragment} from "react"
import { Player } from "video-react"
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
          <source src="http://videos.ctfassets.net/j3k0lvclv8r6/7Cp7UlcG1TnTr1BNc2M5Sv/1a1de03f3b383227e292e4b70194b0e8/DT_PROMO_sound_200519_v2.mp4" />
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