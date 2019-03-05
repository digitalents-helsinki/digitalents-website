import React from 'react'
import styled from 'styled-components'

import SalmiakShape from './SalmiakShape'

export default props => {
  const Texts = props.data.map((n, index) => (
    <Text align={['right', 'center', 'left'][index]}>
      <h3>{n.title}</h3>
      <span>{n.description}</span>
    </Text>
  ))
  const ShapeWrapper = props.data
    ? props.data.map((n, index) => (
        <SalmiakShape
          key={index}
          order={index + 1}
          onShapeClick={value => console.log(value)}
        />
      ))
    : null

  return (
    <Container>
      <TextWrapper>{Texts}</TextWrapper>
      {ShapeWrapper}
    </Container>
  )
}

const Container = styled.div`
  background-color: #303030;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const TextWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  left: 0;
  right: 0;
  width: 1200px;
  margin: 0 auto;
  z-index: 56;
`

const Text = styled.div`
  color: white;
  font-size: 1rem;
  text-align: ${props => props.align};
  transform: translateY(
    ${props => (props.align === 'center' ? '-180px' : '0px')}
  );

  h3 {
    font-size: 1.5rem;
  }

  span {
    font-size: 1rem;
  }
`
