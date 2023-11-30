import styled from "styled-components"
const BTNBoton = ({bgcolor,textcolor,icono,funcion}) => {
  return (
    <Container $bgcolor={bgcolor} $textcolor={textcolor} onClick={funcion} >
    <span>{icono}</span>
    </Container>
  )
}
const Container = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: ${(props)=>props.$bgcolor};
color:${(props)=>props.$textcolor};
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
font-weight: bold;
cursor:pointer;
&:hover{
    transform: scale(1.1);
    transition: 0.3s;
}
`
export default BTNBoton