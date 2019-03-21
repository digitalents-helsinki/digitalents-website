import React, {useState} from 'react'
import styled from 'styled-components'

const BurgerMenu = (props) => {
  const [visible, setVisible] = useState(false)

  const handleClick = () => {
    setVisible(!visible)
  }
  
  const sideBarElement = visible ? 
  <SideBar>
    <p>Etusivu</p>
    <p>DT Media</p>
    <p>DT ICT</p>
  </SideBar> : null

  return (
    <header>
      <button onClick={handleClick}>Burger</button>
      {sideBarElement}
    </header>
  )
}

const SideBar = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: block;
  z-index: 10;
  color: white;
  opacity: 80%;
`

export default BurgerMenu