import { createContext,useState,useRef, useEffect } from "react"
import { Dark, Light } from "../styles/themes";
export const ThemeContext = createContext();
const ContextLogin1 = ({children}) => {
    const [theme,setTheme] = useState("Dark");
    const [intro,setIntro] = useState(true);
    const [datos,setDatos] = useState({
      nombre:"",
      email:"",
      password: ""
    });
    const [pass,setPass] = useState('');
    const [logic1,setLogic1] = useState(null);
    const [erro1,setError1] = useState(null);
    const [show,setShow] = useState(false);
    const [animandoModal,setAnimandoModal] = useState(false)
    const obtenerDatos = (e)=>{
      setDatos({
        ...datos,
        [e.target.name]: e.target.value
      })
    }
    const changepass = (e)=>{
      setPass(e.target.value);
    }
    const changeTheme = theme === "light" ? Light : Dark;
    const RefPass = useRef(true);
    const [vista,setVista] = useState(false)
    const [token,setToken] = useState(false);
    if (token){
      sessionStorage.setItem("token",JSON.stringify(token));
    }
    useEffect(()=>{
      sessionStorage.getItem("token");
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data)
    },[])
    const [openslider,SetOpenslider] = useState(true);
    const [abrir,setAbrir] = useState(false);
    const [listaPaises,setlistaPaises] = useState(false);
    const [dataresult,setDataresult] = useState([]);
    const [select,setSelect] = useState([]);
  return (
    <ThemeContext.Provider value={{
        theme,
        setTheme,
        intro,
        setIntro,
        changeTheme,
        datos,
        setDatos,
        obtenerDatos,
        logic1,
        setLogic1,
        RefPass,
        erro1,
        setError1,
        pass,
        changepass,
        show,
        setShow,
        animandoModal,
        setAnimandoModal,
        vista,
        setVista,
        token,
        setToken,
        openslider,
        SetOpenslider,
        abrir,setAbrir,
        listaPaises,setlistaPaises,
        dataresult,setDataresult,
        select,setSelect
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ContextLogin1;
