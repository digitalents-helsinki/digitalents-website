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
    <HeaderWrapper>
      {data.edges.map(header => {
        return (
          <Fragment>
            <LogoWrapper>
              <img src={header.node.headerImage.file.url} alt="" />
            </LogoWrapper>
            <NavWrapper>
              <li>
                <Link to={props.pagePrefix}>{header.node.frontPageLink}</Link>
              </li>
              <li onClick={handleTeamClick}>{header.node.teamLink}</li>
              <TeamsWrapper>
                {teamClick ? (
                  <Fragment>
                    <div className="teamlink">
                      <Link to={`${props.pagePrefix}/media/`}>Media</Link>
                    </div>
                    <div className="teamlink">
                      <Link to={`${props.pagePrefix}/ict/`}>ICT</Link>
                    </div>
                    <div className="teamlink">
                      <Link to={`${props.pagePrefix}/softdev/`}>SoftDev</Link>
                    </div>
                  </Fragment>
                ) : null}
              </TeamsWrapper>
              <li>
                <Link to={`${props.pagePrefix}/#persons`}>
                  { props.language === 'fi' ? 'yhteystiedot' : 'contact' }
                </Link>
              </li>
              <li>
                <Link to={`${props.pagePrefix}/tyopaikat/`}>
                  {header.node.workLink}
                </Link>
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
      />
    )}
  />
)

const HeaderWrapper = styled.header`
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 0;
  height: 100px;
  text-transform: uppercase;
  z-index: 10;
  color: white;
`

const LogoWrapper = styled.div`
  margin-left: 7rem;
  display: block;
  overflow: hidden;

  img {
    padding-top: 10px;
    height: 70px;
  }
`

const NavWrapper = styled.ul`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  justify-content: center;
  list-style: none;

  li {
    margin-right: 2rem;
    margin-left: 2rem;
    justify-content: left;
    font-size: 20px;
  }

  li:first-child {
    margin-left: 0;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 20px;
  }
`

const LangWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  list-style: none;
  padding-right: 7rem;

  li {
    margin-right: 2rem;
    font-size: 20px;
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
