import styled from "styled-components";
import {v,supabase2,InsertarUsuarios} from "../../index"
import {UseContext1} from "../../index"
import { useNavigate } from "react-router-dom";
const Formulario1 = () => {
    const navigate = useNavigate();
    const {datos,obtenerDatos,setDatos,setLogic1,token,setToken} = UseContext1();
    const {email:mail,password} = datos;
    //const {user} = token;
    const insertarusuarios = async(dataProvider)=>{
        const p = {
            nombre:dataProvider.user_metadata.first_name,
            idaouthsupabase:dataProvider.id
        };
        await InsertarUsuarios(p);
    }
    const handlesubmit2 = async(e)=>{
        e.preventDefault();
        const objeto = {mail,password}
        if(Object.values(objeto).includes("")){
            setLogic1("Todos los campos son necesarios");
            return
        }
        setLogic1(null);
        try {
            const { data, error } = await supabase2.auth.signInWithPassword({
                   email: mail,
                   password: password});
            if (error) throw error;
            setToken(data);
            navigate("/Home")
            await insertarusuarios(token.user);
        } catch (error) {
           navigate("/ErrorSingUp")
        }
       
    };
  return (
    <FormularioLogin onSubmit={handlesubmit2}>
        <input type="email" placeholder='Email' name="email" value={mail} onChange={obtenerDatos} className="entrada"/>
        <input type="password" placeholder='Contraseña' value={password} name="password" onChange={obtenerDatos} className="entrada"/>
        <div className="Iconos">
        <Botonenviar type="submit" >
            Ingresar..
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
padding: 8px 20px;
cursor: pointer;
&:hover{
    background: black;
    color: yellow;
}
`

export default Formulario1

