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
          <li classname="burger-item"><Link to={props.pagePrefix}>{props.language === 'en' ? 'FRONT PAGE' : 'ETUSIVU'}</Link></li>
          <li classname="burger-item"><Link to={`${props.pagePrefix}/about/`}>MEISTÄ</Link></li>
          <li classname="burger-item"><Link to={`${props.pagePrefix}/Portfolio-Slider/`}>TÖITÄMME</Link></li>
          <li classname="burger-item"><Link to={`${props.pagePrefix}/services/`}>PALVELUT</Link></li>
          <li classname="burger-item"><Link to={`${props.pagePrefix}/contact/`}>{props.language === 'en' ? 'CONTACT' : 'YHTEYSTIEDOT'}</Link></li>
          <li classname="burger-item"><Link to={`${props.pagePrefix}/tyopaikat/`}>{props.language === 'en' ? 'JOBS' : 'TYÖPAIKAT'}</Link></li>
          
        </ul>
        <ul>
          <li><Link to={`${props.pagePrefix}/media/`}>Digitalents MEDIA</Link></li>
          <li><Link to={`${props.pagePrefix}/ict/`}>Digitalents ICT</Link></li>
          <li><Link to={`${props.pagePrefix}/softdev/`}>Digitalents SOFTDEV</Link></li>
        </ul>
        <ul>
          
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
          <img id="menu" class="burger" src={openIcon} alt="" onClick={handleClick} />
        </div>
      </BurgerButton> : null}
      {sideBarElement}
    </header>
  )
}

const BurgerButton = styled.div`
.burgercontainer{
  width: 100vw;
  padding: 0.8rem;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;  
  background-color: ${props => props.color ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.8)"};
  position: fixed;
  margin-left:vw;
  z-index: 9;
  

  img {
    height: 1.6rem;
  }

  #menu {
    float: right;
  }
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
          padding-bottom: 1rem;
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