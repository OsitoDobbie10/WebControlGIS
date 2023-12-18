import styled from 'styled-components';
import {Header2,CalendarioLineal,ContentsTotales,UseOperaciones,v,
        useMovimientosStore,UseUsuarioStore} from "../../index";
import dayjs from 'dayjs';
import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
const PlantillaMovimiento  = ()=>{
    const [value,setValue] = useState(dayjs(Date.now()));
    const [formatoFecha,setFormatoFecha] = useState("");
    const {titulo,setTipo,mes,year} = UseOperaciones();
    const {mostrarMovimientos,datamovimientos,totalMesAño,totalMesAñoPagados,totalMesAñoPendientes} = useMovimientosStore();
    const id = UseUsuarioStore(state=>state.idusuario);
    useQuery({queryKey:["mostrar movimiento por semestre"],queryFn:()=>mostrarMovimientos({año:year,mes:mes,idusuario:id,tipocategoria:titulo})});
return (
    <Container>
    <header className='header'>
    <Header2/> 
    </header>
    <section className='totales'>
    <ContentsTotales title={titulo === "g" ? "Gastos Pendientes" : "Ingresos pendientes"} 
                     icono={<v.flechaarribalarga/>}/>
    <ContentsTotales title={titulo === "g" ? "Gastos Pagados" : "Ingresos pendientes"}
                     icono={<v.flechaabajolarga/>}/>
    <ContentsTotales title="Total"
                     icono={<v.balance/>}/>
    </section>
    <section className='calendario'>
    <CalendarioLineal value={value} setValue={setValue} setFormatoFecha={setFormatoFecha}/>
    </section>
    <main className='main'>
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
}
.totales{
    width:100%;
    height:50px;
    /*background-color: rgb(229,67,26,0.14);*/
    display: flex;
    align-items: center;
    justify-content: center;
    
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