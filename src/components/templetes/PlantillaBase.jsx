import styled from 'styled-components';
import {Header2, v,ContentFilters,BTNdesplegable,UseOperaciones,
        ListaMenuDespegable,DataDesplegableTipo,
        UseContext1,ContentFiltro,
        BTNBoton,TablaCategorias,
        RegistrarCategorias} from "../../index"
import { ErrorBoundary } from 'react-app-error-boundary';
import { useState } from 'react';
const PlantillaBase = ({data}) => {
  const titulo = UseOperaciones(stade=>stade.titulosBTN);
  const colorCat = UseOperaciones(stade=>stade.colorCategoria);
  const bgcat = UseOperaciones(stade=>stade.bgCategoerias);
  const actualizar = UseOperaciones(stade=>stade.setTipo);
  const [dataselect,setDataselect] = useState([]);
  const {statetipo,setStadeTipo,
         openRegister,setOpenRegister,
         accion,setAccion} = UseContext1();
  const cambiarTipo = (p)=>{
    actualizar(p);
    setStadeTipo(!statetipo);
  }
  const changeTipo = ()=>{
    setStadeTipo(!statetipo);
  }
  const cambios = ()=>{
    setStadeTipo(false);
  }
  const open=()=>{
    setOpenRegister(!openRegister)
    setAccion("Nuevo");
    setDataselect([]);
  }
  const cerrar = ()=>{
    setOpenRegister(!openRegister);
  }
  return (
    <Container>
      <header className='header'>
      <Header2/> 
      </header>
      {openRegister && (<RegistrarCategorias dataSelect={dataselect} onClose={cerrar} accion={accion}/>)}
      <section className='tipo'>
      <ContentFilters>
      <BTNdesplegable text={titulo} inputcolor={bgcat} textcolor={colorCat} funcion={changeTipo} />
      {statetipo && (<ListaMenuDespegable data={DataDesplegableTipo} acciones={(p)=>cambiarTipo(p)}/>)}
      </ContentFilters>
      </section>
      <section className='area2'>
      <ContentFiltro>
      <BTNBoton bgcolor={bgcat} textcolor={colorCat} icono={<v.agregar/>} funcion={open}/>
      </ContentFiltro>
      </section>
      <section className='main'>
      <ErrorBoundary>
      <TablaCategorias data={data} setOpenRegister={setOpenRegister} 
                       setDataselect={setDataselect} setAccion={setAccion}/>
      </ErrorBoundary>
      </section>
    </Container>
  )
}
const Container = styled.div`
min-height: 100vh;
padding: 15px;
width: 100%;
background-color: ${({theme}) =>theme.bgtotal};
color: ${({theme})=> theme.text};
display: grid;
grid-template: "header" 100px
                "tipo" 100px
                "area2" 50px
                "main" auto;
.header{
    grid-area:header;
    /*background-color: rgb(103,93,241,0.14);*/
    display: flex;
    align-items: center;
}
.tipo{
    grid-area:tipo;
    /*background-color: rgb(229,67,26,0.14);*/
    display: flex;
    align-items: center;
}
.area2{
    grid-area:area2;
    /*background-color: rgb(77,237,106,0.14);*/
    display: flex;
    align-items: center;
    justify-content: end;
}
.main{
    grid-area:main;
    /*background-color: purple;*/
    display: flex;
    align-items: center;
}
`;
const ContentCard = styled.div`
display: flex;
text-align: start;
align-items:center;
gap: 20px;
position: relative;
width: 100%;
justify-content: center;
`
export default PlantillaBase;
