import styled from 'styled-components';
import {Header} from "../../index"
import {ContentFilters,BTNdesplegable} from "../../index"
const PlantillaBase = () => {
  return (
    <Container>
      <header className='header'>
      <Header/> 
      </header>
      <section className='tipo'>
      <ContentFilters>
      <BTNdesplegable/>
      </ContentFilters>
      </section>
      <section className='area2'>
      <ContentCard>
      <span>Moneda:</span>
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
                "tipo" 100px
                "area2" 50px
                "main" auto;
.header{
    grid-area:header;
    background-color: rgb(103,93,241,0.14);
    display: flex;
    align-items: center;
}
.tipo{
    grid-area:tipo;
    background-color: rgb(229,67,26,0.14);
    display: flex;
    align-items: center;
}
.area2{
    grid-area:area2;
    background-color: rgb(77,237,106,0.14);
    display: flex;
    align-items: center;
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
align-items:center;
gap: 20px;
position: relative;
width: 100%;
justify-content: center;
`
export default PlantillaBase;
