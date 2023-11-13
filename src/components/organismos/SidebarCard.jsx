import styled from 'styled-components'
import {v} from "../../index"
const SidebarCard = () => {
  return (
    <Conatiner>
    <span className='icon'>{<v.iconoayuda/>}</span>
    <div2 className='cardContent'>
        <div className='circle1'></div>
        <div className='circle2'></div>
        <h3>Centro de ayuda</h3>
        <button className='btn'>Conectar</button>
    </div2>
    </Conatiner>
  )
}
const Conatiner = styled.div`
width:100%;
padding:1rem;
text-align:center;
position: relative;
border:1px solid purple;
background-color:rgba(247, 10, 231, 0.5);
.icon{
    font-size: 28px;
    color: white;
}
.cardContent{
    position: relative;
    padding: 5px;
    border-radius: 10px;
h3{
    font-size: 0.8rem;
    margin-top: 0%.5rem;
    padding: 1rem 0;
    font-weight: 800;
    color:black;
}
.btn{
    border-radius: 1rem;
    background-color: purple;
    color: white;
    padding: 5px 5px 5px 5px;
}
.btn:hover{
    opacity: 0.4;
    transition: all 0.2s ease-in-out;
}
}
`;
export default SidebarCard;
