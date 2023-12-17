import styled from 'styled-components';
import {Header2} from "../../index";
const Plantilla  = ()=>{
return (
    <Container>
    <header className='header'>
      <Header2/> 
    </header>
     <section className='area1'>
      <h1>Ajustes</h1>
      </section>
      <section className='area2'>
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
                "area2" auto;
.header{
    grid-area:header;
    /*background-color: rgb(103,93,241,0.14);*/
    display: flex;
    align-items: center;
}
.area1{
    grid-area:area1;
    /*background-color: rgb(229,67,26,0.14);*/
    display: flex;
    align-items: center;
    justify-content: center;
}
.area2{
    grid-area:area2;
    /*background-color: rgb(77,237,106,0.14);*/
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
`
export default Plantilla;