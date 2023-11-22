import React from 'react'
import styled from 'styled-components'
import {CategoriasTempleted} from "../index"
const Categorias = () => {
  return (
    <Container>
    <CategoriasTempleted/>
    </Container>
  )
}
const Container = styled.main`
height:100vh;`;
export default Categorias
