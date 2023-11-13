import styled from 'styled-components';
import {Header,Selector,UseContext1,v,ListaPaises,
        ObtenerIdAuthSupabase,UseUsuarioStore,Listagenerica,TemasData} from "../../index"
const ConfigTempletes = ({data}) => {
  const {listaPaises,setlistaPaises,select,setSelect,selecttema,setSelecttema,tema,setTema} = UseContext1();
  const {usuarios} = UseUsuarioStore();
  let moneda = select.symbol?select.symbol:data.moneda;
  let pais = select.countryName?select.countryName:data.pais;
  let paisseleccionado = "🐷 " + moneda + " " + pais;
  //tema
  const iconodb = data.tema === "0" ?  "🌞" : "🌚";
  const temadb = data.tema === "0" ? "Claro" : "Oscuro";
  const temainicial = tema.descripcion? tema.descripcion : temadb;
  const iconoinicio = tema.icono? tema.icono : iconodb;
  const temaseleccionado = iconoinicio + " " + temainicial; 

  return (
    <Container>
      <header className='header'>
      <Header/> 
      </header>
      <section className='area1'>
      <h1>Ajustes</h1>
      </section>
      <section className='area2'>
      <ContentCard>
      <span>Moneda: </span>
      <Selector 
      texto1={paisseleccionado}
      stade={listaPaises} 
      color={v.colorbgGastos}
      funcion={()=>setlistaPaises(!listaPaises)}/>
      {
        listaPaises && (
          <ListaPaises setSelect={(p)=>setSelect(p)} 
                       setStade={()=>setlistaPaises(!listaPaises)}/>
        )
      }
      </ContentCard>
      <ContentCard>
        <span>Tema:</span>
        <Selector texto1={temaseleccionado}
                  color={v.colorbgGastos}
                  stade={selecttema}
                  funcion={()=>setSelecttema(!selecttema)}/>
      {
        selecttema && (
          <Listagenerica data={TemasData} 
                        setStade1={()=>setSelecttema(!selecttema)}
                        setTema1={(p)=>setTema(p)}/>
        )
      }
      </ContentCard>
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
                "area1" 100px
                "area2" 50px
                "main" auto;
.header{
    grid-area:header;
    background-color: rgb(103,93,241,0.14);
    display: flex;
    align-items: center;
}
.area1{
    grid-area:area1;
    background-color: rgb(229,67,26,0.14);
    display: flex;
    align-items: center;
}
.area2{
    grid-area:area2;
    background-color: rgb(77,237,106,0.14);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: start;
    gap:30px;
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
align-items: center;
gap:20px;
position: relative;
width: 100%;
justify-content: center;
`
export default ConfigTempletes
