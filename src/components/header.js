import React, { Fragment } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        {this.props.header.edges.map(header => {
          return (
            <Fragment>
              <LogoWrapper>
                <img src={header.node.headerImage.file.url} alt="" />
              </LogoWrapper>
              <NavWrapper>
<<<<<<< HEAD
                {header.node.navigationLinks.map((link) => {
                  return <li><Link to="/">{link}</Link></li>
=======
                {header.node.navigationLinks.map(link => {
                  return <li>{link}</li>
>>>>>>> feature/style-jesse
                })}
              </NavWrapper>
              <LangWrapper>
                {header.node.languageOptions.map(language => {
                  return <li>{language}</li>
                })}
              </LangWrapper>
            </Fragment>
          )
        })}
      </HeaderWrapper>
    )
  }
}

const HeaderQuery = () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        allContentfulHeader(filter: { node_locale: { regex: "/en-US/" } }) {
          edges {
            node {
              headerImage {
                file {
                  url
                }
              }
              navigationLinks
              languageOptions
            }
          }
        }
      }
    `}
    render={data => <Header header={data.allContentfulHeader} />}
  />
)

const HeaderWrapper = styled.header`
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: row;
  position: fixed;
  left: 0;
  right: 0;
  padding: 1rem;
  text-transform: uppercase;
  z-index: 10;
  color: white;
`

const LogoWrapper = styled.div`
  flex: 1;
  display: block;
  max-width: 180px;
  overflow: hidden;
  margin-left: 3rem;
  height: 2rem;
`

const NavWrapper = styled.ul`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  flex: 2;
  justify-content: center;
  list-style: none;

  li {
    margin-right: 2rem;
    justify-content: left;
  }

  a {
    text-decoration: none;
    color: white;
  }
`

const LangWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  list-style: none;

  li {
    flex: 3;
    margin-right: 1rem;
  }

  li:first-child {
    border-left: 0.5px solid white;
    padding-left: 1rem;
  }
`

export default HeaderQuery
