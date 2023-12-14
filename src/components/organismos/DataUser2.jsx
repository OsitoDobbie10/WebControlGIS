import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {v,BtnCirculas,UseContext1,ListaMenuDespegable,DesplegableUser} from "../../index";
const DataUser2 = () => {
    const {token,abrir2,setAbrir2} = UseContext1();
    const {user} = token;
    const cerrar = useNavigate();
    const abrirmenu2 = ()=>{
        setAbrir2(!abrir2);
    }
    const funciones2 = (tipo)=>{
        switch (tipo) {
            case "cerrarsesion":
                sessionStorage.removeItem("tokem");
                cerrar("/");
                alert("Cerrar")
                break;
            case "configuracion":
                cerrar("/configurar")
                break;
            case "miperfil":
                cerrar("/miperfil");
                break;
            default:
                break;
        }
    }
  return (
    <Container onClick={abrirmenu2}>
    <div className="imgcontent">
        <img src={v.ingresar} alt="Usuario"/>
    </div>
    <BtnCirculas 
    icono={<v.iconocorona/>}
    width="25px"
    heigth="25px"
    bgcolor="#ffff"
    textcolor="#181616"
    fontsize="11px"
    transX="-40px"
    transY="9px"/>
    <span className="nombre">
     Conectado
    </span>
    {
        abrir2 && ( <ListaMenuDespegable data={DesplegableUser} acciones={(tipo)=>funciones2(tipo)}/>)
    }
   
</Container>
  )
}

const Container = styled.div`
position: relative;
top:0;
right: 0;
width: 200px;
display: flex;
justify-content: center;
align-items: center;
padding: 8px;
border-radius: 50px;
margin: 15px;
.imgcontent{
    height: 50px;
    height: 50px;
    min-height: 50px;
    min-width: 50px;
    overflow: hidden;
    margin-right: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}
&:hover{
    background-color: ${({theme})=>theme.bg3};
}
.imgcontent>img{
    width: 100%;
    object-fit:cover ;
    height: 100%;
}
.n0mbre{
    width:100%;
    font-weight: 700;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap:break-word;
}
`
export default DataUser2
