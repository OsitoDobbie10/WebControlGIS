import React from 'react'
import styled from 'styled-components';
import {v,Formulario1,UseContext1} from "../../index"
import { Link } from 'react-router-dom';
const LoginTempledes = () => {
    const {logic1,vista} = UseContext1();
  return (
    <Container bgfondo={v.FONDOLOGIN}>
      <h3 className='showError'>{logic1}</h3>
      <Base>
        <Titulo>Vista datos confidenciales..</Titulo>
        <img className="imglogin" src={v.logo} alt="Imagen" />
        <Parrafo>Escribe tus credenciales para ingresar...</Parrafo>
        <Formulario1/>
      </Base>
      <Cuenta className="cuenta">
            No tienes cuenta registrate aqui.. <span><Link className='sing' to={'/SingUp'}>Registro</Link></span>
    </Cuenta>
    </Container>
  )
}

const Container = styled.div`
background-image: url(${(props)=>props.bgfondo});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-attachment: fixed;
height: 100vh;
width: 100%;
border: 1px solid black;
color: white;
.showError{
    text-align: center;
    color: red;
    font-weight: bold;
    margin-top: 20px;
    font-size: 20px;
}
@media screen and (max-width:768px){
  height:100vh;
}
`
const Base = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 200px;
background:rgba(0,0,0,0.9);
gap: 10px;
margin:auto;
margin-top: 100px;
width: 600px;
height:500px;
border-radius: 2rem;
.imglogin{
  max-width: 40%;
  height: 150px;
  margin: auto;
  animation:jello-vertical 5.5s ease-in-out infinite; 
}
@keyframes jello-vertical{
0%{transform:scale3d(1,1,1)}
30%{transform:scale3d(.75,1.25,1)}
40%{transform:scale3d(1.25,.75,1)}
50%{transform:scale3d(.85,1.15,1)}
65%{transform:scale3d(1.05,.95,1)}
75%{transform:scale3d(.95,1.05,1)}
100%{transform:scale3d(1,1,1)}}
@media screen and (max-width:768px){
  width: 300px;
  height:400px;
  .imglogin{
  max-width: 40%;
  height: 150px;
  }
}
`
const Titulo = styled.span`
font-size: 20px;
font-weight: bold;
text-align:center;
margin-top: 10px;
@media screen and (max-width:768px){
  font-size: 12px;
}
`
const Title = styled.span`
font-weight: bold;
font-size: 35px;
text-align: center;
margin-bottom: 10px;
@media screen and (max-width:768px){
  font-size: 20px;
}
`
const Parrafo = styled.p`
text-align: center;
font-size: 20px;
margin-bottom: 5px;
@media screen and (max-width:768px){
  font-size: 12px;
}
`
const ContainerBTN = styled.div`
display: flex;
justify-content: center;
margin-bottom: 10px;
`

const Cuenta = styled.span`
text-align: center;
margin-top: 10px;
font-weight: bold;
margin:auto;
display: block;
margin-top: 8px;
color: yellow;
font-weight: bold;
.sing{
    color: black;
    text-decoration: none;
    cursor: pointer;
}
`

export default LoginTempledes
