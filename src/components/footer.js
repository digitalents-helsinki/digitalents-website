import React, { Fragment } from 'react'
import styled from 'styled-components'
import { StaticQuery } from 'gatsby'

const SocialButton = {}

const FooterColumn = props => {
  if (props.position === 'left') {
    return (
      <div className="left">
        {props.data.map(n => {
          return <p>{n}</p>
        })}
      </div>
    )
  } else if (props.position === 'middle') {
    return (
      <div className="middle">
        {props.data.map(n => {
          return <p>{n}</p>
        })}
      </div>
    )
  } else if (props.position === 'right') {
    return (
      <div className="right">
        {props.data.map(n => {
          return <p>{n}</p>
        })}
      </div>
    )
  } else return null
}

class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>
        {this.props.footer.edges.map(footer => {
          return (
            <Fragment>
              <FooterColumn position="left" data={footer.node.leftColumn} />
              <FooterColumn position="middle" data={footer.node.middleColumn} />
              <FooterColumn position="right" data={footer.node.rightColumn} />
            </Fragment>
          )
        })}
      </FooterWrapper>
    )
  }
}

const FooterQuery = () => (
  <StaticQuery
    query={graphql`
      query footerQuery {
        allContentfulFooter(filter: { node_locale: { regex: "/en-US/" } }) {
          edges {
            node {
              leftColumn
              middleColumn
              rightColumn
            }
          }
        }
      }
    `}
    render={data => <Footer footer={data.allContentfulFooter} />}
  />
)

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #353535;
  color: white;
  justify-content: space-evenly;

  @media screen and (min-width: 400px) {
    flex-direction: row;
  }

  .left {
  }

  .middle {
  }

  .right {
  }
`

export default FooterQuery
