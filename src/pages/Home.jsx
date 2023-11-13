import styled from "styled-components"
import {UseContext1,v} from "../index"
import { useNavigate } from "react-router-dom";
import {Device} from "../styles/Breakpoints";
const Home = () => {
  const {token} = UseContext1();
  const cerrar = useNavigate();
  const {user} = token;
  const handleloguot = ()=>{
    sessionStorage.removeItem("token");
    cerrar("/");
  }
  return (
    <Container>
     <Titulo>Bienvenido {user.user_metadata.first_name} </Titulo>
     <div className="boton">
     <img src={v.CerrarGIS} alt="Cerrar" onClick={handleloguot}/>
     <span>Cerrar Secion.</span>
     </div>
    </Container>
  )
}

const Container = styled.div`
  height:100vh;
  color: #030303;
  position: relative;
  width: 100%;
  .boton{
    width: 80px;
    height: 95px;
    border-radius: 50%;
    position: absolute;
    top: 35px;
    right:35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .boton>img{
    width: 50%;
    height: 50%;
    display: block;
    margin:auto;
    cursor: pointer;
  }
  .boton>span{
    text-align: center;
    font-weight: bold;
  }
  @media ${Device.tablet}{
    width: 100%;
    .boton{
    width: 50px;
    height: 55px;
    border-radius: 50%;
    position: absolute;
    top: 30px;
    right:10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .boton>img{
    width: 50%;
    height: 50%;
    display: block;
    margin:auto;
    cursor: pointer;
  }
  .boton>span{
    text-align: center;
    font-weight: bold;
  }

  }
 
`
const Titulo = styled.h2`
font-weight: bold;
text-align: center;
`

export default Home
