import React from 'react';
import styled from 'styled-components';
import {PlantillaBase} from "../../index"
const CategoriasTempleted = ({data}) => {
  return (
    <Container>
    <PlantillaBase data={data}/>
    </Container>
  )
}
const Container = styled.div``;
export default CategoriasTempleted
