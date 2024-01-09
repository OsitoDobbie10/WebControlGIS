import styled from 'styled-components'
import {v,UseContext1} from "../../index";
const BTNDespegable2 = ({text,inputcolor,textcolor})=>{
const {statetipo2,setStateTipo2} = UseContext1();
const changeDat = ()=>{
    setStateTipo2(!statetipo2);
      }
return(
    <Container $inputcolor={inputcolor} $textcolor={textcolor} onClick={changeDat}>
    <span className='containerText' >
     {<v.iconoFlechabajo/>}
     <h6>{text}</h6>
    </span>
    </Container>
)    
}
const Container = styled.div`
display:flex;
background-color:${(props)=>props.$inputcolor};
color:${(props)=>props.$textcolor};
font-weight: 500;
padding: 0.9rem 2.3rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2 ease;
position: relative;
.containerText{
  display: flex;
  justify-content: center;
  align-items: center;
}
`;
export default BTNDespegable2