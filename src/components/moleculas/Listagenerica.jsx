import styled from "styled-components";
import React from 'react'
import {Device,Btncerrar,UseContext1} from "../../index"

const Listagenerica = ({data,setStade1,setTema1}) => {
  const {select,setSelect} = UseContext1();
  const seleccionar = (p)=>{
    setTema1(p);
    setStade1();
  }
  return (
    <Conatiner className="contentclose">
      <section>
       <Btncerrar funcion={setStade1}/>
      </section>
      <section>
        {
          data.map((item,index)=>(
            <ItemContainer key={index} onClick={()=>seleccionar(item)}>
              <span>{item.icono}</span>
              <span>{item.descripcion}</span>
            </ItemContainer>
          ))
        }
      </section>
      
    </Conatiner>
  )
}

export default Listagenerica
const Conatiner = styled.div`
display: flex;
flex-direction: column;
background: ${({theme})=>theme.bgtotal};
color: ${({theme})=>theme.text};
position: absolute;
margin-top: 15px;
top:88%;
width: 100%;
padding: 10px;
border-radius: 10px;
gap:10px;
z-index: 2000;
@media ${()=>Device.tablet}{
  width: 400px;

}
`;
const ItemContainer = styled.div`
gap:10px;
display: flex;
padding: 10px;
border-radius: 10px;
cursor: pointer;
transition: 0.3s;
&:hover{
  background: #303030;
}
`