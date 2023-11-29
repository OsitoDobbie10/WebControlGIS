import styled from "styled-components";
import React from 'react'
import {Icono} from "../../index"
const ItemMenuDesplegable = ({item,acciones}) => {
  const {text,icono,tipo} = item;
  return (
    <Container onClick={acciones}>
      <Icono>{icono}</Icono>
      <span>{text}</span>
    </Container>
  )
}
const Container = styled.div`
cursor: pointer;
padding: 8px;
border-radius: 20px;
display: flex;
align-items: center;
gap:10px;
&:hover{
  background-color: ${({theme})=>theme.bg4};
}
svg{
  font-size: 28px;
  display: block;
}
`
export default ItemMenuDesplegable;
