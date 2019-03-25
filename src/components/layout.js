import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'
import { navigateTo } from 'gatsby'

import Header from './header'
import BurgerMenu from './burgermenu'
import Footer from './footer'

const Layout = (props) => {
  const [language, setLanguage] = useState(props.language)
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
    setLanguage('fi-FI')
    navigateTo('/fi/')
  }

  const handleEnClick = () => {
    setLanguage('en-US')
    navigateTo('/en/')
  }

  const navElement = mobile ? <BurgerMenu handleFiClick={handleFiClick} handleEnClick={handleEnClick} language={language} /> : <Header handleFiClick={handleFiClick} handleEnClick={handleEnClick} language={language}  />

  return (
    <Fragment>
      <GlobalStyle />
      {navElement}
      <main>{props.children}</main>
      <Footer mobile={mobile} language={language} />
    </Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 18px;
  }

  body {
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
