import React, { Fragment, useState } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Header = (props) => {
  const [teamClick, setTeamClick] = useState(false)


  const handleTeamClick = () => {
    setTeamClick(!teamClick)
  }

  const data = props.language === 'fi-FI' ? props.fiData : props.enData

  return (
      <HeaderWrapper>
        {data.edges.map(header => {
          return (
            <Fragment>
              <LogoWrapper>
                <img src={header.node.headerImage.file.url} alt="" />
              </LogoWrapper>
              <NavWrapper>
                <li><Link to="/">{header.node.frontPageLink}</Link></li>
                <li onClick={handleTeamClick}>{header.node.teamLink}</li>
                <TeamsWrapper>
                  {teamClick ? 
                    props.linkData.edges.map(links => {
                      return <Link to={links.node.teamSlug}>{links.node.teamSlug}</Link>
                    })
                    : 
                    null 
                  }
                </TeamsWrapper>
                <li><Link to="/tyopaikat">{header.node.workLink}</Link></li>
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

const HeaderQuery = (props) => (
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
        allContentfulPageTemplate (filter: { node_locale: { regex: "/en-US/" } }) {
          edges {
            node {
              teamSlug
            }
          }
        }
      }
    `}
    render={data => <Header language={props.language} handleFiClick={props.handleFiClick} handleEnClick={props.handleEnClick} enData={data.en} fiData={data.fi} linkData={data.allContentfulTeamTemplate} />}
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

  img {
    max-width: 180px;
  }
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
    margin-right: 2rem;
  }

  li:first-child {
    border-left: 0.5px solid white;
    padding-left: 1rem;
  }

  a {
    color: white;
  }
`

const TeamsWrapper = styled.div`
  background-color: #4663B4
  top: 50px;
  position: absolute;
  display: flex;
  flex-flow: column wrap;
  z-index: 15;
`

export default HeaderQuery
