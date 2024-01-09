import React from 'react';
import styled from 'styled-components';
import {Icono,v} from "../../index";
const ListaItem = ({data,acciones}) => {
  return (
    <Container>
    {
      data.map((item,index)=>{
          return <div key={index} className='valor' onClick={()=>acciones(item.tipo)}>
                 <Icono>{item.icono}</Icono>
                  <span>{item.text}</span>
                  </div>
      })
    }
   </Container>
  )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: ${({theme})=>theme.bg4};
    border-radius: 22px;
    top: 64px;
    box-shadow: ${()=> v.boxshadowGray};
  .valor{
    cursor: pointer;
    padding: 8px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap:10px;
  &:hover{
  background-color: rgba(0,0,0,0.7);}
svg{
  font-size: 28px;
  display: block;}}
`;
export default ListaItem;
