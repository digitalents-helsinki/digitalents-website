import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

let lang = "fi"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <GlobalStyle />
        <Header mobile={false} lang={lang}  />
        <main>{children}</main>
        <Footer mobile={false} lang={lang} />
      </Fragment>
    )}
  />
)

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
