import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import fbIcon from '../../images/facebook_logo_valkoinen.svg'
import igIcon from '../../images/instagram_logo_valkoinen.svg'
import twIcon from '../../images/twitter_logo_valkoinen.svg'
import openIcon from '../../images/burger-nav.svg'
import DTLogo from '../../images/DT_logo.svg'
import closeIcon from '../../images/exit-cross.png'

const BurgerMenu = (props) => {
  const [visible, setVisible] = useState(false)
  const [iconVisible, setIconVisible] = useState(true)

  const handleClick = () => {
    setVisible(!visible)
    setIconVisible(!iconVisible)
  }
  
  const sideBarElement = visible ? 
  <SideBar>
    <div className="button">
      <img img src={closeIcon} alt="" onClick={handleClick} />
    </div>
    <div className="wrapper">
      <div className="links">
        <ul>
          <li><Link to={props.pagePrefix}>{props.language === 'en' ? 'FRONT PAGE' : 'ETUSIVU'}</Link></li>
        </ul>
        <ul>
          <li><Link to={`${props.pagePrefix}/media/`}>DT MEDIA</Link></li>
          <li><Link to={`${props.pagePrefix}/ict/`}>DT ICT</Link></li>
          <li><Link to={`${props.pagePrefix}/softdev/`}>DT SOFTDEV</Link></li>
        </ul>
        <ul>
          <li><Link to={`${props.pagePrefix}/#persons`}>{props.language === 'en' ? 'CONTACT' : 'YHTEYSTIEDOT'}</Link></li>
          <li><Link to={`${props.pagePrefix}/tyopaikat/`}>{props.language === 'en' ? 'JOBS' : 'TYÖPAIKAT'}</Link></li>
        </ul>
      </div>
      <div className="langOptions">
        <ul>
          <li onClick={props.handleFiClick}>FI</li>
          <li onClick={props.handleEnClick}>EN</li>
        </ul>
      </div>
    </div>
    <div className="social-links">
      <a href="https://twitter.com/digitalentshki"><img src={twIcon} alt="" /></a>
      <a href="https://www.instagram.com/digitalentshelsinki/"><img src={igIcon} alt="" /></a>
      <a href="https://www.facebook.com/digitalentshelsinki/"><img src={fbIcon} alt="" /></a>
    </div>
  </SideBar> : null

  return (
    <header>
      {iconVisible ?
      <BurgerButton>
        <div class="burgercontainer">
          <a href="/fi/">
            <img src={DTLogo} alt="" onClick={handleClick} />
          </a>
          <img class="burger" src={openIcon} alt="" onClick={handleClick} />
        </div>
      </BurgerButton> : null}
      {sideBarElement}
    </header>
  )
}

const BurgerButton = styled.div`
.burgercontainer{
  display: inline-flex;
  justify-content: space-between;
  width: 100vw;
  background-color: ${props => props.color ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.8)"};
  position: fixed;
  margin-left:0vw;
  z-index: 9;
  padding:1rem;
}

  img {
    height: 50px;

    
  }
  .burger {
    margin-right: 0vw;
    
  }

 
`

const SideBar = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
  color: white;
  opacity: 80%;

  * a {
    color: white;
  }
  .button {
    
    img {
      padding-left: 85vw;
      padding-top: 5vh;
      height: 50px;

      @media screen and (max-width: 600px) {
        height: 20px;
      }
    }
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
      font-family: futura-pt-bold;
      font-weight: 700;
      font-size: 21px;

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
        font-family: futura-pt-bold;
        font-weight: 700;
        font-size: 15px;

        li {
          padding-bottom: 1rem;
        }
      }
    }
  }

  .social-links {
    padding-left: 2rem;
    font-size: 20px;

    img {
      width: 2rem;
      padding-left: 0.5rem;
    }
  }
`

export default BurgerMenu