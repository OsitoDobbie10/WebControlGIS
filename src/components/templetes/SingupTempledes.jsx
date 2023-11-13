import styled from "styled-components"
import { Link } from "react-router-dom";
import {v,Formulario,Spinner,UseContext1,Success} from "../../index"
const SingupTempledes = () => {
  const {erro1,password,show,logic1} = UseContext1();
  return (
    <Container bgfondo={v.imagenfondo}>
      {show ? <Success mensaje="Revisa tu Email para poder ingresar.."/> : null}
      <Atras>
        <Link to={"/"} className="Back">Ingresar</Link>
      </Atras>
      <h3 className="showmessaner">{logic1}</h3>
      <Base>
        <Titulo>Version 1.0</Titulo>
        <img className="imglogin" src={v.login} alt="Imagen" />
        <Parrafo>Control de gastos e ingresos...</Parrafo>
        <Formulario/>
      </Base>
      <Error>
      <p className='error-parrafo'>
      {
        erro1
      }
      </p>
      </Error>
    </Container>
  )
}
const Container = styled.div`
position: relative;
background-image: url(${(props)=>props.bgfondo});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-attachment: fixed;
height: 100vh;
width: 100%;
border: 1px solid black;
color: white;
.showmessaner{
  text-align: center;
    color: red;
    font-weight: bold;
    font-size: 20px;
    background-color:white;
    width: 320px;
    margin: 20px auto 0 auto;
}
@media screen and (max-width:768px){
  height:100%;
}
`
const Atras = styled.span`
position: absolute;
top: 20px;
right: 20px;
.Back{
  text-decoration: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
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

const Error = styled.div`
margin:20px auto;
width: 200px;
background-color: white;
.succes-pass{
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color:green;
}
.error-parrafo{
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color:red;
}
`
export default SingupTempledes;
