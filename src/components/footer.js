import React, { Fragment } from 'react'
import styled from 'styled-components'
import { StaticQuery } from 'gatsby'

import fbIcon from '../images/facebook_logo_valkoinen.svg'
import igIcon from '../images/instagram_logo_valkoinen.svg'
import twIcon from '../images/twitter_logo_valkoinen.svg'

const SocialButton = {}

const FooterColumn = props => {
  if (props.position === 'left') {
    return (
      <div className="left">
        <div className="leftUpper">
          {props.upperData.map(n => {
            return <p>{n}</p>
          })}
        </div>
        <div className="leftLower">
          {props.lowerData.map(n => {
            return <p>{n}</p>
          })}
        </div>
      </div>
    )
  } else if (props.position === 'middle') {
    return (
      <div className="middle">
        <div className="middleUpper">
          {props.upperData.map(n => {
            return <p>{n}</p>
          })}
        </div>
        <div className="middleLower">
          {props.lowerData.map(n => {
            return <p>{n}</p>
          })}
        </div>
      </div>
    )
  } else if (props.position === 'right') {
    return (
      <div className="right">
        <div className="rightUpper">
          {props.upperData.map(n => {
            return <p>{n}</p>
          })}
        </div>
        <div className="social-icons">
          <img src={twIcon} alt="" />
          <img src={igIcon} alt="" />
          <img src={fbIcon} alt="" />
        </div>
        <div className="rightLower">
          <p>{props.lowerData}</p>
        </div>
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
              <FooterColumn
                position="left"
                upperData={footer.node.footerLeftUpperColumn}
                lowerData={footer.node.footerLeftLowerColumn}
              />
              <FooterColumn
                position="middle"
                upperData={footer.node.footerMiddleUpperColumn}
                lowerData={footer.node.footerMiddleLowerColumn}
              />
              <FooterColumn
                position="right"
                upperData={footer.node.footerRightUpperText}
                lowerData={footer.node.footerRightLowerText}
              />
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
              footerLeftUpperColumn
              footerLeftLowerColumn
              footerMiddleUpperColumn
              footerMiddleLowerColumn
              footerRightUpperText
              footerRightLowerText
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
    margin: 2rem 0;
    font-weight: bold;
    .leftUpper {
      margin-bottom: 0.5rem;
      text-transform: uppercase;
      line-height: 1.3;
    }

    @media screen and (max-width: 400px) {
      text-align: center;
    }
  }

  .middle {
    margin: 2rem 0;
    font-weight: bold;
    text-align: center;
    .middleUpper {
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }
  }

  .right {
    margin: 2rem 0;
    font-weight: bold;
    text-align: center;
    .rightUpper {
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }
    .social-icons {
      img {
        width: 50px;
        padding-right: 5px;
      }
    }
  }
`

export default FooterQuery
