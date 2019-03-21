import React, {useState} from 'react'
import styled from 'styled-components'

const BurgerMenu = (props) => {
  const [visible, setVisible] = useState(false)

  const handleClick = () => {
    setVisible(!visible)
  }
  
  const sideBarElement = visible ? 
  <SideBar>
    <div className="button">
      <button onClick={handleClick}>Close</button>
    </div>
    <div className="links">
      <ul>
        <li>ETUSIVU</li>
      </ul>
      <ul>
        <li>DT MEDIA</li>
        <li>DT ICT</li>
        <li>DT SOFTDEV</li>
      </ul>
      <ul>
        <li>YHTEYSTIEDOT</li>
        <li>TYÖPAIKAT</li>
      </ul>
    </div>
    <div className="langOptions">
      <ul>
        <li>FI</li>
        <li>EN</li>
      </ul>
    </div>
  </SideBar> : null

  return (
    <header>
      <BurgerButton onClick={handleClick}>Open</BurgerButton>
      {sideBarElement}
    </header>
  )
}

const BurgerButton = styled.button`
  position: fixed;
  z-index: 9;
`

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
  color: white;
  opacity: 80%;

  .button {
  }

  .links {
    text-align: right;

    ul {
      padding-bottom: 1rem;
    }
  }

  .langOptions {
    text-align: right;
  }
`

export default BurgerMenu