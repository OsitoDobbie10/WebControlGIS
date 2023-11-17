import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'
const Mapa = () => {
    const regresar = useNavigate();
  return (
    <Container>
      <Regresar>
       <button className='back' onClick={()=>regresar('/')}>
        Regresar Login
       </button>
      </Regresar>
      <iframe width='1600px' height='800px' src="https://indi8492334077f9.maps.arcgis.com/apps/webappviewer/index.html?id=06ad2871a3fd4551ae21453fbdc24d9f" frameborder="0"></iframe>
    </Container>
  )
}
const Container = styled.div`
position: relative;
width: 100%;
height: 100%;
`
const Regresar = styled.div`
position: absolute;
top:30px;
right: 40px;
cursor: pointer;
.back{
    padding:10px 15px 10px 15px;
    background:black;
    color:white;
    &:hover{
    background: white;
    color:black
}
}

`
export default Mapa
