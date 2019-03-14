import React, { Fragment } from 'react'
import styled from 'styled-components'
import { StaticQuery } from 'gatsby'

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
          console.log(footer)
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
    @media screen and (max-width: 400px) {
      text-align: center;
    }
    order:1;
    margin: 2rem 0;
    font-weight: bold;
    .leftUpper {
      margin-bottom: 0.5rem;
      text-transform: uppercase;
      line-height: 1.3;
    }
  }

  .middle {
    margin: 2rem 0;
    font-weight: bold;
    text-align: center;
    order: 2;

    @media screen and (max-width: 400px) {
      order: 3;
    }

    .middleUpper {
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }
  }

  .right {
    margin: 2rem 0;
    font-weight: bold;
    text-align: center;
    order 3;

    @media screen and (max-width: 400px) {
      order 2;
    }

    .rightUpper {
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }
  }
`

export default FooterQuery
