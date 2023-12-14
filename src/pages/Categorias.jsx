import React from 'react'
import styled from 'styled-components'
import {CategoriasTempleted,UseCategorias,UseUsuarioStore,UseOperaciones,LoaderSpinner} from "../index";
import { useQuery } from "@tanstack/react-query";
const Categorias = () => {
  const datacategorias = UseCategorias(state=>state.datacategorias);
  const mostrarcategorias = UseCategorias(state=>state.mostrarcategorias);
  const usuario = UseUsuarioStore(state=>state.usuarios);
  const tipo = UseOperaciones(state=>state.titulo)
  const {isLoading,error} = useQuery({queryKey:["Mostrar categorias"],queryFn:()=>mostrarcategorias({idusario:usuario.id,tipo:tipo})});
  /*if(isLoading){
    <LoaderSpinner/>
  }
  if(error){
    <h1>Error...</h1>
  }*/
  return (
    <Container>
    <CategoriasTempleted data={datacategorias}/>
    </Container>
  )
}
const Container = styled.main`
height:100vh;`;
export default Categorias
