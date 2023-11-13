import styled from "styled-components";
const InputBuscadorLista = ({onchange,placefolder})=>{
    return (
        <Container>
        <input type="text" placeholder={placefolder} onChange={onchange}/>
        </Container>
    )
}
const Container = styled.div`
position: relative;
input{
    background-color: ${({theme})=>theme.bgtotal};
    font-size: 16px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border-bottom: 1px solid grey;
    color:${({theme})=>theme.text};
    outline: none;
    &:focus{
        border-bottom: none;
    }
    &::placeholder{
        color:#c8c8c8;
    }
}
`;
export default InputBuscadorLista;