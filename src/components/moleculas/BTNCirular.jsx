import React from 'react'
import styled from 'styled-components'
const BTNCirular = ({icono,color}) => {
  return (
    <Container>
      <span>{icono}</span>
    </Container>
  )
}
const Container = styled.div`
background-color:${(props)=>props.color};
min-width:50px;
min-height: 50px;
font-size: 25px;
color:white;
border-radius: 50%;
display: flex;
align-items: center;
justify-content:center;
position: absolute;
transform:translateX(-45px) translateY(-15px) ;
span{
    font-size:25px;
    text-align: center;
    color:white;
}
`
export default BTNCirular
