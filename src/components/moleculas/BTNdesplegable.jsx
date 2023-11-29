import React from 'react'
import styled from 'styled-components'
import {v} from "../../index";
const BTNdesplegable = ({text,inputcolor,textcolor,funcion}) => {
  return (
    <Container $inputcolor={inputcolor} $textcolor={textcolor} onClick={funcion}>
    <span className='containerText' >
     {<v.iconoFlechabajo/>}
     <h6>{text}</h6>
    </span>
    </Container>
  )
}
const Container = styled.div`
display:flex;
background-color:${(props)=>props.$inputcolor};
color:${(props)=>props.$textcolor};
font-weight: 500;
padding: 0.9rem 2.3rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2 ease;
position: relative;
.containerText{
  display: flex;
  justify-content: center;
  align-items: center;
}
`;
export default BTNdesplegable
