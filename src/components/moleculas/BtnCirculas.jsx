import React from 'react'
import styled from 'styled-components'
const BtnCirculas = (props) => {
    const {icono,width,heigth,bgcolor,textcolor,fontsize,transX,transY} = props;
  return (
    <Container 
    bgcolor={bgcolor}
    textcolor={textcolor}
    heigth={heigth}
    width={width}
    fontsize={fontsize}
    transX={transX}
    transY={transY}
    >
      <span>{icono}</span>
    </Container>
  )
}
const Container = styled.div`
background-color: ${(props)=>props.bgcolor};
min-width: ${(props)=>props.width};
min-height: ${(props)=>props.heigth};
border-radius: 50%;
display: flex;
align-items: center;
justify-content:center;
position: absolute;
transform:translateX(${(props)=>props.transX}) translateY(${(props)=>props.transY}) ;
span{
    font-size:${(props)=>props.fontsize};
    text-align: center;
    color:${(props)=>props.textcolor};
}
`
export default BtnCirculas
