import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import fbIcon from '../images/facebook_logo_valkoinen.svg'
import igIcon from '../images/instagram_logo_valkoinen.svg'
import twIcon from '../images/twitter_logo_valkoinen.svg'

const BurgerMenu = (props) => {
  const [visible, setVisible] = useState(false)

  const handleClick = () => {
    setVisible(!visible)
  }
  
  const sideBarElement = visible ? 
  <SideBar>
    <div className="button">
      <button onClick={handleClick}>Close</button>
    </div>
    <div className="wrapper">
      <div className="links">
        <ul>
          <li><Link to="/fi/">ETUSIVU</Link></li>
        </ul>
        <ul>
          <li><Link to="/teams/media/">DT MEDIA</Link></li>
          <li><Link to="/teams/ict/">DT ICT</Link></li>
          <li><Link to="/teams/softdev/">DT SOFTDEV</Link></li>
        </ul>
        <ul>
          <li><Link to="/fi/#persons">YHTEYSTIEDOT</Link></li>
          <li><Link to="/tyopaikat/">TYÖPAIKAT</Link></li>
        </ul>
      </div>
      <div className="langOptions">
        <ul>
          <li>FI</li>
          <li>EN</li>
        </ul>
      </div>
    </div>
    <div className="social-links">
      <img src={twIcon} alt="" />
      <img src={igIcon} alt="" />
      <img src={fbIcon} alt="" />
    </div>
  </SideBar> : null

  return (
    <header>
      <BurgerButton onClick={handleClick}>Open</BurgerButton>
      {sideBarElement}
    </header>
  )
}

const BurgerButton = styled.button`
  position: fixed;
  z-index: 9;
`

const SideBar = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
  color: white;
  opacity: 80%;

  * a {
    color: white;
  }
  .button {
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 70%;
    padding-right: 3rem;
    text-align: right;
    font-weight: 700;
    padding-top: 5rem;

    .links {
      padding-bottom: 2rem;
      font-size: 2rem;

      ul {
        padding-bottom: 2rem;

        li {
          padding-bottom: 0.5rem;
        }
      }
    }
  
    .langOptions {
      padding-top: 0rem;

      ul {
        padding-bottom: 1rem;
        font-size: 1.5rem;

        li {
          padding-bottom: 1rem;
        }
      }
    }
  }

  .social-links {
    padding-left: 2rem;

    img {
      width: 2rem;
      padding-left: 0.5rem;
    }
  }
`

export default BurgerMenu