import React, { Fragment, useState } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Header = props => {
  const [teamClick, setTeamClick] = useState(false)

  const handleTeamClick = () => {
    setTeamClick(!teamClick)
  }

  const data = props.language === 'fi' ? props.fiData : props.enData

  return (
    <HeaderWrapper color={props.headerLight}>
      {data.edges.map(header => {
        return (
          <Fragment>
            <LogoWrapper>
              <img src={header.node.headerImage.file.url} alt="" />
            </LogoWrapper>
            <NavWrapper>
              <li>
                <a href="/fi/">Etusivu</a>
              </li>
              <li>
                <a href="/fi/about">Meistä</a>
              </li>
              <li>
                <a href="/fi/Portfolio-Slider/">Töitämme</a>
              </li>
              <li>
                <a href="/fi/services">Palvelut</a>
              </li>
              <li>
                <a href="/fi/jobs">Työpaikka</a>
              </li>
              <li>
                <a href="/fi/contact">Yhteystiedot</a>
              </li>
            </NavWrapper>
            <LangWrapper>
              <li onClick={props.handleFiClick}>FI</li>
              <li onClick={props.handleEnClick}>EN</li>
            </LangWrapper>
          </Fragment>
        )
      })}
    </HeaderWrapper>
  )
}

const HeaderQuery = props => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        en: allContentfulHeader(filter: { node_locale: { regex: "/en-US/" } }) {
          edges {
            node {
              headerImage {
                file {
                  url
                }
              }
              frontPageLink
              teamLink
              workLink
              languageOptions
            }
          }
        }
        fi: allContentfulHeader(filter: { node_locale: { regex: "/fi-FI/" } }) {
          edges {
            node {
              headerImage {
                file {
                  url
                }
              }
              frontPageLink
              teamLink
              workLink
              languageOptions
            }
          }
        }
        allContentfulPageTemplate(
          filter: { node_locale: { regex: "/en-US/" } }
        ) {
          edges {
            node {
              teamSlug
            }
          }
        }
      }
    `}
    render={data => (
      <Header
        language={props.language}
        handleFiClick={props.handleFiClick}
        handleEnClick={props.handleEnClick}
        enData={data.en}
        fiData={data.fi}
        linkData={data.allContentfulPageTemplate}
        pagePrefix={props.pagePrefix}
        headerLight={props.headerLight}
      />
    )}
  />
)

const HeaderWrapper = styled.header`
  background-color: ${props => props.color ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.8)"};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  position: ${props => props.color ? 'fixed' : 'fixed'};
  left: 0;
  right: 0;
  height: 100px;
  text-transform: uppercase;
  z-index: 10;
  color: white;
  transition: background-color 0.5s;
`

const LogoWrapper = styled.div`
  display: block;
  overflow: hidden;
  display: flex;
  padding-left: 7rem;

  @media screen and (max-width: 1400px) {
    padding-left: 4rem;
  }

  img {
    padding-top: 10px;
    height: 50px;
    align-self: center;
  
    @media screen and (max-width: 1400px) {
      align-self: center;
      height: 50px;
    }
  }
`

const NavWrapper = styled.ul`
  display: flex;
  align-items: center;
  font-size: 17px;
  font-family: futura-pt, sans-serif;
  font-style: normal;
  font-weight: 700;
  justify-content: center;
  list-style: none;

  li {
    margin-right: 2rem;
    margin-left: 2rem;
    justify-content: left;

    a {
      text-decoration: none;
      color: white;
      font-family: futura-pt-bold;
    }
  }

  li:first-child {
    margin-left: 0;
  }
`

const LangWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: 700;
  list-style: none;
  padding-right: 7rem;
  font-family: futura-pt, sans-serif;
  font-style: normal;

  li {
    margin-right: 2rem;
  }

  li:first-child {
    border-left: 3px solid white;
    padding-left: 1rem;
  }

  a {
    color: white;
  }
`

const TeamsWrapper = styled.div`
  position: relative;
  top: 60px;
  left: -120px;
  z-index: 15;
  width: 0;

  div {
    background-color: #86899B;
    padding: 5px;
    width: 80px;
  }

  div:hover {
    background-color: #4663B4;
  }
  
}
`

export default HeaderQuery
