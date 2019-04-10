import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'
import { navigateTo } from 'gatsby'

import Header from './header'
import BurgerMenu from './burgermenu'
import Footer from './footer'
import MobileFooter from './mobilefooter'

const Layout = (props) => {
  const [language, setLanguage] = useState(props.language)
  const [pagePrefix, setPagePrefix] = useState(props.pagePrefix)
  const [mobile, setMobile] = useState(true)

  useEffect(() => {
    setView()
    window.addEventListener('resize', setView)
  })

  const setView = () => {
    if(window.innerWidth >= 1000) {
      setMobile(false)
    } else {
      setMobile(true)
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

  const navElement = mobile ? <BurgerMenu handleFiClick={handleFiClick} handleEnClick={handleEnClick} language={language} pagePrefix={pagePrefix} /> : <Header handleFiClick={handleFiClick} handleEnClick={handleEnClick} language={language} pagePrefix={pagePrefix}  />
  const footerElement = mobile ? <MobileFooter language={language} pagePrefix={pagePrefix} /> : <Footer language={language} pagePrefix={pagePrefix} />

  return (
    <Fragment>
      <GlobalStyle />
      {navElement}
      <main>{props.children}</main>
      {footerElement}
    </Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 18px;

  }

  body {
    font-family: futura-pt, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
  }

  a {
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
