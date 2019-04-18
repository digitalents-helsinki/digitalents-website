import React, { Fragment } from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'

import fbIcon from '../images/facebook_logo_valkoinen.svg'
import igIcon from '../images/instagram_logo_valkoinen.svg'
import twIcon from '../images/twitter_logo_valkoinen.svg'

const FooterColumn = props => {
  if (props.position === 'left') {
    return (
      <div className="left">
        <div className="leftUpper">
          <Link to="">{props.language === 'en' ? 'SERVICES' : 'PALVELUT'}</Link>
          <Link to={`${props.pagePrefix}/#persons`}>
            {props.language === 'en' ? 'CONTACT' : 'YHTEYSTIEDOT'}
          </Link>
          <Link to={`${props.pagePrefix}/tyopaikat/`}>
            {props.language === 'en' ? 'WORK' : 'TYÖPAIKAT'}
          </Link>
        </div>
        <div className="leftLower">
          {props.lowerData.map(n => {
            return <p key={n}>{n}</p>
          })}
        </div>
      </div>
    )
  } else if (props.position === 'middle') {
    return (
      <div className="middle">
        <div className="middleUpper">
          {props.upperData.map(n => {
            return <p key={n}>{n}</p>
          })}
        </div>
        <div className="middleLower">
          {props.lowerData.map(n => {
            return <p key={n}>{n}</p>
          })}
        </div>
      </div>
    )
  } else if (props.position === 'right') {
    return (
      <div className="right">
        <div className="rightUpper">
          {props.upperData.map(n => {
            return <p key={n}>{n}</p>
          })}
        </div>
        <div className="social-icons">
          <a href="https://twitter.com/digitalentshki">
            <img src={twIcon} alt="" />
          </a>
          <a href="https://www.instagram.com/digitalentshelsinki/">
            <img src={igIcon} alt="" />
          </a>
          <a href="https://www.facebook.com/digitalentshelsinki/">
            <img src={fbIcon} alt="" />
          </a>
        </div>
        <div className="rightLower">
          <p>{props.lowerData}</p>
        </div>
      </div>
    )
  } else return null
}

const Footer = props => {
  const data = props.language === 'fi' ? props.data.fi : props.data.en
  return (
    <FooterWrapper>
      {data.edges.map(footer => {
        return (
          <Fragment>
            <FooterColumn
              position="left"
              upperData={footer.node.footerLeftUpperColumn}
              lowerData={footer.node.footerLeftLowerColumn}
              pagePrefix={props.pagePrefix}
              language={props.language}
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

const FooterQuery = props => (
  <StaticQuery
    query={graphql`
      query footerQuery {
        en: allContentfulFooter(filter: { node_locale: { regex: "/en-US/" } }) {
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
        fi: allContentfulFooter(filter: { node_locale: { regex: "/fi-FI/" } }) {
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
    render={data => (
      <Footer
        language={props.language}
        data={data}
        pagePrefix={props.pagePrefix}
      />
    )}
  />
)

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #353535;
  color: white;
  justify-content: space-evenly;
  height: 350px;

  * a {
    color: white;
  }

  @media screen and (min-width: 400px) {
    flex-direction: row;
  }

  .left {
    @media screen and (max-width: 400px) {
      text-align: center;
    }
    order:1;
    margin: 2rem 0;
    font-weight: 500;
    font-size: 24px;
    padding-top: 3rem;

    .leftUpper {
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
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
    order: 2;
    font-size: 30px;
    font-weight: 500;
    padding-top: 3rem;

    @media screen and (max-width: 400px) {
      order: 3;
    }

    .middleUpper {
      text-transform: uppercase;
      margin-bottom: 1rem;
    }
  }

  .right {
    margin: 2rem 0;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    order 3;
    padding-top: 3rem;


    @media screen and (max-width: 400px) {
      order 2;
    }

    .rightUpper {
      text-transform: uppercase;
      margin-bottom: 1rem;
      font-family: futura-pt-bold, sans-serif;
      font-weight: 700;
    }
    .social-icons {
      img {
        width: 50px;
        padding-right: 5px;
        margin-bottom: 1rem;
      }
    }

    .rightLower {
      font-size: 20px;
      font-weight: 400;
    }
  }
`

export default FooterQuery
