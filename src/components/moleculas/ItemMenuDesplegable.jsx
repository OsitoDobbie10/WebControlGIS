import styled from "styled-components";
import React from 'react'
import {Icono,ColorContext} from "../../index"
const ItemMenuDesplegable = ({item,acciones}) => {
  const {text,icono,tipo,color} = item;
  return (
    <Container onClick={acciones}>
      <Icono>{icono}</Icono>
      <ColorContext $alto="12px" $ancho="12px" $color={color} />
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
  background-color: rgba(0,0,0,0.7);
}
svg{
  font-size: 28px;
  display: block;
}
`
export default ItemMenuDesplegable;
