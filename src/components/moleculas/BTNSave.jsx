import styled from "styled-components"
import {Icono} from "../../index"
const BTNSave = (props) => {
    const {funcion,titulo,bgcolor,icono} = props;
  return (
    <BTNcontainer type="submit" bgcolor={bgcolor}>
      <Icono>{icono}</Icono>
      <span className="btn" onClick={funcion}>{titulo}</span>
    </BTNcontainer>
  )
}
const BTNcontainer = styled.button`
display: flex;
justify-content: center;
align-items:center;
border: none;
text-decoration: none;
gap: 10px;
background-color: initial;
.btn{
  background: ${(props)=>props.bgcolor};
  padding: 0.6em 1.3em;
  font-weight: 900;
  font-size: 18px;
  border: 3px solid black;
  border-radius: 0.4em;
  box-shadow: 0.1em 0.1em #000;
  transition: 0.2s;
  white-space: 1px;
  color:black;
  z-index: 1000;
  cursor: pointer;
  &:hover{
    box-shadow: 0.15em 0.15em #000;
  }
  &:active{
    box-shadow: 0.05em 0.05em #000;
  }
  @media screen and (max-width:768px){
  font-size: 15px;
}
}
`

export default BTNSave
