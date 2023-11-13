import React from 'react'
import styled from 'styled-components'
import {ItemMenuDesplegable, v} from "../../index"
const ListaMenuDespegable = ({data,acciones}) => {
  return (
    <Container>
    {
        data.map((item,index)=>{
            return <ItemMenuDesplegable 
                    key={index}
                    item={item} 
                    acciones={()=>acciones(item.tipo)}/>
        })
    }
    </Container>
  )
}
const Container = styled.div`
padding: 10px;
display: flex;
flex-direction: column;
position: absolute;
background-color: ${({theme})=>theme.bg4};
border-radius: 22px;
top: 64px;
box-shadow: ${()=> v.boxshadowGray};
`
export default ListaMenuDespegable
