import React from 'react'
import styled from 'styled-components'
import {v} from "../../index"
const Btncerrar = ({funcion}) => {
  return (
    <Container onClick={funcion}>
      {<v.iconocerrar/>}
    </Container>
  )
}
const Container = styled.span`
        cursor: pointer;
        font-size: 25px;
        transition: all 0.2s;
        &:hover{
            color: #bf94ff;
            transform: scale(1.2);
        }
`
export default Btncerrar
