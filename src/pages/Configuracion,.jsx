import React from 'react'
import styled from 'styled-components';
import {ConfigTempletes} from "../index"
const Configuracion = (props) => {
  const {data} = props;
  return (
    <Container>
    <ConfigTempletes data={data}/>
    </Container>
  )
}
const Container = styled.main`
height:100vh;`;
export default Configuracion;
