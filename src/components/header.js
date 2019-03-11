import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import LogoImage from "../images/digitalents_withoutDT_white0.svg"

const menuData = [
  {
    title: 'Etusivu',
    link: '/'
  },
  {
    title: 'Palvelut',
    link: '/palvelut/'
  },
  {
    title: 'Työpaikat',
    link: '/tyopaikat/'
  },
  {
    title: 'Yhteystiedot',
    link: '/yhteystiedot/'
  }
]

const langData = [
  {
    title: 'FI'
  },
  {
    title: 'EN'
  },
  {
    title: 'SE'
  }
]

const Header = () => {
  const menuItems = menuData.map((n, index) => (
    <li><Link to={n.link}>{n.title}</Link></li>
  ))
  
  const langItems = langData.map((n, index) => (
    <li>{n.title}</li>
  ))

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <img src={LogoImage} alt="" />
      </LogoWrapper>
      <NavWrapper>
        {menuItems}
      </NavWrapper>
      <LangWrapper>
        {langItems}
      </LangWrapper>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: row;
  position: fixed;
  width: 100vw;
  padding: 1rem;
  text-transform: uppercase;
  z-index: 10;
  color: white;
`

const LogoWrapper = styled.div`
  flex: 1;
`

const NavWrapper = styled.ul`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  flex: 2;
  justify-content: left;
  list-style: none;

  li {
    margin-right: 2rem;
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

export default Header
