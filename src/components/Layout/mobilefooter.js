import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import fbIcon from '../../images/facebook_logo_valkoinen.svg'
import igIcon from '../../images/instagram_logo_valkoinen.svg'
import twIcon from '../../images/twitter_logo_valkoinen.svg'
import liIcon from '../../images/Linkedin_logo.svg'
import helLogo from '../../images/HELSINKI_Tunnus_VALKOINEN.png'

const MobileFooter = (props) => {
  return (
    <FooterWrapper>
      <div className="links">
        <Link to={`${props.pagePrefix}/media`}>DT MEDIA</Link>
        <Link to={`${props.pagePrefix}/ict`}>DT ICT</Link>
        <Link to={`${props.pagePrefix}/softdev`}>DT SOFTDEV</Link>
        <Link to={`${props.pagePrefix}/#persons`}>{props.language === 'en' ? 'CONTACT' : 'YHTEYSTIEDOT' }</Link>
        <Link to={`${props.pagePrefix}/tyopaikat`}>{props.language === 'en' ? 'JOBS' : 'TYÖPAIKAT'}</Link>
      </div>
      <div className="social-icons">
        <h3>{props.language === 'fi' ? 'SEURAA MEITÄ:' : 'FOLLOW US:'}</h3>
        <a href="https://twitter.com/digitalentshki">
          <img src={twIcon} alt="" />
        </a>
        <a href="https://www.instagram.com/digitalentshelsinki/">
          <img src={igIcon} alt="" />
        </a>
        <a href="https://www.facebook.com/digitalentshelsinki/">
          <img src={fbIcon} alt="" />
          </a>
        <a href="https://www.linkedin.com/company/digitalents-helsinki/">
          <img src={liIcon} alt="" />
        </a>
        <p>#DIGITALENTSHKI</p>
      </div>
      <div className="location">
        <div className="address">
          <p>Lapinlahdenkatu 16,</p>
          <p>00180 HELSINKi</p>
        </div>
        <div className="postaddress">
          <p>PL18402, 00099</p>
          <p>{props.language === 'fi' ? 'Helsingin kaupunki' : 'City of Helsinki'}</p>
        </div>
        <img src={helLogo} alt="" />
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  display: flex;
  flex-flow: column wrap;
  color: white;
  background-color: #353535;
  text-align: center;
  justify-content: space-between;

  * a {
    color: white;
    padding-top: 1rem;
    font-weight: 700;
    font-size: 1.2rem;
  }

  .links {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    padding-bottom: 2rem;
    font-family: futura-pt-bold, sans-serif;
  }

  .social-icons {
    padding-top: 1rem;
    img {
      width: 50px;
      padding: 0.5rem;
    }

    p, h3 {
      font-weight: 700;
      font-size: 1.2rem;
      font-family: futura-pt-bold, sans-serif;
    }
  }

  .location {
    padding-top: 3rem;
    padding-bottom: 3rem;

    .address {
      text-transform: uppercase;
      padding-bottom: 1rem;
    }

    img {
      padding-top: 2rem;
      width: 200px;
    }
  }
`

export default MobileFooter