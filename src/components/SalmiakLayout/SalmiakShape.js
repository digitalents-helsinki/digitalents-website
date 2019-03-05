import React from 'react'
import styled from 'styled-components'

export default props => {
  const top = 325
  const left = 204

  return (
    <Wrapper
      translate={
        props.order === 1
          ? [top, -left]
          : props.order === 3
          ? [-top, -left]
          : [0, 0]
      }
      absolute={props.order === 2 ? true : false}
    >
      <TextWrapper>
        <h1>{props.title}</h1>
        <span>{props.description}</span>
      </TextWrapper>
      <Shape onClick={() => props.onShapeClick('moi')} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  padding-top: 260px;
  position: ${props => (props.absolute ? 'absolute' : 'initial')};
  transform: translate(
    ${props => props.translate[0] + 'px, ' + props.translate[1] + 'px'}
  );
  height: 450px;
`

const Shape = styled.div`
  transform: rotate(45deg);
  background-color: #212121;
  width: 250px;
  height: 250px;
  z-index: 1;
`

const TextWrapper = styled.div`
  position: absolute;
  color: white;
  z-index: 2;

  h1 {
    font-size: 2rem;
  }

  span  {
    font-size: 1rem;
  }
`
