import styled from 'styled-components';
import {Header, v,ContentFilters,BTNdesplegable,UseOperaciones,
        ListaMenuDespegable,DataDesplegableTipo,
        UseContext1,ContentFiltro,BTNBoton} from "../../index"
const PlantillaBase = () => {
  const titulo = UseOperaciones(stade=>stade.titulosBTN);
  const colorCat = UseOperaciones(stade=>stade.colorCategoria);
  const bgcat = UseOperaciones(stade=>stade.bgCategoerias);
  const actualizar = UseOperaciones(stade=>stade.setTipo);
  const {statetipo,setStadeTipo} = UseContext1();
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
  return (
    <Container onClick={cambios}>
      <header className='header'>
      <Header/> 
      </header>
      <section className='tipo'>
      <ContentFilters>
      <div onClick={(e)=>{e.stopPropagation()}}>
      <BTNdesplegable text={titulo} inputcolor={bgcat} textcolor={colorCat} funcion={changeTipo} />
      {statetipo && (<ListaMenuDespegable data={DataDesplegableTipo} acciones={(p)=>cambiarTipo(p)}/>)}
      </div>
      </ContentFilters>
      </section>
      <section className='area2'>
      <ContentFiltro>
      <BTNBoton bgcolor={bgcat} textcolor={colorCat} icono={<v.agregar/>}/>
      </ContentFiltro>
      </section>
      <section className='main'>
        area3
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
    background-color: rgb(103,93,241,0.14);
    display: flex;
    align-items: center;
}
.tipo{
    grid-area:tipo;
    background-color: rgb(229,67,26,0.14);
    display: flex;
    align-items: center;
}
.area2{
    grid-area:area2;
    background-color: rgb(77,237,106,0.14);
    display: flex;
    align-items: center;
    justify-content: end;
}
.main{
    grid-area:main;
    background-color: purple;
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
