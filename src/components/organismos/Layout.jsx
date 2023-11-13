import styled from 'styled-components'
import { Outlet } from 'react-router-dom';
import {UseContext1,Light,Dark,MenuHambur} from "../../index"; 
import {Device} from "../../styles/Breakpoints";
const Layaout = () => {
    const {openslider,SetOpenslider} = UseContext1();
  return (
    <Container>
    <div className='contentsider'>
    <Slider/>
    </div>
    <div className='ContentHambur'>
    <MenuHambur/>
    </div>
    <ContainerBody>
    <Outlet/> 
    </ContainerBody>
    </Container>
  )
}
const Container = styled.div`
display: grid; 
grid-template-columns:repeat(12 , 1fr);
background-color: #EDF3FB;
.ContentHambur{
  display: none;
}
@media ${()=>Device.tablet}{
  display: grid; 
   grid-template-columns:repeat(12 , 1fr);
  .contentsider{
  display: none;}
  .ContentHambur{
    display: block;
    grid-column: 1/3;
  }
}`;
const ContainerBody = styled.div`
grid-column:1/-1;
width: 100%;
@media ${()=>Device.tablet}{
  grid-column: 3/13;
}
`
export default Layaout;
