import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'
import { navigateTo } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import BurgerMenu from './burgermenu'
import Footer from './footer'
import MobileFooter from './mobilefooter'

const Layout = props => {
  const [language, setLanguage] = useState(props.language)
  const [pagePrefix, setPagePrefix] = useState(props.pagePrefix)
  const [mobile, setMobile] = useState(true)
  const [registerVisible, setRegisterVisible] = useState(false)
  const [cookieVisible, setCookieVisible] = useState(false)
  const [headerLight, setHeaderLight] = useState(false)

  useEffect(() => {
    setView()
    window.addEventListener('resize', setView)
    window.addEventListener('scroll', setScroll)
  })

  const setView = () => {
    if (window.innerWidth >= 1200) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }

  const setScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setHeaderLight(true)
    } else {
      setHeaderLight(false)
    }
  }

  const handleFiClick = () => {
    setLanguage('fi')
    setPagePrefix('/fi/')
    navigateTo('/fi/')
  }

  const handleEnClick = () => {
    setLanguage('en')
    setPagePrefix('/en/')
    navigateTo('/en/')
  }

  const handleRegisterClick = () => {
    setRegisterVisible(!registerVisible)
  }

  const handleCookieClick = () => {
    setCookieVisible(!cookieVisible)
  }
  const navElement = mobile ? (
    <BurgerMenu
      handleFiClick={handleFiClick}
      handleEnClick={handleEnClick}
      language={language}
      pagePrefix={pagePrefix}
    />
  ) : (
    <Header
      handleFiClick={handleFiClick}
      handleEnClick={handleEnClick}
      language={language}
      pagePrefix={pagePrefix}
      headerLight={headerLight}
    />
  )
  const footerElement = mobile ? (
    <MobileFooter language={language} pagePrefix={pagePrefix} />
  ) : (
    <Footer language={language} pagePrefix={pagePrefix} handleRegisterClick={handleRegisterClick} handleCookieClick={handleCookieClick} />
  )

  return (
    <Fragment>
      <GlobalStyle />
      {navElement}
      {cookieVisible ? <Cookie><p>{language === 'en' ? 'This site use cookies to improve user experience.' : 'Tällä sivustolla käytetään evästeitä käyttäjäkokemuksen parantamiseksi.'}</p><button onClick={handleCookieClick}>{language === 'en' ? 'Close' : 'Sulje'}</button></Cookie> : null}
      {registerVisible ? <Register><p>{language === 'fi' ? 'Digitalents Helsinki ei kerää tämän sivuston kautta mitään henkilötietoja eikä muutakaan dataa kävijöistä. Sivusto on informatiivinen, jolla esitellään Digitalents Helsinki toimintaa. Kysymykset sivustosta voidaan ohjata Digitalents Helsinki osoitteeseen.' : 'Digitalents Helsinki do not collect any personal information nor other data on those visiting the site. Pages are informative presenting Digitalents Helsinki. If you have any questions concerning site practises you can address your questions to Digitalents Helsinki.'}</p><button onClick={handleRegisterClick}>{language === 'en' ? 'Close' : 'Sulje'}</button></Register> : null}
      <main>{props.children}</main>
      {footerElement}
    </Fragment>
  )
}

const Cookie = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
`

const Register = styled.div`
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
`

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 1rem;
    font-family: futura-pt, sans-serif;
    font-style: normal;
    font-weight: 400;
  }

  body {
    font-family: futura-pt, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    background: white;
  }

  a {
    text-decoration: none;
    color: black;

    :hover {
      text-decoration: underline;
    }
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
