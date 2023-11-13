import styled from 'styled-components';
import {v,InputBuscadorLista,ConvertirCapitalize,UseContext1,Device,Btncerrar} from "../../index"
import iso from "iso-country-currency";
const ListaPaises = ({setSelect,setStade}) => {
    const {dataresult,setDataresult} = UseContext1();
    const codigopaises = iso.getAllISOCodes();
    const seleccionar = (p)=>{
        setSelect(p);
        setStade();
    }
    const buscar = (e)=>{
        const filtro = codigopaises.filter((item)=>{
            return item.countryName === ConvertirCapitalize(e.target.value);
        })
        setDataresult(filtro);
    }
  return (
    <Container>
      <header className='header'>
        <span>Busca tu Pais</span>
        <Btncerrar funcion={setStade}/>
      </header>
      <InputBuscadorLista onchange={buscar} placefolder="Buscar..."/>
      {
        dataresult.length > 0 && 
        dataresult.map((country,index)=>{
            return <ItemContainer key={index} onClick={()=>seleccionar(country)}> 
                    <span>{country.countryName}</span>
                    <span>{country.symbol}</span>
                    </ItemContainer>
        })
      }
    </Container>
  )
}
const Container = styled.div`
margin-top: 10px;
position: absolute;
top:88%;
width: 100%;
display: flex;
flex-direction: column;
background-color: ${({theme})=>theme.bgtotsl};
border-radius: 10px;
border:2px solid #3a3a3a;
padding: 10px;
gap:10px;
color:${({theme})=>theme.text};
transition: all 0.3s;
z-index: 1000;
@media ${Device.tablet}{
  width: 400px;
}

.header{
    display: flex;
    justify-content:space-between;
    align-items: center;
    background-color: inherit;
    .close{
        cursor: pointer;
        font-size: 25px;
        transition: all 0.2s;
        &:hover{
            color: #bf94ff;
            transform: scale(1.2);
        }
    }

}`;
const ItemContainer = styled.section`
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
export default ListaPaises
