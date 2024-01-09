import styled from 'styled-components';
import {Header2,CalendarioLineal,ContentsTotales,UseOperaciones,v,
        useMovimientosStore,UseUsuarioStore,TablaMovimientos,UseCuentas,
        UseCategorias,ContentFilters,ListaMenuDespegable,DataDesplegableTipo,
        DataDesplegableMovimientos,UseContext1,BTNDesplegable2,ContentFiltro,BTNBoton} from "../../index";
import dayjs from 'dayjs';
import { useQuery } from "@tanstack/react-query";
import { useState } from 'react';
const PlantillaMovimiento  = ()=>{
    const [value,setValue] = useState(dayjs(Date.now()));
    const [formatoFecha,setFormatoFecha] = useState("");
    const [DataSelect2,setDataSelect2] = useState("");
    const {titulo,setTipo,mes,year,bgCategoerias,colorCategoria,titulosBTN,titulosBTNMovimiento} = UseOperaciones();
    const {mostrarMovimientos,datamovimientos,totalMesAño,totalMesAñoPagados,totalMesAñoPendientes} = useMovimientosStore();
    const id = UseUsuarioStore(state=>state.idusuario);
    const mostrarcuentas = UseCuentas(state=>state.mostrarCuentas);
    const mostrarcategorias = UseCategorias(state=>state.mostrarcategorias);
    const {statetipo2,setStateTipo2,openRegister,setOpenRegister,accion,setAccion} = UseContext1();
      const cambiarTipo = (p)=>{
        setTipo(p);
        setStateTipo2(!statetipo2);
      }
      const open=()=>{
        setOpenRegister(!openRegister)
        setAccion("Nuevo");
        setDataSelect2([]);
      }
    useQuery({queryKey:["mostrar movimiento por semestre"],queryFn:()=>mostrarMovimientos({año:year,mes:mes,idusuario:id,tipocategoria:titulo})});
    useQuery({queryKey:["mostrar cuentas",{iduser:id}],queryFn:()=>mostrarcuentas({idusuario:id})});
    useQuery({queryKey:["mostrar categorias"],queryFn:()=>mostrarcategorias({idusario:id,tipo:titulo})});
    const colorbg = titulo === "g" ? "red":"green";
return (
    <Container>
    <header className='header'>
    <Header2/> 
    </header>
    <section className='tipo'>
      <ContentFilters>
      <BTNDesplegable2 text={titulosBTNMovimiento} inputcolor={bgCategoerias} textcolor={colorCategoria}/>
      {statetipo2 && <ListaMenuDespegable data={DataDesplegableMovimientos} acciones={(p)=>cambiarTipo(p)}/>}
      </ContentFilters>
      <ContentFiltro>
      <BTNBoton bgcolor={bgCategoerias} textcolor={colorCategoria} icono={<v.agregar/>} funcion={open}/>
      </ContentFiltro>
    </section>
    <section className='totales'>
    <ContentsTotales title={titulo === "g" ? "Gastos Pendientes" : "Ingresos pendientes"} 
                     icono={<v.flechaarribalarga/>} 
                     total={totalMesAñoPendientes}
                     color={colorbg}/>
    <ContentsTotales title={titulo === "g" ? "Gastos Pagados" : "Ingresos pendientes"}
                     icono={<v.flechaabajolarga/>}
                      total={totalMesAñoPagados}
                      color={colorbg}/>
    <ContentsTotales title="Total"
                     icono={<v.balance/>}
                     total={totalMesAño}
                     color={colorbg}/>
    </section>
    <section className='calendario'>
    <CalendarioLineal value={value} setValue={setValue} setFormatoFecha={setFormatoFecha}/>
    </section>
    <main className='main'>
    <TablaMovimientos data={datamovimientos}/>
    </main>
    </Container>
)
}
const Container = styled.div`
min-height: 100vh;
padding: 15px;
width: 100%;
background-color: ${({theme}) => theme.bgtotal};
color: ${({theme})=> theme.text};
display: flex;
flex-direction: column;
gap:10px;
/*grid-template: "header" 100px
                "totales" 50px
                "calendario" 100px
                "main" auto;*/
align-items:center;
.header{
    width:100%;
    height:100px;
    /*background-color: rgb(103,93,241,0.14);*/
    display: flex;
    align-items: center;
    @media (max-width:768px){
        margin-bottom: 20px;

    }
}
.tipo{
    width:100%;
    justify-content: space-between;
    display: flex;
    margin-bottom: 10px;
}
.totales{
    width:100%;
    height:60px;
    /*background-color: rgb(229,67,26,0.14);*/
    display: flex;
    align-items: center;
    justify-content: center;
    gap:10px;
   

    @media (max-width:768px) {
        flex-direction: column;
        height:300px;
    }

    
}
.calendario{
    width:100%;
    height:100px;
    /*background-color: rgb(77,237,106,0.14);*/
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: start;
    border-radius:1px solid yellow;
} 
.main{
    width:100%;
    height:400px;
    grid-area:main;
    display: flex;
    align-items: center;
}
`
export default PlantillaMovimiento;