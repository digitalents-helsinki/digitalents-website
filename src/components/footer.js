import React from 'react'
import styled from 'styled-components'

const footerData ={
  left: [
    'Palvelut',
    'Yhteystiedot',
    'Työpaikat',
    'Evästeiden käyttö: linkki',
    'Rekisteriseloste: linkki',
  ],
  middle: [
    'Lapinlahdenkatu 16, 00180 Helsinki',
    'PL18402, 00099',
    'Helsingin kaupunki',
  ],
  right: [
    'Seuraa meitä:',
    '#DIGITALENTSHKI',
  ]
}

const SocialButton = {
  
}

const FooterColumn = props => {
  if(props.position === "left") {
    const test = footerData.left.map((n, index) => (
      <p>{n}</p>
    ))
    return <div>{test}</div>
  }
  else if(props.position === "middle") {
    const test = footerData.middle.map((n, index) => (
      <p>{n}</p>
    ))
    return <div>{test}</div>
  }
  else if(props.position === "right") {
    const test = footerData.right.map((n, index) => (
      <p>{n}</p>
    ))
    return <div>{test}</div>
  }
  else return null
}

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterColumn position="left" />
      <FooterColumn position="middle" />
      <FooterColumn position="right" />
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  display: flex;
  background-color: #353535;
  color: white;
  justify-content: space-evenly;
`

export default Footer