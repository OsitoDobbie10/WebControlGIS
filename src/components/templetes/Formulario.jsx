import styled from "styled-components";
import {v,supabase2} from "../../index"
import {UseContext1} from "../../index"
import { useEffect, } from "react";
const Formulario = () => {
    const {datos,obtenerDatos,setDatos,setLogic1,
           RefPass,setError1,pass,changepass,
           setShow,setAnimandoModal} = UseContext1();
    const {nombre:name,email:mail,password} = datos;
    useEffect(()=>{
      if(RefPass.current){
        RefPass.current = password === " ";
      }
      if(password === ''){
        setError1("Debe incluir una contraseña obligatorio");
        return
      }
      if(password.length <= 6){
        setError1("Debe tener mas de 6 caracteres tu contraseña")
        return
      }
      setError1(null);
    },[password])
    const handlesubmit = async(e)=>{
        e.preventDefault();
        const {nombre,email,password} = datos;
        if(Object.values(datos).includes('')){
          setLogic1("Todos los campos son necesarios");
          return
        }
        setLogic1(null);
        try {
            const { data, error } = await supabase2.auth.signUp(
                {
                  email: email,
                  password: password,
                  options: {
                    data: {
                      first_name: nombre
                    }
                  }
                }
              )
              setShow(true);
              setTimeout(()=>{
                setAnimandoModal(true);
              },[1000])
        } catch (error) {
            alert(error); 
        }
        setTimeout(()=>{
          setShow(false);
          setAnimandoModal(false);
        },9000);
        setTimeout(()=>{
          setDatos({
            ...datos,
            nombre:'',
            email:'',
            password:''
          })
        },5000)
    };

  return (
    <FormularioLogin onSubmit={handlesubmit}>
        <input type="text" placeholder='Nombre Completo' value={name} name="nombre" onChange={obtenerDatos} className="entrada"/>
        <input type="email" placeholder='Email' name="email" value={mail} onChange={obtenerDatos} className="entrada"/>
        <input type="password" placeholder='Contraseña' value={password} name="password" onChange={obtenerDatos} className="entrada"/>
        <div className="Iconos">
        <img className="login" src={v.login} alt="Icono"/> 
        <Botonenviar type="submit" >
            AgregarDatos
        </Botonenviar>
        </div>
  </FormularioLogin>
  )
}
const FormularioLogin = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
gap: 5px;
.entrada{
    display: block;
    padding: 10px 40px;
    width: 60%;
    margin:auto;
    border-radius: 8px;
    border:1.5px solid black
}
.Iconos{
    display: flex;
    gap: 5px;
    justify-content: center;
    margin-top: 10px;
}
.login{
  width:30px;
  height:30px;
  border-radius: 50%;
}
`
const Botonenviar = styled.button`
border-radius: 20px;
font-size: 20px;
font-weight: bold;
cursor: pointer;
&:hover{
    background: black;
    color: yellow;
}
`

export default Formulario
